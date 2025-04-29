import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { FcHome } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { FcVoicePresentation } from "react-icons/fc";

const NavBar = () => {
  const links = [
    // Navigate according to the name given during function return
    { id: 1, link: "home", icon: <FcHome size={30} /> },
    { id: 2, link: "experience", icon: <FcBusiness size={30} /> },
    // { id: 2, link: "education", icon: <FcLibrary size={30} /> },
    // { id: 3, link: "projects", icon: <GoProjectSymlink size={30} /> },
    { id: 4, link: "awards", icon: <GoProjectSymlink size={30} /> },
    { id: 5, link: "skills", icon: <GiSkills size={30} /> },
    { id: 6, link: "contact", icon: <FcVoicePresentation size={30} /> },
  ];

  return (
    <div>
      <div className="flex  justify-between items-center w-full h-16 text-white bg-black fixed px-4 z-10">
        <div>
          <h1 className="font-signature text-5xl">Anupesh</h1>
        </div>

        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <motion.div
          id="resumeMobileView"
          className="md:hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button className="px-2 py-1 font-bold shadow-sm shadow-blue-500 rounded-sm">
            <a href="https://drive.google.com/file/d/1WzSwm9ztfZEup4NHN9gtIhfNvNpKLdaw/view?usp=drive_link">
              My Resume
            </a>
          </button>
        </motion.div>
      </div>

      <motion.div
        id="bottomBar"
        className="z-50 md:hidden bottom-0 w-full bg-gray-800 fixed"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <ul className="list-none flex w-full justify-evenly text-white">
          {links.map(({ id, icon, link }) => (
            <li key={id} className={"py-2 rounded-full text-cyan-500 text-xs capitalize"}>
            <Link to={link} smooth duration={500}>
                <span className="flex flex-col items-center">{icon}{link}</span>
              </Link>
                
              
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
