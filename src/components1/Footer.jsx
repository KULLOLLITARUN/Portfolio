import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} Tarun Kullolli. All Rights Reserved.
        </p>

        {/* Right side - Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/KULLOLLITARUN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-kullolli-b31615282/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
