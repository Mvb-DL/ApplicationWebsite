const randnum = (min, max) => Math.round(Math.random() * (max - min) + min);

class CannonHelper {

  constructor(scene) {
    this.scene = scene;
  }

  addLights(renderer) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // LIGHTS
    const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820, .8);
    this.scene.add(ambient);

    const light = new THREE.DirectionalLight(0xdddddd, .25, 1);
    light.position.set(3, 10, 4);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;

    this.sun = light;
    this.scene.add(light);
  }

  set shadowTarget(obj) {
    if (this.sun !== undefined) this.sun.target = obj;
  }

  createCannonTrimesh(geometry) {
    if (!geometry.isBufferGeometry) return null;

    const posAttr = geometry.attributes.position;
    const vertices = geometry.attributes.position.array;
    let indices = [];
    for (let i = 0; i < posAttr.count; i++) {
      indices.push(i);
    }

    return new CANNON.Trimesh(vertices, indices);
  }

  createCannonConvex(geometry) {

    if (!geometry.isBufferGeometry) return null;

    const posAttr = geometry.attributes.position;
    const floats = geometry.attributes.position.array;
    const vertices = [];
    const faces = [];
    let face = [];
    let index = 0;
    for (let i = 0; i < posAttr.count; i += 3) {
      vertices.push(new CANNON.Vec3(floats[i], floats[i + 1], floats[i + 2]));
      face.push(index++);
      if (face.length == 3) {
        faces.push(face);
        face = [];
      }
    }

    return new CANNON.ConvexPolyhedron(vertices, faces);
  }

  addVisual(body, name, castShadow = false, receiveShadow = true) {
    body.name = name;
    if (this.currentMaterial === undefined) this.currentMaterial = new THREE.MeshLambertMaterial({
      color: 0x888888
    });
    if (this.settings === undefined) {
      this.settings = {
        stepFrequency: 60,
        quatNormalizeSkip: 2,
        quatNormalizeFast: true,
        gx: 0,
        gy: 0,
        gz: 0,
        iterations: 3,
        tolerance: 0.0001,
        k: 1e6,
        d: 3,
        scene: 0,
        paused: false,
        rendermode: "solid",
        constraints: false,
        contacts: false, // Contact points
        cm2contact: false, // center of mass to contact points
        normals: false, // contact normals
        axes: false, // "local" frame axes
        particleSize: 0.1,
        shadows: false,
        aabbs: false,
        profiling: false,
        maxSubSteps: 3
      }
      this.particleGeo = new THREE.SphereGeometry(1, 16, 8);
      this.particleMaterial = new THREE.MeshLambertMaterial({
        color: 0xff0000
      });
    }
    // What geometry should be used?
    let mesh;
    if (body instanceof CANNON.Body) mesh = this.shape2Mesh(body, castShadow, receiveShadow);

    if (mesh) {
      // Add body
      body.threemesh = mesh;
      mesh.castShadow = castShadow;
      mesh.receiveShadow = receiveShadow;
      this.scene.add(mesh);
    }
  }

  shape2Mesh(body, castShadow, receiveShadow) {
    const obj = new THREE.Object3D();
    const material = this.currentMaterial;
    const game = this;
    let index = 0;

    body.shapes.forEach(function(shape) {
      let mesh;
      let geometry;
      let v0, v1, v2;

      switch (shape.type) {

        case CANNON.Shape.types.SPHERE:
          const sphere_geometry = new THREE.SphereGeometry(shape.radius, 8, 8);
          mesh = new THREE.Mesh(sphere_geometry, material);
          break;

        case CANNON.Shape.types.PARTICLE:
          mesh = new THREE.Mesh(game.particleGeo, game.particleMaterial);
          const s = this.settings;
          mesh.scale.set(s.particleSize, s.particleSize, s.particleSize);
          break;

        case CANNON.Shape.types.PLANE:
          geometry = new THREE.PlaneGeometry(100, 100, 4, 4);
          mesh = new THREE.Object3D();
          const submesh = new THREE.Object3D();

/*
          THREE.ImageUtils.crossOrigin = '';
          var floorMap = THREE.ImageUtils.loadTexture("./texture.jpeg");
          floorMap.wrapS = floorMap.wrapT = THREE.RepeatWrapping;
          floorMap.repeat.set(25, 25);
          var groundMaterial = new THREE.MeshPhongMaterial({
            color: new THREE.Color('#6225E6'),
            specular: new THREE.Color('black'),
            shininess: 0,
            bumpMap: floorMap
          }); */


          const ground = new THREE.Mesh(geometry, groundMaterial);
          ground.scale.set(1, 1, 1);
          submesh.add(ground);

          mesh.add(submesh);
          break;

        case CANNON.Shape.types.BOX:
          const box_geometry = new THREE.BoxGeometry(shape.halfExtents.x * 2,
            shape.halfExtents.y * 2,
            shape.halfExtents.z * 2);
          mesh = new THREE.Mesh(box_geometry, new THREE.MeshLambertMaterial({
            color: 0x888888,
            wireframe: true,
            transparent: true,
            opacity: 0
          }));
          break;

        case CANNON.Shape.types.CONVEXPOLYHEDRON:
          const geo = new THREE.Geometry();

          // Add vertices
          shape.vertices.forEach(function(v) {
            geo.vertices.push(new THREE.Vector3(v.x, v.y, v.z));
          });

          shape.faces.forEach(function(face) {
            // add triangles
            const a = face[0];
            for (let j = 1; j < face.length - 1; j++) {
              const b = face[j];
              const c = face[j + 1];
              geo.faces.push(new THREE.Face3(a, b, c));
            }
          });
          geo.computeBoundingSphere();
          geo.computeFaceNormals();
          mesh = new THREE.Mesh(geo, material);
          break;

        case CANNON.Shape.types.HEIGHTFIELD:
          geometry = new THREE.Geometry();

          v0 = new CANNON.Vec3();
          v1 = new CANNON.Vec3();
          v2 = new CANNON.Vec3();
          for (let xi = 0; xi < shape.data.length - 1; xi++) {
            for (let yi = 0; yi < shape.data[xi].length - 1; yi++) {
              for (let k = 0; k < 2; k++) {
                shape.getConvexTrianglePillar(xi, yi, k === 0);
                v0.copy(shape.pillarConvex.vertices[0]);
                v1.copy(shape.pillarConvex.vertices[1]);
                v2.copy(shape.pillarConvex.vertices[2]);
                v0.vadd(shape.pillarOffset, v0);
                v1.vadd(shape.pillarOffset, v1);
                v2.vadd(shape.pillarOffset, v2);
                geometry.vertices.push(
                  new THREE.Vector3(v0.x, v0.y, v0.z),
                  new THREE.Vector3(v1.x, v1.y, v1.z),
                  new THREE.Vector3(v2.x, v2.y, v2.z)
                );
                var i = geometry.vertices.length - 3;
                geometry.faces.push(new THREE.Face3(i, i + 1, i + 2));
              }
            }
          }
          geometry.computeBoundingSphere();
          geometry.computeFaceNormals();


          //https://stackoverflow.com/questions/52614371/apply-color-gradient-to-material-on-mesh-three-js
          var rev = true;
          var cols = [{
            stop: 0,
            color: new THREE.Color('#270059')
          }, {
            stop: .25,
            color: new THREE.Color('#6225E6')
          }, {
            stop: .5,
            color: new THREE.Color('#8225e6')
          }, {
            stop: .75,
            color: new THREE.Color('#a043ed')
          }, {
            stop: 1,
            color: new THREE.Color('#f1f3f4')
          }];

          setGradient(geometry, cols, 'z', rev);

          function setGradient(geometry, colors, axis, reverse) {

            geometry.computeBoundingBox();

            var bbox = geometry.boundingBox;
            var size = new THREE.Vector3().subVectors(bbox.max, bbox.min);

            var vertexIndices = ['a', 'b', 'c'];
            var face, vertex, normalized = new THREE.Vector3(),
              normalizedAxis = 0;

            for (var c = 0; c < colors.length - 1; c++) {

              var colorDiff = colors[c + 1].stop - colors[c].stop;

              for (var i = 0; i < geometry.faces.length; i++) {
                face = geometry.faces[i];
                for (var v = 0; v < 3; v++) {
                  vertex = geometry.vertices[face[vertexIndices[v]]];
                  normalizedAxis = normalized.subVectors(vertex, bbox.min).divide(size)[axis];
                  if (reverse) {
                    normalizedAxis = 1 - normalizedAxis;
                  }
                  if (normalizedAxis >= colors[c].stop && normalizedAxis <= colors[c + 1].stop) {
                    var localNormalizedAxis = (normalizedAxis - colors[c].stop) / colorDiff;
                    face.vertexColors[v] = colors[c].color.clone().lerp(colors[c + 1].color, localNormalizedAxis);
                  }
                }
              }
            }
          }

          var mat = new THREE.MeshLambertMaterial({
            vertexColors: THREE.VertexColors,
            wireframe: false
          });

          mesh = new THREE.Mesh(geometry, mat);
          break;

        case CANNON.Shape.types.TRIMESH:
          geometry = new THREE.Geometry();

          v0 = new CANNON.Vec3();
          v1 = new CANNON.Vec3();
          v2 = new CANNON.Vec3();
          for (let i = 0; i < shape.indices.length / 3; i++) {
            shape.getTriangleVertices(i, v0, v1, v2);
            geometry.vertices.push(
              new THREE.Vector3(v0.x, v0.y, v0.z),
              new THREE.Vector3(v1.x, v1.y, v1.z),
              new THREE.Vector3(v2.x, v2.y, v2.z)
            );
            var j = geometry.vertices.length - 3;
            geometry.faces.push(new THREE.Face3(j, j + 1, j + 2));
          }
          geometry.computeBoundingSphere();
          geometry.computeFaceNormals();
          mesh = new THREE.Mesh(geometry, MutationRecordaterial);
          break;

        default:
          throw "Visual type not recognized: " + shape.type;
      }

      mesh.receiveShadow = receiveShadow;
      mesh.castShadow = castShadow;

      mesh.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = castShadow;
          child.receiveShadow = receiveShadow;
        }
      });

      var o = body.shapeOffsets[index];
      var q = body.shapeOrientations[index++];
      mesh.position.set(o.x, o.y, o.z);
      mesh.quaternion.set(q.x, q.y, q.z, q.w);

      obj.add(mesh);
    });

    return obj;
  }

  updateBodies(world) {
    world.bodies.forEach(function(body) {
      if (body.threemesh != undefined) {
        body.threemesh.position.copy(body.position);
        body.threemesh.quaternion.copy(body.quaternion);
      }
    });
  }
}



