"use client";

import { CONTACT_EMAIL } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/**
 * About: one editorial statement on a single reading measure — no columns,
 * no cram. Lime highlights carry the facts a scanning reader wants.
 */
export function About() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=Joining%20TuringAI%20Club`;

  return (
    <section id="about" className="chapter text-paper" data-chapter="about">
      <Reveal>
        <h2 className="section-head h-head">More than learning AI.</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="statement mt-14 max-w-[44ch]">
          TuringAI Club is a student community at{" "}
          <mark>Makerere University</mark>, hosted in CEDAT. We exist for
          students who want to{" "}
          <em className="not-italic font-medium">do</em> artificial
          intelligence, not only study it.
        </p>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="ink-soft step-body mt-10 max-w-[62ch]">
          A club year has four steps. First we <mark>learn</mark> on
          self-paced courses matched to your level. Then we collaborate,
          giving people a space to <mark>work in mixed teams</mark> across
          every course. Then we build: mentored and supported,{" "}
          <mark>turning ideas into{"\u00a0"}working things</mark>. Finally we
          demonstrate: show the work, document it, and hand the best ideas to
          next year&apos;s teams.
        </p>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="ink-soft step-body mt-6 max-w-[62ch]">
          The problems we pick come from Makerere itself: buses that never
          come, notes nobody can find, budgets that vanish. The skills they
          leave behind are for life.
        </p>
      </Reveal>
      <Reveal delay={0.22}>
        <p className="step-body mt-12">
          <a href={mailto} className="step-body font-semibold text-lime underline decoration-lime decoration-2 underline-offset-4 hover:decoration-paper">
            Write to the club, build with us →
          </a>
        </p>
      </Reveal>
    </section>
  );
}
