"use client";

import { committee, patron, type TeamMember } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s+/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function RosterRow({ member, large }: { member: TeamMember; large?: boolean }) {
  return (
    <li
      className={`flex items-center justify-between gap-6 odd:bg-white/[0.03] px-2 py-3 transition-colors duration-200 hover:bg-white/[0.06] ${
        large ? "py-4" : ""
      }`}
    >
      <span
        className={`leading-none font-semibold ${
          large ? "step-lead" : "step-body"
        }`}
      >
        {member.name}
      </span>
      <span className="ink-soft shrink-0 text-right step-body">
        {member.role}
      </span>
    </li>
  );
}

/**
 * The team chapter: a roster on one ground, patron first. The initial
 * block marks the patron; no cards, no portraits we do not have.
 */
export function ExecutiveTeam() {
  return (
    <section id="team" className="chapter text-paper" data-chapter="team">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <Reveal>
          <h2 className="section-head h-head">The people.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="ink-soft step-body max-w-md lg:pt-2 lg:text-right">
            A patron, two co-chairpersons and leads, all students or staff at
            Makerere.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 flex items-center gap-4">
          <span
            aria-hidden
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-lime"
          >
            <span className="text-ink text-xl font-bold">
              {initials(patron.name)}
            </span>
          </span>
          <p className="step-lead font-semibold">{patron.name}</p>
          <p className="ink-soft ml-auto text-[17px]">{patron.role}</p>
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-x-16 sm:grid-cols-2">
        <Reveal delay={0.06}>
          {committee.slice(0, 5).map((member) => (
            <RosterRow key={member.name} member={member} />
          ))}
        </Reveal>
        <Reveal delay={0.12}>
          {committee.slice(5).map((member) => (
            <RosterRow key={member.name} member={member} />
          ))}
        </Reveal>
      </ul>
    </section>
  );
}
