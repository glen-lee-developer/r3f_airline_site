import React, { useRef, useLayoutEffect } from "react";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "@react-three/drei";

extend({ ThreeGlobe });

const Globe = () => {
  return (
    <Canvas camera={{ fov: 75 }}>
      <OrbitControls position={[100, 0, -110]} />
      <ambientLight intensity={10} />
      <spotLight
        position={[0, 40, 0]}
        decay={0}
        distance={45}
        penumbra={1}
        intensity={100}
      />
      <group position={[100, 0, -110]}>
        <TestGlobe />
      </group>
    </Canvas>
  );
};

export default Globe;

const TestGlobe = (props) => {
  // This reference will give us direct access to the ThreeGlobe instance
  const globeRef = useRef<ThreeGlobe>();

  // Gen random data
  const N = 50;

  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: "red",
  }));

  // An effect that runs after three.js elements are created but before render
  useLayoutEffect(() => {
    if (globeRef.current) {
      // Configure the globe
      globeRef.current.globeImageUrl(
        "../../node_modules/three-globe/example/img/earth-day.jpg"
      );
      globeRef.current.bumpImageUrl(
        "../../node_modules/three-globe/example/img/earth-topology.png"
      );
      globeRef.current
        .arcsData(arcsData)
        .arcColor("color")
        .arcDashLength(0.4)
        .arcDashGap(4)
        .arcDashInitialGap(() => Math.random() * 5)
        .arcDashAnimateTime(3000);
    }
  }, []);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y -= 0.05 * delta;
    }
  });

  return <threeGlobe ref={globeRef} {...props} />;
};
