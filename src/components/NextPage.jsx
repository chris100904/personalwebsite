import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { slideAnimation } from "../motion";

const NextPage = ({ href, marginTop, isBrightBackground, isUpsideDown }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const size = isSmallScreen ? 8 : 12;

  return (
    <motion.div className="flex justify-center" {...slideAnimation("up")} style={{ marginTop: marginTop }}>
      <motion.a href={href} className="group relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div
          className={`w-${size} h-${size} rounded-full bg-white/20 backdrop-blur-sm border-2 ${
            isBrightBackground ? "border-gray-400" : "border-white"
          } flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
        >
          <motion.svg
            className={`w-6 h-6 ${isBrightBackground ? "text-gray-600" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: isUpsideDown ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>

        {/* Ripple effect */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 ${
            isBrightBackground ? "border-gray-400" : "border-white"
          }`}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.a>
    </motion.div>
  );
};

NextPage.propTypes = {
  href: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  isBrightBackground: PropTypes.bool.isRequired,
  isUpsideDown: PropTypes.bool,
};

export default NextPage;
