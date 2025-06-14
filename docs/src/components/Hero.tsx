import React from 'react';
import { Github as GitHub, Linkedin } from 'lucide-react';
import AboutImage from '../assets/Mujaseem.png'; // Make sure the path is correct

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 animate-float-delayed"></div>

      <div className="container mx-auto px-4 z-10 text-center md:text-left md:flex md:items-center md:justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <span className="inline-block text-blue-300 text-lg font-medium mb-2">Hello, I'm</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Mujaseem D</span>
            <span className="text-blue-300">Data Analyst and Data Scientist</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg mb-8">
            I turn complex data into clear, actionable insights that drive smarter decisions.
            With a strong foundation in statistics, machine learning, and data visualization, I help businesses
            uncover patterns, optimize performance, and innovate confidently.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/10Mb-SfCZbW_4RxROag6Ra-hVLLMOAjTN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold transition-transform hover:scale-105">
                Download CV
              </button>
            </a>
          </div>

          <div className="flex mt-8 gap-4 justify-center md:justify-start">
            <a href="https://github.com/mujaseemd" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
              <GitHub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mujaseem-d-264160313/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-2/5">
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white/10">
            <img
              src={AboutImage}
              alt="Mujaseem"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
