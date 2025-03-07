import React from "react";

function Footer() {
  return (
    <footer className="py-12 mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Location */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 shadow-md text-gray-900 dark:text-white">
            <span className="text-xl">📍</span>
            <span>Boulder, CO</span>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {new Date().getFullYear()} Benjamin Lipman • Software Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 