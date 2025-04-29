import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

const About = () => {
  const { ref, mainControls, slideControls } = useAnimationInView();

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-4 pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            About
          </motion.p>
        </div>

        <motion.p
          className=" relative text-xl mt-12 leading-8 text-justify"
          ref={ref}
          variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        >
          My journey began with the hum of circuits for{" "}
          <strong> Electronics and Communication Engineer</strong>, blossomed
          into the clickety-clack of code. I’m Anupesh Kumar Verma, now
          channeling my expertise as a <strong>Software Engineer</strong> at{" "}
          <strong>Personify Health.</strong>
          <motion.div
            className="bg-gradient-to-br from bg-gray-600 to-gray-900 absolute top-1 bottom-1 left-0 right-0 z-2 rounded-sm"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
          ></motion.div>
        </motion.p>

        <br />

        <motion.p
          className="relative text-xl leading-8 text-justify"
          variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        >
          After honing my backend and automation skills as a{" "}
          <strong>Python Developer Intern</strong> at{" "}
          <strong>EduGorilla</strong>, I now specialize in designing and
          implementing scalable backend systems using Spring Boot and managing
          high-performance databases with Cassandra. My work focuses on building
          robust, scalable services and optimizing data storage and retrieval
          processes to ensure seamless performance and reliability.
          <motion.div
            className="bg-gradient-to-br from bg-gray-600 to-gray-900 absolute top-1 bottom-1 left-0 right-0 z-2 rounded-sm"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.25, delay: 0.5, ease: "easeIn" }}
          ></motion.div>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
