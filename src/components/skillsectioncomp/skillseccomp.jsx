import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SkillSection from "../skills/skills";

gsap.registerPlugin(ScrollTrigger);

const SkillSec = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  useGSAP(() => {
    sectionRefs.current.forEach((el, i) => {
      gsap.from(el, {
        x: i % 2 === 0 ? "-100vw" : "100vw",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Define your custom skill sections
  const skillGroups = [
    {
      title: "Front End Development",
      skills: [
        { name: "HTML/CSS/JS", level: 97 },
        { name: "React", level: 96 },
        { name: "TailwindCss", level: 90 },
        { name: "Tools Like ShadCN and DaisyUI", level: 88 },
      ],
    },
    {
      title: "Designing, Animations and 3D",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Spline", level: 90 },
        { name: "GSAP and its Plugins", level: 85 },
        { name: "Three.js and React Three Fiber", level: 91 },
      ],
    },
    {
      title: "Back End Development",
      skills: [
        { name: "Mongo.DB", level: 90 },
        { name: "Express.js", level: 75 },
        { name: "Node.js", level: 70 },
      ],
    },
    {
      title: "Machine Learning and DSA",
      skills: [
        { name: "DSA", level: 30 },
        { name: "Python, Pandas, Numpy, Matplotlib and Seaborn", level: 90 },
        { name: "ScikitLearn", level: 88 },
      ],
    },
  ];

  return (
    <div className="w-full bg-black py-16 skill-background ">
      <div className="w-[80%] justify-self-center">
        <div className="padding-top-40">
          <p className="font-circular-web text-9xl text-blue-50 special-font px-0">
            My Skills
          </p>
          <p className="max-w-md py-5 font-circular-web text-lg text-blue-50 opacity-50">
            This world is evolving fast, so I try my best to keep myself updated with latest technologies
          </p>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-4">
          {skillGroups.map((group, index) => (
            <div key={index} ref={addToRefs} className="justify-center w-full">
              <SkillSection skills={group.skills} title={group.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSec;
