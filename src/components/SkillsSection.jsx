import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../motion";
import numbox from "../assets/numbox.png";

const skills = [
  { name: "Python", level: 80, category: "Languages"},
  { name: "JS/Typescript/React", level: 80, category: "Frontend"},
  { name: "Java", level: 70, category: "Languages"},
  { name: "C/C++", level: 60, category: "Languages"},
  { name: "Rust", level: 60, category: "Languages"},
  { name: "Go", level: 50, category: "Languages"},
  { name: "SQL", level: 50, category: "Database"},
  { name: "Dart", level: 60, category: "Mobile"},
];

const SkillsSection = () => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills((prevShowSkills) => !prevShowSkills);
  };

  return (
    <motion.div className="flex flex-col w-full px-10 py-8" {...slideAnimation("right")}>
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold p-heebo tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SKILLS
        </h2>
      </div>
      <AnimatePresence>
        <motion.div
          key="skillsContent"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 0.1 },
            },
          }}
        >
          <motion.p
            className="p-heebo text-lg font-medium mb-12 text-gray-700 leading-relaxed"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            I am a quick learner who can adapt rapidly to new challenges. With a solid foundation in computer science
            and engineering principles, I know what it takes to solve complex problems. Below are highlights of my
            technical skills/language proficiency:
          </motion.p>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="p-heebo font-bold text-lg text-gray-800">{skill.name}</h3>
                      <span className="text-sm text-gray-500 font-medium">{skill.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-800">{skill.level}</span>
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <motion.div
                    className="absolute -top-1 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md"
                    initial={{ left: "0%" }}
                    animate={{ left: `calc(${skill.level}% - 8px)` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsSection;
