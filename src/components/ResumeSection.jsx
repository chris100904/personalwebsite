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
    title: "Software Engineering Intern",
    company: "GitHub",
    duration: "June 2025 - August 2025",
    description:
      "At GitHub, I worked on providing GitHub Copilot Chat support for the Projects Platform. This involved designing and implementing RESTful API endpoints in Ruby on Rails that enabled full CRUD operations for GitHub Projects and integrating them with GitHub's MCP server, supporting 1M+ active project repositories. I accelerated deployment velocity through the implementation of a comprehensive integration test suite that conformed to GitHub's CI/CD pipeline standards.",
  },
  {
    title: "Software Engineering Intern",
    company: "Hightainment",
    duration: "January 2025 - April 2025",
    description:
      "At Hightainment, I developed and deployed scalable APIs for core app features, including user favorites and watch provider management, designing database schemas and models to support functionality. I automated database updates using AWS Lambda, leveraging Python scripts to fetch data from TMDB APIs and FlixPatrol scraping, ensuring media records remained up to date. Additionally, I contributed to improving backend infrastructure, streamlining data synchronization processes, and enhancing overall platform efficiency.",
  },
  {
    title: "Software Engineering Intern",
    company: "Vane",
    duration: "June 2024 - October 2024",
    description:
      "At Vane, the responsibilities spanned multiple disciplines in full-stack development since it was a very small team. I developed a reactive mobile app using Flutter and a database editor web app with React, TailwindCSS, Node.js, and Express.js, facilitating event advertisements and social party planning for businesses and communities. I contributed to the social party chat feature by utilizing WebSocket over TCP/IP and Kafka for real-time, secure, and reliable communication. Additionally, I implemented a web scraping system with Python, pandas, and Beautiful Soup to automate event data collection, integrated with MongoDB schemas for efficient data management, and managed MongoDB Atlas functions using the Pipeline Aggregation Framework.",
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Brown University Interactive 3D Vision & Learning Lab (BRICS)",
    duration: "September 2024 - December 2024",
    description:
      "Worked on the development of a WebAssembly-based web interface to compile and manage the existing C++ code for IVL's motion capture camera system. This helped contribute to the expansion of the BRICS system from 50 to 300+ cameras for advanced human-robot interaction capture.",
  },
  {
    title: "Software Developer",
    company: "Hack@Brown",
    duration: "September 2024 - February 2025",
    description:
      "Working alongside a team of 8 developers to design Hack@Brown's website. This work involves design in HTML/CSS and Javascript/React, and we work closely with the UI/UX team to implement their designs. We also work on creating starter packs for hackathon attendees to help them get started with their projects, which range from topics such as cloud infrastructure, game development with Unity, to basic introductions to web development fremeworks.",
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
      className="relative w-full px-1 sm:px-10 py-10"
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
          zIndex: "-1",
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
          zIndex: "-1",
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
          zIndex: "-1",
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

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {/* Work Experience Section */}
          <div>
            <h3 className="flex justify-center text-4xl font-bold p-heebo tracking-widest mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WORK EXPERIENCE
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left side - Header info */}
                    <div className="flex-shrink-0 lg:w-1/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <img src={workIcon} alt="work icon" className="w-6 h-6 filter brightness-0 invert" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h4>
                          <h5 className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</h5>
                          <p className="text-sm text-gray-500 font-medium">{exp.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Vertical divider - hidden on mobile */}
                    <div className="hidden lg:block w-px bg-gradient-to-b from-blue-200 to-purple-200"></div>

                    {/* Right side - Description */}
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="flex justify-center text-4xl font-bold p-heebo tracking-widest mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EDUCATION
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left side - Header info */}
                    <div className="flex-shrink-0 lg:w-1/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src={educationIcon}
                            alt="education icon"
                            className="w-6 h-6 filter brightness-0 invert"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
                            {edu.degree}
                          </h4>
                          <h5 className="text-base font-semibold text-blue-600 mb-2">{edu.school}</h5>
                          <p className="text-sm text-gray-500 font-medium">{edu.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Vertical divider - hidden on mobile */}
                    <div className="hidden lg:block w-px bg-gradient-to-b from-purple-200 to-blue-200"></div>

                    {/* Right side - Description */}
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed text-sm">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
