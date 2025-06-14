import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Code, Server, Layout, BarChart, Database, Terminal } from 'lucide-react';

type SkillCategory = {
  icon: React.ReactNode;
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code size={24} />,
      title: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 75 },
        { name: 'SQL', level: 90 },
        { name: 'Java', level: 65 },
        { name: 'MERN Stack', level: 70 },
      ],
    },
    {
      icon: <Server size={24} />,
      title: 'Technical',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Data Science', level: 85 },
        { name: 'Computer Vision', level: 75 },
        { name: 'Data Structures', level: 80 },
        { name: 'Algorithms', level: 75 },
      ],
    },
    {
      icon: <Database size={24} />,
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 80 }
       
      ],
    },
    {
      icon: <Terminal size={24} />,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Blockchain', level: 90 },
        { name: 'Deep Learning', level: 80 },
      ],
    },
    {
      icon: <Layout size={24} />,
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 85 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Critical Thinking', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills" subtitle="My Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-900/50 text-blue-400 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `progressAnimation 1.5s ease-out ${skillIndex * 0.2}s` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;