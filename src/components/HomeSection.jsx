import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeBackground from "../assets/homebackground.jpg";
import headshot from "../assets/headshot.jpg";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import SkillsSection from "./SkillsSection";
import ProfileSection from "./ProfileSection";
import "../index.css";
import NextPage from "./NextPage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import x from "../assets/x.png";

const HomeSection = ({ toggleModal }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [pianoModalOpen, setPianoModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = [
    "https://www.youtube.com/embed/UxotXCfdUk0",
    "https://www.youtube.com/embed/9ZVV4Mgs5mo",
    "https://www.youtube.com/embed/n1W-JVt0M1I",
    "https://www.youtube.com/embed/KpuJpP3tFTs?si=1Kmj0Aw_5g3SM5h7&t=50",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    if (pianoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [pianoModalOpen]);

  const openModal = () => {
    setPianoModalOpen(true);
    toggleModal();
  };

  const closeModal = () => {
    setPianoModalOpen(false);
    toggleModal();
  };

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
            <div className="mt-36">
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
                <br />
                <br />
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
                      className={`size-6 transition-transform duration-200 ${showFunFacts ? "rotate-180" : ""}`}
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
                  <li>
                    I've played the piano for over 10 years and still continue to study it in college through Brown's
                    Applied Music Program and chamber music opportunities.
                    <a
                      className="px-1 text-blue-700 hover:text-blue-600 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal();
                      }}
                    >
                      Click here
                    </a>
                    if you want to see some recent recordings/performances!
                  </li>
                  <li>
                    I am an avid language learner! I currently take elective classes in Korean and have previously
                    studied Chinese and Spanish to an intermediate-advanced level as well
                  </li>
                  <li>
                    I have a somewhat chronic left wrist injury from ringing a 15lb handbell with wrong technique in 8th
                    grade (<em>yes</em>, my middle school had a selective handbell choir; <em>yes</em>, handbells as in
                    the Christmas handbells, but even cooler)
                  </li>
                </motion.ul>
              </p>
            </motion.div>
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
      {pianoModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => closeModal()}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-3xl mx-auto relative"
            onClick={(e) => e.stopPropagation()} // prevent the background overlay click event from bubbling up
          >
            <div className="h-8">
              <button onClick={() => closeModal()} className="absolute top-2 right-2 hover-close">
                <img src={x} alt="Close" className="w-8" />
              </button>
            </div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              dynamicHeight
              showArrows={true} // Show navigation arrows
              selectedItem={activeIndex} // Start with the active index
              swipeable={true} // Allow swipe for navigation
              onChange={(index) => setActiveIndex(index)} // When the video changes, set active index
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = {
                  cursor: "pointer",
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: isSelected ? "#000" : "#ccc",
                  margin: "0 6px",
                };
                return (
                  <span
                    style={{ ...defStyle }}
                    onClick={onClickHandler}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onClickHandler();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              {videos.map((videoSrc, index) => (
                <div key={index}>
                  <iframe
                    width="100%"
                    height="400"
                    src={activeIndex === index ? videoSrc : ""}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSection;
