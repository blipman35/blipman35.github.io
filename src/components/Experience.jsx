import React, { useRef, useEffect } from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';

function Experience() {
  const titleRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const containerRef = useRef(null);

  // Experience data
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Workday",
      location: "Boulder, CO",
      date: "May 2024 - August 2024",
      description: ["Worked on VNDLY, Workday's vendor management system.",
                    "Developed new RESTful API using Django, enabling vendors to apply candidates to jobs \
                    and track existing applications, reducing latency by >50% over legacy API version", 
                    ""],
      skills: ["Django", "React", "PostgreSQL"]
    },
    {
      title: "Software Engineer Intern",
      company: "Infleqtion",
      location: "Remote",
      date: "June 2023 - August 2023",
      description: ["Developed a python module for real-time simulation of Oqtant, the world's first cloud-based quantum \
                     matter service", 
                    "Simulator is publicly available and being used by educators, researchers and developers around the world"],
      skills: ["Python", "NumPy", "Matplotlib"]
    },
    {
      title: "Data Science Intern",
      company: "Stanford Children's Health",
      location: "Palo Alto, CA",
      date: "May 2022 - August 2022",
      description: ["Developed machine learning models (CNN using TensorFlow and Random Forest Classifier using SKlearn) to \
                     localize accessory pathway in patients with Wolff-Parkinson-White Syndrome, achieving ~85% accuracy",
                    "Built a new clinical application in python to automatically digitize heart-rate graphs and extract metadata \
                    from long term heart monitor report PDFs"],
      skills: ["TensorFlow", "Scikit-learn", "Matplotlib"]
    },
  ];

  // Handle mouse movement for the gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.experience-card');
      
      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        
        // Calculate relative position within the card
        const relativeX = ((e.clientX - cardRect.left) / cardRect.width) * 100;
        const relativeY = ((e.clientY - cardRect.top) / cardRect.height) * 100;
        
        // Apply gradient based on mouse position regardless of distance
        card.style.background = `radial-gradient(circle at ${relativeX}% ${relativeY}%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))`;
      });
    };
    
    // Set initial gradient for all cards
    const initializeGradients = () => {
      const cards = containerRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach(card => {
          card.style.background = 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))';
        });
      }
    };
    
    // Initialize gradients
    initializeGradients();
    
    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-left py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16" ref={containerRef}>
        <h2 
          ref={titleRef}
          className="text-4xl font-bold mb-12 opacity-0 text-gray-900 dark:text-white"
        >
          Experience
        </h2>
        
        <div 
          ref={experienceRef}
          className="space-y-6 opacity-0"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card backdrop-blur-sm rounded-2xl p-6 shadow-md transition-all duration-300"
            >
              <div className="flex flex-col mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-blue-500 font-semibold">{exp.company}</p>
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {Array.isArray(exp.description) ? (
                  exp.description.map((line, index) => (
                    <span key={index} className="block mb-2">
                      {line}
                    </span>
                  ))
                ) : (
                  exp.description
                )}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience; 
