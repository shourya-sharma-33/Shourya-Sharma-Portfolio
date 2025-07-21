import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import WebDevModel from "../3canvjs/webdevmodel";

const Footer = () => {
  return (
    <footer id="Contact" className="relative con-background  bg-black  text-white">
      <div className="h-96 max-sm:hidden w-[50%] max-sm:w-[100%]">
        
      <WebDevModel/>
      </div>
      <div className="absolute top-[150px] right-[50px] w-[50%] justify-self-center max-sm:hidden"><p className="justify-self-center max-sm:justify-self-center max-sm:text-5xl">Get In Contact</p>
 <p className=" py-5 justify-self-center text-2xl"> <a href="mailto:shourya_ml_dl_artificial_intelligence@proton.me" className="hover:text-pink-400 duration-200">shourya_ml_dl_artificial_intelligence@proton.me</a></p>
<div className="flex justify-self-center gap-6 mt-4 md:mt-0">
          <a href="https://github.com/shourya-sharma-33" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 duration-200">
            <FaGithub size={20} />
          </a>
          {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 duration-200">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 duration-200">
            <FaTwitter size={20} />
          </a> */}
        </div>

        
        </div>
        <div className="hidden max-sm:block max-sm:min-h-96 max-sm:py-32">
          <p className="justify-self-center max-sm:justify-self-center max-sm:text-5xl">Get In Contact</p>
 <p className=" py-5 justify-self-center text-2xl"> <a href="" className="hover:text-pink-400 duration-200">@shouryasharma@mail</a></p>
<div className="flex justify-self-center gap-6 mt-4 md:mt-0">
          <a href="https://github.com/shourya-sharma-33" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 duration-200">
            <FaGithub size={20} />
          </a>
          {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 duration-200">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 duration-200">
            <FaTwitter size={20} /> */}
          {/* </a> */}
        </div>

        
        </div>
     
    </footer>
  );
};

export default Footer;
