import React from 'react';
import SectionTitle from './common/SectionTitle';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string; // Made optional
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'MITM Attack Detection Using GNN Model',
      description: 'Developed a system to detect Man-in-the-Middle (MITM) attacks using Graph Neural Networks (GAT and GraphSAGE) for pattern analysis and detection.',
      image: 'https://images.pexels.com/photos/5380640/pexels-photo-5380640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'PyTorch', 'GNN', 'GraphSAGE', 'Cybersecurity'],
    },
    {
      title: 'Travelling Website (MERN Stack)',
      description: 'Created a dynamic travel website featuring real-time destination reviews and user-contributed content using the MERN stack.',
      image: 'https://images.pexels.com/photos/2306272/pexels-photo-2306272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    },
    {
      title: 'Personalized Medical Vault using Blockchain',
      description: 'Developed a decentralized medical vault DApp with React.js and Ethereum blockchain to securely manage medical records.',
      image: 'https://images.pexels.com/photos/6129243/pexels-photo-6129243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Ethereum', 'Solidity', 'React', 'Web3.js', 'Blockchain'],
      githubUrl:'https://github.com/mujaseemd/Personalized-Medical-Vault',
    },
    {
      title: 'EdTech Website for Women',
      description: 'Created an educational platform aimed at women, focused on skill development and learning resources.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
  "title": "Healthcare Management System",
  "description": "Built a full-stack healthcare management system with MySQL, React, and MVC architecture for scalability and maintainability.",
  "image": "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "technologies": ["React", "MySQL", "MVC", "JavaScript"],
  "githubUrl": "https://github.com/mujaseemd/Healthcare-Management-System"
}
,
    {
      title: 'Airline Management System (Java)',
      description: 'Developed a database-driven airline management system with MySQL and Java, featuring ticketing and flight details management.',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
      githubUrl:'https://github.com/mujaseemd/Airline_Management_System',
    },
   {
  "title": "Responsive Sudoku Web App",
  "description": "A fully functional, visually appealing, and responsive Sudoku game implemented as a single HTML file with inline CSS and JavaScript. Features multiple difficulty levels, real-time mistake tracking, instant validation, and accessible design.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/640px-Sudoku-by-L2G-20050714.svg.png",
  "technologies": ["HTML", "CSS", "JavaScript", "Accessibility", "Responsive Design"],
  "githubUrl": "https://github.com/mujaseemd/sudoku-game"
}

,
    {
      title: 'Finance Bank Manager',
      description: 'Managed and supervised daily operations in bank branches, focusing on process optimization for deposits, loans, and EMI facilities during a simulated bank management scenario.',
      image: 'https://images.pexels.com/photos/3943745/pexels-photo-3943745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Banking Processes', 'Process Optimization'],
    },
 {
  "title": "Real-Time Patient Health Monitoring & Alert System",
  "description": "Developed a real-time health monitoring system that simulates patient vitals using a Flask API, streams data with Apache Kafka, processes data via Apache Spark Streaming, and stores alerts in MySQL. Supports both streaming and batch analytics for comprehensive health insights.",
  "image": "https://images.pexels.com/photos/8376239/pexels-photo-8376239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "technologies": ["Python", "Flask", "Apache Kafka", "Apache Spark", "MySQL", "Streaming", "Real-Time Analytics"],
  "githubUrl": "https://github.com/mujaseemd/Real_Time_Patient_Health_Monitoring_System"
}



,
   {
  "title": "Electronic Voting Machine (EVM)",
  "description": "Developed a hardware project for voting using Arduino Uno.",
  "image": "https://images.pexels.com/photos/15470542/pexels-photo-15470542.jpeg",
  "technologies": ["Arduino Uno", "Embedded C", "Hardware"]
}



,
    {
      title: 'Bank System using Cisco Packet Tracer',
      description: 'Configured and managed a simulated bank network infrastructure using Cisco Packet Tracer with routers, switches, and secure communication protocols.',
      image: 'https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Cisco Packet Tracer', 'Networking', 'Simulation'],
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects" subtitle="My Recent Work" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative group h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <a 
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
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

export default Projects;
