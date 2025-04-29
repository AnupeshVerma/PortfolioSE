import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useAnimationInView from "../customHooks/useAnimationInView";
import { ReactComponent as WorkIcon } from "../assets/work.svg";

function Experience() {
  const { ref, mainControls } = useAnimationInView();

  const experienceData = [
    {
      id: 2,
      title: "Software Engineer",
      company: "Personify Health",
      location: "Noida, Uttar Pradesh",
      duration: "Jan 2025 - Present",
      description:
        "Designed and developed scalable backend services using Spring Boot. Implemented efficient data storage and retrieval solutions with Cassandra. Collaborated with cross-functional teams to integrate APIs and resolve client-facing issues.",
    },
    {
      id: 1,
      title: "Python Developer Intern",
      company: "EduGorilla",
      location: "Lucknow, Uttar Pradesh",
      duration: "Aug 2024 - Dec 2024",
      description:
        "Developed an automation feature using BlueStacks and ADB, implemented a Progressive Web App (PWA) for instant app installation, and contributed to backend development for scalable server-side logic.",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="heading">
          <motion.p
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            Experience
          </motion.p>
          <p className="py-6"> </p>
        </div>
        <div className="min-h-screen py-10 text-justify" ref={ref}>
          <VerticalTimeline>
            {experienceData.map((experience) => (
              <VerticalTimelineElement
                className="experience-element"
                contentStyle={{ background: "transparent", color: "white" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date={experience.duration}
                iconStyle={{ background: "#138781" }}
                icon={<WorkIcon />}
              >
                <h1 className="experience-title font-semibold text-xl">
                  {experience.title}
                </h1>
                <h4 className="experience-company font-semibold">
                  {experience.company}
                </h4>
                <h4 className="experience-location">{experience.location}</h4>
                <h6 className="experience-description text-gray-400 text-sm">
                  {experience.description}
                </h6>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
