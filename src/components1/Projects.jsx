import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Shop (E-commerce App)",
    description:
      "An online shopping platform with product listings, cart, and authentication. Built using React, Django REST API, and MySQL.",
    tech: ["React", "Django", "MySQL"],
    github: "https://github.com/KULLOLLITARUN", // replace with repo
    demo: "#",
  },
  {
    title: "Blogs Website",
    description:
      "A blogging platform where users can write, edit, and manage posts. Features include categories, comments, and authentication.",
    tech: ["Django", "HTML", "CSS", "SQLite"],
    github: "https://github.com/KULLOLLITARUN",
    demo: "#",
  },
  {
    title: "To-Do App",
    description:
      "A task management app with add, edit, delete, and mark complete functionality. Includes note feature and MongoDB integration.",
    tech: ["React", "MongoDB", "Express"],
    github: "https://github.com/KULLOLLITARUN",
    demo: "#",
  },
  {
    title: "Diary Web Application",
    description:
      "A diary app with login, registration, CRUD posts, and dedicated post view. Built with Node.js, Express, MySQL, and Vanilla JS frontend.",
    tech: ["Node.js", "Express", "MySQL", "JavaScript"],
    github: "https://github.com/KULLOLLITARUN",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
        My Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow hover:shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              >
                GitHub
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:scale-105 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
