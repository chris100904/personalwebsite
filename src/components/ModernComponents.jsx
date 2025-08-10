import React from "react";
import { motion } from "framer-motion";

const CallToAction = ({ title, description, buttonText, buttonLink, variant = "primary" }) => {
  const variants = {
    primary: {
      bg: "bg-gradient-to-r from-blue-600 to-purple-600",
      text: "text-white",
      button: "bg-white text-blue-600 hover:bg-gray-100",
    },
    secondary: {
      bg: "bg-gradient-to-r from-gray-800 to-gray-900",
      text: "text-white",
      button: "bg-white text-gray-800 hover:bg-gray-100",
    },
    accent: {
      bg: "bg-gradient-to-r from-green-500 to-blue-500",
      text: "text-white",
      button: "bg-white text-green-600 hover:bg-gray-100",
    },
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-8 md:p-12 ${currentVariant.bg} ${currentVariant.text}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
        <motion.a
          href={buttonLink}
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${currentVariant.button}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const StatsCard = ({ number, label, suffix = "" }) => {
  return (
    <motion.div
      className="text-center p-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {number}
        {suffix}
      </motion.div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

export { CallToAction, FeatureCard, StatsCard };
