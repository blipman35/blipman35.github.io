import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import draftImage from '../assets/draft.png';
import orchardImage from '../assets/orchard.png';
import arrhythmiaImage from '../assets/arrhythmia.png';
import wpwImage from '../assets/wpw.png';
import buffImage from '../assets/buff.png';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: "Orchard Odyssey",
    image: orchardImage,
    description: "A 2D side scrolling game built in Java."
  },
  {
    title: "BuffHeard",
    image: buffImage,
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "Arrhythmia Detection",
    image: arrhythmiaImage,
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "Localizing Accessory Pathway in WPW Patients",
    image: wpwImage,
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "MVP.ai",
    image: "path/to/image5.jpg",
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "NBA Draft Decoded",
    image: draftImage,
    description: "Used bayesian analysis and linear regression to determine if NBA draft order determines career success."
  },
];

function Portfolio() { 
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / 3);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPageProjects = () => {
    const start = currentPage * 3;
    return projects.slice(start, start + 3);
  };

  return ( 
    <div id="projects" className="py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16">
        <h2 
          ref={titleRef} 
          className="text-4xl font-bold mb-12 opacity-0 dark:text-white"
        >
          Projects
        </h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          {currentPage > 0 && (
            <button 
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform duration-200"
              aria-label="Previous page"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          )}
          
          {currentPage < totalPages - 1 && (
            <button 
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform duration-200"
              aria-label="Next page"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          )}

          {/* Cards Container */}
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 opacity-0"
          >
            {getCurrentPageProjects().map((project, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-300 h-full"
              >
                <ProjectCard 
                  title={project.title}
                  image={project.image}
                  description={project.description}
                />
              </div>
            ))}
          </div>
          
          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 