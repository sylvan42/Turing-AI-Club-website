"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { HeroCanvas } from "@/components/HeroCanvas";
import { MagneticButton } from "@/components/MagneticButton";
import { stages } from "@/lib/content";
import { ArrowRight, ChevronDown } from "lucide-react";

const HEADLINE_WORDS = ["AI", "for", "everyday", "problems."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Progress across the sticky window (extra 60svh of scroll room).
  const scrollYProgress = useSectionProgress(sectionRef, 0, 0, 1, 1);
  const morph = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.6], [0, -60]);
  const stripOpacity = useTransform(scrollYProgress, [0.35, 0.7], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[160svh] flex-col overflow-hidden"
    >
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="sticky top-0 flex min-h-svh w-full items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.05] blur-3xl"
        />
        <HeroCanvas morph={morph} />
        <motion.div
          style={reduced ? undefined : { opacity: contentOpacity, y: contentY }}
          className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="label-mono mb-6 text-faint"
          >
            Makerere University · CEDAT
          </motion.p>

          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.98] tracking-tight">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: "0.4em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word === "AI" ? <span className="text-lime">{word}</span> : word}
                {i < HEADLINE_WORDS.length - 1 && <span>&nbsp;</span>}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            TuringAI Club is a student community at Makerere University turning
            AI learning into practical innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="label-mono mt-5 text-lime-dim"
          >
            Learn. Collaborate. Build. Demonstrate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#join">
              Join TuringAI
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#about" variant="ghost">
              Explore the Club
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Philosophy strip the network reorganizes toward */}
        <motion.div
          aria-hidden
          style={reduced ? undefined : { opacity: stripOpacity }}
          className="absolute inset-x-0 bottom-[6svh] z-10 hidden justify-between px-[6vw] sm:flex"
        >
          {stages.map((stage, i) => (
            <div key={stage.name} className="flex items-center gap-3">
              <span className="label-mono text-paper/90">
                {stage.name.toUpperCase()}
              </span>
              {i < stages.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-lime/60" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={reduced ? undefined : { opacity: contentOpacity }}
          className="absolute bottom-[6svh] left-1/2 z-10 -translate-x-1/2 text-faint transition-colors hover:text-lime sm:hidden"
        >
          <ChevronDown className="animate-pulse-soft h-6 w-6" />
        </motion.a>
      </div>
    </section>
  );
}
