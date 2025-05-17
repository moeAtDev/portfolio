

// src/components/Contact.js
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-16 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-indigo-500">Contact Me</h2>
        <p className="mb-10 text-lg">
          Interested in collaborating or have a question? Feel free to reach out to me!
        </p>

       <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Phone className="w-6 h-6 text-indigo-500" />
            <span className="text-lg">(403) 988-3343</span>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Mail className="w-6 h-6 text-indigo-500" />
            <a href="mailto:mohammedatiehdev@gmail.com" className="text-lg hover:underline">
              mohammedatiehdev@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Linkedin className="w-6 h-6 text-indigo-500" />
            <a
              href="https://www.linkedin.com/in/mohammed-atiehh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              linkedin.com/in/mohammed-atiehh
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
