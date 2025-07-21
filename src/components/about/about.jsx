import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import ThreePreview2 from "../3d/three2";
import Axolotl from "../axolotl/axolotl";
import AxolotlModel from "../3canvjs/axalotlModel";
import WebDevModel from "../3canvjs/webdevmodel";

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
        end: "+=6000 center", // longer scroll = slower feel
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

      .to("#about", {
        backgroundColor: "purple",
        duration: 2,
        ease: "power2.inOut",
      }, 1.5)

      .to(".two-para", {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.inOut",
        color: "white",
      }, 3.5)

      .to(".two-para", {
        x: -2000,
        display: "none",
        duration: 2,
        ease: "power2.inOut",
      }, 5.5)

      .to("#about", {
        backgroundColor: "black",
        duration: 2,
        ease: "power2.inOut",
      }, 5.5)

      .to(".three-para", {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2.5,
        ease: "power2.inOut",
        color: "white",
      }, 7.5)

      .to(".last-name", {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.inOut",
        color: "white",
      }, 9.5);
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
                    className=" font-general text-sm uppercase md:text-[20px]"
                >
                    {styleTextNotUseHtml} <br /> {styleTextNotUseHtml2}
                </h2>
                <div ref={textRef} className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
                    Websites made with love
                </div>
      </div>

      <div ref={clipRef} className="relative h-dvh w-screen overflow-hidden" id="clip">
        <div className="mask-clip-path about-image relative max-sm:w-[150%] h-full w-full flex">
          {/* Use AxolotlModel which wraps Axolotl in a Canvas for proper rendering */}
         <ThreePreview2/>
         </div>

        <div className="flex w-full justify-between justify-self-center change-div">
          <p className="one-para backgroundtext text-9xl max-sm:text-8xl font-zentry h-[100vh] text-white opacity-0 blur-md">
            Want Creative websites? modern UI? smooth web design carefully crafted for you
          </p>
        </div>
                <div className="flex w-full justify-between justify-self-center change-div">
          <p className="two-para backgroundtext text-9xl max-sm:text-8xl font-zentry h-[100vh] text-white opacity-0 blur-md">
            With lots of love ❤ and modern tools to fit all your requirements, experimenting until you love it
          </p>
        </div>

        {/* <div className="flex w-full justify-between justify-self-center change-div">
          <p className="two-para backgroundtext text-9xl  font-zentry w-[100vh] max-sm:text-8xl h-[100vh] text-white opacity-0 blur-md">
            With lots of love ❤ and modern tools to fit all your requirements, experimenting until you love it
          </p>
        </div> */}

        <div className="flex w-full justify-between justify-self-center change-div">
          <div className="three-para backgroundtext text-9xl font-zentry h-[100vh] max-sm:text-7xl text-white opacity-0 blur-md">
            Love is the most important ingredient in any recipe to light up the melancholy
            <p className="last-name mt-5 text-6xl opacity-0 blur-md">
              - <span className="text-pink-400">S</span>HOURYA SHARMA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
