"use client";

import { CONTACT_EMAIL } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/**
 * About: one statement set far larger than anything else in the chapter,
 * running through two columns, with lime highlights carrying the facts
 * a scanning reader wants.
 */
export function About() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=Joining%20TuringAI%20Club`;

  return (
    <section id="about" className="chapter text-paper" data-chapter="about">
      <Reveal>
        <h2 className="step-head h-head">More than learning AI.</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="statement mt-12 gap-8 [text-align:justify] [hyphens:auto] md:[column-count:2] xl:max-w-none">
          <p>
            TuringAI Club is a student community at{" "}
            <mark>Makerere University</mark>, hosted in CEDAT. We exist for
            students who want to{" "}
            <em className="not-italic font-medium">do</em> artificial
            intelligence, not only study it.
          </p>
          <p className="mt-4">
            A club year has four steps. First we <mark>learn</mark> on
            self-paced courses matched to your level. Then we collaborate,
            giving people a space to <mark>work in mixed teams</mark> across
            every course. Then we build: mentored and supported,{" "}
            <mark>turning ideas into{"\u00a0"}working things</mark>. Finally we
            demonstrate: show the work, document it, and hand the best ideas to
            next year&apos;s teams.
          </p>
          <p className="mt-4">
            The problems we pick come from Makerere itself: buses that never
            come, notes nobody can find, budgets that vanish. The skills they
            leave behind are for life.
          </p>
          <p className="mt-6 leading-normal">
            <a
              href={mailto}
              className="font-bold underline decoration-lime decoration-2 underline-offset-4"
            >
              Write to the club, build with us →
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
