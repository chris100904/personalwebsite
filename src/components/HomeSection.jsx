import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeBackground from "../assets/homebackground.jpg";
import headshot from "../assets/headshot.jpg";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import SkillsSection from "./SkillsSection";
import { slideAnimation } from "../motion";
import "../index.css";
import NextPage from "./NextPage";

const HomeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative z-0"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          mixBlendMode: "lighten",
          background: "#E6E2E2",
          zIndex: -1,
        }}
      ></div>
      {/* <section
        id="home"
        data-bgcolor="home-color"
        className="min-h-screen flex flex-col items-center pt-20 relative z-0"
      >
        hi
      </section> */}
      <section
        id="home"
        data-bgcolor="home-color"
        className="min-h-screen flex flex-col items-center pt-20 relative z-0"
      >
        <div
          className="flex flex-col relative z-10 gap-8 pb-4"
          style={{
            transition: "filter 0.1s ease-out",
          }}
        >
          <div className="relative z-10 pt-20 flex flex-col md:flex-row px-4 md:px-10">
            {/* Left Section */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 gap-6 md:gap-12 border-r border-black px-4 md:px-10"
              {...slideAnimation("left")}
            >
              <h1 className="h1-christopher-chen w-1/2">Christopher Chen</h1>
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <img
                  src={headshot}
                  alt="headshot of me"
                  className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-gray-500 shadow-lg"
                />
                <p className="p-inika text-base md:text-lg font-medium w-full md:w-1/2 text-black/80">
                  Hi, welcome to my personal website! I'm a junior at Brown University studying Computer Science and
                  Applied Mathematics. My interests currently lie in software engineering, AI, and data science, but I'm
                  always open to exploring more fields as I grow!
                </p>
              </div>
              <div className="flex gap-4 md:gap-8">
                <a href="https://github.com/chris100904">
                  <img className="hover-effect sm:w-8 sm:h-8 md:w-16 md:h-16" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/christopher-chen-236323234/">
                  <img className="hover-effect sm:w-8 sm:h-8 md:w-16 md:h-16" src={linkedin} alt="linkedin" />
                </a>
                <a href="mailto:christopher.chen.1004@gmail.com">
                  <img className="hover-effect sm:w-8 sm:h-8 md:w-16 md:h-16" src={email} alt="email" />
                </a>
              </div>
            </motion.div>
            {/* Right Section */}
            <div className="flex-1 mt-8 md:mt-0">
              <SkillsSection />
            </div>
          </div>
          <NextPage href="#resume" isBrightBackground={false} />
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
