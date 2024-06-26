import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import downarrow from "../assets/downarrow.png";
import downbutton from "../assets/downbutton.png";
import { slideAnimation } from "../motion";

const NextPage = ({ href, marginTop, isBrightBackground }) => {
  const iconSrc = isBrightBackground ? downarrow : downbutton;

  return (
    <motion.div
      className="flex justify-center"
      {...slideAnimation("up")}
      style={{ marginTop: marginTop }}
    >
      <a href={href} className="hover-effect">
        <img
          src={iconSrc}
          alt="down icon"
          style={{
            width: isBrightBackground ? "35px" : "50px",
            height: isBrightBackground ? "30px" : "50px",
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
};

export default NextPage;
