import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { xor } from "three/tsl";

const WebDev = () => {
  const { scene } = useGLTF("/models/voxel_web_development.glb");
  const ref = useRef();
  useFrame(() =>{
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0.8, 0.3, 1]}
      rotation={[0,0 , 0]}
      scale={0.2}
    />
  );
};

export default WebDev;
