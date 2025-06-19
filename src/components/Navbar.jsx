import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ isDark, toggleDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Simple direct check without throttling
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-2" : "py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
          {/* Logo and name on the left when not scrolled */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md mr-3">
              BL
            </div>
          </div>
          
          {/* Dark mode toggle on the right when not scrolled */}
          <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
        </div>
        
        {/* Centered pill navigation */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
          isScrolled 
            ? "top-0 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg rounded-full px-4 sm:px-8 py-3 border border-white/20" 
            : "top-1/2 -translate-y-1/2"
        }`}>
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
          <div className="hidden lg:flex items-center">
            {isScrolled && (
              <div className="flex items-center mr-6 animate-slideInLeft">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  BL
                </div>
              </div>
            )}
            
            <div className="flex space-x-4 items-center">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
              >
                Home
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
              >
                Experience
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
              >
                Contact
              </Link>
            </div>
            
            {isScrolled && (
              <div className="ml-6 animate-slideInRight">
                <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg lg:hidden w-[calc(100vw-2rem)] max-w-[320px]">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-70}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="block px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-2 px-4">
            <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;