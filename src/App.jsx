// import React, { useState, useEffect } from "react"; 
// import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
// import Experience from "./components/Experience";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   const [isDark, setIsDark] = useState(() => { // State for dark mode
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark';
//   });

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   const toggleDark = () => setIsDark(!isDark); // toggle for dark mode

//   return (
//     <div className="App min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black font-sans p-2 sm:p-4 transition-colors duration-200">
//       <div className="max-w-7xl mx-auto min-h-screen bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl rounded-2xl transition-colors duration-200">
//         <Navbar isDark={isDark} toggleDark={toggleDark} />
//         <div className="space-y-24">
//           <Intro />
//           <div id="experience">
//             <Experience />
//           </div>
//           <div id="projects">
//             <Portfolio />
//           </div>
//           <div id="contact">
//             <Contact />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App;
import React, { useState, useEffect } from "react"; 
import Typewriter from "./components/Typewriter";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
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

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            <Typewriter text="Coming soon..." delay={150} />
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            <Typewriter text="Ben Lipman's Portfolio" delay={100} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
