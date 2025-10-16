import React from 'react';
import AnimatedText from './AnimatedText';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Shop Platform",
      description: "A full-stack e-commerce application with advanced features like real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Django", "MySQL", "Stripe API"],
      github: "https://github.com/KULLOLLITARUN",
      demo: "#"
    },
    {
      title: "Blog CMS",
      description: "Content management system with rich text editing, user authentication, and advanced search functionality.",
      tech: ["Django", "PostgreSQL", "Redis", "Elasticsearch"],
      github: "https://github.com/KULLOLLITARUN",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates, file attachments, and team collaboration features.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/KULLOLLITARUN",
      demo: "#"
    },
    {
      title: "Personal Diary App",
      description: "Secure diary application with encryption, mood tracking, and intelligent search across entries.",
      tech: ["React Native", "Firebase", "ML Kit", "Encryption"],
      github: "https://github.com/KULLOLLITARUN",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </AnimatedText>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
