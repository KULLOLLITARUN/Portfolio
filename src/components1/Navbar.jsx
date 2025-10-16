import React, { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-black/5 dark:border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-extrabold text-lg tracking-tight">
          Tarun<span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="relative group">
              <span>{l.label}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
          {/* <button
            onClick={() => setDark(d => !d)}
            className="rounded-xl px-3 py-1.5 border border-black/10 dark:border-white/10 hover:shadow"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button> */}
        </div>

        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden rounded-xl border border-black/10 dark:border-white/10 px-3 py-2"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-2">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {l.label}
              </a>
            ))}

            {/* <button
              onClick={() => setDark(d => !d)}
              className="rounded-xl px-3 py-1.5 border border-black/10 dark:border-white/10"
            >
              {dark ? "Light ☀️" : "Dark 🌙"}
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
}
