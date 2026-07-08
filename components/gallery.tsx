"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import ProjectModal from "./project-modal";
import type { ProjectData } from "./project-modal";

const projects: ProjectData[] = [
  {
    title: "The Moon Thief",
    category: "Picture Book",
    year: "2026",
    bg: "#ede5f2",
    image: "moon-thief-children-book",
    span: "",
    description:
      "A whimsical picture book about a clever raccoon who dreams of stealing the moon, told through double-spread watercolour illustrations.",
    client: "Little Oak Press",
    role: "Illustrator",
    details:
      "A 32-page picture book following a raccoon's moonlight adventure. I created 18 full-spread watercolour illustrations and 8 spot illustrations, working closely with the author to develop the visual narrative. The colour palette shifts from warm amber tones to deep indigo as the story progresses from dusk to midnight. The book launched at the Bologna Children's Book Fair and has been translated into four languages.",
  },
  {
    title: "Alphabet Soup",
    category: "ABC Book",
    year: "2025",
    bg: "#edf2e5",
    image: "alphabet-soup-kids",
    span: "",
    description:
      "An illustrated ABC book where every letter tells a tiny story through hand-drawn characters and hidden details.",
    client: "Meadowlark Books",
    role: "Illustrator & Designer",
    details:
      "Each letter spread features a whimsical scene with characters whose names start with that letter — Astrid the Anteater, Bruno the Badger, Clara the Caterpillar. I designed the page layouts, hand-lettered the initial caps, and created over 80 character illustrations. The book includes a seek-and-find element on every page. It was selected as a Junior Library Guild Gold Standard title.",
  },
  {
    title: "Little Botanist",
    category: "Activity Book",
    year: "2025",
    bg: "#e5f2ed",
    image: "little-botanist-garden",
    span: "",
    description:
      "A nature-themed activity book blending illustrated guides with hands-on projects for curious young gardeners.",
    client: "Wildflower Press",
    role: "Illustrator",
    details:
      "A 48-page interactive book that teaches children about plants through illustrated field guides, paper crafts, and journaling prompts. I created detailed botanical illustrations in ink and watercolour, designed the worksheet templates, and illustrated step-by-step craft instructions. The book includes over 60 plant species illustrated at different growth stages. It won a Parents' Choice Silver Award.",
  },
  {
    title: "Dream Weaver",
    category: "Chapter Book",
    year: "2024",
    bg: "#f0e5ed",
    image: "dream-weaver-fantasy",
    span: "",
    description:
      "Full-page charcoal and digital illustrations for a middle-grade fantasy novel about a girl who mends broken dreams.",
    client: "Candlewick Studio",
    role: "Illustrator",
    details:
      "A middle-grade novel requiring 12 full-page interior illustrations and a cover painting. The story's dream sequences called for soft, ethereal charcoal drawings with subtle digital colour overlays, while the real-world scenes were rendered in a warmer, more grounded palette. Working with the author, I developed character concept sketches through three rounds of revisions before settling on the final visual style.",
  },
  {
    title: "Wild & Free",
    category: "Non-fiction",
    year: "2024",
    bg: "#e5edf2",
    image: "wild-animals-encyclopedia",
    span: "",
    description:
      "A lavishly illustrated children's encyclopedia of animals, featuring over 120 species in mixed-media artwork.",
    client: "Mountain Press",
    role: "Lead Illustrator",
    details:
      "A 112-page reference book for ages 6-10. I led a team of four illustrators, establishing the visual style — a blend of watercolour washes, ink linework, and digital highlights. Each species spread includes a hero illustration, habitat vignettes, and annotated diagrams. The project took 10 months and required extensive research into animal anatomy and behaviour to ensure scientific accuracy.",
  },
  {
    title: "Goodnight, Little Star",
    category: "Bedtime Stories",
    year: "2024",
    bg: "#f2ede5",
    image: "bedtime-stories-night",
    span: "",
    description:
      "A bedtime-story anthology with six original tales, each illustrated in a distinct dreamy style — from soft pastels to deep indigo nocturnes.",
    client: "Self-published",
    role: "Author & Illustrator",
    details:
      "A personal project where I wrote and illustrated six bedtime stories, each exploring a different sleep-time theme. Every story uses a distinct colour palette and illustration technique — from soft crayon textures to layered gouache. I handled the entire production: writing, illustrating, book layout, and coordinating with a local printer for a limited first run of 500 copies. The book sold out in three months.",
  },
];

type CardStyle = {
  rotate: number;
  rotateUnder: number;
  yOffset: number;
  xOffset: number;
  tapeRotate: number;
  desktopStagger: number;
};

