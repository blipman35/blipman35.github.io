import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function DarkModeToggle({ isDark, toggleDark }) {
  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <SunIcon className="w-6 h-6 text-white" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}

export default DarkModeToggle;