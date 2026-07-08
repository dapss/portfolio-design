"use client";

import { motion, useReducedMotion } from "motion/react";

const stats = [
  { value: "12+", label: "Books illustrated" },
  { value: "8", label: "Publishing partners" },
  { value: "6", label: "Languages translated" },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="py-24 md:pt-32 md:pb-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <img
                src="https://picsum.photos/seed/illustrator-studio/800/1000"
                alt="Illustration workspace with watercolour paints and sketchbook"
                className="w-full h-full object-cover"
                width={800}
                height={1000}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-tertiary">
                  Bandung, Indonesia
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
              delay: 0.15,
            }}
          >
            <h2               className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-none text-balance mb-8">
              Every page
              <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8 decoration-2">
                tells a story
              </span>
            </h2>

            <div className="space-y-5 text-base text-text-secondary leading-relaxed max-w-[65ch]">
              <p>
                I am a children's book illustrator based in Bandung, working
                with publishers and authors around the world to bring stories
                to life. My work lives at the intersection of traditional
                watercolour and digital art — always warm, always detailed,
                always built for the curious reader.
              </p>
              <p>
                Every project starts with a sketchbook. I explore character
                expressions, page compositions, and colour palettes before
                moving to final art. Whether it is a 32-page picture book or a
                chapter book cover, my goal is the same: make children want to
                turn the page.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-text-primary">
                    {stat.value}
                  </span>
                  <p className="text-xs text-text-tertiary mt-1.5 font-medium tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
