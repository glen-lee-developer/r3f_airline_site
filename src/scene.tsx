import { Canvas, useFrame,  useThree } from '@react-three/fiber'
import * as THREE from "three"
import {  CameraShake, Environment} from "@react-three/drei"
import './App.css'
import  GenerateClouds  from "./components/GenerateClouds"
import { useState } from 'react'



export const ThreeScene = () => {
 
  function Rig() {

    const config = {
      maxYaw: 0.05, // Max amount camera can yaw in either direction
      maxPitch: 0.05, // Max amount camera can pitch in either direction
      maxRoll: 0.05, // Max amount camera can roll in either direction
      yawFrequency: 0.05, // Frequency of the the yaw rotation
      pitchFrequency: 0.05, // Frequency of the pitch rotation
      rollFrequency: 0.05, // Frequency of the roll rotation
      intensity: 0, // initial intensity of the shake
      decay: true, // should the intensity decay over time
      decayRate: 1, // if decay = true this is the rate at which intensity will reduce at
      controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
    }
        
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    useFrame(() => camera.position.lerp(vec.set(mouse.x * 25, mouse.y * 15, 0), 0.015) )
    return <CameraShake {...config} />
  }

  return (
    <Canvas>
        <GenerateClouds numClouds={150} screenHeight={100} screenWidth={100} />
        <ambientLight intensity={Math.PI / 1.5} />
        {/* <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
        <spotLight position={[-20, 0, 10]} angle={0.15} decay={0} penumbra={-1} intensity={30} />
        <spotLight position={[20, -10, 10]}  angle={0.2} decay={0} penumbra={-1} intensity={20} /> */}
        {/* <CameraControls makeDefault /> */}
        
        <Environment
            background={true}
            files={"day.hdr"}
            path={'/'}
            blur={0}
          />
          <Rig/>
    </Canvas>
  )
}


