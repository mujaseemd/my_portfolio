import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              <span className="text-blue-400">Portfolio</span>
            </h2>
            <p className="mt-2 text-gray-400">
              Creating beautiful web experiences
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-gray-400">
              Made with <Heart size={16} className="mx-1 text-red-500" /> using React & TailwindCSS
            </p>
            <p className="mt-2">
              &copy; {currentYear} Mujaseem D. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;