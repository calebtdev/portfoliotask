import React from "react";
// Import reusable components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

// Main Home page component
const Home = () => {
  return (
    // Container for the whole page, centered with a max width
    <main className="max-w-[1400px] mx-auto">
      {/* Top navigation bar */}
      <Header />

      {/* Hero section (intro / landing area) */}
      <Hero />

      {/* Divider line */}
      <hr className="text-gray-600 py-3" />

      {/* Projects showcase section */}
      <Projects />

      {/* Divider line with larger spacing for medium+ screens */}
      <hr className="text-gray-600 my-[2rem] md:my-[5rem]" />

      {/* About section (bio or details about you/company) */}
      <About />

      {/* Divider line with spacing */}
      <hr className="text-gray-600 my-[2rem] md:my-[3rem]" />

      {/* Contact form or info */}
      <Contact />
    </main>
  );
};

export default Home;
