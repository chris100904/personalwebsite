import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeBackground from "../assets/homebackground.jpg";
import headshot from "../assets/headshot.jpg";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import SkillsSection from "./SkillsSection";
import { slideAnimation } from "../motion";
import ProfileSection from "./ProfileSection";
import "../index.css";
import NextPage from "./NextPage";

const HomeSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showFunFacts, setShowFunFacts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeIn" } },
  };

  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center relative z-0"
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
      <section
        id="home"
        data-bgcolor="home-color"
        className="min-h-screen flex flex-col items-center pt-20 relative z-0"
      >
        <div className="flex flex-col items-center ">
          <div className="absolute top-1/3 flex flex-col items-center">
            {/* Container for Christopher Chen and Icons */}
            <motion.div
              className="flex flex-col items-center gap-10"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
            >
              <h1 className="text-center text-5xl sm:text-8xl font-karla">Christopher Chen</h1>
              <div className="flex gap-4 sm:gap-8">
                <a href="https://github.com/chris100904">
                  <img className="hover-effect h-10 w-10 sm:h-16 sm:w-16" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/christopher-chen-236323234/">
                  <img className="hover-effect h-10 w-10 sm:h-16 sm:w-16" src={linkedin} alt="linkedin" />
                </a>
                <a href="mailto:christopher.chen.1004@gmail.com">
                  <img className="hover-effect h-10 w-10 sm:h-16 sm:w-16" src={email} alt="email" />
                </a>
              </div>
            </motion.div>
            {/* Container for Next Button */}
            <div className="mt-36">
              {/* Adjust the margin top to control the gap */}
              <NextPage href="#about" isBrightBackground={false} />
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        data-bgcolor="home-color"
        className="min-h-screen flex flex-col items-center pt-20 relative z-0"
      >
        <div
          className="flex flex-col relative z-10 gap-8 pb-4"
          style={{
            transition: "filter 0.1s ease-out",
          }}
        >
          <div className="relative z-10 flex flex-col md:flex-row px-4 md:px-10">
            {/* Left Section */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 gap-6 md:border-solid md:gap-12 border-none md:border-r md:border-black px-4 md:px-10 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              {/* <h1 className="h1-christopher-chen w-1/2">Christopher Chen</h1> */}
              <div className="flex flex-wrap gap-10">
                <img
                  src={headshot}
                  alt="headshot of me"
                  className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-gray-500 shadow-lg"
                />
                <ProfileSection />
              </div>
              <p className="px-4 p-heebo text-base md:text-lg w-full text-black/80 mt-4">
                Hi, welcome to my personal website! I'm a junior at Brown University studying{" "}
                <b>Computer Science and Applied Mathematics</b>. My interests currently lie in software engineering, AI,
                and data science, but I'm always open to exploring more fields as I grow!
                <br></br>
                <br></br>
                {/* <button
                  className="text-black/80 hover-effect cursor-pointer"
                  onClick={() => setShowFunFacts(!showFunFacts)}
                >
                  Fun Facts
                </button> */}
                <div className="flex flex-row items-center">
                  <div className="font-bold tracking-wider">FUN FACTS</div>
                  <button
                    onClick={() => setShowFunFacts((prevShowFunFacts) => !prevShowFunFacts)}
                    className="px-4 flex hover-effect"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`size-6 transition-transform duration-200 ${
                        showFunFacts ? "rotate-180" : ""
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showFunFacts ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col list-disc ml-6 mt-2 gap-2"
                >
                  <li>I've played the piano for over 10 years and still continue to study it in college through Brown's Applied Music Program and chamber music opportunities</li>
                  <li>I am an avid language learner! I currently take elective classes in Korean and have previously studied Chinese and Spanish to an intermediate-advanced level as well</li>
                  <li>I have a somewhat chronic left wrist injury from ringing a 15lb handbell with wrong technique in 8th grade (<em>yes</em>, my middle school had a selective handbell choir; <em>yes</em>, handbells as in the Christmas handbells, but even cooler)</li>
                </motion.ul>
                {/* In my free time, I like to spend time on some (possibly generic...) hobbies like: playing piano, working
                out, and learning new languages. I'm an avid pianist and have been studying since the age of 9. At
                Brown, I take advantage of their chamber music elective to play lots of challenging and exciting pieces
                with my other musician friends! You can click here to see some recordings of my performances! I also
                used to compose, but that was back in middle school... ask me about that if you're really interested,
                haha.
                <br></br>
                <br></br>I also really like learning languages. I started self-studying Korean when I was in high
                school, and now I take classes in Korean at Brown. It's really nice being able to talk with my friends
                in their native languages, and it really helps broaden my perspective on linguistics. Korean is sort of
                like my cool party trick; I've tricked so many people into thinking I'm a Korean American who just
                happens to have bad vocab! Besides Korean, I want to continue progressing with Mandarin, and also learn
                some of my family dialects in Chinese: Fuzhou dialect and Taiwanese Hokkien. */}
              </p>
            </motion.div>
            {/* Right Section */}
            <motion.div
              className="flex-1 mt-8 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <SkillsSection />
            </motion.div>
          </div>
          <NextPage href="#resume" isBrightBackground={false} />
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
