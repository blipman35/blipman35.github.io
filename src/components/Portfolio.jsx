import React from "react";
import ProjectCard from "./ProjectCard";
import draftImage from '../assets/draft.png';
import orchardImage from '../assets/orchard.png';
import arrhythmiaImage from '../assets/arrhythmia.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const projects = [
  {
    title: "NBA Draft Decoded",
    image: draftImage,
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "Orchard Odyssey",
    image: orchardImage,
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "Arrhythmia Detection",
    image: arrhythmiaImage,
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "Localizing Accessory Pathway in WPW Patients",
    image: "path/to/image4.jpg",
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "MVP.ai",
    image: "path/to/image5.jpg",
    description: "this is a description this is a description this is a description this is a description."
  },
  {
    title: "BuffHeard",
    image: "path/to/image6.jpg",
    description: "this is a description this is a description this is a description this is a description."
  },
];

function Portfolio() { 
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return ( 
    <div id="projects" className="flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16">
        <h2 
          ref={titleRef} 
          className="text-4xl font-bold mb-12 opacity-0 dark:text-white"
        >
          Projects
        </h2>
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 