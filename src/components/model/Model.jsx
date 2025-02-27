import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  memo,
  Suspense
} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Das Model wird als memoisiertes ForwardRef-Component definiert,
// damit wir vom übergeordneten Container (über den Ref) auf dessen Position zugreifen können.
const Model = memo(
  React.forwardRef((props, ref) => {
    const { camera } = useThree();
    const { scene } = useGLTF("./head2.glb", "/draco-gltf/");

    // Initiale Einstellungen für Model und Kamera
    useEffect(() => {
      scene.scale.set(2.4, 2.2, 2.2);
      scene.position.set(0.6, 2.315, 0.9);
      camera.position.set(0.6, 2.75, 1.6);
      scene.rotation.x = 0.1;
    }, [scene, camera]);

    // Lokaler Ref für das 3D-Objekt
    const modelRef = useRef();

    // State, ob das Model im Viewport sichtbar ist
    const [isModelVisible, setIsModelVisible] = useState(true);

    // Aktualisiert die Rotation des Models basierend auf der Mausposition
    const handleMouseMove = useCallback(
      (event) => {
        if (!isModelVisible || !modelRef.current) return;

        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const mouseX = (clientX / innerWidth) * 2 - 1;
        const mouseY = -(clientY / innerHeight) * 2 + 1;

        const maxRotationY = Math.PI / 4;
        const maxRotationX = Math.PI / 8;

        // Zielrotationen berechnen
        const targetRotationY = Math.max(
          -maxRotationY,
          Math.min(maxRotationY, mouseX * Math.PI)
        );
        const targetRotationX = Math.max(
          -maxRotationX,
          Math.min(maxRotationX, mouseY * Math.PI)
        );

        // Rotation des Models sanft anpassen
        modelRef.current.rotation.y +=
          (targetRotationY - modelRef.current.rotation.y) * 0.3;
        modelRef.current.rotation.x -=
          (targetRotationX + modelRef.current.rotation.x) * 0.007;
        modelRef.current.rotation.z -=
          (targetRotationX + modelRef.current.rotation.z) * 0.001;
      },
      [isModelVisible]
    );

    // Prüft, ob der Container (über den weitergeleiteten Ref) im Viewport sichtbar ist
    const checkVisibility = useCallback(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setIsModelVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }, [ref]);

    // Registrierung der globalen Event-Listener
    useEffect(() => {
      window.addEventListener("scroll", checkVisibility);
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("scroll", checkVisibility);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [checkVisibility, handleMouseMove]);

    return <primitive object={scene} ref={modelRef} />;
  })
);

const GLBViewer = () => {
  // State für Mauskoordinaten (kann für weitere Animationen genutzt werden)
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const modelContainerRef = useRef();

  // Aktualisiert den Mausstate, falls benötigt
  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  }, []);

  // Positionen für Model und Licht
  const modelPosition = { x: 0.5, y: 2.2, z: 0.9 };
  const lightPosition = { x: -0.05, y: 0.75, z: 0.4 };

  // WebGL-Verfügbarkeitsprüfung
  const isWebGLAvailable = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!window.WebGLRenderingContext &&
        !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
      return false;
    }
  };

  if (!isWebGLAvailable()) {
    return (
      <div>
        Es scheint, dass du mit deinem Browser leider keine 3D Modelle laden kannst :/
      </div>
    );
  }

  return (
    <div className="resume-block model-container-sc">
      <div className="container">
        <div className="canva_first" ref={modelContainerRef}>
          <Canvas onMouseMove={handleMouseMove}>
            <Suspense fallback={<mesh />}>
              <pointLight
                position={[
                  modelPosition.x + lightPosition.x,
                  modelPosition.y + lightPosition.y,
                  modelPosition.z + lightPosition.z
                ]}
                intensity={0.6}
              />
              {/* Das Model erhält den Container-Ref, der zur Sichtbarkeitsprüfung genutzt wird */}
              <Model ref={modelContainerRef} mouse={mouse} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default memo(GLBViewer);
