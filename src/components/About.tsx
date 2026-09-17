"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Cpu, SearchCheck, Lightbulb, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const ECOSYSTEM = [
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    detail: "From every course at Makerere, at every skill level.",
  },
  {
    id: "skills",
    label: "AI Skills",
    icon: Cpu,
    detail: "Learned hands-on through DataCamp and club sessions.",
  },
  {
    id: "problems",
    label: "Problems",
    icon: SearchCheck,
    detail: "Real, everyday problems members actually run into.",
  },
  {
    id: "ideas",
    label: "Ideas",
    icon: Lightbulb,
    detail: "Shaped in mixed teams across disciplines.",
  },
  {
    id: "solutions",
    label: "Solutions",
    icon: Rocket,
    detail: "Responsible, working answers to real needs.",
  },
];

export function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <section id="about" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="label-mono text-lime-dim">01 / What is TuringAI?</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            More than learning AI.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            A community for students who want to understand AI and apply it to
            real problems. A student club that turns AI learning into real
            projects — open to every course at Makerere, bringing together
            different disciplines and skill levels to learn side by side.
          </p>
        </Reveal>

        {/* Interactive ecosystem chain */}
        <div className="mt-16 sm:mt-20">
          <div className="relative">
            {/* Connector line across the chain (desktop) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-9 hidden h-px sm:block"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-lime/0 via-lime/40 to-lime/0"
                initial={reduced ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
                whileInView={
                  reduced ? { opacity: 1 } : { scaleX: 1, opacity: 1 }
                }
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <ol className="grid gap-3 sm:grid-cols-5 sm:gap-4">
            {ECOSYSTEM.map((node, i) => {
              const Icon = node.icon;
              const active = activeIndex === i;
              return (
                <motion.li
                  key={node.id}
                  className="relative h-full"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
                  whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                      type="button"
                      onClick={() => setActiveIndex(active ? null : i)}
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseLeave={() => setActiveIndex(null)}
                      aria-expanded={active}
                      className={cn(
                        "group flex h-full w-full cursor-pointer flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all duration-300 sm:items-center sm:text-center",
                        active
                          ? "border-lime/40 bg-ink-3"
                          : "border-line bg-ink-2 hover:border-lime/25",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 sm:mx-auto",
                          active
                            ? "border-lime/60 bg-lime/10 text-lime"
                            : "border-line bg-ink text-muted group-hover:text-lime",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-display text-base font-semibold">
                        {node.label}
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-relaxed transition-colors duration-300",
                          active ? "text-paper/80" : "text-faint",
                        )}
                      >
                        {node.detail}
                      </span>
                    </button>
                </motion.li>
              );
            })}
            </ol>
          </div>
          <p className="label-mono mt-8 text-center text-faint">
            One flows into the next — that is the club.
          </p>
        </div>
      </div>
    </section>
  );
}
