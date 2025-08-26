import React from "react";
import heroImg from "../assets/logo.jpg";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 py-12 px-6 md:px-12 overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-4 text-left">
        <h1 className="uppercase font-bold text-3xl md:text-4xl leading-snug">
          hi, i am <span className="block text-[#D3E97A]">caleb adebayo.</span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          A Full-Stack Developer skilled in React, Node.js, Express, and
          MongoDB, I build scalable web applications with clean, efficient code
          and modern UI design.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex md:justify-start items-center gap-4 mt-6">
          <button className="flex items-center gap-2 text-black bg-[#D3E97A] py-2 px-6 text-base md:text-lg rounded-full font-medium hover:opacity-90 transition">
            Contact Me <span>•</span>
          </button>

          <button className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center justify-center rounded-full hover:bg-black transition">
            in
          </button>

          <button className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center justify-center rounded-full hover:bg-black transition">
            <FaGithub size={20} />
          </button>
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
