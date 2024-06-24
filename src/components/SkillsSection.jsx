import React from "react";
import { motion } from "framer-motion";
import { slideAnimation } from "../motion";
import numbox from "../assets/numbox.png";

const skills = [
  { name: "Java", level: 80 },
  { name: "Python", level: 80 },
  { name: "C/C++", level: 80 },
  { name: "HTML/CSS", level: 70 },
  { name: "JS/Typescript/React", level: 60 },
];

const SkillsSection = () => {
  return (
    <motion.div
      className="flex flex-col w-full px-20"
      {...slideAnimation("right")}
    >
      <h2 className="text-3xl font-bold p-heebo tracking-widest mb-6">
        SKILLS
      </h2>
      <p
        className="p-inika text-lg font-medium mb-10"
        style={{
          color: "rgba(0, 0, 0, 0.52)",
        }}
      >
        I am a strong learner and can adapt quickly to new challenges. I am
        strong with computer science and the foundations of engineering; I
        understand what it takes to solve a problem. Below are highlights of my
        technical skills:
      </p>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-8 relative">
          <div className="flex justify-between mb-1">
            <span className="p-heebo font-semibold tracking-widest">
              {skill.name}
            </span>
          </div>
          <div className="flex w-full h-2.5 rounded relative">
            <div
              className="h-full rounded-l"
              style={{
                width: `${skill.level}%`,
                backgroundColor: "rgba(30, 30, 30, 0.43)",
              }}
            ></div>
            <div
              className="flex-grow h-full rounded-r"
              style={{ backgroundColor: "#1E1E1E" }}
            ></div>
            <div
              className="absolute top-[-46px]"
              style={{
                left: `calc(${skill.level}% - 24px)`,
                // 24px half of image width
              }}
            >
              <img
                src={numbox}
                alt={`${skill.level}%`}
                className="flex items-center justify-center"
                style={{
                  height: "51px",
                  width: "48px",
                }}
              />
              <span className="p-heebo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-xs font-bold">
                {skill.level}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SkillsSection;
