import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import FloatingActionButton from "./components/FloatingActionButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar isNavbarVisible={isNavbarVisible} />
      <Sections toggleModal={toggleModal} />
      <FloatingActionButton />
    </div>
  );
}

export default App;
