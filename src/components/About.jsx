import React from "react";
import heroImg from "../assets/logo.jpg"; // Importing an image asset

// About Component
const About = () => {
  return (
    // Main section with responsive layout (flex on small screens, grid on medium+ screens)
    <section className="flex flex-col md:grid md:grid-cols-2 gap-8 px-6 md:px-12">
      {/* Left side content: Title (only visible on medium+ screens) */}
      <div className="hidden md:block">
        <h1 className="text-4xl font-bold uppercase">about me</h1>
      </div>

      {/* Right side content */}
      <div className="flex flex-col gap-3">
        {/* Subheading (only visible on medium+ screens) */}
        <h1 className="text-lg hidden md:block">
          I am an Application Support Engineer and Site Reliability Engineer
          with experience supporting enterprise-level applications and
          infrastructure.
        </h1>

        {/* About description paragraph */}
        <h3 className="text-[#C7C7C7]">
          My expertise spans incident management, performance monitoring, root
          cause analysis, and automation. I have worked extensively with tools
          like Dynatrace, Grafana, AWS CloudWatch, and CI/CD pipelines to ensure
          system reliability and scalability. Passionate about optimizing uptime
          and reducing operational overhead, I thrive at the intersection of
          software, systems, and support.
        </h3>

        {/* Link to learn more about you */}
        <div className="text-[#D3E97A] pb-[2rem] md:pb-[10rem]">
          <a href="/about" className="border-b pb-1">
            MORE ABOUT ME
          </a>
        </div>

        {/* Image (only visible on small screens) */}
        <img
          src={heroImg}
          alt="About image"
          className="md:hidden rounded-2xl max-h-[30rem] object-center"
        />
      </div>
    </section>
  );
};

export default About; // Exporting the component
