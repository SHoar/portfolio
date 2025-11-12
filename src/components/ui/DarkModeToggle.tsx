import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex items-center justify-center p-2 rounded-lg 
                 bg-white/10 dark:bg-white/5
                 border border-white/20 dark:border-white/10
                 hover:bg-white/20 dark:hover:bg-white/10
                 transition-[background-color,border-color] duration-300"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        <SunIcon 
          className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-opacity duration-300 ${
            darkMode ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <MoonIcon 
          className={`absolute inset-0 w-6 h-6 text-blue-300 transition-opacity duration-300 ${
            darkMode ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;

