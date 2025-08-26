import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="max-w-[1250px] mx-auto ">
      <Header />
      <Hero />
      <hr className="text-gray-600" />
    </main>
  );
};

export default Home;
