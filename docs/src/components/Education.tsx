import React from 'react';
import SectionTitle from './common/SectionTitle';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      institution: 'PES UNIVERSITY, BENGALURU',
      duration: 'Nov 2022 - Present',
      description: 'Pursuing Computer Science and Engineering with focus on data science and machine learning.',
      gpa: '8.59'
    },
    {
      degree: 'Pre-University - PCMB',
      institution: 'SREE VIJAYA PU COLLEGE, CHINTAMANI',
      duration: 'Jun 2020 - Aug 2022',
      description: 'Completed pre-university education with focus on Physics, Chemistry, Mathematics, and Biology.',
      gpa: '98.5%'
    },
    {
      degree: 'Schooling',
      institution: 'SFS HIGH SCHOOL, CHINTAMANI',
      duration: 'Jun 2011 - Jul 2020',
      description: 'Completed primary and secondary education with strong academic performance.',
      gpa: '97.12%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" subtitle="Academic Background" />

        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-900 transform -translate-x-1/2"></div>

          {educationData.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white items-center justify-center z-30">
                <GraduationCap size={24} />
              </div>

              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} relative z-20`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-100 mb-1">{item.degree}</h3>
                  <h4 className="text-lg text-blue-400 font-medium mb-2">{item.institution}</h4>
                  
                  <div className="flex items-center mb-4 text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  
                  {item.gpa && (
                    <div className="text-sm font-medium text-gray-400">
                      Score: <span className="text-blue-400">{item.gpa}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;