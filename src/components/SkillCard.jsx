import React, { useState, useEffect, useRef } from 'react';

const SkillCard = ({ icon, name, level, delay = 0 }) => {
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
      className={`relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl transition-all duration-700 transform hover:scale-105 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ 
        boxShadow: isHovered ? '0 20px 40px rgba(0, 255, 136, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
        borderColor: isHovered ? '#00ff88' : 'rgba(107, 114, 128, 0.5)'
      }}
    >
      <div className="text-4xl mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <div 
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        ></div>
      </div>
      <span className="text-emerald-400 text-sm font-semibold">{level}%</span>
    </div>
  );
};

export default SkillCard;