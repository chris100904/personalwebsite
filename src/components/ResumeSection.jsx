import React, { useState, useEffect, useRef } from "react";

const ResumeSection = () => {
  const [isTitleIntersecting, setIsTitleIntersecting] = useState(false);
  const [isContentIntersecting, setIsContentIntersecting] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current || !contentRef.current) return;

      const titleRect = titleRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const navbarHeight = 64; // Adjust this value according to your navbar height

      // Calculate whether title and content are intersecting with the navbar
      const titleIntersects =
        titleRect.top <= navbarHeight && titleRect.bottom >= navbarHeight;
      const contentIntersects =
        contentRect.top <= navbarHeight && contentRect.bottom >= navbarHeight;

      setIsTitleIntersecting(titleIntersects);
      setIsContentIntersecting(contentIntersects);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleBlurAmount = isTitleIntersecting ? 2 : 0; // Adjust blur intensity as needed
  const contentBlurAmount = isContentIntersecting ? 2 : 0; // Adjust blur intensity as needed

  return (
    <section
      id="resume"
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-center relative"
    >
      <h1
        ref={titleRef}
        className="text-4xl mb-4"
        style={{
          filter: `blur(${titleBlurAmount}px)`,
          transition: "filter 0.1s ease-out", // Optional: Smooth transition
        }}
      >
        About Section
      </h1>
      <p
        ref={contentRef}
        className="text-lg text-center max-w-lg"
        style={{
          filter: `blur(${contentBlurAmount}px)`,
          transition: "filter 0.1s ease-out", // Optional: Smooth transition
        }}
      >
        Our app uses advanced algorithms to generate running routes based on
        your desired distance and starting location. Whether you're training for
        a marathon or just enjoying a casual run, we've got you covered.
      </p>
    </section>
  );
};

export default ResumeSection;
