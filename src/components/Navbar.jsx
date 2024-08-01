import React, { useEffect, useState } from "react";

const Navbar = ({ isNavbarVisible }) => {
  const [bgColor, setBgColor] = useState("bg-gray-100");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderNavLinks = () => {
    return (
      <>
        <a href="#home" className="text-black nav-link hover-effect">
          HOME
        </a>
        <a href="#resume" className="text-black nav-link hover-effect">
          RESUME
        </a>
        <a href="#projects" className="text-black nav-link hover-effect">
          PROJECTS
        </a>
        <a href="#contact" className="text-black nav-link hover-effect">
          CONTACT
        </a>
      </>
    );
  };

  const renderDropdown = () => {
    return (
      <div className="relative">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={`dropdown-content absolute left-0 right-0 transition-all duration-300 ${
            isDropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {renderNavLinks()}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const minWidth = 600; // Adjust this value as needed
      const isNowSmallScreen = window.innerWidth < minWidth;
      setIsSmallScreen(isNowSmallScreen);

      if (!isNowSmallScreen) {
        // Reset dropdown state if screen size is large enough
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNavbar = () => {
    return isSmallScreen ? renderDropdown() : renderNavLinks();
  };

  return (
    <nav
      className={`fixed w-full top-0 z-20 p-4 border-b border-black transition-colors duration-300 ${bgColor}`}
      style={{ display: isNavbarVisible ? "block" : "none" }}
    >
      <div className="container mx-auto flex justify-center gap-12">
        {renderNavbar()}
      </div>
    </nav>
  );
};

export default Navbar;
