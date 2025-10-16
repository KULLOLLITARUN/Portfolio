import React from 'react';
import { Database } from 'lucide-react';
import AnimatedText from './AnimatedText';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    { icon: <i className="fab fa-react"></i>, name: "React", level: 90 },
    { icon: <i className="fab fa-node-js"></i>, name: "Node.js", level: 85 },
    { icon: <i className="fab fa-python"></i>, name: "Python", level: 88 },
    { icon: <Database />, name: "Databases", level: 80 },
    { icon: <i className="fab fa-html5"></i>, name: "HTML5", level: 95 },
    { icon: <i className="fab fa-css3-alt"></i>, name: "CSS3", level: 90 },
    { icon: <i className="fab fa-js-square"></i>, name: "JavaScript", level: 92 },
    { icon: <i className="fab fa-git-alt"></i>, name: "Git", level: 85 }
  ];

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </AnimatedText>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;