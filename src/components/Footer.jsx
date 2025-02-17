import React from "react";
import Typewriter from "./Typewriter";

function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-center">
          <div className="bg-white/90 dark:bg-gray-900/95 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-gray-900 dark:text-white">
            <span className="text-xl cursor-pointer hover:scale-110 transform transition-transform duration-200">
              📍
            </span>
            <Typewriter text="Boulder, CO" delay={50} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 