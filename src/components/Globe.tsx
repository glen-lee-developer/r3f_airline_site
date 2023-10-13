import { a, useSpring } from "@react-spring/three";
import React, { useRef, useLayoutEffect, useMemo } from "react";
import { extend, Canvas, useFrame, useThree } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";

extend({ ThreeGlobe });

const Globe = () => {
  //  Rotation
  function Inspector({ responsiveness = 20, children }) {
    const { size } = useThree();
    const euler = useMemo(() => new THREE.Euler(), []);
    const [spring, set] = useSpring(() => ({
      rotation: [0, 0, 0],
    }));
    const bind = useDrag(({ delta: [dx, dy] }) => {
      euler.y += (dx / size.width) * responsiveness;
      euler.x += (dy / size.width) * responsiveness;
      euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2);
      set({ rotation: euler.toArray().slice(0, 3) });
    });
    return (
      <a.group {...bind()} {...spring}>
        {children}
      </a.group>
    );
  }

  return (
    <Canvas camera={{ fov: 75 }}>
      <PerspectiveCamera makeDefault position={[-150, 0, 200]} />
      {/* <OrbitControls position={[100, 0, -110]} /> */}
      <ambientLight intensity={10} />
      <spotLight
        position={[0, 40, 0]}
        decay={0}
        distance={45}
        penumbra={1}
        intensity={100}
      />
      <Inspector>
        <TestGlobe />
      </Inspector>
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
