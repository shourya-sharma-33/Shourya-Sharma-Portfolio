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
    gsap.to(".top-name-and-text-with-question-marks-above", {
      x:-600,
      duration: 1,
      ease: "power2.out",
      scrub:true,
      scrollTrigger: {
        trigger: document.body,
        start: "100px top",
        end: "top 40%",
        toggleActions: "play none none reverse",
      }
      
      
      // top-name-and-text-with-question-marks-above-side-mern-stack-names
    });
    
    
  }, []);
      useGSAP(() => {
    gsap.to(".top-name-and-text-with-question-marks-above-side-mern-stack-names", {
      y:-600,
      x:600,
      duration: 1,
      ease: "power2.out",
      scrub:true,
      scrollTrigger: {
        trigger: document.body,
        start: "100px top",
        end: "top 40%",
        toggleActions: "play none none reverse",
      }
      
      
      // top-name-and-text-with-question-marks-above-side-mern-stack-names
    });
    
    
  }, []);

  return (
<div
  className="relative h-dvh w-screen overflow-x-hidden"
  style={{
    backgroundImage: `linear-gradient(to top, black 0%, transparent 20%), url('public/img/Frame 3.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}
>
      <div
        id="video-frame"
        className="hero-background relative z-10 h-dvh w-screen overflow-hidden  bg-black"
      >
        <div>
        <div className="absolute left-0 top-0 size-full  max-sm:h-[60%] w-[40%] max-sm:top-[120px] ">
           <Canvas className=" max-sm:" style={{zIndex: "1000"}} shadows camera={{ position: [3, 3, 3], fov: 30 }}>
           <Experience/>
          </Canvas>
        </div>

        </div>

        {/* <h1 className="max-sm:z-50 special-font hero-heading absolute bottom-5 right-5 z-40 text-pink-75 below-name text-white">
          Sharma
          <p className="text-sm justify-self-end font-general">
            I Design Eye Catching Websites
          </p>
        </h1> */}

        <div className="absolute left-0 top-0 z-40 size-full max-sm:top-[450px]">
          <div className="mt-24 w-[90%] justify-self-center px-5 sm:px-10">
            {/* <h1 className="justify-self-center shourya-name special-font hero-heading linear-grad text-white max-sm:text-9xl">

              
              Sh<span className="text-pink-400">o</span>urya <div className="inline text-7xl  font-circular-web ">zxzxzxz</div> <br /> <p className="mx-64"> Sh<span className="text-pink-400">a</span>rma</p> 
            <p className="max-sm:text-sm shourya-name max-w-94  text-blue-100 text-lg font-circular-web justify-self-end">
             <span className=" text-white">UI/UX Designing</span> <span className="">|</span>  <span className="max-sm:border-top text-white">Front End Development</span> 
            </p>
            </h1> */}
            <div className="h-[50%] grid">

              <div>
              <h1 className="w-[90%]   justify-self-center shourya-name special-font hero-heading linear-grad text-white max-sm:text-9xl ">
              <div className=" relative flex ">
                SH<span className="text-pink-400">o</span>URYA 
                <div className="inline h-full">
                 <div className="px-5 ">
              <div className="grid  ">
                    <span className=" text-5xl font-circular-web  "><span className="text-purple-600">M</span>ongo<span className="text-pink-700">DB</span></span>
                <span className=" text-5xl font-circular-web"><span className="text-purple-600">R</span>eact</span>
                <span className=" text-5xl font-circular-web"><span className="text-purple-600">N</span>ode<span className="text-pink-700"><span className="text-blue-800">&</span>E</span>xpress</span>
                 
              </div>
              </div>
                </div>
                <div className="absolute top-[-20px] text-2xl font-circular-web">Design<span className="text-pink-400 text-4xl">?</span>Backend<span className="text-pink-400 text-4xl">?</span>Frontend<span className="text-pink-400 text-4xl">?</span></div>
              {/* <div className="absolute bottom-[-20px] right-0 text-2xl font-circular-web">asas</div>
              */}
              </div>
             
              <div className=" relative px-64 flex gap-4  items-center align-bottom">
              
              <div className="absolute top-[-25px]  ">
                <div className="flex items-center gap-3">
                  <div className="inline h-full">
                 <div className="px-1 ">
              <div className="grid ">
                    <span className=" text-4xl font-circular-web justify-self-end"><span className="text-purple-600">html</span>css<span className="text-pink-700">js</span></span>
                <span className=" text-4xl font-circular-web justify-self-end"><span className="text-purple-600">t</span>ailwindcss</span>
                <span className=" text-4xl font-circular-web justify-self-end"><span className="text-purple-600">f</span>igma<span className="text-pink-700"><span className="text-blue-800">&</span>S</span>pline</span>
                 
              </div>
              </div>
                </div>
                sharma
                </div>
                  <div className="grid px-10">
                <span className=" text-xl font-circular-web justify-self-start"><span className="text-3xl text-purple-600">Hello ! </span>I am a full stack<span className="text-3xl text-pink-700"> web developer </span>
                 , from <span className="text-2xl text-blue-700">designing</span> to a <span className="text-2xl text-purple-700">passionately crafted</span > front end web page to a <span className="text-2xl text-pink-700">working application</span> with <span className="text-2xl text-red-700">scalable backend</span> , i got you!!</span>
              </div>
                
              </div>
                
                {/* <div className="font-circular-web grid text-3xl">
                  <span>asas</span>
                  <span>qwqww</span>
                  <span>zx</span>
                </div> */}
              </div>
              
            </h1>

              </div>

              

            
            </div>
            
            
           
            
          </div>
        </div>
         
      </div>

      {/* <h1 className="  max-sm:hidden special-font below-name hero-heading absolute bottom-5 right-5 text-black z-0">
        Sharma
        <p className="max-sm:hidden text-sm justify-self-end font-sans">
          I Design Eye Catching Websites
        </p>
      </h1> */}
    
            
           
              

    </div>
  );
};

export default Hero;
