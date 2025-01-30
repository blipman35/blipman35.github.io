import React from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ isDark, toggleDark }) {
    return (
      <nav className="fixed left-1/2 top-6 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg rounded-full px-8 py-3 flex space-x-8 items-center border border-white/20 max-w-[calc(100%-2rem)]">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Home
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Contact
        </Link>
        <div className="ml-4">
          <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
        </div>
      </nav>
    );
  }
  
  export default Navbar;