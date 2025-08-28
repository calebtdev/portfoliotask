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
          I am a Full-Stack Developer with a strong background in frontend
          development, application support, and automation
        </h1>

        {/* About description paragraph */}
        <h3 className="text-[#C7C7C7]">
          I am a passionate Full-Stack Developer with a strong background in
          frontend development, application support, and automation. I enjoy
          building modern, responsive, and scalable web applications that
          deliver seamless user experiences. With hands-on experience in
          React.js, Node.js, Express, MongoDB, and Tailwind CSS, I thrive at the
          intersection of clean design and efficient code.
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
