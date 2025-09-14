import React from "react";
import { FaGithub } from "react-icons/fa";
import heroImg from "../assets/logo.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { projectData } from "../data/datarecord";

const Projects = () => {
  return (
    <main className="px-6 md:px-12 overflow-hidden" id="project">
      {/* Section Heading */}
      <div className="flex flex-col md:grid md:grid-cols-2 pb-8 gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl uppercase font-bold">
            featured projects
          </h1>
          <h4 className="text-gray-400">
            Here are some selected projects that demonstrate my expertise and
            passion for Application Support and Site Reliability Engineering
            (SRE).
          </h4>
        </div>
      </div>

      {/* Project Grid */}
      <div className="flex flex-col gap-[5rem]">
        {projectData.map((data, index) => (
          <div
            className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center"
            key={index}
          >
            {/* LEFT: Image card */}
            <div className="flex flex-col gap-4 p-4 bg-[#1A1A1A] items-center rounded-xl w-full">
              <div className="self-start">
                <h1 className="bg-black px-3 py-1 rounded-full text-sm">
                  {data.type}
                </h1>
              </div>
              <div className="flex justify-center py-4">
                <img
                  src={data.img}
                  alt="project img"
                  className="w-full max-w-[25rem] md:h-[20rem] rounded-xl object-center "
                />
              </div>
            </div>

            {/* RIGHT: Details */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold">{data.title}</h1>
                <p className="text-[#C7C7C7] leading-relaxed">{data.detail}</p>
              </div>

              <h3 className="border-b border-[#484848] uppercase pb-2">
                project info
              </h3>
              <div className="text-[#C7C7C7] flex flex-row justify-between border-b border-[#484848] pb-2">
                <span>Category</span>
                <span>{data.category}</span>
              </div>
              <div className="text-[#C7C7C7] flex flex-row justify-between border-b border-[#484848] pb-2">
                <span>Role</span>
                <span>{data.role}</span>
              </div>

              {/* Links */}
              <div className="text-[#D3E97A] flex flex-row gap-6 mt-2">
                <span className="flex flex-row gap-3 items-center uppercase hover:opacity-80 transition text-sm">
                  {data.stakeholders}
                </span>
                {/* <a
                  href={data.github}
                  className="flex flex-row gap-1 items-center uppercase border-b hover:opacity-80 transition text-sm"
                  target="_blank"
                >
                  See on GitHub <FaGithub />
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
