import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialURL?: string;
  description?: string;
  skills?: string[];
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'AWS - Solutions Architecture Job Simulation',
      issuer: 'Forage',
      date: 'Jun 2025',
      credentialId: '6Da6p4trbLqa5yytR',
      credentialURL: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_vx6YezA7nANbKFqnb_1751036963445_completion_certificate.pdf',
      skills: ['AWS']
    },
    {
      title: 'Accenture Nordics - Software Engineering Job Simulation',
      issuer: 'Forage',
      date: 'Jun 2025',
      credentialId: '9NW4X4FroMdLAGWy6',
      credentialURL: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_vx6YezA7nANbKFqnb_1751047100933_completion_certificate.pdf'
    },
       {
      title: 'Cloud Computing Fundamentals',
      issuer: 'IBM',
      date: 'Jun 2025',
      credentialId: '32e881a2-38a9-40c1-ae6e-0b7ee9407ef1',
      credentialURL: 'https://www.credly.com/badges/32e881a2-38a9-40c1-ae6e-0b7ee9407ef1/public_url',
      skills: ['Cloud computing','Docker','Kubernetes']
    },
    
        {
      title: 'AWS Educate Getting Started with Serverless',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jan 2025',
      credentialId: '393583aa-0894-4c3d-a1b4-4aa276159289',
      credentialURL: 'https://www.credly.com/badges/393583aa-0894-4c3d-a1b4-4aa276159289/public_url',
      skills: ['Cloud computing','AWS']
    },
            {
      title: 'Introduction to MS Excel',
      issuer: 'Simplilearn',
      date: 'Jun 2025',
      credentialId: '8548066',
      credentialURL: 'https://drive.google.com/file/d/1okCoaWIA9YodGC8t1LCnexa8ddHzSuqN/view?usp=sharing',
      skills: ['Excel','Data Analysis']
    },

    {
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      date: '2024',
    },

    {
      title: 'Artificial Intelligence with Python',
      issuer: 'Coinciet.ai',
      date: '2023',
    },

    {
      title: 'AI Blueprint For BHARAT - Case Study Challenge',
      issuer: 'IIT Kharagpur',
      date: '2024',
    },
    {
      title: 'Jira Certification',
      issuer: 'Atlassian',
      date: '2024',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Certifications" subtitle="Professional Credentials" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>

                {cert.description && (
                  <p className="text-gray-700 mb-4">{cert.description}</p>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {(cert.credentialId || cert.credentialURL) && (
                  <div className="border-t border-gray-100 pt-4 text-sm">
                    {cert.credentialId && (
                      <p className="text-gray-600 mb-1">
                        <strong>Credential ID:</strong> {cert.credentialId}
                      </p>
                    )}
                    {cert.credentialURL && (
                      <a 
                        href={cert.credentialURL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                      >
                        View Credential <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
