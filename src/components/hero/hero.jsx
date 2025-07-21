import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Experience } from "../Experience";
import { Canvas } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Animate text on scroll
  useGSAP(() => {
    gsap.from(".below-name", {
      x: 600,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "300px top",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
      
    });
    
  }, []);
    useGSAP(() => {
    gsap.to(".shourya-name", {
      x: -600,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "100px top",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
      
    });
    
  }, []);

  // Animate clipPath
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden ">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black"
      >
        <div>
        <div className="absolute left-0 top-0 size-full hero-background">
           <Canvas style={{zIndex: "1000"}} shadows camera={{ position: [3, 3, 3], fov: 30 }}>
           <Experience/>
          </Canvas>
        </div>

        </div>

        <h1 className="max-sm:z-50 special-font hero-heading absolute bottom-5 right-5 z-40 text-pink-75 below-name text-white">
          Sharma
          <p className="text-sm justify-self-end font-general">
            I Design Eye Catching Websites
          </p>
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="shourya-name special-font hero-heading linear-grad text-white">
              Sh<span className="text-pink-400">o</span>urya
            </h1>
            <p className="max-sm:w-16  max-sm:text-sm shourya-name max-w-94 font-robert-regular text-blue-100">
             <span className=" text-black">UI/UX Designing</span> <span className="max-sm:hidden">|</span> <span className="sm:hidden max-sm:visible block">&</span> <span className="max-sm:border-top text-black">Front End Development</span> 
            </p>
           
            
          </div>
        </div>
      </div>

      <h1 className="  max-sm:hidden special-font below-name hero-heading absolute bottom-5 right-5 text-black z-0">
        Sharma
        <p className="max-sm:hidden text-sm justify-self-end font-sans">
          I Design Eye Catching Websites
        </p>
      </h1>
    </div>
  );
};

export default Hero;
