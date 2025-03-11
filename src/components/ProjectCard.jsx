import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function ProjectCard({ title, image, description, skills = [], date }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = ''; // Re-enable scrolling when modal closes
    };
  }, [isModalOpen]);

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 transition-opacity duration-300"
      onClick={closeModal}
    >
      <div 
        className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl w-full max-w-2xl shadow-[0_10px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.4)] animate-modalIn overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-5 border-b border-gray-200/50 dark:border-gray-700/50">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
              {date && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
              )}
            </div>
            <button 
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-5 space-y-5">
            {/* Image container - removed background and border */}
            <div className="flex justify-center">
              <img 
                src={image} 
                alt={title} 
                className="max-w-full max-h-56 object-contain rounded-lg"
              />
            </div>
            
            {/* Skills tags */}
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100/70 dark:bg-blue-900/50 text-blue-700 dark:text-blue-100 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
            
            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="project-card backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <div className="p-4">
          <div className="relative h-48 w-full mb-4">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
        </div>
      </div>
      {isModalOpen && createPortal(modalContent, document.body)}
    </>
  );
}

export default ProjectCard;