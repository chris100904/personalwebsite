import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-gray-100");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSection = section;
      }
    });

    if (currentSection) {
      setBgColor(currentSection.dataset.bgcolor);
    }
  };

  useEffect(() => {
    handleScroll(); // Run once on mount to set initial color
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-20 p-4 border-b border-black transition-colors duration-300 ${bgColor}`}
    >
      <div className="container mx-auto flex justify-center gap-12">
        <a href="#home" className="text-black nav-link hover-effect">
          HOME
        </a>
        <a href="#resume" className="text-black nav-link hover-effect">
          RESUME
        </a>
        <a href="#projects" className="text-black nav-link hover-effect">
          PROJECTS
        </a>
        <a href="#activities" className="text-black nav-link hover-effect">
          ACTIVITIES
        </a>
        <a href="#contact" className="text-black nav-link hover-effect">
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
