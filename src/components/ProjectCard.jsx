import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function ProjectCard({ title, image, description }) {
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
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <button 
              onClick={closeModal}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ×
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-96 object-cover rounded-xl mb-6"
            />
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
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
        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer group h-full flex flex-col"
      >
        <div className="relative h-48 flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
        </div>
      </div>
      {isModalOpen && createPortal(modalContent, document.body)}
    </>
  );
}

export default ProjectCard;