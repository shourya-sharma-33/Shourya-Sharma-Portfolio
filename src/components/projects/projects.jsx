import { useRef } from "react";

const Project = () => {
  const items = [
    "Temple Travel Website",
    "E-Commerce Website",
    "Anime Website",
    "Mojito Website"
  ];

  const images = [
    "/img/wp1 (1).png",
    "/img/wp1 (2).png",
    "/img/wp1 (3).png",
    "/img/wp1 (4).png"
  ];

  const link = [
    "https://github.com/shourya-sharma-33/temple-website",
    "https://github.com/shourya-sharma-33/shop-website-",
    "https://github.com/shourya-sharma-33/anime-website",
    "https://github.com/shourya-sharma-33/Gsap-Mohito-Website"
  ];

  const desc = [
    "A responsive travel website showcasing religious and spiritual destinations using modern UI and smooth scrolling animations.",
    "A complete e-commerce website offering product listings, cart functionality, and user-friendly navigation interface using React.",
    "A fun, stylish anime-themed website built with modern animations and character galleries for anime lovers.",
    "A single-page animated site built using GSAP, showcasing fresh and vibrant design for a mock Mojito brand website."
  ];

  return (
    <section id="Projects" className="p-10 w-[80%] mx-auto py-10">
      <div className="container mx-auto">
        <div className="pt-20">
          <p className="font-circular-web text-9xl max-sm:text-7xl text-blue-50 special-font px-0">
            My Projects
          </p>
        </div>
      </div>

      <div className="relative mt-10">
        {items.map((item, idx) => (
          <div key={idx} className="link-of-pro relative group">
            <a
              href={link[idx]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-y border-blue-50/20 py-6 px-4 text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <div className="w-full relative">
                <p className="font-circular-web text-4xl md:text-6xl relative z-10">
                  {item}
                  <img
                    src={images[idx]}
                    alt={`${item} Screenshot`}
                    className="w-64 absolute right-0 top-[-80px] rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  />
                </p>
                <p className="mt-2 font-general text-lg p-2 sm:text-base text-blue-100 group-hover:text-gray-800 w-[90%]">
                  {desc[idx]}
                </p>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-1000 z-0" />
              </div>

              <img
                src="/img/arr.png"
                className="w-10 h-10 mt-4 sm:mt-0 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
                alt="arrow"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
