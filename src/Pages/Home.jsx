import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <main className="max-w-[1250px] mx-auto ">
      <Header />
      <Hero />
      <hr className="text-gray-600 py-3" />
      <Projects />
    </main>
  );
};

export default Home;
