import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu (hamburger) and close (X) icons

const Header = () => {
  // State to track whether the mobile menu is open or closed
  const [menuButton, setmenuButton] = useState(false);

  // Function to toggle the mobile menu (open/close)
  const openMenu = () => {
    setmenuButton(!menuButton);
  };

  return (
    // Header container with padding, flex layout, and text styling
    <header className="relative py-6 flex flex-row text-[#C7C7C7] items-center justify-between px-6 md:px-12">
      {/* Logo / Name linking back to homepage */}
      <a className="uppercase font-bold text-xl md:text-2xl" href="/">
        caleb adebayo
      </a>

      {/* Desktop navigation links (hidden on small screens) */}
      <div className="hidden md:flex flex-row items-center gap-[5rem]">
        <a href="/#project">Work</a>
        <a href="/about">About</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile menu toggle button (hamburger / close icon) */}
      <button
        className="text-2xl font-bold md:hidden"
        value={menuButton}
        onClick={openMenu}
      >
        {/* Switch between menu and close icon depending on state */}
        {menuButton ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu (visible only when menuButton is true) */}
      {menuButton && (
        <div className="absolute md:hidden w-full left-0 flex flex-col justify-center items-center mt-[13rem] gap-[2rem] mx-auto bg-black py-5">
          <a href="#project">Work</a>
          <a href="/about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
