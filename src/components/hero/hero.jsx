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

>
      <div
        id="video-frame"
        className=" hero-background relative z-10 h-dvh w-screen overflow-hidden  bg-black"
      >
        <div>
        <div className="absolute left-0 top-0 size-full   w-[40%]  ">
           <Canvas className="max-[1080px]:hidden" style={{zIndex: "1000"}} shadows camera={{ position: [3, 3, 3], fov: 30 }}>
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

        <div className="absolute left-0 top-0 z-40  size-full ">
          <div className="mt-24 justify-self-center max-[1008px]:hidden">
            {/* <h1 className="justify-self-center shourya-name special-font hero-heading linear-grad text-white max-sm:text-9xl">

              
              Sh<span className="text-pink-400">o</span>urya <div className="inline text-7xl  font-circular-web ">zxzxzxz</div> <br /> <p className="mx-64"> Sh<span className="text-pink-400">a</span>rma</p> 
            <p className="max-sm:text-sm shourya-name max-w-94  text-blue-100 text-lg font-circular-web justify-self-end">
             <span className=" text-white">UI/UX Designing</span> <span className="">|</span>  <span className="max-sm:border-top text-white">Front End Development</span> 
            </p>
            </h1> */}
            <div className="h-[50%]  grid ">

              <div>
              <h1 className="w-[90%] shourya-name special-font hero-heading linear-grad text-white">
              <div className=" relative flex items-center">
                SH<span className="text-pink-400">o</span>URYA 
                <div className="inline h-full ">
                 <div className=" ">
              <div className="grid mx-2  self-center max-[1008px]:hidden">
                    <span className=" text-5xl font-circular-web max-[1080px]:text-4xl "><span className="text-purple-600">M</span>ongo<span className="text-pink-700">DB</span></span>
                <span className=" text-5xl font-circular-web max-[1080px]:text-4xl"><span className="text-purple-600">R</span>eact</span>
                <span className=" text-5xl font-circular-web max-[1080px]:text-4xl"><span className="text-purple-600">N</span>ode<span className="text-pink-700"><span className="text-blue-800">&</span>E</span>xpress</span>
                 
              </div>
              </div>
                </div>
                <div className="absolute top-[-20px] max-[1008px]:text-sm max-[1008px]:top-[-20px] text-2xl font-circular-web">Design<span className="text-pink-400 text-4xl max-[1008px]:text-lg">?</span>Backend<span className="max-[1008px]:text-lg text-pink-400 text-4xl">?</span>Frontend<span className="max-[1008px]:text-lg text-pink-400 text-4xl">?</span></div>
              {/* <div className="absolute bottom-[-20px] right-0 text-2xl font-circular-web">asas</div>
              */}
              </div>
             
              <div className=" relative  max-[1275px]:px-32  min-[1275px]:px-64 max-[1080px]:px-0 flex gap-4  items-center align-bottom">
              
              <div className="absolute top-[-25px]  ">
                <div className="flex items-center gap-3">
                  <div className="inline h-full">
                 <div className="px-1 ">
              <div className="grid max-[1008px]:hidden ">
                    <span className=" text-4xl font-circular-web justify-self-end"><span className="text-purple-600">html</span>css<span className="text-pink-700">js</span></span>
                <span className=" text-4xl font-circular-web justify-self-end"><span className="text-purple-600">t</span>ailwindcss</span>
                <span className=" text-4xl font-circular-web justify-self-end"><span className="text-purple-600">f</span>igma<span className="text-pink-700"><span className="text-blue-800">&</span>S</span>pline</span>
                 
              </div>
              </div>
                </div>
                Sharma
                
                
                </div>
                <div>
                  
                </div>
                
                  <div className="grid px-10">
                <span className="max-[1008px]:hidden text-xl font-circular-web justify-self-start"><span className="text-3xl text-purple-600">Hello ! </span>I am a full stack<span className="text-3xl text-pink-700"> web developer </span>
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
          <div className=" mt-24 justify-self-start  p-10 min-[1008px]:hidden max-[660px]:hidden ">
            {/* <h1 className="justify-self-center shourya-name special-font hero-heading linear-grad text-white max-sm:text-9xl">

              
              Sh<span className="text-pink-400">o</span>urya <div className="inline text-7xl  font-circular-web ">zxzxzxz</div> <br /> <p className="mx-64"> Sh<span className="text-pink-400">a</span>rma</p> 
            <p className="max-sm:text-sm shourya-name max-w-94  text-blue-100 text-lg font-circular-web justify-self-end">
             <span className=" text-white">UI/UX Designing</span> <span className="">|</span>  <span className="max-sm:border-top text-white">Front End Development</span> 
            </p>
            </h1> */}
            <div className="h-[50%]  grid ">

              <div>
              <h1 className="w-[90%] shourya-name  hero-heading justify-center linear-grad text-white">
              <div className="flex  flex-wrap">
              <div className="font-circular-web text-9xl max-sm:text-6xl"><span className="text-pink-400">S</span>H<span className="text-red-400">o</span><span className="text-green-400">u</span><span className="text-purple-400">r</span>ya</div>
               <div className="font-circular-web text-9xl max-sm:text-6xl"><span className="text-pink-400">S</span>harma </div>
                
                </div>
                <p className="text-xl font-circular-web">
                  <span className="text-xl font-circular-web justify-self-start"><span className="text-3xl text-purple-600">Hello ! </span>I am a full stack<span className="text-3xl text-pink-700"> web developer </span>
                 , from <span className="text-2xl text-blue-700">designing</span> to a <span className="text-2xl text-purple-700">passionately crafted</span > front end web page to a <span className="text-2xl text-pink-700">working application</span> with <span className="text-2xl text-red-700">scalable backend</span> , i got you!!</span>
              
                </p>
                
             
              
            </h1>

              </div>
              

              

            
            </div>
            
            
            
           
            
          </div>
          <div className="absolute p-3 top-24 min-[660px]:hidden text-white">
<div className="h-[50%]  grid ">

              <div>
              <h1 className="w-[90%] shourya-name  hero-heading justify-center linear-grad text-white">
              <div className="flex  flex-wrap">
              <div className="font-circular-web text-9xl max-sm:text-7xl"><span className="text-pink-400">S</span>H<span className="text-red-400">o</span><span className="text-green-400">u</span><span className="text-purple-400">r</span>ya</div>
               <div className="font-circular-web text-9xl max-sm:text-7xl"><span className="text-pink-400">S</span>harma </div>
                
                </div>
                <p className="text-xl font-circular-web">
                  <span className="text-xl font-circular-web justify-self-start"><span className="text-3xl text-purple-600">Hello ! </span>I am a full stack<span className="text-3xl text-pink-700"> web developer </span>
                 , from <span className="text-2xl text-blue-700">designing</span> to a <span className="text-2xl text-purple-700">passionately crafted</span > front end web page to a <span className="text-2xl text-pink-700">working application</span> with <span className="text-2xl text-red-700">scalable backend</span> , i got you!!</span>
              
                </p>
                
             
              
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
