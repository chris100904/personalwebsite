import React from "react";
import addressIcon from "../assets/address.png";
import emailIcon from "../assets/emailicon.png";
import linkedin from "../assets/linkedin.png";
import NextPage from "./NextPage";

const ContactSection = () => {
  return (
    <section
      id="contact"
      data-bgcolor="contact-color"
      className="min-h-screen flex flex-col contact-color px-20 py-10"
    >
      <div className="flex flex-col mt-10">
        <h2 className="flex justify-center text-3xl font-bold p-heebo tracking-widest mb-6 blue">
          CONTACT
        </h2>
        <p
          className="p-heebo flex justify-center text-xl font-medium mb-10"
          style={{ color: "rgba(0, 0, 0, 0.52)" }}
        >
          I would love to connect with you!
        </p>
        <div className="flex flex-row justify-center gap-60 translate-y-32">
          <div className="flex flex-col items-center contact-div">
            <img
              src={addressIcon}
              alt="address icon"
              className="contact-icon mb-4"
            />
            <h2 className="blue heebo text-xl font-bold">Where to find me</h2>
            <p className="text-sm font-light text-center">
              69 Brown Street <br></br>Mail #3801 <br></br>Providence, RI 02912{" "}
            </p>
          </div>
          <div className="flex flex-col items-center contact-div">
            <a href="mailto:christopher.chen.1004@gmail.com">
              <img
                src={emailIcon}
                alt="email icon"
                className="contact-icon mb-4 hover-contact"
              />
            </a>

            <h2 className="blue heebo text-xl font-bold">Email me at</h2>
            <p className="text-sm font-light text-center">
              christopher.chen.1004@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center contact-div">
            <a href="https://www.linkedin.com/in/christopher-chen-236323234/">
              <img
                src={linkedin}
                alt="linkedin icon"
                className="contact-icon mb-4 hover-contact"
              />
            </a>

            <h2 className="blue heebo text-xl font-bold">Let's connect!</h2>
            <p className="text-sm font-light text-center">
              My LinkedIn Profile
            </p>
          </div>
        </div>
        <NextPage href="#home" marginTop={"440px"} isUpsideDown={"True"} />
      </div>
    </section>
  );
};

export default ContactSection;
