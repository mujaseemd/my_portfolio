import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-blue-400 font-medium mb-2">{subtitle}</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-100 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-full"></span>
      </h3>
    </div>
  );
};

export default SectionTitle;