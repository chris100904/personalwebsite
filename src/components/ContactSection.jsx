import React from "react";
import addressIcon from "../assets/address.png";
import emailIcon from "../assets/emailicon.png";
import linkedin from "../assets/linkedin.png";
import NextPage from "./NextPage";

const ContactSection = () => {
  return (
    <section
      id="contact"
      data-bgcolor="bg-gradient-to-br from-blue-50 to-purple-50"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50 px-8 sm:px-20 py-16"
    >
      <div className="flex flex-col items-center pt-10 flex-grow max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="flex justify-center text-4xl font-bold p-heebo tracking-widest mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <p className="p-heebo flex justify-center text-xl font-medium mb-16 text-gray-600 text-center max-w-2xl leading-relaxed">
            I would love to connect with you! Whether you have a project in mind, want to collaborate, or just want to
            say hello.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Where to find me</h3>
              <p className="text-gray-600 leading-relaxed">
                69 Brown Street <br />
                Mail #3801 <br />
                Providence, RI 02912
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200">
              <a href="mailto:christopher.chen.1004@gmail.com" className="block">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Email me
                </h3>
                <p className="text-gray-600 group-hover:text-blue-500 transition-colors break-words break-all">
                  christopher.chen.1004@gmail.com
                </p>
              </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200">
              <a
                href="https://www.linkedin.com/in/christopher-chen-236323234/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Let's connect!
                </h3>
                <p className="text-gray-600 group-hover:text-blue-500 transition-colors">My LinkedIn Profile</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8 text-sm">
        Copyright &copy; 2025 Christopher Chen. All rights reserved.
      </p>
    </section>
  );
};

export default ContactSection;
