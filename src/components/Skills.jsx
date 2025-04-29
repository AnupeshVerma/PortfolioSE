import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

import c_img from "../assets/Skills/C.png";
import cpp_img from "../assets/Skills/cpp.png";
import java_img from "../assets/Skills/java.png";
import sql_img from "../assets/Skills/sql.png";

import html_img from "../assets/Skills/html.png";
import css_img from "../assets/Skills/css.png";
import tailwind_img from "../assets/Skills/tailwind.png";
import javascript_img from "../assets/Skills/javascript.png";
import django_img from "../assets/Skills/django.png";
import react_img from "../assets/Skills/react.png";
import springboot_img from "../assets/Skills/springboot.png";

import postgresql_img from "../assets/Skills/postgresql.png";
import mongodb_img from "../assets/Skills/mongodb.png";
import cassandra_img from "../assets/Skills/cassandra.png";

import jira_img from "../assets/Skills/jira.png";
import docker_img from "../assets/Skills/docker.png";
import pandas_img from "../assets/Skills/pandas.png";
import aws_img from "../assets/Skills/aws.png";
import git_img from "../assets/Skills/git.png"
import github_img from "../assets/Skills/github.png";
import gitlab_img from "../assets/Skills/gitlab.png"
import opencv_img from "../assets/Skills/opencv.png";

const Skills = () => {
  // Categorize the tech stack
  const programmingLanguages = [
    {
      skill_id: 1,
      img_src: c_img,
      skill_title: "C",
      style: "shadow-blue-500",
    },
    {
      skill_id: 2,
      img_src: cpp_img,
      skill_title: "C++",
      style: "shadow-blue-500",
    },
    {
      skill_id: 3,
      img_src: java_img,
      skill_title: "Java",
      style: "shadow-sky-800",
    },
    {
      skill_id: 4,
      img_src: sql_img,
      skill_title: "SQL",
      style: "shadow-blue-600",
    },
  ];

  const webDevelopment = [
    {
      skill_id: 1,
      img_src: html_img,
      skill_title: "HTML",
      style: "shadow-orange-500",
    },
    {
      skill_id: 2,
      img_src: css_img,
      skill_title: "CSS",
      style: "shadow-blue-500",
    },
    {
      skill_id: 3,
      img_src: tailwind_img,
      skill_title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      skill_id: 4,
      img_src: javascript_img,
      skill_title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      skill_id: 5,
      img_src: django_img,
      skill_title: "Django",
      style: "shadow-green-500",
    },
    {
      skill_id: 6,
      img_src: react_img,
      skill_title: "React",
      style: "shadow-blue-600",
    },
    {
      skill_id: 7,
      img_src: springboot_img,
      skill_title: "SpringBoot",
      style: "shadow-lime-600",
    }
  ];

  const databases = [
    {
      skill_id: 1,
      img_src: postgresql_img,
      skill_title: "PostgreSQL",
      style: "shadow-sky-700",
    },
    {
      skill_id: 2,
      img_src: mongodb_img,
      skill_title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      skill_id: 3,
      img_src: cassandra_img,
      skill_title: "Cassandra",
      style: "shadow-sky-600",
    },
  ];

  const developerTools = [
    {
      skill_id: 1,
      img_src: jira_img,
      skill_title: "Jira",
      style: "shadow-blue-700",
    },
    {
      skill_id: 2,
      img_src: docker_img,
      skill_title: "Docker",
      style: "shadow-sky-600",
    },
    {
      skill_id: 3,
      img_src: pandas_img,
      skill_title: "Pandas",
      style: "shadow-indigo-900",
    },
    {
      skill_id: 4,
      img_src: aws_img,
      skill_title: "AWS",
      style: "shadow-gray-700",
    },
    {
      skill_id: 5,
      img_src: git_img,
      skill_title: "Git",
      style: "shadow-orange-600",
    },
    {
      skill_id: 6,
      img_src: github_img,
      skill_title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      skill_id: 7,
      img_src: gitlab_img,
      skill_title: "Gitlab",
      style: "shadow-yellow-800",
    },
    {
      skill_id: 8,
      img_src: opencv_img,
      skill_title: "OpenCV",
      style: "shadow-gray-400",
    },
  ];

  const { ref, mainControls } = useAnimationInView();

  const renderTechs = (techArray) => {
    return techArray.map(({ skill_id, img_src, skill_title, style }) => (
      <motion.div
        key={skill_id}
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
        variants={
          skill_id % 3 === 1
            ? {
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }
            : skill_id % 3 === 2
              ? {
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }
              : {
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }
        }
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={img_src} alt={skill_title} className="w-20 mx-auto" />
        <p className="mt-4">{skill_title}</p>
      </motion.div>
    ));
  };

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white" ref={ref}>
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        {/* Programming Languages */}
        <div className="my-8">
          <p className="text-2xl font-semibold">Programming Languages</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
            {renderTechs(programmingLanguages)}
          </div>
        </div>

        {/* Web Development */}
        <div className="my-8">
          <p className="text-2xl font-semibold">Web Development</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
            {renderTechs(webDevelopment)}
          </div>
        </div>

        {/* Databases */}
        <div className="my-8">
          <p className="text-2xl font-semibold">Databases</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
            {renderTechs(databases)}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="my-8">
          <p className="text-2xl font-semibold">Developer Tools</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0" >
            {renderTechs(developerTools)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
