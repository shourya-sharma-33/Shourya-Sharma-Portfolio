import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import ThreePreview2 from "../3d/three2";
import Axolotl from "../axolotl/axolotl";
import AxolotlModel from "../3canvjs/axalotlModel";
import WebDevModel from "../3canvjs/webdevmodel";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WhaleModel from "../3canvjs/whaleModel";

const Box = () => {
  const meshBox = useRef();
  useFrame(() => {
    if (meshBox.current) {
      meshBox.current.rotation.y += 0.01;
      meshBox.current.rotation.x += 0.01;
    }
  })

  return(
    <mesh rotation={[0.4, 0.2, 0]} ref={meshBox}>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="hotpink" />
  </mesh>
  )
};

const ThreePreview = () => {
  return (
    <>
    <div className="w-full">
    <div
      className="flex justify-self-end items-center absolute"
      style={{
        width: "50%",
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
          <OrbitControls enableZoom={false} enableRotate={true} />
        </Canvas>
      </div>
    </div>
    </div>
    </>
  );
};



gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const clipRef = useRef(null);
  const htmlTextRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: clipRef.current,
        start: "center center",
        end: "+=1000 center", // longer scroll = slower feel
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation
      
      .to(".backgroundtext", {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.inOut",
        color: "white",
      }, 0)

      .to(".one-para", {
        opacity: 1,
        x: -2000,
        display: "none",
        duration: 2,
        ease: "power2.inOut",
      }, 1.5)
      .to(".cube",{
        opacity: 0,
        duration: 2,

      },1.5)
     

      // .to("#about", {
      //   backgroundColor: "purple",
      //   duration: 2,
      //   ease: "power2.inOut",
      // }, 1.5)

      // .to(".two-para", {
      //   opacity: 1,
      //   filter: "blur(0px)",
      //   duration: 2,
      //   ease: "power2.inOut",
      //   color: "white",
      // }, 3.5)

      // .to(".two-para", {
      //   x: -2000,
      //   display: "none",
      //   duration: 2,
      //   ease: "power2.inOut",
      // }, 5.5)

      // .to("#about", {
      //   backgroundColor: "black",
      //   duration: 2,
      //   ease: "power2.inOut",
      // }, 5.5)

      // .to(".three-para", {
      //   opacity: 1,
      //   filter: "blur(0px)",
      //   duration: 2.5,
      //   ease: "power2.inOut",
      //   color: "white",
      // }, 7.5)

      // .to(".last-name", {
      //   opacity: 1,
      //   filter: "blur(0px)",
      //   duration: 2,
      //   ease: "power2.inOut",
      //   color: "white",
      // }, 9.5);
  }, []);

  useGSAP(() => {
    gsap.from(htmlTextRef.current, {
      x: -2000,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: htmlTextRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 0.5,
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(textRef.current, {
      x: -2000,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: htmlTextRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 0.5,
      },
    });
  }, []);
  const styleTextNotUseHtml = '<h1> Hello ! </h1>';
    const styleTextNotUseHtml2 = '<p> I Design Eye Catching Websites </p>';
    
    const heartmeow = '<3';

  return (
    <div id="about" className="min-h-screen w-screen cute-background">
      <div className="relative mb-8 mt-36 grid grid-cols-1 items-center justify-self-center text-center">
        <h2
                    ref={htmlTextRef}
                    className=" font-general text-sm uppercase md:text-[20px] text-white/50 "
                >
                    {styleTextNotUseHtml} <br /> {styleTextNotUseHtml2}
                </h2>
                <div ref={textRef} className="mt-5 text-center text-4xl uppercase leading-[0.8] text-white md:text-[6rem]">
                    Websites made with love
                </div>
      </div>
      <div className="w-[100%]  justify-self-center grid grid-cols-2 text-white">
        <div className="bg-white ">

        <ul className="text-black p-5 font-circular-web">
          <li className="text-6xl font-general">I work online</li>
          <li className="text-xl font-general">I am from Haridwar, Uttrakhand, India</li>
        </ul>

        </div>
        <div className="grid grid-cols-2 ">
          <div className="bg-pink-700 p-5 font-general">Currently doing Full Stack to boost up my career, and DSA to improve my skills</div>
          <div className="bg-purple-700 p-5 font-general">
            Working on lot more projects to build my skills further
          </div>
        
        </div>
        </div>   
        <div className="w-[100%]  justify-self-center grid grid-cols-2 text-white">
        
        <div className="grid grid-cols-2">
          <div className="bg-pink-400 font-general p-3">With lots of love ❤ and modern tools to fit all your requirements, experimenting until you love it</div>
          <div className="bg-purple-400 font-general">
            <AxolotlModel/>
          </div>
        
        </div>
        <div className="bg-white ">

        <ul className="text-black p-5 font-circular-web">
          <li className="text-6xl font-general"></li>
          <li className="text-xl font-general">Upskilling Myself Everyday with the changing world that it is</li>
          <li className="text-xl"></li>
        </ul>

        </div>
        
        </div>
           <div className="w-[100%]  justify-self-center grid grid-cols-2 text-white">
        
        
        <div className="bg-pink-800 ">

        <ul className="text-white p-5 font-circular-web">
          <li className="text-6xl font-general">I have unhealthy ammounts of caffine in my arteries :3</li>
          <li className="text-lg font-general">Omg {">w<"} this interactable whale is so cute :3</li>
         </ul>

        </div>
        <div className="grid  h-96 ">
          <div className="bg-pink-400  ">
            <WhaleModel/>
          </div>
    
        </div>
        </div>

        
      </div>

          

  );
};

export default About;
