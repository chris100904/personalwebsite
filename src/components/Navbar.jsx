import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isNavbarVisible }) => {
  const [bgColor, setBgColor] = useState("bg-gray-100");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = null;
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section;
        setActiveSection(section.id);
      }
    });

    if (currentSection) {
      setBgColor(currentSection.dataset.bgcolor);
    }
  };

  // Determine if current section has a light background
  const isLightBackground = () => {
    return activeSection === "resume" || activeSection === "projects" || activeSection === "contact" || scrollY > 50;
  };

  // Get text color based on background
  const getTextColor = () => {
    return isLightBackground() ? "text-gray-800" : "text-white";
  };

  // Get hover text color based on background
  const getHoverTextColor = () => {
    return isLightBackground() ? "hover:text-gray-600" : "hover:text-white";
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const navItems = [
    { href: "#home", label: "HOME", icon: "🏠" },
    { href: "#resume", label: "RESUME", icon: "📄" },
    { href: "#projects", label: "PROJECTS", icon: "💼" },
    { href: "#contact", label: "CONTACT", icon: "📧" },
  ];

  const renderNavLinks = () => {
    return navItems.map((item) => (
      <motion.a
        key={item.href}
        href={item.href}
        className={`relative px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 group block ${
          activeSection === item.href.slice(1)
            ? `bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg text-white`
            : isDropdownOpen
            ? `text-gray-800 hover:text-gray-700 hover:bg-blue-500/10`
            : `${getTextColor()} ${getHoverTextColor()}`
        } ${isDropdownOpen ? `text-xl py-4` : ""}`}
        onClick={closeDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isDropdownOpen && activeSection !== item.href.slice(1) && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        )}

        <div className="relative z-10">{item.label}</div>
      </motion.a>
    ));
  };

  const renderDropdown = () => {
    return (
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-30 w-80 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CC</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Christopher Chen</h3>
                    <p className="text-sm text-gray-500">Portfolio</p>
                  </div>
                </motion.div>
                <motion.button
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                  onClick={toggleDropdown}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <motion.div
                  className="flex flex-col space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, staggerChildren: 0.1 }}
                >
                  {renderNavLinks()}
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 border-t border-gray-200/50"
              >
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/chris100904"
                    className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/christopher-chen-236323234/"
                    className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:christopher.chen.1004@gmail.com"
                    className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const minWidth = 768;
      const isNowSmallScreen = window.innerWidth < minWidth;
      setIsSmallScreen(isNowSmallScreen);

      if (!isNowSmallScreen) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNavbar = () => {
    return isSmallScreen ? (
      <motion.button
        className={`p-3 rounded-xl transition-all duration-300 ${isLightBackground() ? "text-gray-800" : "text-white"}`}
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-6 h-6 ${isLightBackground() ? "text-gray-800" : "text-white"}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </motion.button>
    ) : (
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {renderNavLinks()}
      </motion.div>
    );
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-20 p-4 transition-all duration-500 ${
          scrollY > 50 ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg" : "bg-transparent"
        }`}
        style={{ display: isNavbarVisible ? "block" : "none" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={`container mx-auto flex ${isSmallScreen ? "justify-start" : "justify-center"} items-center`}>
          {!isSmallScreen && (
            <motion.div
              className="absolute left-6 flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className={`font-semibold ${getTextColor()}`}>Christopher Chen</span>
            </motion.div>
          )}
          {renderNavbar()}
        </div>
      </motion.nav>

      {renderDropdown()}

      {/* Overlay */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-25"
            onClick={closeDropdown}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
