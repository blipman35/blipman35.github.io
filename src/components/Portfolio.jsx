import React, { useState, useRef } from "react";
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
    description: "A 2D side scrolling game built in Java using Swing.",
    skills: ["Java", "Swing", "OOP", "Design Patterns"],
    date: "April 2024"
  },
  {
    title: "BuffHeard",
    image: buffImage,
    description: "An accessible web platform for CU students to socialize, find events, \
                  and connect with each other.",
    skills: ["JavaScript", "Node", "PostgreSQL", "Mapbox", "Azure", "Docker"],
    date: "May 2023"
  },
  // {
  //   title: "Arrhythmia Detection",
  //   image: arrhythmiaImage,
  //   description: "Used a convolutional neural network to detect 10 types of cardiac \
  //                 arrhythmia with >99% accuracy",
  //   skills: ["Python", "Pandas", "TensorFlow", "Matplotlib"],
  //   date: "2020"
  // },
  // {
  //   title: "ML for WPW Detection",
  //   image: wpwImage,
  //   description: "this is a description this is a description this is a description this is a description."
  // },
  // {
  //   title: "MVP.ai",
  //   image: "path/to/image5.jpg",
  //   description: "this is a description this is a description this is a description this is a description."
  // },
  {
    title: "NBA Draft Decoded",
    image: draftImage,
    description: "Predicting NBA career success based on draft position.",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    date: "July 2023"
  },
];

function Portfolio() {
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const containerRef = useRef(null);
  
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };
  
  const getCurrentPageProjects = () => {
    const start = currentPage * projectsPerPage;
    const end = start + projectsPerPage;
    return projects.slice(start, end);
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16" ref={containerRef}>
        <h2 
          ref={titleRef}
          className="text-4xl font-bold mb-12 opacity-0 text-gray-900 dark:text-white"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-8 opacity-0"
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
                  skills={project.skills}
                  date={project.date}
                />
              </div>
            ))}
          </div>
          
          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 