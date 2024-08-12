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

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const renderNavLinks = () => {
    return (
      <>
        <a href="#home" className="text-black nav-link hover-effect-dropdown" onClick={closeDropdown}>
          HOME
        </a>
        <a href="#about" className="text-black nav-link hover-effect-dropdown" onClick={closeDropdown}>
          ABOUT
        </a>
        <a href="#resume" className="text-black nav-link hover-effect-dropdown" onClick={closeDropdown}>
          RESUME
        </a>
        <a href="#projects" className="text-black nav-link hover-effect-dropdown" onClick={closeDropdown}>
          PROJECTS
        </a>
        <a href="#contact" className="text-black nav-link hover-effect-dropdown" onClick={closeDropdown}>
          CONTACT
        </a>
      </>
    );
  };

  const renderDropdown = () => {
    return (
      <div
        className={`fixed inset-y-0 left-0 z-30 w-3/4 transition-transform transform ${
          isDropdownOpen ? "translate-x-0 duration-200" : "-translate-x-full duration-200"
        } bg-white p-6 flex flex-col gap-4 shadow-lg`}
      >
        <button className="self-end mb-4" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hover-effect-dropdown origin-center"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {renderNavLinks()}
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const minWidth = 640; // Adjust this value as needed
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
    return isSmallScreen ? (
      <>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hover-effect"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {renderDropdown()}
      </>
    ) : (
      renderNavLinks()
    );
  };

  return (
    <>
      <nav
        className={`w-screen fixed top-0 z-20 p-4 ${
          isSmallScreen ? "align-left" : "border-b border-black"
        } transition-colors duration-300 ${bgColor}`}
        style={{ display: isNavbarVisible ? "block" : "none" }}
      >
        <div className={`container mx-auto flex ${isSmallScreen ? "justify-start" : "justify-center gap-12"}`}>
          {renderNavbar()}
        </div>
      </nav>
      {isDropdownOpen && (
        <div
          className="fixed inset-y-0 right-0 w-1/4 z-20 bg-black opacity-50 backdrop-blur-sm"
          onClick={closeDropdown}
        />
      )}
    </>
  );
};

export default Navbar;
