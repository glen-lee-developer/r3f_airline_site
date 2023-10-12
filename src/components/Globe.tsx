import React, { useRef, useLayoutEffect } from "react";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "@react-three/drei";

extend({ ThreeGlobe });

const Globe = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={10} />
      <spotLight
        position={[0, 40, 0]}
        decay={0}
        distance={45}
        penumbra={1}
        intensity={100}
      />
      <TestGlobe />
    </Canvas>
  );
};

export default Globe;

const TestGlobe = (props) => {
  // This reference will give us direct access to the ThreeGlobe instance
  const globeRef = useRef<ThreeGlobe>();

  // An effect that runs after three.js elements are created but before render
  useLayoutEffect(() => {
    if (globeRef.current) {
      // Configure the globe
      globeRef.current.globeImageUrl(
        "../../node_modules/three-globe/example/img/earth-blue-marble.jpg"
      );
      globeRef.current.bumpImageUrl(
        "../../node_modules/three-globe/example/img/earth-topology.png"
      );
    }
  }, []);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.1 * delta;
    }
  });

  return <threeGlobe ref={globeRef} {...props} />;
};
