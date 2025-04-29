
import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

import hotelTransylvania from "../assets/projects/HotelTransylvania.png";
import electronicsSociety from "../assets/projects/ElectronicsSociety.png";
import SmartStreetLight from "../assets/projects/SmartStreetLight.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hotel Transylvania",
      img_src: hotelTransylvania,
      live_link: "https://anupeshverma.pythonanywhere.com/",
      repo_link: "https://github.com/anupeshverma/Hotel-Transylvania-Django",
      techStack: "HTML, CSS, JavaScript, Tailwind, Django",
    },
    {
      id: 2,
      title: "Electronics Society",
      img_src: electronicsSociety,
      repo_link: "https://github.com/Electronics-Society-MNNIT/ECE-Society",
      techStack: "HTML, CSS, JavaScript, Tailwind, Django",
    },
    {
      id: 3,
      title: "Smart Street Light",
      img_src: SmartStreetLight,
      repo_link: "https://github.com/anupeshverma/Smart_Street_Light",
      techStack: "Python, NumPy, OpenCV, YOLO",
    },
  ];
  const { ref, mainControls } = useAnimationInView();
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.25, ease: "easeIn" }}
        >
          {projects.map(({ id, title, img_src, live_link, repo_link, techStack }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg pt-2 pb-5"
            >
              <a href={live_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img_src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />

              </a>
              <div className=" w-full flex flex-col items-center justify-center text-center">
                <a
                  href={repo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" px-6 py-2 m-4 duration-200 hover:scale-105 rounded-md shadow-md shadow-blue-600"
                >
                  Code
                </a>
                <div id="techStack" className="m-2 p-2text-lg font-bold">
                  Tech Stack:{" "}
                </div>
                <div id="techStacks" className="mx-2">
                  {techStack}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
