// src/components/About.js
import React from 'react';
import { Briefcase, GraduationCap, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-100 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-500 text-center mb-12">About Me</h2>

        {/* Summary */}
        <div className="bg-gray-900 rounded-xl p-6 mb-10 shadow-md border border-gray-800">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            I’m a <span className="text-white font-semibold">Full Stack Developer</span> with 3+ years of experience building robust, scalable web and mobile applications.
            I specialize in <span className="text-white font-semibold">Java</span>, <span className="text-white font-semibold">Spring</span>, and <span className="text-white font-semibold">jQuery</span>,
            and love crafting efficient backend systems with elegant user interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800">
            <div className="flex items-center gap-3 mb-4 text-indigo-400">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white">Web Development – Almensaah</h4>
              <p className="text-sm text-gray-400 mb-2">Aug 2022 – Present / Remote</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Built and maintained web apps using Java, Spring MVC, jQuery, and Ajax</li>
                <li>Integrated GIS views and asset life cycle tracking features</li>
                <li>Implemented MVC architecture and optimized performance</li>
                <li>Designed database interactions and visual reporting (maps/charts)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white">Mobile Development – Almensaah</h4>
              <p className="text-sm text-gray-400 mb-2">Oct 2024 – Present / Remote</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Developed cross-platform mobile app using React Native</li>
                <li>Integrated backend Java services for real-time updates</li>
                <li>Optimized UI performance for Android and iOS</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800">
            <div className="flex items-center gap-3 mb-4 text-indigo-400">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <h4 className="text-white font-semibold">Masters of Science in Computer and Communication Engineering</h4>
                <p className="text-gray-400">Lebanese International University, Beqaa</p>
                <p className="text-gray-500">Graduated: June 2021</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">Bachelor of Science in Communication Engineering</h4>
                <p className="text-gray-400">Lebanese International University, Beqaa</p>
                <p className="text-gray-500">Graduated: July 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