//===================================================== scene
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .01, 1000);
camera.position.set(3, .9, -3);
camera.lookAt(scene.position);

const container = document.getElementById('info');

renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.shadowMap.enabled = false;
renderer.shadowMapSoft = true; // Shadow
renderer.shadowMap.type = THREE.PCFSoftShadowMap; ; //Shadow

document.getElementById('info').appendChild(renderer.domElement);


renderer.domElement.addEventListener('webglcontextlost', onContextLost, false);
renderer.domElement.addEventListener('webglcontextrestored', onContextRestored, false);

function onContextLost(event) {

  event.preventDefault();
  console.error('WebGL context lost. You might need to handle this situation by recreating WebGL resources.');
}

function onContextRestored(event) {

  console.log('WebGL context restored. Re-rendering shadows...');
}

//===================================================== cannon
var debug = true;
var debugPhysics = true;
var fixedTimeStep = 1.0 / 60.0;

var helper = new CannonHelper(scene);
var physics = {};

const world = new CANNON.World();

world.broadphase = new CANNON.SAPBroadphase(world);
world.gravity.set(0, -10, 0);
world.defaultContactMaterial.friction = 0;

const groundMaterial = new CANNON.Material("groundMaterial");
const wheelMaterial = new CANNON.Material("wheelMaterial");
const wheelGroundContactMaterial = new CANNON.ContactMaterial(wheelMaterial, groundMaterial, {
  friction: 0,
  restitution: 0,
  contactEquationStiffness: 1000
});

