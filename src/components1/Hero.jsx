import React from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fullScreen: false,
    particles: {
      number: { value: 45, density: { enable: true, area: 800 } },
      links: { enable: true, distance: 140, opacity: 0.25 },
      move: { enable: true, speed: 1 },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.5 },
      color: { value: ["#3B82F6", "#9333EA", "#F97316"] },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 120 } },
    },
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-[88vh]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Hi, I’m <span className="text-blue-500">Tarun</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300"
          >
            <span className="inline-block min-w-[240px]">
              <ReactTyped
                strings={["React Developer", "Problem Solver", "Lifelong Learner"]}
                typeSpeed={45}
                backSpeed={30}
                backDelay={1200}
                loop
              />
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:scale-105 transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-2xl border border-blue-600 px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center"
          aria-hidden="true"
        >
          <img
            src="/my1.jpg"
            alt="Tarun"
            className="w-[320px] md:w-[420px] aspect-square rounded-3xl object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
