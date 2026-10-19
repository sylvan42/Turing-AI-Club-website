"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { concepts, type Concept } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const STEPS = ["Problem", "AI idea", "Possible solution"] as const;

/* Flat pictograms drawn for this subject: one lime line language on ink */
function Pictogram({ id }: { id: string }) {
  const common = {
    fill: "none",
    stroke: "var(--color-lime)",
    strokeWidth: 10,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (id === "transport")
    return (
      <svg viewBox="0 0 200 200" aria-hidden className="h-[55%] w-[55%]">
        <rect x="40" y="60" width="120" height="80" rx="14" {...common} />
        <line x1="40" y1="100" x2="160" y2="100" {...common} />
        <rect x="55" y="74" width="20" height="18" rx="4" {...common} />
        <rect x="90" y="74" width="20" height="18" rx="4" {...common} />
        <circle cx="70" cy="145" r="8" fill="var(--color-lime)" />
        <circle cx="130" cy="145" r="8" fill="var(--color-lime)" />
      </svg>
    );
  if (id === "weather")
    return (
      <svg viewBox="0 0 200 200" aria-hidden className="h-[55%] w-[55%]">
        <path d="M60 90a24 24 0 0 1 44-8 20 20 0 0 1 36 8H60Z" {...common} />
        <line x1="70" y1="115" x2="70" y2="135" {...common} />
        <line x1="100" y1="115" x2="100" y2="145" {...common} />
        <line x1="130" y1="115" x2="130" y2="135" {...common} />
      </svg>
    );
  if (id === "budget")
    return (
      <svg viewBox="0 0 200 200" aria-hidden className="h-[55%] w-[55%]">
        <ellipse cx="100" cy="135" rx="52" ry="16" {...common} />
        <ellipse cx="100" cy="102" rx="52" ry="16" {...common} />
        <ellipse cx="100" cy="70" rx="52" ry="16" {...common} />
      </svg>
    );
  return (
    <svg viewBox="0 0 200 200" aria-hidden className="h-[55%] w-[55%]">
      <rect x="55" y="55" width="90" height="110" rx="8" {...common} />
      <line x1="100" y1="55" x2="100" y2="165" {...common} />
      <line x1="70" y1="85" x2="90" y2="85" {...common} />
      <line x1="112" y1="85" x2="132" y2="85" {...common} />
      <line x1="70" y1="115" x2="90" y2="115" {...common} />
      <line x1="112" y1="115" x2="132" y2="115" {...common} />
    </svg>
  );
}

function ConceptCard({
  concept,
  wide,
}: {
  concept: Concept;
  wide: boolean;
}) {
  const [step, setStep] = useState(0);
  const text = [concept.problem, concept.idea, concept.solution][step];

  return (
    <button
      type="button"
      onClick={() => setStep((s) => (s + 1) % 3)}
      aria-label={`${concept.label}: currently showing ${STEPS[step]}. Activate to see the next step.`}
      className="flex h-full w-full cursor-pointer shrink-0 flex-col overflow-hidden rounded-[12px] bg-panel text-left transition-[filter] duration-200 hover:brightness-110"
      style={{ width: wide ? 720 : undefined }}
    >
      <span className="flex flex-1 items-center justify-center bg-ink">
        <Pictogram id={concept.id} />
      </span>
      <span className="flex flex-col gap-2 bg-panel p-7">
        <span className="h-head step-head uppercase leading-none">
          {concept.label}
        </span>
        <span className="text-fog step-body leading-snug">{text}</span>
        <span className="text-lime step-small mt-1 font-bold">
          {STEPS[step]} · tap for the next step →
        </span>
      </span>
    </button>
  );
}

/**
 * The showcase: a held dark scene with a track of problem cards travelling
 * right to left as the page scrolls. Reduced motion and phone: the same
 * cards, no pin.
 */
export function Theme() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const [view, setView] = useState(1440);

  useEffect(() => {
    const onResize = () => setView(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const x = useTransform(
    smooth,
    [0, 0.72],
    [view + 60, -(4 * 720 + 3 * 40 + 60 - view)]
  );

  return (
    <section className="chapter !min-h-0 !p-0" data-chapter="theme">
      {/* Desktop, motion on: hold the scene, travel the cards */}
      {!reduced && (
        <div ref={ref} className="hidden h-[210svh] lg:block">
          <div className="sticky top-0 h-svh overflow-hidden bg-ink">
            {/* No photograph: the dark ground lets the cards carry it */}
            <Reveal>
              <h2 className="h-head step-head absolute top-14 left-10 uppercase">
                Everyday problems.
              </h2>
            </Reveal>
            <p className="text-fog absolute top-[calc(56px+clamp(36px,4.4vw,68px)+40px)] left-12 max-w-[34ch] step-body font-medium">
              Pick one you run into. Build something that helps with it.
            </p>
            <motion.div
              style={reduced ? undefined : { x }}
              className="absolute bottom-10 left-0 flex h-[560px] gap-10 pl-10"
            >
              {concepts.map((concept) => (
                <div key={concept.id} className="h-full">
                  <ConceptCard concept={concept} wide />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Phone, tablet and reduced motion: heading, then the cards stacked */}
      <div className="p-5 lg:hidden">
        <Reveal>
          <h2 className="h-head step-head uppercase">Everyday problems.</h2>
          <p className="text-fog mt-4 max-w-md step-body">
            Pick one you run into. Build something that helps with it.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-5">
          {concepts.map((concept) => (
            <div key={concept.id} className="min-h-[420px]">
              <ConceptCard concept={concept} wide={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
