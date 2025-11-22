import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { ArrowDown, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-semibold tracking-wide">
            Available for work
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#contact"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a 
              href={PERSONAL_INFO.cvLink}
              download
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-6 pt-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
             {/* Decorative circles */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img 
                src={PERSONAL_INFO.avatar} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};