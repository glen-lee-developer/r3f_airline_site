
import { Cloud, Clouds } from '@react-three/drei'
import { useRef } from "react"
import { useFrame } from '@react-three/fiber'
import {  useControls } from "leva"
import * as THREE from "three"

type GenerateCloudsProps = {
    numClouds: number,
    screenHeight: number,
    screenWidth: number,

}

const GenerateClouds = ({ numClouds, screenHeight, screenWidth }: GenerateCloudsProps) => {


function Rig() {
    //  ANIMATION
    return useFrame((_, delta) => {
        //  Updating Clouds Position
    cloudRefs.forEach((ref) => {
        if(!ref.current) return 
        ref.current.position.z >= 50 ? ref.current.position.z = -200 :   ref.current.position.z += 10 * delta 
    })
})
}


const cloudRefs = new Array(numClouds).fill(null).map(() => useRef<THREE.Mesh>())

//  CONTROLS
// const { color,  ...config } = useControls({
//     color: "white",
//     fade: { value: 3, min: 0, max: 400, step: 1 },
//     growth: { value: 3, min: 0, max: 20, step: 1 },
//     opacity: { value: 0.75, min: 0, max: 1, step: 0.01 },
//     seed: { value: 100, min: 1, max: 100, step: 1 },
//     segments: { value: 1, min: 1, max: 80, step: 1 }, 
//     speed: { value: 0, min: 0, max: 1, step: 0.01 },
//     volume: { value: 100, min: 0, max: 200, step: 0.1 },
// })


    return (
      
        <Clouds material={THREE.MeshLambertMaterial} limit={400}  >
             <Rig />
            {cloudRefs.map((ref, i) => (
        
                    <Cloud
                     // @ts-ignore
                        ref={ref}
                        key={i}
                        color={ "white"}
                        fade={ 3 }
                        growth={ 3}
                        opacity={  0.75 }
                        seed={ 100}
                        segments= {  1 }
                        speed={0}
                        volume={100}

                        position={[
                            (Math.random() * (screenWidth * 3) ) - (screenWidth * 3) / 2,
                            (Math.random() * screenHeight) - (screenHeight * 1.15),
                            (-Math.random() * 501) 
                        ]}
                    />
            ))}
       
        </Clouds>
    )
}

export default GenerateClouds
