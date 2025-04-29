import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

const Contact = () => {
  const { ref, mainControls} = useAnimationInView();
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black  text-white px-4 md:pt-20 py-16 md:py-4"
    >
      <div className="flex flex-col px-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <motion.p
            ref={ref}
            className="pt-6"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Submit the form below to get in touch with me
          </motion.p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7d2cbbe5-ab81-403a-9f1a-e381a9efe054"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <motion.input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.3, duration: 1 }}
            />
            <motion.input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.3, duration: 1 }}
            />
            <motion.textarea
              required
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.3, duration: 1 }}
            ></motion.textarea>

            <motion.button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Let's talk
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