// We must add the contact materials to the world
world.addContactMaterial(wheelGroundContactMaterial);



//===================================================== add front & back lighting
var light = new THREE.DirectionalLight(new THREE.Color("white"), .7);
light.position.set(1, 1, 1).normalize();
scene.add(light);


//===================================================== resize
window.addEventListener("resize", function() {
  var width = container.offsetWidth;
  var height = container.offsetWidth;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});





//========================================================== effects
var SCALE = 2;

var hTilt = new THREE.ShaderPass(THREE.HorizontalTiltShiftShader);
hTilt.enabled = false;
hTilt.uniforms.h.value = 4 / (SCALE * container.offsetHeight);

var renderPass = new THREE.RenderPass(scene, camera);
var effectCopy = new THREE.ShaderPass(THREE.CopyShader);
effectCopy.renderToScreen = true;

var composer = new THREE.EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(hTilt);
composer.addPass(effectCopy);


var controls = new function() {
  this.hTilt = false;
  this.hTiltR = 0.5;
  this.onChange = function() {
    hTilt.enabled = controls.hTilt;
    hTilt.uniforms.r.value = controls.hTiltR;
  }
};

var gui = new dat.GUI();
gui.add(controls, 'hTilt').onChange(controls.onChange);
gui.add(controls, 'hTiltR', 0, 1).onChange(controls.onChange);

