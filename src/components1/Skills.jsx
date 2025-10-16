import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
    { name: "Databases", icon: <FaDatabase className="text-purple-500 text-4xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-10"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-2 p-6 bg-white/10 dark:bg-slate-800/50 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            {skill.icon}
            <p className="mt-2 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
