import React from 'react';

function ProjectCard({ title, image, description, skills = [], date, projectUrl }) {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 h-full"
    >
      {/* Project Image */}
      <div className="relative h-32 w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-t-2xl"
          loading="lazy"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-4">
        {/* Header with title and date */}
        <div className="mb-2">
          <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white line-clamp-1">{title}</h3>
          {date && (
            <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
          )}
        </div>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">{description}</p>
        
        {/* Skills pills */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100/70 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100/70 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                +{skills.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}

export default ProjectCard;