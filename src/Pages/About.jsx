import React from "react";
import Header from "../components/Header";
import heroImg from "../assets/aboutme.png";
import { FaGithub } from "react-icons/fa";
import Contact from "../components/Contact";

const About = () => {
  return (
    <main className="max-w-[1400px] mx-auto ">
      <Header />
      <section className="grid grid-cols-2 gap-8  px-6 md:px-24 pt-[5rem]">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold">ABOUT ME</h1>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">
            I’m a Full-Stack Developer in Vancouver, Canada, focused on creating
            scalable web applications with React, Next.js, Node.js, and MongoDB.
          </h3>
          <h5 className="text-[#C7C7C7]">
            I’m a Full-Stack Developer in Vancouver, Canada, focused on creating
            scalable web applications with React, Next.js, Node.js, and MongoDB.
            My background in frontend engineering and backend development allows
            me to bridge design and functionality, ensuring seamless user
            experiences and reliable system performance.
          </h5>
          <div>
            <div>
              <div className="flex md:justify-start items-center gap-4 mt-6">
                <button className="flex items-center gap-2 text-black bg-[#D3E97A] py-2 px-6 text-base md:text-lg rounded-full font-medium hover:opacity-90 transition">
                  Download Resume <span className="font-bold text-2xl">•</span>
                </button>

                <button className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center justify-center rounded-full hover:bg-black transition">
                  in
                </button>

                <button className="bg-[#222222] text-[#D3E97A] h-10 w-10 flex items-center justify-center rounded-full hover:bg-black transition">
                  <FaGithub size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center px-6 md:px-24  py-[5rem]">
        <img
          src={heroImg}
          alt="Hero"
          className="rounded-2xl shadow-lg w-full max-h-[35rem] object-center"
        />
      </div>
      <Contact />
    </main>
  );
};

export default About;
