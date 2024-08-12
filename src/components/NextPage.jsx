import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import downbutton from "../assets/downbutton.png";
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

  const imageSize = isSmallScreen ? { width: "30px", height: "30px" } : { width: "50px", height: "50px" };

  return (
    <motion.div
      className="flex justify-center"
      {...slideAnimation("up")}
      style={{ marginTop: marginTop }}
    >
      <a href={href} className="hover-effect">
        <img
          src={downbutton}
          alt="down icon"
          style={{
            ...imageSize,
            filter: isBrightBackground ? "invert(100%)" : "none",
            transform: isUpsideDown ? "rotate(180deg)" : "none",
          }}
          className="z-20"
        />
      </a>
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

