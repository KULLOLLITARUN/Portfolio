import React from 'react';

const GlowButton = ({ children, variant = 'primary', className = '', onClick, href, download }) => {
  const baseClasses = "relative px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow-lg shadow-emerald-400/25 hover:shadow-emerald-400/40",
    secondary: "border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black",
    accent: "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
  };
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      download={download}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
};

export default GlowButton;