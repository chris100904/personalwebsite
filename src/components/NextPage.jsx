import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import downbutton from "../assets/downbutton.png";
import { slideAnimation } from "../motion";

const NextPage = ({ href, marginTop, isBrightBackground }) => {
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
            width: "50px",
            height: "50px",
            filter: isBrightBackground ? "invert(100%)" : "none",
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