const cardStyles: CardStyle[] = [
  { rotate: -3, rotateUnder: 2.5, yOffset: 8, xOffset: -5, tapeRotate: -2.2, desktopStagger: 0 },
  { rotate: 2.5, rotateUnder: -3.5, yOffset: -6, xOffset: 6, tapeRotate: 1.8, desktopStagger: 56 },
  { rotate: -2, rotateUnder: 3, yOffset: 12, xOffset: -8, tapeRotate: -3.0, desktopStagger: 112 },
  { rotate: 3.5, rotateUnder: -2, yOffset: -8, xOffset: 7, tapeRotate: 2.4, desktopStagger: 0 },
  { rotate: -1.8, rotateUnder: 2, yOffset: 10, xOffset: -4, tapeRotate: -1.5, desktopStagger: 56 },
  { rotate: 2.2, rotateUnder: -4, yOffset: -5, xOffset: 5, tapeRotate: 3.2, desktopStagger: 112 },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  isMobile: boolean;
  reduce: boolean;
  onClick: () => void;
}

function ProjectCard({ project, index, isMobile, reduce, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const style = cardStyles[index % cardStyles.length];

  const staggerY = isMobile || reduce ? 0 : style.desktopStagger;
  const baseRotate = isMobile || reduce ? 0 : style.rotate;
  const baseRotateUnder = isMobile || reduce ? 0 : style.rotateUnder;
  const baseTranslateX = isMobile || reduce ? 0 : style.xOffset;
  const baseTranslateY = isMobile || reduce ? 0 : style.yOffset;

  return (
    <div
      className="relative w-full"
      style={{
        transform: `translateY(${staggerY}px)`,
        zIndex: isHovered ? 20 : 10,
      }}
    >
      <motion.button
        onClick={onClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-full text-left focus:outline-none group focus-visible:ring-2 focus-visible:ring-accent rounded-2xl block"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.7,
          delay: (index % 3) * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Tactile Underlay Paper Sheet */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-border/60 shadow-tactile-flat origin-center pointer-events-none"
          style={{
            backgroundColor: project.bg,
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{
            rotate: isHovered ? baseRotateUnder * 1.4 : baseRotateUnder,
            scale: isHovered ? 1.015 : 1,
            opacity: isHovered ? 0.95 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 130, damping: 20 }}
        />

        {/* Main Artwork Paper Sheet */}
        <motion.div
          className="relative rounded-2xl bg-surface-elevated border border-border p-4 sm:p-5 pb-6 sm:pb-8 shadow-tactile-flat origin-center flex flex-col h-full overflow-hidden"
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{
            rotate: isHovered ? 0 : baseRotate,
            x: isHovered ? 0 : baseTranslateX,
            y: isHovered ? 0 : baseTranslateY,
            scale: isHovered ? 1.045 : 1,
            boxShadow: isHovered
              ? "var(--shadow-tactile-lift)"
              : "var(--shadow-tactile-flat)",
          }}
          transition={{ type: "spring", stiffness: 130, damping: 20 }}
        >
          {/* Washi Tape */}
          {!isMobile && !reduce && (
            <div
              className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-20 h-5.5 bg-surface-elevated/40 border border-border/40 backdrop-blur-[0.5px] pointer-events-none z-20 shadow-[0_1px_2px_rgba(43,34,29,0.02)] transition-all duration-300 group-hover:scale-95 group-hover:opacity-90"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(211, 107, 74, 0.02) 0px, rgba(211, 107, 74, 0.02) 2px, transparent 2px, transparent 4px)",
                transform: `translateX(-50%) rotate(${style.tapeRotate}deg)`,
              }}
            />
          )}

          {/* Mount Frame / Image Container */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface border border-border/80 mb-5 sm:mb-6">
            <img
              src={`https://picsum.photos/seed/${project.image}/800/600`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={800}
              height={600}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Soft border card frame overlay */}
            <div className="absolute inset-0 ring-1 ring-black/5 ring-inset pointer-events-none rounded-lg" />
          </div>

          {/* Card Metadata & Typography */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-tertiary">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-text-tertiary">
              {project.year}
            </span>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-text-primary leading-tight mb-2 sm:mb-3">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="mt-4 sm:mt-5 pt-3 border-t border-border/30 flex items-center justify-between">
            <span className="text-[11px] font-mono text-accent inline-flex items-center gap-1">
              Explore Project
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}

export default function Gallery() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<ProjectData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="work"
      className="pt-24 pb-36 md:pt-32 md:pb-60 bg-grid-paper border-t border-border relative overflow-hidden"
    >
      {/* Background soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-3 block">
              Selected commissions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-none text-text-primary">
              Published work
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-[320px] md:text-right leading-relaxed">
            A curation of whimsical children's book illustrations and hand-crafted graphic narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isMobile={isMobile}
              reduce={!!reduce}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
