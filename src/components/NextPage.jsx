import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import downbutton from "../assets/downbutton.png";
import { slideAnimation } from "../motion";

const NextPage = ({ href }) => {
  return (
    <motion.div className="flex justify-center mt-40" {...slideAnimation("up")}>
      <a href={href} className="hover-effect">
        <img
          src={downbutton}
          alt="down button"
          style={{ width: "50px", height: "50px" }}
          className="z-20"
        />
      </a>
    </motion.div>
  );
};

NextPage.propTypes = {
  href: PropTypes.string.isRequired,
};

export default NextPage;
