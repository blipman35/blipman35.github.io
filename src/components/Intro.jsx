import React from "react";
import headshot from '../assets/headshot.png';


function Intro() { 
  return ( 
    <div className="flex items-center justify-center flex-col pt-20 pb-6">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto w-full px-6 lg:px-20">
        <div className="md:flex-grow">
          <h1 className="font-mono text-3xl lg:text-5xl mb-1 md:mb-3 font-semibold">
            Benjamin Lipman
          </h1>
          <div className="font-mono text-base md:text-lg mb-3 font-normal">
            <p>
              Computer Science student at the University of Colorado Boulder
            </p>
            <p>
              Software Engineer Intern at Workday (Summer 2024)
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 self-end md:self-center md:ml-6">
          <img 
            src={headshot}
            alt="Benjamin Lipman"
            className="h-24 w-24 md:h-32 md:w-32 rounded-lg object-cover border-2 border-gray-400"
            style={{ marginTop: '3rem', objectPosition: '55% 35%' }}
          />
        </div>
        
      </div>
    </div>
  )
}

export default Intro;