document.querySelector('.dg .c input[type="checkbox"]').click();
dat.GUI.toggleHide();

Object.defineProperties(THREE.Object3D.prototype, {
  x: {
    get: function() {
      return this.position.x;
    },
    set: function(v) {
      this.position.x = v;
    }
  },
  y: {
    get: function() {
      return this.position.y;
    },
    set: function(v) {
      this.position.y = v;
    }
  },
  z: {
    get: function() {
      return this.position.z;
    },
    set: function(v) {
      this.position.z = v;
    }
  },
  rotationZ: {
    get: function() {
      return this.rotation.x;
    },
    set: function(v) {
      this.rotation.x = v;
    }
  },
  rotationY: {
    get: function() {
      return this.rotation.y;
    },
    set: function(v) {
      this.rotation.y = v;
    }
  },
  rotationX: {
    get: function() {
      return this.rotation.z;
    },
    set: function(v) {
      this.rotation.z = v;
    }
  }
});


//===================================================== model
var geometry = new THREE.BoxBufferGeometry(.5, 1, .5);
/* We change the pivot point to be at the bottom of the cube, instead of its center. So we translate the whole geometry. */
geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
var material = new THREE.MeshNormalMaterial({
  transparent: true,
  opacity: 0
});
mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


var light = new THREE.DirectionalLight(new THREE.Color('white'), .5);
light.position.set(0, 1, 0);
light.castShadow = true;
light.target = mesh; //shadow will follow mesh          
mesh.add(light);


//===================================================== add Model
var mixers = [];
var clip1;
var clip2;
var clip3;

var loader = new THREE.GLTFLoader();
loader.load('./astronaut.glb', function(object) {
  object.scene.traverse(function(node) {
    if (node instanceof THREE.Mesh) {
      node.castShadow = true;
      node.material.side = THREE.DoubleSide;
    }
  });

  var player = object.scene;
  player.position.set(0, -.1, 0);
  player.scale.set(.25, .25, .25);
  mesh.add(player);

  const spotlight = new THREE.SpotLight(0xffffff, 1);
  spotlight.position.set(50, 10, 5); // Set initial position
  spotlight.angle = Math.PI / 2; // Set spotlight angle
  scene.add(spotlight);


  var mixer = new THREE.AnimationMixer(player);
  clip1 = mixer.clipAction(object.animations[0]);
  clip2 = mixer.clipAction(object.animations[1]);
  mixers.push(mixer);

});


//===================================================== add Terrain
var sizeX = 64,
  sizeY = 64,
  minHeight = 0,
  maxHeight = 40;
var startPosition = new CANNON.Vec3(0, maxHeight - 3, sizeY * 0.5 - 10);
var img2matrix = function() {

  'use strict';

  return {
    fromImage: fromImage,
    fromUrl: fromUrl
  }

  function fromImage(image, width, depth, minHeight, maxHeight) {

    width = width | 0;
    depth = depth | 0;

    var i, j;
    var matrix = [];
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    var imgData, pixel, channels = 4;
    var heightRange = maxHeight - minHeight;
    var heightData;

    canvas.width = width;
    canvas.height = depth;

    // document.body.appendChild( canvas );

    ctx.drawImage(image, 0, 0, width, depth);
    imgData = ctx.getImageData(0, 0, width, depth).data;

    for (i = 0 | 0; i < depth; i = (i + 1) | 0) { //row

      matrix.push([]);

      for (j = 0 | 0; j < width; j = (j + 1) | 0) { //col

        pixel = i * depth + j;
        heightData = imgData[pixel * channels] / 255 * heightRange + minHeight;

        matrix[i].push(heightData);

      }

    }

    return matrix;

  }

  function fromUrl(url, width, depth, minHeight, maxHeight) {

    return function() {

      return new Promise(function(onFulfilled, onRejected) {

        var image = new Image();
        image.crossOrigin = "anonymous";

        image.onload = function() {

          var matrix = fromImage(image, width, depth, minHeight, maxHeight);
          onFulfilled(matrix);

        };

        image.src = url;

      });

    }

  }

}();


