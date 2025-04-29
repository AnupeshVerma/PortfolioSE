import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";
import { FaExternalLinkAlt } from "react-icons/fa";

import hackSquadLogo from "../assets/Awards/HackSquad/hacksquad2022.jpg";
import hackSquadGoodies from "../assets/Awards/HackSquad/hacksqaud2022Goodies.jpeg";
import hackSquadLeader from "../assets/Awards/HackSquad/HackSquadLeaderboard.jpeg";

import devElevateLogo from "../assets/Awards/DevElevate/DevElevateLogo.jpg";
import devElevateWin from "../assets/Awards/DevElevate/DevElevateWinner.jpg";

function Awards() {
  const { ref, mainControls, slideControls } = useAnimationInView();

  const awardData = [
    {
      id: 1,
      title: "14th Global Rank in Hacksquad 2022",
      images: [hackSquadLogo, hackSquadGoodies, hackSquadLeader],
      link: "https://www.linkedin.com/posts/anupeshverma_hacksquad-hacksquadabr2022-opensource-activity-6997575065181540352-TzBp",
      description:
        "A team event for contribution in open source projects on GitHub.",
    },
    {
      id: 2,
      title: "DevElevate Platinum Winner",
      images: [devElevateLogo, devElevateWin],
      link: "https://www.showwcase.com/article/25364/dev-elevate-platinum-winners",
      description: "A blog writing competion organized by Showwcase",
    },
  ];

  return (
    <div
      name="awards"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full pt-16"
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
            animate={slideControls}
            transition={{ duration: 1 }}
          >
            Awards
          </motion.p>
          <p className="py-6">A Journey of Success and Achievement</p>
        </div>
        <div className="mainContent flex flex-col items-center" ref={ref}>
          {awardData.map((award) => (
            <motion.div
              key={award.id}
              className={`w-full mt-4 shadow-sm shadow-sky-500 rounded-md flex flex-col md:flex-row py-6 gap-y-4 sm:gap-y-12 justify-evenly items-center ${
                award.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              variants={
                award.id % 2 === 0
                  ? {
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }
                  : {
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }
              }
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Carousel images={award.images} />
              <div className="content text-center ">
                <p className="px-3 text-lg md:text-2xl font-semibold">
                  {award.title}
                </p>
                <p className="px-3 text-sm text-gray-400">
                  {award.description}
                </p>
                <br />
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border p-2 rounded-md shadow-md shadow-sky-600 text-center text-xs"
                >
                  Know more...&nbsp; <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
