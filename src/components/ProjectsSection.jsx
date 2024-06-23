import React from "react";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-300 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl mb-4">Features Section</h1>
      <ul className="text-lg list-disc list-inside">
        <li>Create custom running routes</li>
        <li>Specify distance and starting point</li>
        <li>Interactive map integration</li>
        <li>Save and share your routes</li>
      </ul>
    </section>
  );
};

export default ProjectsSection;
