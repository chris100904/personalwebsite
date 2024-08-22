import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import workIcon from "../assets/work.png";
import educationIcon from "../assets/education.png";
import resumePDF from "../assets/resume.pdf";
import preview from "../assets/preview.png";
import NextPage from "./NextPage";
import x from "../assets/x.png";

const experiences = [
  {
    title: "Incoming Undergraduate Research Assistant",
    company: "Brown University IVL Lab (BRICS)",
    duration: "September 2024 - December 2024",
    description:
      "Will be developing and maintaining low-level software for multi-camera systems in C++ and Python, contributing to the expansion of the BRICS system from 50 to 300+ cameras for advanced human-robot interaction capture. Will collaborate with research associates to advance state-of-the-art 3D computer vision and deep learning algorithms, focusing on neural fields for modeling visual and physical quantities in scenes and objects. Will be contributing to the design of hardware components through 3D modeling in Autodesk Inventor and Fusion360.",
  },
  {
    title: "Software Engineer Intern",
    company: "Vane",
    duration: "June 2024 - Present",
    description:
      "At a dynamic startup, the responsibilities spanned multiple disciplines in full-stack development. Developed a reactive mobile app using Flutter and a database editor web app with React, TailwindCSS, Node.js, and Express.js, facilitating event advertisements and social party planning for businesses and communities. Contributed to the social party chat feature by utilizing WebSocket over TCP/IP and Kafka for real-time, secure, and reliable communication. Additionally, implemented a web scraping system with Python, pandas, and Beautiful Soup to automate event data collection, integrated with MongoDB schemas for efficient data management, and managed MongoDB Atlas functions using the Pipeline Aggregation Framework.",
  },
  {
    title: "Data Analyst and Marketing Intern",
    company: "TetherView",
    duration: "January 2022 - June 2022",
    description:
      "Developed web scraping tools using Python to collect and analyze vast datasets on web traffic and keyword frequencies, leading to a 20% increase in website traffic. Utilized analyzed data to write effective meta descriptions/ad copies for TetherView's website and subpages. Created, edited, and published advertising podcast videos onto TetherView's YouTube channel.",
  },
  {
    title: "Assistant Piano Teacher",
    company: "Little Music Academy of Marlboro",
    duration: "October 2019 - August 2022",
    description:
      "Taught supplemental piano and music theory lessons to students who needed additional help in preparing examinations under the Royal Conservatory of Music program. Accompanied student vocalists for local recitals, auditions, and performances in Carnegie Hall and Engelman Recital Hall at Baruch College.",
  },
];

const education = [
  {
    degree: "Bachelor's of Science Degree",
    school: "Brown University",
    duration: "September 2022 - May 2026",
    description:
      "Concentrating in Applied Mathematics–Computer Science on the professional track. Focusing on systems engineering, algorithms design, artificial intelligence and deep learning, and software engineering principles.",
  },
  {
    degree: "High School Diploma",
    school: "High Technology High School",
    duration: "September 2018 - June 2022",
    description:
      "Attended one of the US top ranked public STEM high schools that focused on pre-engineering disciplines. Former president of the Classical Music Club and director of the instrumental ensemble for the performing arts club (Basie Award nominee).",
  },
  {
    degree: "Precollege Diploma",
    school: "Manhattan School of Music",
    duration: "September 2020 - May 2022",
    description:
      "Participated in the Precollege program for Classical Piano performance studies, which involved attending private lessons, music classes, and having periodic performances every weekend.",
  },
];

Modal.setAppElement("#root");

