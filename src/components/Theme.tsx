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
const CARD_W = 560;
const GAP = 40;

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
      <svg viewBox="0 0 200 200" aria-hidden className="h-[58%] w-[58%]">
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
      <svg viewBox="0 0 200 200" aria-hidden className="h-[58%] w-[58%]">
        <path d="M60 90a24 24 0 0 1 44-8 20 20 0 0 1 36 8H60Z" {...common} />
        <line x1="70" y1="115" x2="70" y2="135" {...common} />
        <line x1="100" y1="115" x2="100" y2="145" {...common} />
        <line x1="130" y1="115" x2="130" y2="135" {...common} />
      </svg>
    );
  if (id === "budget")
    return (
      <svg viewBox="0 0 200 200" aria-hidden className="h-[58%] w-[58%]">
        <ellipse cx="100" cy="135" rx="52" ry="16" {...common} />
        <ellipse cx="100" cy="102" rx="52" ry="16" {...common} />
        <ellipse cx="100" cy="70" rx="52" ry="16" {...common} />
      </svg>
    );
  return (
    <svg viewBox="0 0 200 200" aria-hidden className="h-[58%] w-[58%]">
      <rect x="55" y="55" width="90" height="110" rx="8" {...common} />
      <line x1="100" y1="55" x2="100" y2="165" {...common} />
      <line x1="70" y1="85" x2="90" y2="85" {...common} />
      <line x1="112" y1="85" x2="132" y2="85" {...common} />
      <line x1="70" y1="115" x2="90" y2="115" {...common} />
      <line x1="112" y1="115" x2="132" y2="115" {...common} />
    </svg>
  );
}

function ConceptCard({ concept, wide }: { concept: Concept; wide: boolean }) {
  const [step, setStep] = useState(0);
  const text = [concept.problem, concept.idea, concept.solution][step];

  return (
    <button
      type="button"
      onClick={() => setStep((s) => (s + 1) % 3)}
      aria-label={`${concept.label}: currently showing ${STEPS[step]}. Activate to see the next step.`}
      className="flex h-full w-full cursor-pointer flex-col justify-center gap-7 rounded-xl bg-panel p-8 text-left transition-colors duration-200 hover:bg-[#1c1c1c] sm:flex-row sm:items-center sm:gap-9"
      style={{ width: wide ? CARD_W : undefined }}
    >
      {/* The pictogram now rides as a chip beside the words, not a stage */}
      <span
        aria-hidden
        className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-ink sm:h-28 sm:w-28"
      >
        <Pictogram id={concept.id} />
      </span>
      <span className="flex max-w-[30ch] flex-col gap-3">
        <span className="text-[22px] font-semibold tracking-[-0.02em] leading-tight">
          {concept.label}
        </span>
        <span className="text-fog step-body leading-snug">{text}</span>
        <span className="text-lime step-small mt-1 font-semibold">
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

  // The track starts with the first card already on stage — the pinned
  // scene never shows an empty screen — then travels the whole set out.
  const x = useTransform(
    smooth,
    [0, 0.72],
    [view * 0.55, -(4 * CARD_W + 3 * GAP + 60 - view)]
  );

  return (
    <section className="chapter !min-h-0 !p-0" data-chapter="theme">
      {/* Desktop, motion on: hold the scene, travel the cards */}
      {!reduced && (
        <div ref={ref} className="hidden h-[210svh] lg:block">
          <div className="sticky top-0 h-svh overflow-hidden bg-ink">
            {/* No photograph: the dark ground lets the cards carry it */}
            <div
              className="absolute top-16 left-0 right-0"
              style={{ paddingLeft: "var(--gutter)" }}
            >
              <Reveal>
                <h2 className="section-head h-head">
                  Everyday problems.
                </h2>
                <p className="ink-soft step-body mt-5 max-w-[34ch] font-medium">
                  Pick one you run into. Build something that helps with it.
                </p>
              </Reveal>
            </div>
            <motion.div
              style={reduced ? undefined : { x }}
              className="absolute bottom-10 left-0 flex h-[400px] gap-10 pl-10"
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
      <div
        className="pt-10 lg:hidden"
        style={{ paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" }}
      >
        <Reveal>
          <h2 className="section-head h-head">Everyday problems.</h2>
          <p className="ink-soft step-body mt-5 max-w-md font-medium">
            Pick one you run into. Build something that helps with it.
          </p>
        </Reveal>
        <div className="mt-10 mb-20 flex flex-col gap-5">
          {concepts.map((concept) => (
            <div key={concept.id} className="min-h-[220px]">
              <ConceptCard concept={concept} wide={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
