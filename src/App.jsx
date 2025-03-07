import React, { useState, useEffect } from "react"; 
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UnderConstruction from './components/UnderConstruction';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to true if no theme is saved
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark); // toggle for dark mode

  const isUnderConstruction = false; // Toggle this when ready to launch

  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 font-sans transition-colors duration-200">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      
      <main className="py-8">
        <div className="space-y-32">
          <Intro />
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Portfolio />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
