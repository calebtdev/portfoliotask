import React from "react";
// Importing social and copyright icons from react-icons
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

import Contactform from "./Contactform"; // Contact form component
import resume from "../assets/resume.pdf"; // Resume file

// Contact Component
const Contact = () => {
  return (
    // Main section: flex for mobile, grid layout for medium+ screens
    <section
      className="flex flex-col md:grid md:grid-cols-2 gap-8 px-6 md:px-12 pb-6"
      id="contact"
    >
      {/* Left column: Contact info and social links */}
      <div className="flex flex-col justify-between">
        {/* Heading and contact details */}
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-2xl md:text-3xl uppercase font-bold">
            let's connect
          </h1>

          {/* Email and resume link */}
          <div>
            <p>
              Say hello at{" "}
              <a
                href="mailto:calebtolorunleke@yahoo.com"
                className="border-b border-[#D3E97A]"
              >
                calebtolorunleke@yahoo.com
              </a>{" "}
            </p>
            <span>
              For more info here's my{" "}
              <a
                href={resume}
                className="border-b border-[#D3E97A]"
                target="_blank"
              >
                resume
              </a>
            </span>
          </div>

          {/* Social media icons */}
          <div className="flex flex-row gap-[1rem]">
            <a href="https://www.linkedin.com/in/calebtol/">
              <FaLinkedin className="text-[#D3E97A]" />
            </a>
            <a href="">
              <FaGithub className="text-[#D3E97A]" />
            </a>
            <a href="">
              <FaTwitter className="text-[#D3E97A]" />
            </a>
            <a href="">
              <FaInstagram className="text-[#D3E97A]" />
            </a>
          </div>
        </div>

        {/* Footer copyright (visible only on medium+ screens) */}
        <div className="hidden md:flex gap-[2px] items-center text-[#C7C7C7]">
          <FaRegCopyright />
          <span className="text-[#D3E97A]">2025</span>
          <span>Caleb Adebayo</span>
        </div>
      </div>

      {/* Right column: Contact form */}
      <Contactform />

      {/* Footer copyright (visible only on mobile) */}
      <div className="flex md:hidden text-xs gap-[1px] items-center text-[#C7C7C7]">
        <FaRegCopyright />
        <span>2025</span>
        <span>Caleb Adebayo</span>
      </div>
    </section>
  );
};

export default Contact;
