import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

const navItems = ["Projects", "About", "Contact"];

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const links = linksRef.current;

    const flipToScrolled = () => {
    
      navRef.current.classList.add("scrolled-navbar");
      
    };

    const flipToOriginal = () => {
        navRef.current.classList.remove("scrolled-navbar");

    };


    const hideNav = () => {
        navRef.current.classList.add("hidden");

    }
    ScrollTrigger.create({
      trigger: document.body,
      start: "top+=300 top",
      end : "top+=600 top",
      duration:1,
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top+=10 top",
      onEnter: () => flipToScrolled(),
      onLeaveBack: () => flipToOriginal(),
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={navRef}
      style={{zIndex: 100}}
      className=" navbar-container my-5 max-sm:mx-5 fixed inset-x-0 top-4 z-50 transition-all duration-700 sm:inset-x-6"
    >
      <header className="w-full">
        <nav className=" flex items-center justify-center p-1">
          <div
            ref={linksRef}
            className="flex flex-row items-center  transition-all"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                className="text-10px text-white mx-3 font-circular-web hover:text-pink-500 transition-colors duration-300"
                href={`#${item}`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
