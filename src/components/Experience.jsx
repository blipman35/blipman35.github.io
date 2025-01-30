import React from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';

const experiences = [
  {
    title: "Software Engineer",
    company: "Workday",
    location: "Boulder, CO",
    date: "September 2025",
    description: "Description",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    title: "Software Engineer Intern",
    company: "Workday",
    location: "Boulder, CO",
    date: "May 2024 - August 2024",
    description: "Description ",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    title: "Software Engineer Intern",
    company: "Infleqtion",
    location: "Remote",
    date: "June 2023 - August 2023",
    description: "Description ",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    title: "Data Science Intern",
    company: "Stanford Children's Health",
    location: "Palo Alto, CA",
    date: "May 2022 - August 2022",
    description: "Description ",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
];

function Experience() {
  const titleRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();

  return (
    <div className="flex items-center justify-left py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16">
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
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
              
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