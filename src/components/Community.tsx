"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { Reveal } from "@/components/Reveal";
import { disciplines } from "@/lib/content";

/**
 * Discipline nodes converge toward the center as the user scrolls,
 * resolving into the TuringAI mark — the bridge into the team section.
 */
export function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const scrollYProgress = useSectionProgress(sectionRef, 0, 0.85, 0.5, 0.5);
  const converge = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const centerOpacity = useTransform(scrollYProgress, [0.55, 1], [0, 1]);
  const centerScale = useTransform(scrollYProgress, [0.55, 1], [0.85, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0.3, 0.9], [0, 0.35]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-2/60 to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="label-mono text-lime-dim">06 / Community</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Different courses. Different skills.{" "}
            <span className="text-lime">One community.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            TuringAI is open to every course at Makerere. Whatever you study,
            you bring a perspective the club needs — and AI skills you can
            take back to it.
          </p>
        </Reveal>

        {/* Converging discipline field */}
        <div className="relative mx-auto mt-16 flex h-[22rem] max-w-3xl items-center justify-center sm:h-[26rem]">
          {/* Connection lines */}
          <motion.svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            style={reduced ? { opacity: 0.25 } : { opacity: lineOpacity }}
          >
            {disciplines.map((d, i) => {
              const angle = (i / disciplines.length) * Math.PI * 2;
              return (
                <line
                  key={d}
                  x1="50"
                  y1="50"
                  x2={50 + Math.cos(angle) * 46}
                  y2={50 + Math.sin(angle) * 42}
                  stroke="#A3E635"
                  strokeWidth="0.2"
                />
              );
            })}
          </motion.svg>

          {disciplines.map((discipline, i) => (
            <DisciplineNode
              key={discipline}
              label={discipline}
              index={i}
              total={disciplines.length}
              converge={converge}
              reduced={!!reduced}
            />
          ))}

          {/* Center resolves into TuringAI */}
          <motion.div
            style={
              reduced
                ? undefined
                : { opacity: centerOpacity, scale: centerScale }
            }
            className="relative z-10 flex flex-col items-center gap-3 rounded-full border border-lime/30 bg-ink px-10 py-8 text-center"
          >
            <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Turing<span className="text-lime">AI</span>
            </span>
            <span className="label-mono text-faint">Where they meet</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DisciplineNode({
  label,
  index,
  total,
  converge,
  reduced,
}: {
  label: string;
  index: number;
  total: number;
  converge: MotionValue<number>;
  reduced: boolean;
}) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  // Spread factor 1 → scattered ring; 0 → tucked near the center.
  const left = useTransform(
    converge,
    (v) => `${50 + Math.cos(angle) * 44 * (0.3 + v * 0.7)}%`,
  );
  const top = useTransform(
    converge,
    (v) => `${50 + Math.sin(angle) * 42 * (0.3 + v * 0.7)}%`,
  );

  return (
    <motion.span
      style={
        reduced
          ? {
              left: `${50 + Math.cos(angle) * 44}%`,
              top: `${50 + Math.sin(angle) * 42}%`,
            }
          : { left, top }
      }
      className="label-mono absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-ink-2 px-3 py-2 text-muted sm:px-4"
    >
      {label}
    </motion.span>
  );
}
