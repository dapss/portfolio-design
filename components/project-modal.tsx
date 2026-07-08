"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "@phosphor-icons/react";

export type ProjectData = {
  title: string;
  category: string;
  year: string;
  bg: string;
  image: string;
  span: string;
  description: string;
  client?: string;
  role?: string;
  details: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectData;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

        <motion.div
          initial={
            reduce ? false : { opacity: 0, scale: 0.92, y: 20 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl bg-surface-elevated border border-border shadow-2xl"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-colors duration-300"
          >
            <X size={18} className="text-text-primary" />
          </button>

          <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
            <img
              src={`https://picsum.photos/seed/${project.image}/1200/750`}
              alt={project.title}
              className="w-full h-full object-cover"
              width={1200}
              height={750}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-text-tertiary" />
              <span className="font-mono text-[11px] text-text-tertiary">
                {project.year}
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">
              {project.title}
            </h2>

            <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-[65ch]">
              {project.description}
            </p>

            {(project.client || project.role) && (
              <div className="grid grid-cols-2 gap-6 mb-8 p-6 rounded-xl bg-surface border border-border">
                {project.client && (
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-tertiary mb-1">
                      Client
                    </p>
                    <p className="text-sm text-text-primary font-medium">
                      {project.client}
                    </p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-tertiary mb-1">
                      Role
                    </p>
                    <p className="text-sm text-text-primary font-medium">
                      {project.role}
                    </p>
                  </div>
                )}
              </div>
            )}

            <p className="text-sm text-text-secondary leading-relaxed max-w-[65ch]">
              {project.details}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
