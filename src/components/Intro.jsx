import React, { useState } from "react";
import headshot from '../assets/lipman_headshot.png';
import Typewriter from "./Typewriter";

const emojis = ["👋", "😎", "🚀", "💻", "🌟", "🎨", "🤖", "👾", "🌍"] // emojis for randomizing the intro

function Intro() { 
  const [isModalOpen, setIsModalOpen] = useState(false); // modal for photo gallery
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]); // current emoji for randomizing the intro

  // function to change the current emoji to a random emoji
  const changeEmoji = () => {
    const filteredEmojis = emojis.filter(emoji => emoji !== currentEmoji); // ensure random emoji is not the same as the current one
    const randEmoji = filteredEmojis[Math.floor(Math.random() * filteredEmojis.length)];
    setCurrentEmoji(randEmoji);
  }

  // photos for photo gallery
  const photos = [
    { src: headshot, alt: "My Headshot" },
    // { src: photo2, alt: "Description 2" },
    // { src: photo3, alt: "Description 3" },
  ];

  // close the photo gallery modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return ( 
    <div id="home" className="flex items-center justify-center min-h-screen px-4 animate-fadeIn">  {/*home section */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16"> {/* container for the intro */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"> {/* flex container for the intro */}
          <div className="flex-1 space-y-6 text-center md:text-left"> {/* text container for the intro */}
            <h1 className="font-mono text-4xl lg:text-6xl mb-1 md:mb-3 font-bold dark:text-white"> {/* title for the intro */}
              <span 
                onClick={changeEmoji} // change the current emoji on click
                className="cursor-pointer hover:scale-110 inline-block transition-transform duration-200" // hover effect for the emoji
              >
                {currentEmoji}
              </span>
              <Typewriter text=" Benjamin Lipman" delay={150} /> {/* typewriter effect for the name */}
            </h1>
            <div className="font-mono text-sm sm:text-base lg:text-lg mb-3 md:mb-5 text-gray-700 dark:text-gray-300">
              <p className="mb-2">
                <Typewriter text="Software Engineer @ Workday (Incoming)" delay={100} />
              </p>
              <p>
                <Typewriter text="B.A. in Computer Science from The University of Colorado Boulder" delay={80} />
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div 
              className="relative group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src={headshot}
                alt="Benjamin Lipman"
                className="relative h-48 w-48 md:h-56 md:w-56 rounded-2xl object-cover shadow-xl hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-gray-700"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <img 
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Intro;
