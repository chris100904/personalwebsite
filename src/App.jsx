import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-screen">
      <Navbar isNavbarVisible={isNavbarVisible} />
      <Sections toggleModal={toggleModal} />
    </div>
  );
}

export default App;
