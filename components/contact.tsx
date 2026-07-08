"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Envelope,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const links = [
  { label: "Email", href: "mailto:hello@alexandrolek.com", icon: Envelope },
  { label: "Instagram", href: "https://instagram.com/alexandrolek", icon: InstagramLogo },
  { label: "LinkedIn", href: "https://linkedin.com/in/alexandrolek", icon: LinkedinLogo },
];

const colorClass = "hover:text-accent";
const iconColor = "text-accent";

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="max-w-xl"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-none text-balance mb-6">
              Have a story
              <br />
              <span className="text-accent">
                to illustrate
              </span>
              ?
            </h2>

            <p className="text-base text-text-secondary leading-relaxed mb-10 max-w-[480px]">
              I am always open to new collaborations with publishers, authors,
              and creative teams. Whether you need a picture book, character
              designs, or cover art, let us create something beautiful together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@alexandrolek.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-all duration-300 active:scale-[0.97] shadow-lg shadow-accent/25"
              >
                Start a project
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
              delay: 0.15,
            }}
            className="flex flex-col gap-4"
          >
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group flex items-center gap-4 p-5 rounded-xl border border-border bg-surface-elevated ${colorClass} transition-all duration-300 hover:border-current/30`}
                >
                  <span
                    className={`w-10 h-10 rounded-lg bg-surface flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="flex-1 text-sm font-medium text-text-primary">
                    {link.label}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-text-tertiary group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
