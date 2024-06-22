import React from "react";
// import Searchbar from "./Searchbar";

const Sections = () => {
  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen bg-gray-100 flex flex-col items-center pt-20"
      >
        <h1 className="text-6xl mb-4 ml-4 tracking-widest">LoopRun</h1>
        <p className="text-lg text-center ml-4 max-w-lg">
          Welcome to the LoopRun! This app helps you create the perfect running
          route starting and ending at the same location.
        </p>
        {/* <Searchbar /> */}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-200 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl mb-4">About Section</h1>
        <p className="text-lg text-center max-w-lg">
          Our app uses advanced algorithms to generate running routes based on
          your desired distance and starting location. Whether you're training
          for a marathon or just enjoying a casual run, we've got you covered.
        </p>
      </section>

      {/* Features Section */}
      <section
        id="features"
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

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-400 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl mb-4">Contact Section</h1>
        <p className="text-lg text-center max-w-lg">
          If you have any questions or feedback, feel free to reach out to us at{" "}
          <a href="mailto:support@example.com" className="text-blue-600">
            support@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Sections;
