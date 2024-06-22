import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 z-10 bg-opacity-75">
      <div className="container mx-auto flex justify-between">
        <a href="#home" className="text-white">
          Home
        </a>
        <a href="#about" className="text-white">
          About
        </a>
        <a href="#features" className="text-white">
          Features
        </a>
        <a href="#contact" className="text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
