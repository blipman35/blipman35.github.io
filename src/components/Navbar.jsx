import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ isDark, toggleDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-6 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg rounded-full px-4 sm:px-8 py-3 flex items-center border border-white/20 max-w-[calc(100%-2rem)]">
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex space-x-8 items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Home
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-50}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-50}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-50}
          className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
        >
          Contact
        </Link>
        <div className="ml-4">
          <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg lg:hidden">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
          >
            Home
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-50}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
          >
            Contact
          </Link>
          <div className="mt-2">
            <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;