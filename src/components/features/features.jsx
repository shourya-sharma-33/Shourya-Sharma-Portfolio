import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="
        relative size-full
    ">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="
          absolute left-0 top-0 size-full object-cover object-center
        "
      ></video>
      <div
        className="
          relative z-10 flex size-full flex-col
          justify-between p-5 text-white
        "
      >
        <div className=" p-10 bg-black/20 backdrop-blur-sm ">
          <h1
            className="
               font-circular-web text-4xl
            "
          >
            {title}
          </h1>
          {description && (
            <p
              className="
              shadow-lg  font-circular-web mt-3 max-w-64 text-xs md:text-base
              "
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  useGSAP(() => {
    gsap.from(".bento", {
      opacity: 0,
      duration: 2,
      stagger: { each: 0.2 },
    });
  });

  return (
    <section
      className="
        bg-black w-[80%] justify-self-center
      "
    >
      <div className="container">
        <div className="padding-top-20">
          <p
            className="
              font-circular-web text-9xl text-blue-50
              special-font px-0 max-sm:text-7xl
            "
          >
            See You At Work !
          </p>
        </div>
      </div>
      <div className="bento">
        <div
          className="
            border-hsla relative mb-7 h-96 w-full
            overflow-hidden rounded-md md:h-[65vh]
          "
        >
           <BentoCard
              src="videos/feature-1.mp4"
              title={<>UI Design</>}
              description="I use tools like Figma, Spline and Blender for Design and Animation"
            />
          
        </div>

        <div className="
            grid md:h-[135vh] grid-cols-1 md:grid-cols-2 grid-rows-3 gap-7
        ">
            
          <div
            className="
              bento-tilt_1 row-span-1 md:col-span-1
              md:row-span-2 max-sm:h-96 max-sm:grid-cols-1
              
            "
          >
            
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>Responsive Design and Mordern UI</>}
              description=""
            />
          </div>
          

          <div
            className="              bento-tilt_1 row-span-1 md:col-span-1
              md:row-span-2 max-sm:h-96 max-sm:grid-cols-1
 "
          >
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>AI and ML</>}
              description="Boo! AI will take over the World, so we better take over AI shall we?"
            />
          </div>


          <div
            className="
              bento-tilt_1  row-span-1 ms-32
              md:col-span-2 md:ms-0       
            "
          >
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>Lets Explore !</>}
              description="shall we?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
