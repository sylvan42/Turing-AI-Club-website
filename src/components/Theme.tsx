"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { Bus, CloudSun, Wallet, BookOpenText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Concept = {
  id: string;
  icon: typeof Bus;
  problem: string;
  idea: string;
  solution: string;
};

// Generic visual concepts only — illustrative, not TuringAI projects.
const CONCEPTS: Concept[] = [
  {
    id: "transport",
    icon: Bus,
    problem: "Long, unpredictable waits for campus transport",
    idea: "Predict demand from simple historical patterns",
    solution: "A smarter picture of when to travel",
  },
  {
    id: "weather",
    icon: CloudSun,
    problem: "Farmers guessing when the rain will come",
    idea: "Learn from local weather and season data",
    solution: "Clearer planting windows",
  },
  {
    id: "budget",
    icon: Wallet,
    problem: "Student budgets that vanish mid-semester",
    idea: "Spot spending patterns automatically",
    solution: "Early warnings before money runs out",
  },
  {
    id: "notes",
    icon: BookOpenText,
    problem: "Hours lost searching through scattered notes",
    idea: "Let a model read and organize them",
    solution: "Answers from your own material, faster",
  },
];

const STEPS = ["Problem", "AI idea", "Possible solution"] as const;

function ConceptCard({ concept }: { concept: Concept }) {
  const [step, setStep] = useState(0);
  const reduced = useReducedMotion();
  const Icon = concept.icon;
  const text = [concept.problem, concept.idea, concept.solution][step];

  return (
    <div className="h-full">
      <button
        type="button"
        onClick={() => setStep((s) => (s + 1) % 3)}
        aria-label={`Concept card: ${concept.problem}. Currently showing ${STEPS[step]}. Activate to see next step.`}
        className="group flex h-full w-full cursor-pointer flex-col rounded-2xl border border-line bg-ink-2 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-lime/30"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-muted transition-colors duration-300 group-hover:text-lime">
            <Icon className="h-4.5 w-4.5" />
          </span>
          <span className="label-mono text-faint">Concept</span>
        </div>

        {/* Step indicator */}
        <div className="mt-6 flex items-center gap-2">
          {STEPS.map((label, i) => (
            <span
              key={label}
              className={cn(
                "label-mono transition-colors duration-300",
                i === step ? "text-lime" : "text-faint",
              )}
            >
              {label}
              {i < STEPS.length - 1 && (
                <span className="ml-2 text-faint">→</span>
              )}
            </span>
          ))}
        </div>

        <div className="relative mt-3 min-h-[4.5rem] flex-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-base leading-relaxed text-paper/90"
            >
              {text}
            </motion.p>
          </AnimatePresence>
        </div>

        <span className="label-mono mt-4 text-faint transition-colors duration-300 group-hover:text-muted">
          Tap to explore →
        </span>
      </button>
    </div>
  );
}

export function Theme() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const scrollYProgress = useSectionProgress(sectionRef, 0, 1, 1, 0);
  const parallaxA = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const parallaxB = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 sm:py-36"
    >
      {/* Soft tint shift so the canvas keeps evolving */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-2/70 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="label-mono text-lime-dim">02 / Semester theme</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AI for <span className="text-lime">everyday</span> problems.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Pick a problem you actually run into. Build something that helps
            with it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONCEPTS.map((concept, i) => (
            <Reveal key={concept.id} delay={0.07 * i} className="h-full">
              <ConceptCard concept={concept} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 max-w-2xl font-display text-xl font-medium text-paper/90 sm:text-2xl">
            AI isn&apos;t only something to study.{" "}
            <span className="text-lime">It&apos;s something to apply.</span>
          </p>
        </Reveal>
      </div>

      {/* Decorative parallax nodes */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: parallaxA }}
        className="absolute left-[8%] top-24 h-2 w-2 rounded-full bg-lime/40"
      />
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: parallaxB }}
        className="absolute right-[12%] bottom-24 h-1.5 w-1.5 rounded-full bg-paper/30"
      />
    </section>
  );
}
