import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import weenix from "../assets/weenix.png";
import tomorrow from "../assets/tomorrow@brown.png";
import weenixProject from "../assets/weenixProject.jpg";
import website from "../assets/website.png";
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
    category: "Operating Systems Design",
    description:
      "Weenix is a Unix-based operating system kernel developed as a semester-long project in CS2670 at Brown University. It is divided into five sub-projects: Procs (handling threads, processes, and synchronization), Drivers (device drivers for various hardware), VFS (a virtual file system interface), S5FS (an implementation of the System V file system), and VM (virtual memory management and system call integration).",
    github: "https://github.com/chris100904/weenix",
  },
  {
    id: 2,
    title: "Tomorrow@Brown",
    image: tomorrow,
    openimage: tomorrow,
    category: "Web Development, NLPs, Data Handling/Processing",
    description:
      "Tomorrow@Brown is a search engine designed specifically for Brown University, enabling users to perform free-text queries to find relevant information such as events and courses related to the university. The project utilizes data extracted from Gmail via the Gmail API, processed using Python, Pandas, NLTK for data handling and TF-IDF and PageRank algorithms for document scoring. Contributed to the frontend development of the platform, ensuring a responsive and intuitive user interface with Tailwind, React, and CSS.",
    github: "https://github.com/chris100904/Tomorrow-Brown",
  },
  {
    id: 3,
    title: "Personal Website",
    image: website,
    openimage: website,
    category: "Web Development",
    description:
      "Created own personal website for showing resume. Worked with React components, Javascript, HTML/CSS + Tailwind, and various React frameworks (framer-motion, react-modal), for animations.",
    github: "https://github.com/chris100904/personalwebsite",
  },
  {
    id: 4,
    title: "LoopRun (WIP)",
    image: running,
    openimage: running,
    category: "Web Development, Google Maps API + AI Integration",
    description:
      "LoopRun is a web app designed to help runners discover loop routes using Google Maps API's location services. It integrates open source AI platforms to assist with autocomplete features to suggest optimal running paths that start and end at the same point, enhancing user experience with intuitive map displays and interactive route planning capabilities. Ideal for fitness enthusiasts, LoopRun simplifies the process of finding efficient and enjoyable running routes tailored to individual preferences and locations.",
    github: "https://github.com/chris100904/looprun",
  },
  {
    id: 5,
    title: "TuneTailor AI (WIP)",
    image: spotify,
    openimage: spotify,
    category: "Spotify API + AI Integration, Web Development",
    description:
      "TuneTailor is a web app designed to help Spotify users create playlists based off of user-inputted criteria. The user is able to chat with an AI chatbot that queries for the user's song desires. The app then leverages Spotify's API to search for songs with the criteria from the queries and curates a downloadable playlist for the user.",
    github: "https://github.com/albertddong/TuneTailor",
  },
  {
    id: 6,
    title: "Language Journal AI App (WIP)",
    image: languagejournal,
    openimage: languagejournal,
    category: "LLMs/AI, Web Development",
    description:
      "Language Journal AI is a web application and Chrome extension designed to support language learners through assisted diary entries. Given a user-inputted topic, the AI will output a list of related words in the user's target language, allowing them to more efficiently journal in their desired language. Users can publish their journal entries to other users on the app and view other people's entries.",
    github: "https://github.com/emluo555/language-journal",
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
      data-bgcolor="bg-gray-300"
      className="w-full bg-gray-300 px-20 py-10 min-h-screen"
    >
      <div className="flex flex-col mt-10">
        <h2 className="flex justify-center text-3xl font-bold p-heebo tracking-widest mb-6 blue">
          PROJECTS
        </h2>
        <p
          className="p-heebo flex justify-center text-xl font-medium mb-10"
          style={{ color: "rgba(0, 0, 0, 0.52)" }}
        >
          Check out some of my creations! Some of these are work in progresses,
          so keep posted for updates!
        </p>
        <div className="projects-page px-32">
          <div className="projects-grid gap-4 items-center justify-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overview">
                  <div className="project-title text-sm font-extrabold">
                    {project.title}
                  </div>
                  <div className="project-category text-xs font-thin">
                    {project.category}
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
            className="fixed inset-0 flex items-center max-w-3xl mx-auto justify-center h-fit translate-y-1/4 rounded-xl outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"
          >
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full flex flex-col space-y-2">
              <img
                src={selectedProject.openimage}
                alt={selectedProject.title}
                className="w-full object-cover mb-2"
              />
              <h2 className="text-2xl font-bold mb-2 px-8">
                {selectedProject.title}
              </h2>
              <p className="px-8 pb-4 text-sm">{selectedProject.description}</p>
              <div className="flex items-center bg-black px-8 h-14 gap-4 rounded-b-lg">
                <a
                  href={selectedProject.github}
                  className="project-modal-hover"
                >
                  DETAILS
                </a>
                <button onClick={closeModal} className="project-modal-hover">
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
        <NextPage
          href="#activities"
          marginTop="140px"
          isBrightBackground={true}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
