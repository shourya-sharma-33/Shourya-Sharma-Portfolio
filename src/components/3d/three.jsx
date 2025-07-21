import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Box = () => {
  const meshBox = useRef();
  useFrame(() => {
    if (meshBox.current) {
      meshBox.current.rotation.y += 0.01;
      meshBox.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh rotation={[0.4, 0.2, 0]} ref={meshBox}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const ThreePreview = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Mobile condition

  return (
    <div
      className="flex justify-center items-center absolute"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: "50",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas camera={{ position: [2, 2, 2] }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} />
          <Box />
          {!isMobile && <OrbitControls enableZoom={false} enableRotate={true} />}
        </Canvas>
      </div>
    </div>
  );
};

export default ThreePreview;
