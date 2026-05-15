"use client";

import { useState } from "react";

const navItems = [
  { label: "Process", href: "#process" },
  { label: "Product Development", href: "#development" },
  { label: "Engineering", href: "#tooling" },
  { label: "Deployment", href: "#industrialization" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 mx-auto mt-6 flex h-[72px] w-[calc(100%-24px)] max-w-[1440px] items-center justify-between border border-white/10 bg-white/[0.02] px-5 backdrop-blur-xl md:mt-10 md:w-[calc(100%-40px)] md:px-8">
        <a
          href="/"
          className="text-[15px] font-semibold tracking-[0.14em] md:text-[18px]"
        >
          NOIR DYNAMICS
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[12px] uppercase tracking-[0.16em] text-white/45 transition-all duration-500 ease-out hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-5 w-5 items-center justify-center md:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-[6px]"
            }`}
          />
        </button>

        <div className="hidden items-center gap-3 md:flex">
          <div className="h-[8px] w-[8px] rounded-full bg-white/70" />
          <div className="h-[8px] w-[8px] rounded-full border border-white/20 bg-white/[0.04]" />
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 px-6 pt-32 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[34px] font-semibold leading-none tracking-[-0.04em] text-white/80 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="mt-20 max-w-[280px] text-[14px] uppercase leading-[1.8] tracking-[0.12em] text-white/35">
            Research • Engineering • Industrial Systems
          </p>
        </div>
      )}
    </>
  );
}