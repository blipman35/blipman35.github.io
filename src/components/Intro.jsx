import React, { useState, useEffect, useRef } from "react";
import headshot from '../assets/lipman_headshot.png';
import Typewriter from "./Typewriter";

const emojis = ["👾", "👋", "😎", "🚀", "🌟", "🎨", "🤖", "🌍", "👨‍💻", "🕴️"] // emojis for randomizing the intro

function Intro() { 
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]); // current emoji for randomizing the intro
  const gradientRef = useRef(null);

  // function to change the current emoji to a random emoji
  const changeEmoji = () => {
    const filteredEmojis = emojis.filter(emoji => emoji !== currentEmoji); // ensure random emoji is not the same as the current one
    const randEmoji = filteredEmojis[Math.floor(Math.random() * filteredEmojis.length)];
    setCurrentEmoji(randEmoji);
  }

  // Handle mouse movement for the gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gradientRef.current) return;
      
      const rect = gradientRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Convert to percentage
      const xPercent = Math.floor((x / rect.width) * 100);
      const yPercent = Math.floor((y / rect.height) * 100);
      
      // Update the gradient position
      gradientRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))`;
    };
    
    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ( 
    <div id="home" className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16 relative"> 
        {/* Interactive gradient background - positioned relative to the content container */}
        <div 
          ref={gradientRef}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 backdrop-blur-sm rounded-3xl"
        ></div>
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 py-16 relative z-10"> 
          <div className="flex-1 space-y-6 text-center md:text-left"> {/* text container for the intro */}
            <h1 className="font-mono text-4xl lg:text-6xl mb-1 md:mb-3 font-bold dark:text-white"> {/* title for the intro */}
              <span 
                onClick={changeEmoji} // change the current emoji on click
                className="cursor-pointer hover:scale-125 inline-block transition-transform duration-200" // hover effect for the emoji
              >
                {currentEmoji}
              </span>
              <Typewriter text=" Benjamin Lipman" delay={150} /> {/* typewriter effect for the name */}
            </h1>
            <div className="font-mono text-sm sm:text-base lg:text-lg mb-3 md:mb-5 text-gray-700 dark:text-gray-300">
              <p className="mb-2">
                <Typewriter text="(Incoming) Software Engineer @ Workday" delay={50} />
              </p>
              <p>
                <Typewriter text="B.A. in Computer Science @ The University of Colorado Boulder" delay={30} />
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-70"></div>
              <img 
                src={headshot}
                alt="Benjamin Lipman"
                className="relative h-48 w-48 md:h-56 md:w-56 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
