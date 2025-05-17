// src/components/Navbar.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // If not installed: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-[length:200%_200%] animate-gradient-x">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white animate-pulse">Mohammad Atieh</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          {["Home", "About", "Projects", "Skills", "Contact"].map((text, index) => (
            <li key={index}>
              <a
                href={`#${text.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-3">
          {["Home", "About", "Projects", "Skills", "Contact"].map((text, index) => (
            <a
              key={index}
              href={`#${text.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block hover:text-indigo-400"
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
