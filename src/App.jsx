import React, { useEffect, useState } from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import SkillSection from "./components/skills/skills";
import SkillSec from "./components/skillsectioncomp/skillseccomp";
import Navbar from "./components/navbar/navbar";
import Feature from "./components/features/features";
import Project from "./components/projects/projects";
import AbtMe from "./components/about-me/aboutme";
import Footer from "./components/footer/footer";
import ThreePreview from "./components/3d/three";

function App() {

  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About />
        <SkillSec />
        <Navbar />
        <div className="bg-black abtm-background">
          <AbtMe />
        </div>
        <div className="bg-black pr-background">
          <Project />
        </div>
        <div className="bg-black bento-background">
          <Feature />
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
