// src/components/Skills.js
import React from 'react';
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaJsSquare,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiSpring,
  SiReactrouter,
  SiJquery,
  SiPostman,
  SiGooglemaps,
  SiSqlite,
} from 'react-icons/si';

const skills = [
  {
    name: 'React',
    description: 'Frontend library for building UIs',
    icon: <FaReact className="text-sky-400 text-5xl" />,
    role: 'Frontend',
  },
  {
    name: 'Java',
    description: 'Backend programming language',
    icon: <FaJava className="text-orange-500 text-5xl" />,
    role: 'Backend',
  },
  {
    name: 'Spring',
    description: 'Java-based web framework',
    icon: <SiSpring className="text-green-500 text-5xl" />,
    role: 'Backend',
  },
  {
    name: 'SQL',
    description: 'Database language for data management',
    icon: <FaDatabase className="text-yellow-300 text-5xl" />,
    role: 'Database',
  },
  {
    name: 'Git',
    description: 'Version control system',
    icon: <FaGitAlt className="text-red-500 text-5xl" />,
    role: 'Tools',
  },
  {
    name: 'React Native',
    description: 'Mobile app development with React',
    icon: <SiReactrouter className="text-purple-400 text-5xl" />,
    role: 'Mobile',
  },
  {
    name: 'JavaScript',
    description: 'Core web development language',
    icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
    role: 'Frontend',
  },
  {
    name: 'jQuery',
    description: 'DOM manipulation library',
    icon: <SiJquery className="text-blue-300 text-5xl" />,
    role: 'Frontend',
  },
  {
    name: 'REST APIs',
    description: 'Interface for frontend-backend communication',
    icon: <SiPostman className="text-orange-400 text-5xl" />,
    role: 'API',
  },
  {
    name: 'Google Maps API',
    description: 'Map integration for visual data',
    icon: <SiGooglemaps className="text-green-300 text-5xl" />,
    role: 'GIS / API',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-500">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                {skill.icon}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 rounded-xl flex flex-col items-center justify-center text-center px-4 transition duration-300 ease-in-out">
                <h3 className="text-lg font-semibold text-indigo-300 mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-200">{skill.description}</p>
                <span className="mt-2 text-xs text-green-400 italic">{skill.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
