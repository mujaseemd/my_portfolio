import React, { useState } from 'react';
import SectionTitle from './common/SectionTitle';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: 'CCBD & CDSAML Centre',
      position: 'Summer Intern',
      duration: 'Jun 2023 - Jul 2023',
      location: 'Bengaluru, India',
      description: 'Worked on machine learning and data science projects, focusing on advanced frameworks for brain tumor detection.',
      achievements: [
        'Developed advanced framework for brain tumor detection using ML techniques',
        'Implemented ML techniques like Xception and InceptionV3 with Grad-CAM for enhanced accuracy',
        'Achieved significant improvements in tumor detection accuracy',
      ],
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'TensorFlow']
    },
      {
      company: 'Chaitanya India Fin Credit pvt ltd',
      position: 'Data Science Intern',
      duration: 'Jun 2025 - present',
      location: 'Bengaluru, India',
      description: 'Building a centralized feature store to standardize and serve machine learning features across teams, ensuring reusability, consistency, and real-time availability for production models ',
      achievements: [
        "Initiated the design and architecture of a centralized feature store to support scalable and reusable ML features."
      ],
      technologies: ['Python', 'PostgreSQL','Pandas','Parquet','Apache Pyspark']
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience" subtitle="My Work History" />

        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Tabs for larger screens */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 border-l-4 transition-all ${
                    activeTab === index 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-blue-600">{exp.company}</p>
                    </div>
                    {activeTab === index && <ChevronRight className="text-blue-600" size={20} />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                  {experiences[activeTab].position}
                </h3>
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2" />
                  {experiences[activeTab].duration}
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {experiences[activeTab].company}
                </span>
                <span className="inline-block ml-2 text-gray-600">
                  {experiences[activeTab].location}
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                {experiences[activeTab].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Briefcase size={18} className="mr-2 text-blue-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experiences[activeTab].achievements.map((achievement, i) => (
                    <li key={i} className="flex">
                      <ChevronRight size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;