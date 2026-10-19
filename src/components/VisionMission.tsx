"use client";

import { visionStatement, missionStatement } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/** The quiet second chapter: both statements, plain and readable, with
 * room to breathe between them. */
export function VisionMission() {
  return (
    <section
      id="vision"
      className="chapter bg-panel text-paper"
      data-chapter="vision"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <Reveal>
          <h2 className="section-head h-head">Where we&apos;re going.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="ink-soft step-body max-w-md lg:pt-2 lg:text-right">
            Open to every course at Makerere.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <h3 className="step-lead mt-20 font-semibold">Vision</h3>
        <p className="statement mt-4 max-w-[38ch]">{visionStatement}</p>
      </Reveal>

      <Reveal delay={0.14}>
        <h3 className="step-lead mt-24 font-semibold">Mission</h3>
        <p className="statement mt-4 max-w-[38ch]">{missionStatement}</p>
      </Reveal>
    </section>
  );
}
