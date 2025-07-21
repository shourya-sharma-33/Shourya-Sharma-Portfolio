import CubeCanvas from "../3canvjs/cubecanv";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AbtMe = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stagger", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="About"
      className="abtm-background bg-black w-[80%] justify-self-center"
      ref={sectionRef}
    >
      <div className="grid grid-cols-2 py-24 gap-5">
        <div className="container stagger">
          <div className="padding-top-20 flex flex-col">
            <p className="font-circular-web text-7xl text-blue-50 special-font px-0">
              I will be more than glad to work with you
            </p>
          </div>
          <p className="max-w-md py-5 font-circular-web text-lg text-blue-50 opacity-50">
            I am doing web development and design since 5 years
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[1px]  col-span-2">
              <div className="bg-black p-5">
                <p className="font-circular-web text-blue-100">
                  I am working on building a career with Full Stack Development and AI/ML, I am looking for some freelancing work
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 p-[2px]  object-cover w-full">
          <div className="bg-black w-full h-full">
            <CubeCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbtMe;
