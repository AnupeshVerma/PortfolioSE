import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/AnupeshVerma/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/anupeshverma",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:Anupeshkverma121@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      style: "rounded-br-md",
      href: "https://drive.google.com/file/d/1WzSwm9ztfZEup4NHN9gtIhfNvNpKLdaw/view?usp=drive_link",
    },
  ];

  return (
    <div className="z-50">
      <motion.div
        className="hidden md:flex flex-col top-[35%] left-0 fixed"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <ul>
          {links.map(({ id, name, icon, href, style }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {name} {icon}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
};

export default SocialLinks;
