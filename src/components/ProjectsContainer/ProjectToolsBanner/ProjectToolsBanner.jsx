import React from 'react';
import './ProjectToolsBanner.css';

const TechSlider = ({ tools }) => {
  // We duplicate the list to ensure the loop is seamless
  const duplicatedTools = [...tools, ...tools];

  return (
    <div className="sliderContainer">
      <div className="track">
        {duplicatedTools.map((tool, index) => (
          <div 
            key={`${tool.identifier}-${index}`} 
            className="flex items-center justify-center px-10"
          >
            <img 
              src={tool.image} 
              alt={tool.identifier} 
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            {/* Optional: Add text next to logo if desired */}
            <span className="ml-3 font-medium text-slate-300">{tool.identifier}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;