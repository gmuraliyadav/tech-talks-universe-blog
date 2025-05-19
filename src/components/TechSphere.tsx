
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Create custom orbit controls instead of using drei
const CustomOrbitControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  
  useEffect(() => {
    // Import OrbitControls directly from Three.js
    const OrbitControls = require('three/examples/jsm/controls/OrbitControls').OrbitControls;
    const controls = new OrbitControls(camera, gl.domElement);
    
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    
    controlsRef.current = controls;
    
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  
  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });
  
  return null;
};

// Get access to the three.js context
const useThree = () => {
  const context = React.useContext(require('@react-three/fiber').context);
  return context.getState();
};

// Create a custom animated sphere
const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={sphereRef} scale={1.5}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshStandardMaterial 
        color="#6366F1"
        roughness={0.4}
        metalness={0.7}
        wireframe
      />
    </mesh>
  );
};

const TechSphere = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere />
        <CustomOrbitControls />
      </Canvas>
    </div>
  );
};

export default TechSphere;
