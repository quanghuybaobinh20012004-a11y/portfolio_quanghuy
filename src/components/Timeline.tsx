import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { GraduationCap, Briefcase } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <div key={item.id} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Icon Node */}
                <div 
                  className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 shadow-lg ${
                    item.type === 'education' ? 'bg-primary' : 'bg-amber-500'
                  }`}
                >
                  {item.type === 'education' ? (
                    <GraduationCap className="w-5 h-5 text-white" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Content Spacer for desktop layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border-l-4 hover:shadow-xl transition-shadow ${
                    item.type === 'education' ? 'border-primary' : 'border-amber-500'
                  }`}>
                    <span className={`inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase rounded-full ${
                      item.type === 'education' 
                        ? 'text-primary bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-amber-600 bg-amber-50 dark:bg-amber-900/20'
                    }`}>
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <h4 className="text-md font-medium text-gray-500 dark:text-gray-400 mb-3">{item.organization}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};