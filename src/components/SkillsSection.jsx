import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../motion";
import numbox from "../assets/numbox.png";

const skills = [
  { name: "Python", level: 80 },
  { name: "JS/Typescript/React", level: 80 },
  // { name: "HTML/CSS", level: 80 },
  { name: "Java", level: 70 },
  { name: "C/C++", level: 60 },
  { name: "Rust", level: 60 },
  { name: "Go", level: 50},
  { name: "SQL", level: 50 },
  { name: "Dart", level: 60 },
];

const SkillsSection = () => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills((prevShowSkills) => !prevShowSkills);
  };

  return (
    <motion.div className="flex flex-col w-full px-10" {...slideAnimation("right")}>
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-bold p-heebo tracking-widest flex">SKILLS</h2>
        {/* <button onClick={toggleSkills} className="px-4 flex hover-effect">
          <img
            src={downarrow}
            alt="toggle skills"
            className={`transition-transform duration-300 ${
              showSkills ? "rotate-180" : ""
            }`}
            style={{ width: "15px", height: "15px" }}
          />
        </button> */}
      </div>
      <AnimatePresence>
        {/* {showSkills && ( */}
        <motion.div
          key="skillsContent"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
        >
          <p className="p-heebo text-lg font-medium mb-10 text-black/80">
            I am a quick learner who can adapt rapidly to new challenges. With a solid foundation in computer science
            and engineering principles, I know what it takes to solve complex problems. Below are highlights of my
            technical skills/language proficiency:
          </p>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-8 relative">
              <div className="flex justify-between mb-1">
                <span className="p-heebo font-semibold tracking-widest">{skill.name}</span>
              </div>
              <div className="flex w-full h-2.5 rounded relative">
                <div
                  className="h-full rounded-l"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: "#1E1E1E",
                  }}
                ></div>
                <div className="flex-grow h-full rounded-r" style={{ backgroundColor: "rgba(30, 30, 30, 0.43)" }}></div>
                <div className="absolute top-[-46px]" style={{ left: `calc(${skill.level}% - 24px)` }}>
                  <img
                    src={numbox}
                    alt={`${skill.level}%`}
                    className="flex items-center justify-center"
                    style={{ height: "51px", width: "48px" }}
                  />
                  <span className="p-heebo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-xs font-bold">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsSection;
