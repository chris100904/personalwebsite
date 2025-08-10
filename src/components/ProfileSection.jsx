import React from "react";
import { motion } from "framer-motion";

const ProfileSection = () => {
  const profileData = [
    { label: "FULL NAME", value: "Christopher Chen" },
    { label: "BIRTH DATE", value: "October 9, 2004" },
    { label: "EMAIL", value: "christopher.chen.1004@gmail.com" },
    { label: "UNIVERSITY", value: "christopher_chen3@brown.edu" },
  ];

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold p-heebo tracking-widest mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        PROFILE
      </h2>
      <div className="space-y-6">
        {profileData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="text-sm font-bold tracking-wider text-gray-500 uppercase min-w-[120px]">
              {item.label}:
            </span>
            <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-300">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileSection;
