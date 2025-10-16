import React from 'react';

const Navigation = ({ currentSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Tarun.
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize font-semibold transition-all duration-300 hover:text-emerald-400 relative ${
                  currentSection === item ? 'text-emerald-400' : 'text-gray-300'
                }`}
              >
                {item}
                {currentSection === item && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;