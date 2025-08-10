import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import headshot from "../assets/headshot.jpg";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import NextPage from "./NextPage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import x from "../assets/x.png";

const HomeSection = ({ toggleModal }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [pianoModalOpen, setPianoModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const funFacts = [
    "I've played the piano for over 10 years and still continue to study it in college through Brown's Applied Music Program and chamber music opportunities.",
    "I am an avid language learner! I currently take elective classes in Korean and have previously studied Chinese and Spanish to an intermediate-advanced level as well.",
    "I have a somewhat chronic left wrist injury from ringing a 15lb handbell with wrong technique in 8th grade (yes, my middle school had a selective handbell choir; yes, handbells as in the Christmas handbells, but even cooler).",
  ];
  const videos = [
    "https://www.youtube.com/embed/UxotXCfdUk0",
    "https://www.youtube.com/embed/9ZVV4Mgs5mo",
    "https://www.youtube.com/embed/n1W-JVt0M1I",
    "https://www.youtube.com/embed/KpuJpP3tFTs?si=1Kmj0Aw_5g3SM5h7&t=50",
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

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

  // Typing animation effect
  useEffect(() => {
    const phrases = [
      "Hi, I'm Christopher.",
      "你好，我叫陈宗毅.",
      "안녕하세요, 저는 크리스입니다.",
      "Hola, me llamo Cristóbal.",
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let isPausing = false;

    const typeSpeed = 120;
    const deleteSpeed = 60;
    const pauseTime = 3000; // Pause for 2 seconds at the end of each phrase

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isPausing) {
        setTimeout(() => {
          isPausing = false;
          isDeleting = true;
          type();
        }, pauseTime);
        return;
      }

      if (isDeleting) {
        if (currentCharIndex > 0) {
          setTypedText(currentPhrase.slice(0, currentCharIndex - 1));
          currentCharIndex--;
          setTimeout(type, deleteSpeed);
        } else {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(type, 500); // Brief pause before typing next phrase
        }
      } else {
        if (currentCharIndex < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, currentCharIndex + 1));
          currentCharIndex++;
          setTimeout(type, typeSpeed);
        } else {
          isPausing = true;
          type();
        }
      }
    };

    const timer = setTimeout(type, 1000); // Start after 1 second

    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setPianoModalOpen(true);
    toggleModal();
  };

  const closeModal = () => {
    setPianoModalOpen(false);
    toggleModal();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-navy-900"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <section
        id="home"
        data-bgcolor="home-color"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 pt-20 sm:pt-16"
      >
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div variants={itemVariants} className="space-y-8 text-left">
              {/* Main heading */}
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  variants={itemVariants}
                >
                  {typedText}
                  <motion.span
                    className="inline-block w-1 bg-blue-400 ml-1 align-top"
                    style={{
                      height: "1em",
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.h1>
                <motion.p className="text-xl sm:text-2xl text-gray-300 font-light max-w-lg" variants={itemVariants}>
                  Applied Mathematics and Computer Science Student @ Brown University. Software Engineer with a passion
                  for building innovative solutions.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div className="grid grid-cols-3 gap-4 max-w-md" variants={itemVariants}>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">4+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">3+</div>
                  <div className="text-gray-400 text-sm">Years Coding</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div className="flex gap-4" variants={itemVariants}>
                {[
                  { href: "https://github.com/chris100904", icon: github, label: "GitHub" },
                  {
                    href: "https://www.linkedin.com/in/christopher-chen-236323234/",
                    icon: linkedin,
                    label: "LinkedIn",
                  },
                  { href: "mailto:christopher.chen.1004@gmail.com", icon: email, label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white hover:border-white hover:shadow-lg hover:shadow-white/25 transition-all duration-300 overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>

                    <img
                      src={social.icon}
                      alt={social.label}
                      className="relative z-10 w-6 h-6 group-hover:opacity-70 transition-all duration-300 group-hover:scale-105"
                    />

                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right content - Profile picture */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800 rounded-3xl rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-navy-600 rounded-3xl -rotate-6"></div>
                <img
                  src={headshot}
                  alt="Christopher Chen"
                  className="relative w-full h-full object-cover rounded-3xl border-4 border-white/20 shadow-2xl z-10"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Fun facts section */}
          <motion.div className="mt-16 lg:mt-24 mb-16 lg:mb-24" variants={itemVariants}>
            <motion.button
              onClick={() => setShowFunFacts(!showFunFacts)}
              className="mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showFunFacts ? "Hide" : "Show"} Fun Facts About Me
            </motion.button>

            <AnimatePresence>
              {showFunFacts && (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-white text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {index === 0 ? (
                        <p>
                          {fact}{" "}
                          <a
                            className="px-1 text-blue-400 hover:text-blue-300 cursor-pointer underline"
                            onClick={(e) => {
                              e.preventDefault();
                              openModal();
                            }}
                          >
                            Click here
                          </a>{" "}
                          to see some recent recordings/performances!
                        </p>
                      ) : (
                        <p>{fact}</p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Next page component */}
        <div className="absolute bottom-4 w-full">
          <NextPage href="#resume" isBrightBackground={false} />
        </div>
      </section>

      {/* Piano modal */}
      {pianoModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl mx-4 relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Piano Performances</h3>
                <motion.button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={x} alt="Close" className="w-6 h-6" />
                </motion.button>
              </div>
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                dynamicHeight
                showArrows={true}
                selectedItem={activeIndex}
                swipeable={true}
                onChange={(index) => setActiveIndex(index)}
              >
                {videos.map((videoSrc, index) => (
                  <div key={index} className="pb-4">
                    <iframe
                      width="100%"
                      height="400"
                      src={activeIndex === index ? videoSrc : ""}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HomeSection;
