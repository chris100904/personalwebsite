import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import weenix from "../assets/weenix.png";
import tomorrow from "../assets/tomorrow@brown.png";
import weenixProject from "../assets/weenixProject.jpg";
import website from "../assets/website.png";
import tcpip from "../assets/TCP-IP.webp";
import running from "../assets/running.jpeg";
import spotify from "../assets/spotify.png";
import languagejournal from "../assets/languagejournal.jpeg";
import NextPage from "./NextPage";

const projects = [
  {
    id: 1,
    title: "Weenix OS",
    image: weenix,
    openimage: weenixProject,
    category: "Operating Systems Design, C",
    description:
      "Weenix is a Unix-based operating system kernel developed as a semester-long project in CS2670 at Brown University. It is divided into five sub-projects: Procs (handling threads, processes, and synchronization), Drivers (device drivers for various hardware), VFS (a virtual file system interface), S5FS (an implementation of the System V file system), and VM (virtual memory management and system call integration).",
    github: "https://github.com/chris100904/weenix",
  },
  {
    id: 2,
    title: "Tomorrow@Brown",
    image: tomorrow,
    openimage: tomorrow,
    category: "Web Development, NLPs, Data Handling/Processing, Python, Javascript, HTML/CSS, React, Tailwind",
    description:
      "Tomorrow@Brown is a search engine designed specifically for Brown University, enabling users to perform free-text queries to find relevant information such as events and courses related to the university. The project utilizes data extracted from Gmail via the Gmail API, processed using Python, Pandas, NLTK for data handling and TF-IDF and PageRank algorithms for document scoring. Contributed to the frontend development of the platform, ensuring a responsive and intuitive user interface with Tailwind, React, and CSS.",
    github: "https://github.com/chris100904/Tomorrow-Brown",
  },
  {
    id: 3,
    title: "IP/TCP",
    image: tcpip,
    openimage: tcpip,
    category: "Computer Networks, Rust",
    description:
      "Designed a tech stack that implements the TCP/IP protocols as defined by RFC 791 and RF 793. This project was implemented using Rust and involved specific data structure design for each layer of the stack: the network layer, the transport layer, and the application layer. Major difficulties included thread synchronization across multiple threads within the network layer and ensuring the scalability of the data structure design for key features such as sliding window buffer, out of order packet handling, and retransmission queues. If you are an employer who would want to see this code, please contact me. I am unable to share this code as per Brown's academic policy.",
    github: "https://github.com/chris100904/ip-tcp",
  },
  {
    id: 4,
    title: "Personal Website",
    image: website,
    openimage: website,
    category: "Web Development, Javascript, HTML/CSS, React, Tailwind",
    description:
      "Created own personal website for showing resume. Worked with React components, Javascript, HTML/CSS + Tailwind, and various React frameworks (framer-motion, react-modal), for animations.",
    github: "https://github.com/chris100904/personalwebsite",
  },
];

const ProjectsSection = ({ toggleModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
    toggleModal();
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
    toggleModal();
  };

  return (
    <section
      id="projects"
      data-bgcolor="bg-gray-50"
      className="relative w-screen bg-gradient-to-br from-gray-50 to-blue-50 px-10 sm:px-20 py-16 min-h-screen flex flex-col justify-between"
    >
      <div className="flex flex-col mt-10">
        <h2 className="flex justify-center text-4xl font-bold p-heebo tracking-widest mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PROJECTS
        </h2>
        <p className="p-heebo flex justify-center text-xl font-medium mb-16 text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
          Check out some of my creations! From operating systems to web applications, these projects showcase my passion
          for building innovative solutions.
        </p>
        <div className="flex flex-col items-center gap-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{project.category}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description.substring(0, 120)}...
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-sm group-hover:underline">View Details →</span>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Modal"
            className="fixed inset-0 flex items-center max-w-4xl mx-auto justify-center h-fit translate-y-1/4 rounded-2xl outline-none z-50"
            overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 z-40"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 flex flex-col overflow-hidden">
              <div className="relative">
                <img src={selectedProject.openimage} alt={selectedProject.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.category.split(", ").map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{selectedProject.description}</p>
                <div className="flex items-center gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
