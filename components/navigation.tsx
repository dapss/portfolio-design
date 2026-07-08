"use client";

import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Practice", href: "#practice" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 80);
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-surface/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-text-primary"
        >
          Risa Astari
          <span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-surface-elevated border-b border-border px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
