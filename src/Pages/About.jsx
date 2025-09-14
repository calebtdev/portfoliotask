import React from "react";
import Header from "../components/Header"; // Site header with navigation
import heroImg from "../assets/aboutme.jpeg"; // About page hero image
import { FaGithub } from "react-icons/fa"; // GitHub icon
import Contact from "../components/Contact"; // Contact section
import Capabilities from "../components/Capabilities"; // Capabilities/skills section
import Experience from "../components/Experience"; // Work experience section
import { FiDownload } from "react-icons/fi"; // Feather icon
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    // Main container with a max width for large screens and centered content
    <main className="max-w-[1400px] mx-auto ">
      {/* Top header/navigation bar */}
      <Header />

      {/* About intro section */}
      <section className="flex flex-col md:grid grid-cols-2 gap-8  px-6 md:px-30 pt-[7rem] md:pt-[12rem]">
        {/* Left column: About page title */}
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold">ABOUT ME</h1>
        </div>

        {/* Right column: About description + action buttons */}
        <div className="flex flex-col gap-3">
          {/* Short professional summary */}
          <h3 className="text-xl font-semibold">
            I am an Application Support Engineer and Site Reliability Engineer
            with experience supporting enterprise-level applications and
            infrastructure.
          </h3>

          <p className="text-[#C7C7C7] mt-2">
            My expertise spans incident management, performance monitoring, root
            cause analysis, and automation. I have worked extensively with tools
            like Dynatrace, Grafana, AWS CloudWatch, and CI/CD pipelines to
            ensure system reliability and scalability. Passionate about
            optimizing uptime and reducing operational overhead, I thrive at the
            intersection of software, systems, and support.
          </p>

          {/* Action buttons (resume, LinkedIn, GitHub) */}
          <div>
            <div className="flex md:justify-start items-center gap-4 mt-6">
              {/* Resume download button */}
              <a
                className="flex items-center gap-2 text-black bg-[#D3E97A] py-2 px-6 text-base md:text-lg rounded-full font-medium hover:opacity-90 transition"
                href={resume}
                download="Caleb_Adebayo.pdf"
              >
                Download Resume{" "}
                <span className="font-bold text-2xl">
                  <FiDownload size={20} />
                </span>
              </a>

              {/* LinkedIn button (placeholder "in" for now) */}
              <a
                className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center  justify-center rounded-full hover:bg-black transition"
                href="https://www.linkedin.com/in/calebtol/"
                target="_blank"
              >
                in
              </a>

              {/* GitHub button with icon */}
              <a
                className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center justify-center rounded-full hover:bg-black transition"
                target="_blank"
                href="https://github.com/calebtolorunleke"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image section */}
      <div className="flex items-center justify-center px-6 md:px-30 py-[5rem]">
        <img
          src={heroImg}
          alt="Hero"
          className="rounded-2xl shadow-lg w-full max-h-[40rem] object-center"
        />
      </div>

      {/* Capabilities/skills section */}
      <Capabilities />

      {/* Divider line */}
      <hr className="text-gray-600 my-[2rem] md:my-[3rem]" />

      {/* Work experience section */}
      <Experience />

      {/* Divider line */}
      <hr className="text-gray-600 my-[2rem] md:my-[3rem]" />

      {/* Contact section */}
      <Contact />
    </main>
  );
};

export default About;
