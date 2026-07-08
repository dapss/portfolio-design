"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  BookOpen,
  UserFocus,
  Palette,
  NotePencil,
  PenNib,
  Image,
} from "@phosphor-icons/react";

const skills = [
  {
    title: "Picture Book Illustration",
    description: "Full-spread watercolour, gouache, and digital illustrations for children's picture books from concept to final art.",
    icon: BookOpen,
  },
  {
    title: "Character Design",
    description: "Expressive, memorable characters developed through iterative sketching and refined into production-ready linework.",
    icon: UserFocus,
  },
  {
    title: "Watercolour & Mixed Media",
    description: "Traditional watercolour washes combined with ink linework, coloured pencil, and digital finishing techniques.",
    icon: Palette,
  },
  {
    title: "Storyboarding",
    description: "Visual narrative planning through thumbnail sequences, pacing studies, and compositional storyboards for publishers.",
    icon: NotePencil,
  },
  {
    title: "Editorial Illustration",
    description: "Conceptual illustrations for children's magazines, educational publishing, and digital reading platforms.",
    icon: PenNib,
  },
  {
    title: "Cover Art",
    description: "Compelling cover illustrations that capture the heart of a story, from middle-grade novels to picture book jackets.",
    icon: Image,
  },
];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="practice" className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/3 to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-none text-balance">
            My practice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group relative p-8 rounded-2xl bg-surface-elevated transition-all duration-500 overflow-hidden hover:bg-surface-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors duration-500">
                  <skill.icon size={20} className="text-accent" />
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-2">
                  {skill.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
