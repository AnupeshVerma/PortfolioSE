import React, { useEffect } from "react";
import heroImage from "../assets/heroImage.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.title = "Anupesh's Portfolio";
  }, []);

  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={35} />,
      href: "https://www.linkedin.com/in/AnupeshVerma/",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={35} />,
      href: "https://github.com/anupeshverma",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram size={35} />,
      href: "https://www.instagram.com/anupesh_verma/",
    },
    {
      id: 4,
      name: "Mail",
      icon: <HiOutlineMail size={35} />,
      href: "mailto:Anupeshkverma121@gmail.com",
    },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-evenly h-full pt-10 px-4 ">
        <motion.div
          id="sideText"
          className="md:w-1/2 flex flex-col justify-center md:h-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-4xl sm:text-6xl font-bold text-white">
            Hey, I'm Anupesh
            <br />
          </h3>
          <div className="text-white my-2 text-2xl md:text-3xl">
            I'm a
            <span className="text-cyan-500">
              <Typewriter
                words={[" Full Stack Developer", " Software Engineer"]}
                loop={20}
                cursor
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
          </div>
          <p className="text-gray-500 py-2 text-justify max-w-md">
            From algorithms to dazzling web experiences: Anupesh here, a
            software developer passionate about bringing innovative ideas to
            life, turning your vision into reality.
          </p>

          <motion.div
            id="connectLinks"
            className="md:hidden mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <ul className="list-none flex">
              {links.map(({ id, name, icon, href }) => (
                <li
                  key={id}
                  className={"mx-2 p-2 rounded-full duration-300 bg-gray-900 "}
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white hover:bg-cyan-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <div id="heroImage" className="md:w-1/2">
          <motion.img
            src={heroImage}
            alt="myProfile"
            className="rounded-2xl mx-auto md:w-3/4"
            initial={{ opacity: 0, x: "25vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
