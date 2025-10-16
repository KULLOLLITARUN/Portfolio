import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Get In Touch</h2>
      <p className="mb-10 text-gray-400">
        Have a project in mind, or just want to say hi? Feel free to reach out! 🚀
      </p>

      <div className="flex justify-center gap-6 mb-10 text-3xl text-blue-600">
        <a href="mailto:youremail@gmail.com"><FaEnvelope /></a>
        <a href="https://github.com/yourgithub" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank"><FaLinkedin /></a>
      </div>

      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"></textarea>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300"
        >
          Send Message 🚀
        </button>
      </form>
    </motion.section>
  );
}
