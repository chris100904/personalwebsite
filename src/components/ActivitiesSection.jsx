import React from "react";

const ActivitiesSection = () => {
  return (
    <section
      id="activities"
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
  );
};

export default ActivitiesSection;
