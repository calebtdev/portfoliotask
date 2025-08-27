import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import Contactform from "./Contactform";
import resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-8  px-6 md:px-12 pb-6">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-2xl md:text-3xl uppercase font-bold">
            let's connect
          </h1>
          <div>
            <p className="">
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
              <a href={resume} className="border-b border-[#D3E97A]">
                resume
              </a>
            </span>
          </div>
          <div className="flex flex-row gap-[1rem]">
            <a href="">
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
        <div className="hidden md:flex gap-[2px] items-center text-[#C7C7C7]">
          <FaRegCopyright />
          <span>2025</span>
          <span>Caleb Adebayo</span>
        </div>
      </div>
      <Contactform />
      <div className="flex md:hidden text-xs gap-[1px] items-center text-[#C7C7C7]">
        <FaRegCopyright />
        <span>2025</span>
        <span>Caleb Adebayo</span>
      </div>
    </section>
  );
};

export default Contact;
