import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center sm:items-start justify-center overflow-hidden"
    >
      {/* Framed Image */}
      <div className="w-72 sm:w-96 mb-12 sm:mb-0 sm:absolute sm:top-8 sm:right-8 z-10">
        <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 group">
          {/* Fake Terminal Top Bar */}
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Image */}
          <img
            src={`${process.env.PUBLIC_URL}/mohammedAtieh.png`}
            alt="Mohammad Atieh"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:translate-y-full"
          />

          {/* Hover Code */}
          <div className="absolute inset-0 p-4 text-green-400 font-mono text-xs sm:text-sm bg-gray-900 opacity-0 group-hover:opacity-100 transition duration-500">
            <p>{`const developer = {`}</p>
            <p className="ml-4">{`name: "Mohammad Atieh",`}</p>
            <p className="ml-4">{`role: "Full Stack Developer",`}</p>
            <p className="ml-4">{`skills: ["Java", "React", "Spring"]`}</p>
            <p>{`}`}</p>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-10 sm:mt-20 max-w-3xl z-0 text-center sm:text-left">
        <p className="text-sm text-indigo-400 font-mono">&lt;html&gt;</p>
        <p className="text-sm text-indigo-400 font-mono pl-4">&lt;body&gt;</p>

        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-200 font-mono mb-4 pl-4 leading-tight">
          &lt;h1&gt; Hi, I’m Mohammad Atieh &lt;/h1&gt;
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-6 pl-8 font-mono">
          &lt;p&gt; Full Stack Developer building modern web and mobile apps &lt;/p&gt;
        </p>

        <p className="text-sm text-indigo-400 font-mono pl-4">&lt;/body&gt;</p>
        <p className="text-sm text-indigo-400 font-mono">&lt;/html&gt;</p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 pl-4">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg border border-red-800 transition-transform transform hover:scale-105"
          >
            🚨 Contact Me
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/MohammedAtieh_Resume.pdf`}
            download
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg border border-indigo-800 transition-transform transform hover:scale-105"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
