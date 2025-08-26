import React from "react";
import heroImg from "../assets/logo.jpg";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" flex flex-col gap-[2rem] md:grid grid-cols-2 items-center md:gap-[3rem]  py-[3rem] px-6 md:px-12">
      <div className="flex flex-col gap-[1rem]">
        <h1 className="flex flex-col uppercase font-bold text-2xl md:text-3xl">
          hi, i am <span>caleb adebayo.</span>{" "}
        </h1>
        <p className="text-[#C7C7C7]">
          A Full-Stack Developer skilled in React, Node.js, Express, and
          MongoDB, I build scalable web applications with clean, efficient code
          and modern UI design.
        </p>
        <div className="flex flex-row items-center gap-[1rem] mt-[2rem]">
          <button className="flex flex-row gap-[1rem] text-black bg-[#D3E97A] py-1 px-[1rem] text-xl rounded-full">
            contact me <span>•</span>
          </button>
          <button className="bg-[#222222] text-[#D3E97A] h-[2rem] w-[2rem] rounded-full">
            in
          </button>
          <button className="bg-[#222222] flex items-center justify-center text-[#D3E97A] h-[2rem] w-[2rem] rounded-full">
            <FaGithub size={20} />
          </button>
        </div>
      </div>

      <img
        src={heroImg}
        alt="Hero"
        className="rounded-3xl max-w-full md:max-w-[30rem] max-h-[25rem] md:max-h-[33rem] object-cover"
      />
    </section>
  );
};

export default Hero;
