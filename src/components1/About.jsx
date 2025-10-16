import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <img
          src="/PROFILE.jpg"  // ✅ must match exactly the filename in public/
          alt="Tarun Kullolli"
          className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I’m <span className="font-semibold">Tarun Kullolli</span>, an aspiring
          <strong> Full Stack Web Developer</strong> with a strong foundation
          in Python, JavaScript, React, and Django. Passionate about building
          scalable, user-friendly web apps and continuously learning new
          technologies to solve real-world problems.
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li>B.E. in Computer Science (Don Bosco Institute of Technology)</li>
          <li>Experience with React, Django, Node, Express, MySQL, MongoDB</li>
          <li>Hands-on projects: E-Shop, Blogs Website, To-Do App, Diary App</li>
          <li>Internships at Exposys Data Labs & Besant Technologies</li>
        </ul>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/tarun-kullolli-b31615282/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:scale-105 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/KULLOLLITARUN"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
