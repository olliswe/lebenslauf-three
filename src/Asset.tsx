import React, {Suspense, useRef} from 'react'
import {useFrame, useLoader, useThree} from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {meshBounds} from "drei";

const pi =  Math.PI

function Asset({ url }:any) {
    const gltf = useLoader(GLTFLoader, url)
    const {clock} = useThree()
    gltf.scene.children.forEach((mesh, i) => {
        mesh.castShadow = true;
    })
    //@ts-ignore
    gltf.castShadow = true;
    gltf.scene.castShadow = true;
    const shoe = useRef()
    // useFrame(() => {
    //     // @ts-ignore
    //     shoe.current.rotation.z += Math.sin(clock.getElapsedTime())/250;
    // });

    return <mesh  castShadow={true}><primitive ref={shoe} object={gltf.scene} dispose={null} rotation={[0,-pi,0]} position={[0,2,0]}/></mesh>
}

export default Asset