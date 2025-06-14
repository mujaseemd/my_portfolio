import React from 'react';
import { User, MapPin, Calendar, Code, Briefcase, Globe } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import AboutImage from '../assets/Mujaseem.png'; // <-- Import your image

const About: React.FC = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Mujaseem D' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Bengaluru, Karnataka, India' },
    { icon: <Code size={20} />, label: 'Role', value: 'Data Analyst & Data Scientist' },
    { icon: <Briefcase size={20} />, label: 'Open to', value: 'Opportunities' },
    { icon: <Globe size={20} />, label: 'Languages', value: 'English, Hindi, Kannada' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="My Introduction" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Updated: Replace placeholder with image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-96 md:h-auto">
            <img
              src={AboutImage}
              alt="About"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I am a passionate Data Analyst and Data Scientist with expertise in Machine Learning, Data Science, 
              and Computer Vision. My focus is on developing innovative solutions using Python, SQL, and modern data science frameworks.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I believe in writing efficient, scalable code and staying updated with the latest industry trends 
              and technologies. My goal is to leverage data-driven insights to solve complex business problems 
              and create impactful solutions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-blue-400">{info.icon}</div>
                  <div>
                    <span className="block text-gray-400 text-sm">{info.label}:</span>
                    <span className="font-medium text-gray-200">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/10Mb-SfCZbW_4RxROag6Ra-hVLLMOAjTN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-all hover:bg-blue-700 hover:shadow-md"
            >
              Download CV
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
