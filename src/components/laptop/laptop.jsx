import React from "react";
import { useGLTF } from "@react-three/drei";

const LaptopModel = () => {
  const { scene } = useGLTF("/models/laptop.glb"); // path to your model

  return (
    <primitive
      object={scene}
      position={[0,0, 0]}            // ⬅️ adjust to place it where you want
      rotation={[0, Math.PI, 0]} // ⬅️ adjust for default angle
      scale= {4}
    />
  );
};

export default LaptopModel;
