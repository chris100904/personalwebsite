import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeBackground from "../assets/homebackground.jpg";
import headshot from "../assets/headshot.jpeg";
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

  const blurAmount = Math.min(scrollY / 100, 5);

  return (
    <section
      id="home"
      data-bgcolor="home-color"
      className="min-h-screen bg-cover bg-center flex flex-col items-center pt-20 relative z-0"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          mixBlendMode: "lighten",
          background: "#E6E2E2",
          zIndex: 1, // Lower z-index for the overlay
        }}
      ></div>

      <div
        className="flex flex-col relative z-10"
        style={{
          filter: `blur(${blurAmount}px)`,
          transition: "filter 0.1s ease-out",
        }}
      >
        {/* Higher z-index for the main content */}
        <div className="relative z-10 pt-20 flex flex-row px-10">
          {/* Left Section */}
          <motion.div
            className="flex flex-col w-1/2 gap-12 border-r border-black px-10"
            {...slideAnimation("left")}
          >
            <h1 className="h1-christopher-chen w-1/2">Christopher Chen</h1>
            <div className="flex flex-row gap-10">
              <img
                src={headshot}
                alt="headshot of me"
                className="flex rounded-full"
                style={{
                  width: "220px",
                  height: "220px",
                  objectFit: "cover",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
              />
              <p
                className="flex text-xl p-bio items-center w-full"
                style={{
                  color: "rgba(0, 0, 0, 0.52)",
                }}
              >
                Hi, welcome to my personal website! I'm a current junior at
                Brown University studying Computer Science and Applied
                Mathematics. My primary interests are in software engineering,
                artificial intelligence, and data science, but I am open to
                exploring more fields in the future!
              </p>
            </div>
            <div className="flex flex-row gap-8">
              <a href="https://github.com/chris100904">
                <img
                  className="hover-effect"
                  src={github}
                  alt="github image"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/in/christopher-chen-236323234/">
                <img
                  className="hover-effect"
                  src={linkedin}
                  alt="linkedin image"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </a>
              <a href="mailto:christopher.chen.1004@gmail.com">
                <img
                  className="hover-effect"
                  src={email}
                  alt="email image"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </a>
            </div>
          </motion.div>
          {/* Right Section */}
          <div className="flex-1">
            <SkillsSection />
          </div>
        </div>
        <NextPage href="#resume" marginTop="100px" isBrightBackground={false} />
      </div>
    </section>
  );
};

export default HomeSection;
