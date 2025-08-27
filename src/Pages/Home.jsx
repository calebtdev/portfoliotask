import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="max-w-[1400px] mx-auto ">
      <Header />
      <Hero />
      <hr className="text-gray-600 py-3" />
      <Projects />
      <hr className="text-gray-600 my-[2rem] md:my-[5rem]" />
      <About />
      <hr className="text-gray-600 my-[2rem] md:my-[3rem]" />
      <Contact />
    </main>
  );
};

export default Home;
