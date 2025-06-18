import React, { useRef } from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';
import workdayLogo from '../assets/workday_logo.jpeg';
import infleqtionLogo from '../assets/infq_logo.jpeg';
import stanfordLogo from '../assets/stanford_childrens_health_logo.jpeg';

function Experience() {
  const titleRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const containerRef = useRef(null);

  // Experience data
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Workday",
      logo: workdayLogo,
      location: "Boulder, CO",
      date: "May 2024 - August 2024",
      description: ["Built APIs for LE customers to integrate Workday VNDLY with third party systems"],
      skills: ["Django", "React", "PostgreSQL"], 
      href: "https://www.workday.com/"
    },
    {
      title: "Software Engineer Intern",
      company: "Infleqtion",
      logo: infleqtionLogo,
      location: "Boulder, CO",
      date: "June 2023 - August 2023",
      description: ["Simulating quantum matter in Python, to be used by educators and researchers around the world"], 
      skills: ["Python", "NumPy", "Matplotlib"], 
      href: "https://www.infleqtion.com/"
    },
    {
      title: "Data Science Intern",
      company: "Stanford Children's Health",
      logo: stanfordLogo,
      location: "Palo Alto, CA",
      date: "May 2022 - August 2022",
      description: ["Developed and tested ML models on real pediatric data for applications in cardiology"],
      skills: ["TensorFlow", "Scikit-learn", "Matplotlib"], 
      href: "https://www.stanfordchildrens.org/"
    },
  ];

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
          className="space-y-8 opacity-0"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <a 
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </a>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.company}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">{exp.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.date}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((line, index) => (
                        <p key={index} className="text-gray-700 dark:text-gray-300 mb-2">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    )}
                  </div>
                  
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience; 
