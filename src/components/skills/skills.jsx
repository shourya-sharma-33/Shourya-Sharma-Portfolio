import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillSection = ({ skills = [], title = "My Skills" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const bars = sectionRef.current.querySelectorAll(".skill-bar");

    bars.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-width");

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${targetWidth}%`,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      className=" text-white pad-top-10 flex flex-col items-center section-skill"
      ref={sectionRef}
    >
      <div className="backdrop-blur backblur border-1-white p-10 w-[100%] max-w-3xl space-y-6 rounded-lg">
        <h1 className="font-zentry text-4xl text-center mb-6">{title}</h1>
        {skills.map((skill, index) => (
          <div key={index} className="w-[100%]">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium font-circular-web">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full h-3 bg-pink-800/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500/50 rounded-full shadow-md skill-bar"
                data-width={skill.level}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
