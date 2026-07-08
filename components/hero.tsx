"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  const reduce = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/children-book-illustration/1920/1080"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-subtle border border-accent/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">
                Open for commissions
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-none text-balance"
            >
              Stories
              <br />
              <span className="text-accent">
                in
              </span>
              <br />
              Colour
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-[480px]"
            >
              I illustrate picture books, craft whimsical characters, and
              bring stories to life with warmth and wonder.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-all duration-300 active:scale-[0.97] shadow-lg shadow-accent/25"
              >
                See my books
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-border text-text-secondary text-sm font-medium rounded-full hover:bg-surface-hover transition-all duration-300 active:scale-[0.97]"
              >
                Start a project
              </a>
            </motion.div>
          </motion.div>

          <div className="relative hidden lg:block w-full">
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative w-full aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
            >
              {/* Underlay Paper Sheet */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-border/60 shadow-tactile-flat origin-center pointer-events-none"
                style={{
                  backgroundColor: "var(--color-surface-elevated)",
                  backgroundImage: "repeating-linear-gradient(to right, rgba(229, 221, 210, 0.1) 0px, rgba(229, 221, 210, 0.1) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(to bottom, rgba(229, 221, 210, 0.1) 0px, rgba(229, 221, 210, 0.1) 1px, transparent 1px, transparent 20px)",
                  originX: 0.5,
                  originY: 0.5,
                }}
                animate={{
                  rotate: isHovered ? -3.5 : -2,
                  scale: isHovered ? 1.01 : 1,
                  opacity: isHovered ? 0.95 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              />

              {/* Main Artwork Paper Sheet */}
              <motion.div
                className="relative w-full h-full rounded-2xl bg-surface-elevated border border-border p-4 shadow-tactile-flat origin-center flex flex-col overflow-hidden"
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                animate={{
                  rotate: isHovered ? 0 : 2,
                  scale: isHovered ? 1.03 : 1,
                  boxShadow: isHovered
                    ? "var(--shadow-tactile-lift)"
                    : "var(--shadow-tactile-flat)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                {/* Washi Tape */}
                {!reduce && (
                  <div
                    className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-24 h-6 bg-surface-elevated/40 border border-border/40 backdrop-blur-[0.5px] pointer-events-none z-20 shadow-[0_1px_2px_rgba(43,34,29,0.02)] transition-all duration-300"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(211, 107, 74, 0.02) 0px, rgba(211, 107, 74, 0.02) 2px, transparent 2px, transparent 4px)",
                      transform: `translateX(-50%) rotate(-1.5deg)`,
                    }}
                  />
                )}

                <div className="relative w-full h-full rounded-lg overflow-hidden border border-border bg-surface">
                  <img
                    src="https://picsum.photos/seed/illustration-studio/800/600"
                    alt="Watercolour illustration workspace"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                    width={800}
                    height={600}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/80">
                      Watercolour & Ink
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
