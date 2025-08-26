import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu + Cancel icons

const Header = () => {
  const [menuButton, setmenuButton] = useState(false);

  const openMenu = () => {
    setmenuButton(!menuButton);
  };
  return (
    <header className="relative py-6 flex flex-row text-[#C7C7C7] items-center justify-between px-6 md:px-12">
      <h1 className="uppercase font-bold text-xl md:text-2xl">caleb adebayo</h1>
      <ul className="hidden md:flex flex-row items-center gap-[5rem]">
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button
        className="text-2xl font-bold md:hidden"
        value={menuButton}
        onClick={openMenu}
      >
        {menuButton ? <FiX /> : <FiMenu />}
      </button>

      {/* phone menu  */}
      {menuButton && (
        <ul className="absolute md:hidden w-full left-0 flex flex-col justify-center items-center mt-[13rem] gap-[2rem] mx-auto bg-black py-5">
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
