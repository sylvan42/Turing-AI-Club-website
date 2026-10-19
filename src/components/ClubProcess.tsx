"use client";

import { stages } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/* Stage glyphs: the logo mark drawn to progressive completion.
   Learn = one bar in; Demonstrate = the whole mark standing alone. */
function StageGlyph({ step }: { step: number }) {
  const barW = [58, 38, 24];
  return (
    <svg viewBox="0 0 100 96" aria-hidden className="h-[42%] text-lime" fill="currentColor">
      {barW.slice(0, step).map((w, i) => (
        <rect key={w} x={8} y={14 + i * 29} width={w} height={16} rx={8} />
      ))}
      {step === 4 && <circle cx={82} cy={80} r={12} />}
    </svg>
  );
}

// Four tiles in one row, bottom-aligned, each taller than the one before.
// Order carried by size, not numbering.
const TILE = [
  { span: "md:col-span-2", h: "h-[28vh] md:h-[30vh]" },
  { span: "md:col-span-3", h: "h-[40vh] md:h-[44vh]" },
  { span: "md:col-span-3", h: "h-[54vh] md:h-[58vh]" },
  { span: "md:col-span-4", h: "h-[68vh] md:h-[72vh]" },
];

export function ClubProcess() {
  return (
    <section id="how-it-works" className="chapter text-paper" data-chapter="how-it-works">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <Reveal>
          <h2 className="step-head h-head">How a year runs.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="ink-soft step-body max-w-md lg:pt-3">
            DataCamp teaches the foundations at your own pace. The club turns
            them into teams, prototypes and finished work.
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid items-end gap-4 md:grid-cols-12">
        {stages.map((stage, i) => (
          <Reveal
            key={stage.name}
            delay={0.06 * i}
            className={`${TILE[i].span} ${i === 0 ? "md:col-span-2 md:row-none" : ""}`}
          >
            <div>
              <div
                className={`${TILE[i].h} flex w-full items-center justify-start overflow-hidden rounded-[12px] bg-panel p-8`}
              >
                <StageGlyph step={i + 1} />
              </div>
              <p className="mt-5 step-body font-bold leading-tight">
                {stage.name}
              </p>
              <p className="ink-soft mt-2 max-w-[34ch] step-small leading-snug">
                {stage.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
