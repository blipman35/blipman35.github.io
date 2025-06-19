import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import draftImage from '../assets/draft.png';
import orchardImage from '../assets/orchard.png';
import arrhythmiaImage from '../assets/arrhythmia.png';
import wpwImage from '../assets/wpw.png';
import buffImage from '../assets/buff.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const projects = [
  {
    title: "Orchard Odyssey",
    image: orchardImage,
    description: "A 2D side scrolling game built in Java using Swing.",
    skills: ["Java", "Swing", "OOP", "Design Patterns"],
    date: "April 2024",
    projectUrl: ""
  },
  {
    title: "BuffHeard",
    image: buffImage,
    description: "An accessible web platform for CU students to socialize, find events, and connect with each other.",
    skills: ["JavaScript", "Node", "PostgreSQL", "Mapbox", "Azure", "Docker"],
    date: "May 2023",
    projectUrl: ""
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
    date: "July 2023",
    projectUrl: ""
  },
];

function Portfolio() {
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return (
    <div className="flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16">
        <h2 
          ref={titleRef}
          className="text-4xl font-bold mb-12 opacity-0 text-gray-900 dark:text-white"
        >
          Projects
        </h2>
        
        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 opacity-0"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              skills={project.skills}
              date={project.date}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 