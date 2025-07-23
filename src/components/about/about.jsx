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
      })

      .to(".one-para", {
        opacity: 1,
        x: -2000,
        display: "none",
        ease: "power2.inOut",
      })
      .to(".cube",{
        opacity: 0,

      })
     

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
      <div 
      
      ref={clipRef} className="grid  h-dvh w-screen overflow-hidden" id="clip">
        {/* <div className=" mask-clip-path m-20  about-image relative max-sm:w-[150%] h-full w-[20%] flex">
          Use AxolotlModel which wraps Axolotl in a Canvas for proper rendering */}
        
        {/* <div className="items-end"><ThreePreview2/></div>
          */}
         {/* </div> */}

         <div>

<div className="cube"><ThreePreview2/></div>

            <div className="flex w-[60%] p-16 justify-between  change-div">
          <p className="one-para backgroundtext   text-8xl max-sm:text-8xl font-zentry h-[100vh] text-white opacity-0 blur-md">
            Want Creative websites? modern UI? smooth web design carefully crafted for you
          </p>
        </div>
              

        {/* <div className="flex w-full justify-between justify-self-center change-div">
          <p className="two-para backgroundtext text-9xl  font-zentry w-[100vh] max-sm:text-8xl h-[100vh] text-white opacity-0 blur-md">
            With lots of love ❤ and modern tools to fit all your requirements, experimenting until you love it
          </p>
        </div> */}

        
        
         </div>
         

        
      </div>

          

    </div>
  );
};

export default About;
