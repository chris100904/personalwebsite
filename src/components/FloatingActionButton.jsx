import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "resume", label: "Resume", icon: "📄" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleSectionChange = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", handleSectionChange);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-2 right-2 z-50 flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Navigation dots */}
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={section.label}
              />
            ))}
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            initial={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;
