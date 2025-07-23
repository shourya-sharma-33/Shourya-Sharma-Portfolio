import { OrbitControls } from "@react-three/drei";
import { useState, useRef } from "react";
import { ShouryaSharma } from "./Avatar";

export const Experience = () => {
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const timeoutRef = useRef(null);

  const handleAvatarClick = () => {
    if (currentAnimation === "Wave") return;
    setCurrentAnimation("Wave");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentAnimation("Idle");
    }, 2500); // Adjust to your wave duration
  };

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <group position-y={-2}>
        {/* <Avatar animation={currentAnimation} onClick={handleAvatarClick} /> */}
        <ShouryaSharma animation={currentAnimation} onClick={handleAvatarClick} /> 
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
