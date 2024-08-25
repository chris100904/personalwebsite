import React from "react";
import addressIcon from "../assets/address.png";
import emailIcon from "../assets/emailicon.png";
import linkedin from "../assets/linkedin.png";
import NextPage from "./NextPage";

const ContactSection = () => {
  return (
    <section id="contact" data-bgcolor="bg-white" className="min-h-screen flex flex-col bg-white px-8 sm:px-20 py-10">
      <div className="flex flex-col mt-10 space-y-16 sm:space-y-32">
        <div className="flex flex-col">
          <h2 className="flex justify-center text-2xl sm:text-3xl font-bold p-heebo tracking-widest mb-4 sm:mb-6 blue">
            CONTACT
          </h2>
          <p
            className="p-heebo flex justify-center text-lg sm:text-xl font-medium mb-8 sm:mb-10"
            style={{ color: "rgba(0, 0, 0, 0.52)" }}
          >
            I would love to connect with you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-16 md:gap-32">
            <div className="flex flex-col items-center contact-div mb-8 sm:mb-0">
              <img src={addressIcon} alt="address icon" className="contact-icon mb-4" />
              <h2 className="blue heebo text-lg sm:text-xl font-bold text-center">Where to find me</h2>
              <p className="text-sm font-light text-center">
                69 Brown Street <br />
                Mail #3801 <br />
                Providence, RI 02912
              </p>
            </div>
            <div className="flex flex-col items-center contact-div mb-8 sm:mb-0">
              <a href="mailto:christopher.chen.1004@gmail.com">
                <img src={emailIcon} alt="email icon" className="contact-icon mb-4 hover-contact" />
              </a>
              <h2 className="blue heebo text-lg sm:text-xl font-bold text-center">Email me at</h2>
              <p className="text-sm font-light text-center">christopher.chen.1004@gmail.com</p>
            </div>
            <div className="flex flex-col items-center contact-div">
              <a href="https://www.linkedin.com/in/christopher-chen-236323234/">
                <img src={linkedin} alt="linkedin icon" className="contact-icon mb-4 hover-contact" />
              </a>
              <h2 className="blue heebo text-lg sm:text-xl font-bold text-center">Let's connect!</h2>
              <p className="text-sm font-light text-center">My LinkedIn Profile</p>
            </div>
          </div>
        </div>
        <NextPage href="#home" isBrightBackground={"True"} isUpsideDown={"True"} />
        <p className="relative text-center text-base font-light bottom-2 left-1/2 transform -translate-x-1/2">
          Copyright &copy; 2024 Christopher Chen. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

