"use client";

import { motion, useReducedMotion } from "motion/react";

const testimonials = [
  {
    quote:
      "Her illustrations have a rare warmth that children immediately connect with. The Moon Thief would not be the same book without her vision.",
    name: "Sari Dewi",
    role: "Editor, Little Oak Press",
  },
  {
    quote:
      "Working with Risa on Alphabet Soup was a joy. She has an instinct for page composition that makes every spread feel alive.",
    name: "Thomas Grey",
    role: "Art Director, Meadowlark Books",
  },
  {
    quote:
      "She brought a sensitivity to the dream sequences in Dream Weaver that exceeded what I had imagined. Her character work is extraordinary.",
    name: "Amara Wibowo",
    role: "Author, Dream Weaver",
  },
];

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:pt-28 md:pb-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-none text-balance">
            What clients say
          </h2>
        </div>

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="py-8 border-t border-border first:border-t-0"
            >
              <p className="text-lg md:text-xl text-text-primary leading-relaxed max-w-[65ch] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer>
                <cite className="not-italic">
                  <span className="font-medium text-sm text-text-primary">
                    {t.name}
                  </span>
                  <span className="text-sm text-text-tertiary">
                    - {t.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
