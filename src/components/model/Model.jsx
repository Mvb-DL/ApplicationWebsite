import React, { useRef, useState  } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF} from '@react-three/drei';


const Model = React.forwardRef((props, ref) => {

  const { camera } = useThree();
  const { scene } = useGLTF("./head2.glb");
  scene.scale.set(2.4, 2.2, 2.2
  );
  scene.position.set(0.6, 2.315, .9)
  camera.position.set(0.6, 2.75, 1.6);
  scene.rotation.x = .1;
  const modelRef = useRef();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const mouseX = (clientX / innerWidth) * 2 - 1;
    const mouseY = -(clientY / innerHeight) * 2 + 1;

    const maxRotationY = Math.PI / 4; 
    let targetRotationY = mouseX * Math.PI;
    targetRotationY = Math.max(-maxRotationY, Math.min(maxRotationY, targetRotationY));
    modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.3;

    const maxRotationX = Math.PI / 8;
    let targetRotationX = mouseY * Math.PI;
    targetRotationX = Math.max(-maxRotationX, Math.min(maxRotationX, targetRotationX));
    modelRef.current.rotation.x += (targetRotationX + modelRef.current.rotation.x) * -0.007;
    modelRef.current.rotation.z += (targetRotationX + modelRef.current.rotation.z) * -0.001;

  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <primitive object={scene} ref={modelRef} />;
});

const GLBViewer = () => {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const modelPosition = { x: 0.5, y: 2.2, z: 0.9 };
  const lightPosition = { x: -.05, y: .75, z: .4 };

  return (
    <div className="resume-block model-container-sc">
      <div className="container">
        <div className='canva_first'>
          
            <Canvas onMouseMove={handleMouseMove}>
              <pointLight position={[modelPosition.x + lightPosition.x, modelPosition.y + lightPosition.y, modelPosition.z + lightPosition.z]} intensity={0.6} />
              <Model mouse={mouse}/>
            </Canvas>
        </div>
      </div>
    </div>
  );
};

export default GLBViewer;