var check;
Promise.all([
  img2matrix.fromUrl('https://upload.wikimedia.org/wikipedia/commons/5/57/Heightmap.png', sizeX, sizeY, minHeight, maxHeight)(),
]).then(function(data) {

  var matrix = data[0];


  const terrainShape = new CANNON.Heightfield(matrix, {
    elementSize: 10
  });
  const terrainBody = new CANNON.Body({
    mass: 0
  });

  terrainBody.addShape(terrainShape);
  terrainBody.position.set(-sizeX * terrainShape.elementSize / 2, -10, sizeY * terrainShape.elementSize / 2);
  terrainBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
  world.add(terrainBody);
  helper.addVisual(terrainBody, 'landscape');

  var raycastHelperGeometry = new THREE.CylinderGeometry(0, 1, 5, 1.5);
  raycastHelperGeometry.translate(0, 0, 0);
  raycastHelperGeometry.rotateX(Math.PI / 2);
  raycastHelperMesh = new THREE.Mesh(raycastHelperGeometry, new THREE.MeshNormalMaterial());
  scene.add(raycastHelperMesh);


  check = function() {

    var raycaster = new THREE.Raycaster(mesh.position, new THREE.Vector3(0, -1, 0));
    var intersects = raycaster.intersectObject(terrainBody.threemesh.children[0]);
    if (intersects.length > 0) {
      raycastHelperMesh.position.set(0, 0, 0);
      raycastHelperMesh.lookAt(intersects[0].face.normal);
      raycastHelperMesh.position.copy(intersects[0].point);
    }
    //position objects ontop of the terrain
    mesh.position.y = intersects && intersects[0] ? intersects[0].point.y + 0.1 : 30;


    //raycast flag
    var raycaster2 = new THREE.Raycaster(flagLocation.position, new THREE.Vector3(0, -1, 0));
    var intersects2 = raycaster2.intersectObject(terrainBody.threemesh.children[0]);


    //position objects ontop of the terrain
    flagLocation.position.y = intersects2 && intersects2[0] ? intersects2[0].point.y + .5 : 30;
    flagLight.position.y = flagLocation.position.y + 50;
    flagLight.position.x = flagLocation.position.x + 5
    flagLight.position.z = flagLocation.position.z;



  } //end check


}); //end Promise


//=========================================================================================== flag
var geometry = new THREE.BoxBufferGeometry(0.35, 2, 0.15);
/* We change the pivot point to be at the bottom of the cube, instead of its center. So we translate the whole geometry. */
geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 1, 0));
var material = new THREE.MeshNormalMaterial({
  transparent: true,
  opacity: 0
});
flagLocation = new THREE.Mesh(geometry, material);
scene.add(flagLocation);
flagLocation.position.x = -90;
flagLocation.position.z = 70;
flagLocation.rotateY(Math.PI);


//flag pole
var geometry = new THREE.CylinderGeometry(.03, .03, 4, 32);
var material = new THREE.MeshPhongMaterial({
  color: new THREE.Color('gray')
});
var cylinder = new THREE.Mesh(geometry, material);
cylinder.geometry.center();
cylinder.castShadow = true;
flagLocation.add(cylinder);


//flag light
var pointflagLight = new THREE.PointLight(new THREE.Color('purple'), 1.5, 5);
pointflagLight.position.set(0, 0, 0);
flagLocation.add(pointflagLight);


var flagLight = new THREE.DirectionalLight(new THREE.Color('white'), 0);
flagLight.position.set(0, 0, 0);
flagLight.castShadow = true;
flagLight.target = flagLocation;
scene.add(flagLight);


//flag 1
var texture = new THREE.TextureLoader().load('');
plane = new THREE.Mesh(new THREE.PlaneGeometry(600, 430, 20, 20, true), new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide
}));
plane.scale.set(.0025, .0025, .0025);
plane.position.set(0, 1.5, 0);
plane.position.x = .75;
plane.castShadow = true;

