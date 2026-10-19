"use client";

import { stages } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/* Stage glyphs: the logo mark drawn to progressive completion.
   Learn = one bar in; Demonstrate = the whole mark standing alone. */
function StageGlyph({ step }: { step: number }) {
  const barW = [58, 38, 24];
  return (
    <svg viewBox="0 0 100 96" aria-hidden className="h-10 w-10 text-lime" fill="currentColor">
      {barW.slice(0, step).map((w, i) => (
        <rect key={w} x={8} y={14 + i * 29} width={w} height={16} rx={8} />
      ))}
      {step === 4 && <circle cx={82} cy={80} r={12} />}
    </svg>
  );
}

// Four equal cards: order carried by numbering, the reference is systematic.
export function ClubProcess() {
  return (
    <section
      id="how-it-works"
      className="chapter text-paper"
      data-chapter="how-it-works"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <Reveal>
          <h2 className="section-head h-head">How a year runs.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="ink-soft step-body max-w-md lg:pt-2 lg:text-right">
            DataCamp teaches the foundations at your own pace. The club turns
            them into teams, prototypes and finished work.
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-4 md:grid-cols-4">
        {stages.map((stage, i) => (
          <Reveal key={stage.name} delay={0.06 * i} className="h-full">
            <li className="flex h-full min-h-[240px] flex-col rounded-xl bg-panel p-7 transition-colors duration-200 hover:bg-[#1c1c1c]">
              <StageGlyph step={i + 1} />
              <p className="step-body mt-8 font-semibold">{stage.name}</p>
              <p className="ink-soft mt-2 max-w-[32ch] step-small leading-snug">
                {stage.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
