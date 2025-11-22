import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { User, Calendar, MapPin, Mail, Phone } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate about creating <span className="text-primary">User-Centric</span> Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am Bui Quang Huy, a dedicated Technology student with a career focus on Frontend Web, Mobile App development, and Graphic Design. 
              My journey involves practical experience with modern frameworks like React and React Native. 
              I pride myself on having good aesthetic thinking, logical problem-solving skills, and a proactive attitude toward learning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My goal is to become a professional programmer, contributing to high-quality digital products that offer optimal user experiences.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              Personal Details
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                  <p className="font-medium text-gray-900 dark:text-white">{PERSONAL_INFO.name}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</p>
                  <p className="font-medium text-gray-900 dark:text-white">{PERSONAL_INFO.dob}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                  <p className="font-medium text-gray-900 dark:text-white">{PERSONAL_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium text-gray-900 dark:text-white hover:text-primary break-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-white">{PERSONAL_INFO.phone}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};