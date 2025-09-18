import React from "react";
import heroImg from "../assets/logo.jpg";
// import { FaGithub } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 py-12 px-6 md:px-12 pt-[5rem] md:pt-[7rem] overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-4 text-left">
        <h1 className="uppercase font-bold text-3xl md:text-4xl leading-snug">
          hi, i am <span className="block text-[#D3E97A]">caleb adebayo.</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Application Support Engineer and Site Reliability Engineer with over
          five years of experience in incident management, performance
          monitoring, root cause analysis, and automation. Skilled in using
          tools like Dynatrace, Grafana, AWS CloudWatch, Azure, and CI/CD
          pipelines to ensure system reliability and scalability. Passionate
          about optimizing uptime and reducing operational overhead.
        </p>
        {/* ACTION BUTTONS */}
        <div className="flex md:justify-start items-center gap-4 mt-6">
          <a
            className="flex items-center gap-2 text-black bg-[#D3E97A] py-2 px-6 text-base md:text-lg rounded-full font-medium hover:opacity-90 transition"
            href="#contact"
          >
            Contact Me <span>•</span>
          </a>

          <a
            className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black transition"
            href="https://www.linkedin.com/in/calebtol/"
            target="_blank"
          >
            in
          </a>

          <a
            href={resume}
            download="Caleb_Adebayo.pdf"
            className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center justify-center rounded-full hover:bg-black transition"
          >
            <span className="text-sm font-bold">CV</span>
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src={heroImg}
          alt="Hero"
          className="rounded-2xl w-full max-w-[30rem] md:max-w-[33rem] object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
