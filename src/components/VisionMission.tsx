"use client";

import { visionStatement, missionStatement } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/** The quiet second chapter: both statements, plain and readable. */
export function VisionMission() {
  return (
    <section
      id="vision"
      className="chapter bg-panel text-paper"
      data-chapter="vision"
    >
      <Reveal>
        <h2 className="step-head h-head">Where we&apos;re going.</h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-8">
        <Reveal delay={0.06}>
          <p className="step-lead font-bold">
            <span aria-hidden className="mr-3 inline-block h-2 w-6 rounded-full bg-lime align-middle" />
            Vision
          </p>
          <p className="ink-soft statement mt-3 max-w-xl">{visionStatement}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="step-lead font-bold">
            <span aria-hidden className="mr-3 inline-block h-2 w-6 rounded-full bg-lime align-middle" />
            Mission
          </p>
          <p className="ink-soft statement mt-3 max-w-xl">{missionStatement}</p>
        </Reveal>
      </div>

      <Reveal delay={0.18}>
        <p className="step-lead mt-16 font-bold">Open to every course at Makerere.</p>
      </Reveal>
    </section>
  );
}