flagLocation.add(plane);


const loader2 = new THREE.FontLoader();

loader2.load('./font/Hack_Bold.json', function(font) {

  function onClick(event) {

    const mouse = new THREE.Vector2(
      (event.clientX / container.offsetWidth) * 2 - 1,
      -(event.clientY / container.offsetHeight) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(boxMesh);

    if (intersects.length > 0) {
      openDiv();
    }
  }

  const geometry_text_two = new THREE.TextGeometry('PILLAP', {
    font: font,
    size: 75,
    height: 75,
  });

  var textMesh2 = new THREE.Mesh(geometry_text_two, [
    new THREE.MeshPhongMaterial({
      color: 0xffffff
    })
  ])

  textMesh2.scale.set(.1, .1, .1);
  textMesh2.position.x = -20;
  textMesh2.position.y = 13;
  textMesh2.position.z = 90;
  textMesh2.rotation.y = 700;
  scene.add(textMesh2);


   const raycaster = new THREE.Raycaster();
   const mouse = new THREE.Vector2();





  const geometry_text_three = new THREE.TextGeometry('GITHUB', {
    font: font,
    size: 80,
    height: 80,
  });

  var textMesh3 = new THREE.Mesh(geometry_text_three, [
    new THREE.MeshPhongMaterial({
      color: 0xffffff
    })
  ])

  textMesh3.scale.set(.1, .1, .1);
  textMesh3.position.x = -90;
  textMesh3.position.y = 4;
  textMesh3.position.z = 90;
  textMesh3.rotation.y = 800;
  scene.add(textMesh3);


  function onMouseClick(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(textMesh2);
    const intersectsMesh3 = raycaster.intersectObject(textMesh3);

    if (intersects.length > 0) {

        document.getElementById('popup-pillap').style.display = 'block';
    }

    if (intersectsMesh3.length > 0){
      document.getElementById('popup-github').style.display = 'block';
    }
}

window.addEventListener('click', onMouseClick, false);

  const spotLight = new THREE.DirectionalLight(0x6225e6, .1);
  spotLight.position.set(-80, 50, 50);
  scene.add(spotLight)


});

//===================================================== add sky particles

/*
var textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = ''; //allow cross origin loading

const imageSrc = textureLoader.load('https://img.pikbest.com/wp/202345/3d-wireframe-bokeh-background-with-purple-in-render_9614768.jpg!sw800');
const shaderPoint = THREE.ShaderLib.points;

uniforms = THREE.UniformsUtils.clone(shaderPoint.uniforms);
uniforms.map.value = imageSrc;

var matts = new THREE.PointsMaterial({
  size: 2,
  color: new THREE.Color("white"),
  map: uniforms.map.value,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  transparent: true,
  opacity: 1
});

var geo = new THREE.Geometry();
for (var i = 0; i < 1000; i++) {
  var star = new THREE.Vector3();
  geo.vertices.push(star);
}

var sparks = new THREE.Points(geo, matts);
sparks.scale.set(1, 1, 1);
scene.add(sparks);

sparks.geometry.vertices.map((d, i) => {
  d.y = randnum(30, 40);
  d.x = randnum(-500, 500);
  d.z = randnum(-500, 500);
});
*/

//===================================================== Joystick
class JoyStick {
  constructor(options) {

    const container = document.getElementById('info');

    const circle = document.createElement("div");
    circle.style.cssText = "position:absolute; left: 50%; bottom:40px; width:80px; height:80px; background:rgba(126, 126, 126, 0.5); border:#444 solid medium; border-radius:50%; transform:translateX(-50%);";
    const thumb = document.createElement("div");
    thumb.style.cssText = "position:absolute; left: 17px; top: 17px; width: 40px; height: 40px; border-radius: 50%; background: #fff;";
    circle.appendChild(thumb);
    container.appendChild(circle);

    this.domElement = thumb;
    this.maxRadius = options.maxRadius || 40;
    this.maxRadiusSquared = this.maxRadius * this.maxRadius;
    this.onMove = options.onMove;
    this.game = options.game;
    this.origin = {
      left: this.domElement.offsetLeft,
      top: this.domElement.offsetTop
    };
    this.rotationDamping = options.rotationDamping || 0.06;
    this.moveDamping = options.moveDamping || 0.01;
    if (this.domElement != undefined) {
      const joystick = this;
      if ('ontouchstart' in window) {
        this.domElement.addEventListener('touchstart', function(evt) {
          joystick.tap(evt);
        });
      } else {
        this.domElement.addEventListener('mousedown', function(evt) {
          joystick.tap(evt);
        });
      }
    }
  }

  getMousePosition(evt) {
    let clientX = evt.targetTouches ? evt.targetTouches[0].pageX : evt.clientX;
    let clientY = evt.targetTouches ? evt.targetTouches[0].pageY : evt.clientY;
    return {
      x: clientX,
      y: clientY
    };
  }

  tap(evt) {
    evt = evt || window.event;
    // get the mouse cursor position at startup:
    this.offset = this.getMousePosition(evt);
    const joystick = this;
    if ('ontouchstart' in window) {
      document.ontouchmove = function(evt) {
        joystick.move(evt);
      };
      document.ontouchend = function(evt) {
        joystick.up(evt);
      };
    } else {
      document.onmousemove = function(evt) {
        joystick.move(evt);
      };
      document.onmouseup = function(evt) {
        joystick.up(evt);
      };
    }
  }

  move(evt) {
    evt = evt || window.event;
    const mouse = this.getMousePosition(evt);
    // calculate the new cursor position:
    let left = mouse.x - this.offset.x;
    let top = mouse.y - this.offset.y;
    //this.offset = mouse;

    const sqMag = left * left + top * top;
    if (sqMag > this.maxRadiusSquared) {
      //Only use sqrt if essential
      const magnitude = Math.sqrt(sqMag);
      left /= magnitude;
      top /= magnitude;
      left *= this.maxRadius;
      top *= this.maxRadius;
    }
    // set the element's new position:
    this.domElement.style.top = `${top + this.domElement.clientHeight/2}px`;
    this.domElement.style.left = `${left + this.domElement.clientWidth/2}px`;

    //@TODO use nipple,js
    const forward = -(top - this.origin.top + this.domElement.clientHeight / 2) / this.maxRadius;
    const turn = (left - this.origin.left + this.domElement.clientWidth / 2) / this.maxRadius;

    if (this.onMove != undefined) this.onMove.call(this.game, forward, turn);
  }

  up(evt) {
    if ('ontouchstart' in window) {
      document.ontouchmove = null;
      document.touchend = null;
    } else {
      document.onmousemove = null;
      document.onmouseup = null;
    }
    this.domElement.style.top = `${this.origin.top}px`;
    this.domElement.style.left = `${this.origin.left}px`;

    this.onMove.call(this.game, 0, 0);
  }
} //end joystick class

var js = {
  forward: 0,
  turn: 0
};

var joystick = new JoyStick({
  onMove: joystickCallback
});

function joystickCallback(forward, turn) {
  js.forward = forward;
  js.turn = -turn;
}

function updateDrive(forward = js.forward, turn = js.turn) {
  const maxSteerVal = 0.05;
  const maxForce = .15;
  const brakeForce = 10;

  const force = maxForce * forward;
  const steer = maxSteerVal * turn;

  if (forward != 0) {
    mesh.translateZ(force); //move cube
    if (clip2) clip2.play();
    if (clip1) clip1.stop();
  } else {
    if (clip2) clip2.stop();
    if (clip1) clip1.play();
  }
  mesh.rotateY(steer);
}


//===================================================== 3rd person view
var followCam = new THREE.Object3D();
followCam.position.copy(camera.position);
scene.add(followCam);
followCam.parent = mesh;

function updateCamera() {
  if (followCam) {
    camera.position.lerp(followCam.getWorldPosition(new THREE.Vector3()), 0.05);
    camera.lookAt(mesh.position.x, mesh.position.y + .5, mesh.position.z);
  }
}


var clock = new THREE.Clock();
var lastTime;
(function animate() {
  requestAnimationFrame(animate);
  updateCamera();
  updateDrive();
  renderer.render(scene, camera);


  let delta = clock.getDelta();
  mixers.map(x => x.update(delta));


  /*cannon*/
  const now = Date.now();
  if (lastTime === undefined) lastTime = now;
  const dt = (Date.now() - lastTime) / 1000.0;
  var FPSFactor = dt;
  lastTime = now;

  world.step(fixedTimeStep, dt);
  helper.updateBodies(world);

  if (check) check();

})();