import React, { useRef, useState, useEffect, useCallback, memo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          Leider kannst du mit deinem Browser keine 3D Modelle laden, daher ist die Experience auf dieser Seite low :/
        </div>
      );
    }
    return this.props.children;
  }
}

const MemoizedErrorBoundary = memo(ErrorBoundary);

const Model = memo(React.forwardRef((props, ref) => {
  const { camera } = useThree();
  const { scene } = useGLTF("./head2.glb", "/draco-gltf/");
  scene.scale.set(2.4, 2.2, 2.2);
  scene.position.set(0.6, 2.315, 0.9);
  camera.position.set(0.6, 2.75, 1.6);
  scene.rotation.x = 0.1;
  const modelRef = useRef();

  const handleMouseMove = useCallback((event) => {
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
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return <primitive object={scene} ref={modelRef} />;
}));

const GLBViewer = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  }, []);

  const modelPosition = { x: 0.5, y: 2.2, z: 0.9 };
  const lightPosition = { x: -0.05, y: 0.75, z: 0.4 };

  const isWebGLAvailable = useCallback(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!window.WebGLRenderingContext && !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
      return false;
    }
  }, []);

  if (!isWebGLAvailable()) {
    return <div>Es scheint, dass du mit deinem Browser leider keine 3D Modelle laden kannst :/</div>;
  }

  return (
    <div className="resume-block model-container-sc">
      <div className="container">
        <div className='canva_first'>
          <Canvas onMouseMove={handleMouseMove}>
            <pointLight position={[modelPosition.x + lightPosition.x, modelPosition.y + lightPosition.y, modelPosition.z + lightPosition.z]} intensity={0.6} />
            <MemoizedErrorBoundary>
              <Model mouse={mouse} />
            </MemoizedErrorBoundary>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default memo(GLBViewer);