const ResumeSection = ({ toggleModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
    toggleModal();
  };

  const closeModal = () => {
    setModalIsOpen(false);
    toggleModal();
  };

  return (
    <section
      id="resume"
      data-bgcolor="bg-white"
      className="relative w-full px-20 py-10"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(233, 232, 232, 0.94) 100%)",
      }}
    >
      {/* Dark Gray Blur */}
      <div
        className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{
          width: "200px",
          height: "200px",
          background: "darkgray",
          top: "-50px",
          left: "100px",
        }}
      ></div>
      {/* Medium Gray Blur */}
      <div
        className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{
          width: "300px",
          height: "300px",
          background: "gray",
          top: "300px",
          right: "200px",
        }}
      ></div>
      {/* Another Blur Spot */}
      <div
        className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
        style={{
          width: "400px",
          height: "400px",
          background: "darkgray",
          top: "600px",
          left: "500px",
        }}
      ></div>

      <div className="relative flex flex-col mt-10">
        <h2 className="flex justify-center text-3xl font-bold p-heebo tracking-widest mb-6 blue">RESUME</h2>
        <p className="p-heebo flex justify-center text-xl font-medium mb-10" style={{ color: "rgba(0, 0, 0, 0.52)" }}>
          Here are my work experiences and education.
        </p>
        <div
          onClick={openModal}
          className="self-center cursor-pointer mb-10 hover-preview relative"
          style={{
            width: "200px",
            height: "200px",
            background: `url(${preview})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="font-semibold text-lg">See Full Resume</span>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Resume Modal"
          className={`fixed inset-0 flex flex-col p-4 bg-white rounded-lg shadow-lg max-w-3xl mx-auto outline-none h-fit translate-y-1/4 transition-opacity duration-1000${
            modalIsOpen ? "opacity-100" : "opacity-0"
          }`}
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"
        >
          <div className="h-12">
            <button onClick={closeModal} className="absolute top-4 right-4 hover-close">
              <img src={x} alt="close" className="w-10" />
            </button>
          </div>
          <iframe src={resumePDF} title="Resume" width="100%" height="600px" className="border-0" />
        </Modal>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="flex justify-center text-2xl font-bold p-heebo tracking-widest mb-6 blue">
              WORK EXPERIENCE
            </h3>
            <div className="flex flex-col">
              {experiences.map((exp, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-row w-full pl-32">
                    <div className="flex flex-col w-1/3 text-right pl-52 pb-32">
                      <h4 className="text-xl font-bold p-heebo">{exp.title}</h4>
                      <p
                        className="text-base p-heebo"
                        style={{
                          color: "rgba(0, 0, 0, 0.72)",
                        }}
                      >
                        {exp.duration}
                      </p>
                    </div>
                    <div className="relative w-20 h-full">
                      <img src={workIcon} alt="work icon" className="absolute left-1/2 transform -translate-x-1/2" />
                      <div
                        className="h-full absolute left-1/2 transform -translate-y-2 -translate-x-1/2"
                        style={{
                          width: "2px",
                          backgroundColor: "#1e1e1e",
                          opacity: "43%",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col w-2/3 pb-10 pr-80">
                      <h5 className="text-xl font-bold p-heebo tracking-wide" style={{ color: "#405BBA" }}>
                        {exp.company}
                      </h5>
                      <div className="mb-6 w-12" style={{ height: "2px", backgroundColor: "#1E1E1E" }}></div>
                      <p
                        className="text-base font-extralight p-heebo"
                        style={{
                          color: "rgba(0, 0, 0, 0.72)",
                        }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex justify-center text-2xl font-bold p-heebo tracking-widest mb-6 blue">
              BACKGROUND EDUCATION
            </h3>
            <div className="flex flex-col">
              {education.map((edu, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-row w-full pl-32">
                    <div className="flex flex-col w-1/3 text-right pl-52 pb-32">
                      <h4 className="text-xl font-bold p-heebo">{edu.degree}</h4>
                      <p
                        className="text-base p-heebo"
                        style={{
                          color: "rgba(0, 0, 0, 0.72)",
                        }}
                      >
                        {edu.duration}
                      </p>
                    </div>
                    <div className="relative w-20 h-full">
                      <img
                        src={educationIcon}
                        alt="education icon"
                        className="absolute left-1/2 transform -translate-x-1/2"
                      />
                      <div
                        className="h-full absolute left-1/2 transform -translate-y-2 -translate-x-1/2"
                        style={{
                          width: "2px",
                          backgroundColor: "#1e1e1e",
                          opacity: "43%",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col w-2/3  pr-80">
                      <h5 className="text-xl font-bold p-heebo tracking-wide" style={{ color: "#405BBA" }}>
                        {edu.school}
                      </h5>
                      <div className="mb-6 w-12" style={{ height: "2px", backgroundColor: "#1E1E1E" }}></div>
                      <p
                        className="text-base font-extralight p-heebo"
                        style={{
                          color: "rgba(0, 0, 0, 0.72)",
                        }}
                      >
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <NextPage href="#projects" marginTop="20px" isBrightBackground={true} />
      </div>
    </section>
  );
};

export default ResumeSection;
