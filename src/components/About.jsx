import React from 'react';
import { Star, Zap, Sparkles, Rocket, Linkedin, Github } from 'lucide-react';
import AnimatedText from './AnimatedText';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </AnimatedText>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedText delay={200}>
            <div className="relative">
              {/* <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='20' fill='%23333'%3EProfile Image%3C/text%3E%3C/svg%3E"
                alt="Tarun Profile"
                className="w-full h-auto rounded-3xl shadow-2xl"
              /> */}
              <img src="PROFILE.jpg"
                className="w-full h-auto rounded-3xl shadow-2xl height: 400px; width: 300px;"
                alt="Tarun Profile" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
            </div>
          </AnimatedText>
          
          <div className="space-y-6">
            <AnimatedText delay={300}>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <span className="text-emerald-400 font-semibold">Tarun Kullolli</span>, a passionate 
                Full Stack Developer with expertise in modern web technologies. I specialize in creating 
                innovative digital solutions that bridge the gap between design and functionality.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <Star className="text-emerald-400" size={20} />
                  <span>B.E. Computer Science</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <Zap className="text-cyan-400" size={20} />
                  <span>Full Stack Expert</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <Sparkles className="text-purple-400" size={20} />
                  <span>UI/UX Enthusiast</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <Rocket className="text-pink-400" size={20} />
                  <span>Innovation Focused</span>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={500}>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/tarun-kullolli-b31615282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/KULLOLLITARUN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:scale-110 transition-all duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;