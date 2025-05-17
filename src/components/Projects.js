// src/components/Projects.js
import React from 'react';
import { MapPin, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Telecom Asset Management System',
    type: 'Enterprise Internal Tool',
    description: 'A comprehensive internal web application for managing telecom infrastructure, assets, and GIS views used by multiple departments.',
    responsibilities: [
      'Implemented backend services using Java and Spring MVC with MVC architecture.',
      'Integrated Google Maps API for real-time GIS visualizations of assets.',
      'Built interactive Form, Tree, and GIS views with jQuery and Ajax.',
      'Debugged and optimized backend queries for high performance.'
    ],
    icon: <MapPin className="text-indigo-400 w-6 h-6" />,
    image: '/images/telecom.png',
  },
  {
    title: 'E-Commerce Web & Mobile App',
    type: 'Cross-Platform Shopping App',
    description: 'A complete shopping platform with a mobile app and web dashboard for customer interaction, inventory tracking, and order processing.',
    responsibilities: [
      'Developed mobile application using React Native for both iOS and Android.',
      'Connected mobile front-end to Java-based backend services.',
      'Collaborated on the admin web portal for managing inventory and orders.',
      'Ensured secure, responsive, and fast-performing user experience.'
    ],
    icon: <Smartphone className="text-indigo-400 w-6 h-6" />,
    image: '/images/ecommerce.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-500 text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-2">
                {project.icon}
                <h3 className="text-2xl font-semibold text-indigo-400">{project.title}</h3>
              </div>

              {/* Type */}
              <p className="text-sm text-indigo-300 italic mb-1">{project.type}</p>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Responsibilities */}
              <h4 className="text-indigo-400 font-medium mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                {project.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
