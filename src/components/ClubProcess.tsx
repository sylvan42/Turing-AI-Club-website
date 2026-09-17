"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { Reveal } from "@/components/Reveal";
import { stages } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Signature interaction: a sticky viewport where a single glowing path
 * travels through LEARN → COLLABORATE → BUILD → DEMONSTRATE as the user
 * scrolls, with the active stage's copy swapping alongside.
 */
export function ClubProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);

  const scrollYProgress = useSectionProgress(sectionRef, 0, 0, 1, 1);
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const pathLength = useTransform(smooth, [0.05, 0.92], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(3, Math.max(0, Math.floor((v - 0.05) / 0.225)));
    setActiveStage(idx);
  });

  if (reduced) {
    return (
      <section id="how-it-works" className="scroll-mt-20 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProcessHeading />
          <ol className="mt-14 grid gap-10 md:grid-cols-2">
            {stages.map((stage) => (
              <li key={stage.name} className="border-l-2 border-lime/40 pl-6">
                <p className="label-mono text-lime-dim">
                  {stage.index} / {stage.name.toUpperCase()}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
          <p className="label-mono mt-12 text-faint">
            DataCamp teaches. The club applies.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative min-h-[400svh] scroll-mt-20"
    >
      <div className="sticky top-0 flex min-h-svh flex-col justify-center overflow-hidden py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <ProcessHeading />

          <div className="mt-10 grid items-center gap-10 sm:mt-16 md:grid-cols-[1fr_1.1fr]">
            {/* Stage word column */}
            <div>
              <ol className="space-y-4 sm:space-y-6">
                {stages.map((stage, i) => (
                  <li key={stage.name}>
                    <div
                      className={cn(
                        "flex items-baseline gap-4 transition-all duration-500",
                        i === activeStage
                          ? "opacity-100"
                          : "opacity-25",
                      )}
                    >
                      <span className="label-mono w-10 shrink-0 text-lime-dim">
                        {stage.index}
                      </span>
                      <span
                        className={cn(
                          "font-display font-bold tracking-tight transition-all duration-500",
                          i === activeStage
                            ? "text-4xl text-paper sm:text-5xl md:text-6xl"
                            : "text-2xl text-muted sm:text-3xl",
                        )}
                      >
                        {stage.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Glowing path + copy */}
            <div className="relative">
              <svg
                viewBox="0 0 320 340"
                fill="none"
                aria-hidden
                className="mx-auto w-full max-w-[320px]"
              >
                {/* Base path */}
                <path
                  d={PATH_D}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                />
                {/* Glowing progress path */}
                <motion.path
                  d={PATH_D}
                  stroke="#A3E635"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ pathLength }}
                  filter="url(#glow)"
                />
                <defs>
                  <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Stage anchor dots */}
                {STAGE_POINTS.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={i === activeStage ? 6 : 4}
                    fill={i <= activeStage ? "#A3E635" : "#1c1c1f"}
                    stroke={i <= activeStage ? "#A3E635" : "rgba(255,255,255,0.2)"}
                    className="transition-all duration-500"
                  />
                ))}
              </svg>

              <div className="relative mt-6 min-h-[5.5rem] sm:mt-8">
                {stages.map((stage, i) => (
                  <p
                    key={stage.name}
                    aria-hidden={i !== activeStage}
                    className={cn(
                      "absolute inset-0 text-center text-lg leading-relaxed text-muted transition-all duration-500 sm:text-xl",
                      i === activeStage
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0",
                    )}
                  >
                    {stage.description}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <p className="label-mono mt-10 text-faint">
            DataCamp teaches. The club applies.
          </p>
        </div>
      </div>
    </section>
  );
}

// A single continuous S-curve threading four stage anchors.
const PATH_D =
  "M 30 30 C 150 30, 290 55, 290 105 C 290 155, 40 150, 30 200 C 22 245, 160 250, 290 310";

const STAGE_POINTS = [
  { x: 30, y: 30 },
  { x: 290, y: 105 },
  { x: 30, y: 200 },
  { x: 290, y: 310 },
];

function ProcessHeading() {
  return (
    <>
      <Reveal>
        <p className="label-mono text-lime-dim">04 / How the club works</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Learn. Collaborate. Build. Demonstrate.
        </h2>
      </Reveal>
    </>
  );
}
