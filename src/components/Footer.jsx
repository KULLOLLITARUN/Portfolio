// ============================================================================
// Footer.jsx - Enhanced with animations and better layout
// ============================================================================
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "mailto:tarun@example.com",
      icon: <Mail size={20} />,
      label: "Email",
      color: "text-emerald-400",
      hoverColor: "hover:bg-emerald-500/20"
    },
    {
      href: "https://github.com/KULLOLLITARUN",
      icon: <Github size={20} />,
      label: "GitHub",
      color: "text-gray-300",
      hoverColor: "hover:bg-gray-600/50"
    },
    {
      href: "https://www.linkedin.com/in/tarun-kullolli-b31615282/",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      color: "text-blue-400",
      hoverColor: "hover:bg-blue-500/20"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-gray-800/50 bg-gradient-to-t from-black/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Tarun Kullolli
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions that make a difference.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <MapPin size={16} className="text-emerald-400" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Phone size={16} className="text-emerald-400" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-4">
              Follow me on social media or drop me an email
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className={`p-3 bg-gray-800/50 rounded-lg ${social.hoverColor} hover:scale-110 transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <span className={`${social.color} group-hover:scale-110 transition-transform duration-300 block`}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} Tarun Kullolli. All rights reserved.
            </p>
            <p className="text-gray-500 mt-1 flex items-center justify-center md:justify-start gap-1">
              Crafted with <Heart size={14} className="text-red-400 animate-pulse" /> and cutting-edge technology
            </p>
          </div>
          
          <div className="text-gray-500">
            <p>Made with React & Tailwind CSS</p>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
