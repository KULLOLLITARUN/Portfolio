import React, { useState, useEffect, useRef } from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech, github, demo, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [delay]);
  
  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl overflow-hidden group transition-all duration-700 transform hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ 
        boxShadow: isHovered ? '0 25px 50px rgba(0, 255, 136, 0.2)' : '0 15px 35px rgba(0, 0, 0, 0.3)' 
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"></div>
        <div className="flex items-center justify-center h-full text-6xl text-emerald-400/80">
          <Code />
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, i) => (
            <span key={i} className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;