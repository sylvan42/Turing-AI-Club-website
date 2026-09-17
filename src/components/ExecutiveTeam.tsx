"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { committee, patron, type TeamMember } from "@/lib/content";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function MemberCard({
  member,
  dimmed,
  onFocus,
  onBlur,
  featured = false,
}: {
  member: TeamMember;
  dimmed: boolean;
  onFocus: () => void;
  onBlur: () => void;
  featured?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      tabIndex={0}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
      onFocus={onFocus}
      onBlur={onBlur}
      animate={
        reduced
          ? undefined
          : { opacity: dimmed ? 0.55 : 1, scale: dimmed ? 0.985 : 1 }
      }
      transition={{ duration: 0.3 }}
      className={cn(
        "group flex flex-col rounded-2xl border border-line bg-ink-2 p-6 transition-colors duration-300 hover:border-lime/30",
        featured && "sm:col-span-2 sm:flex-row sm:items-center sm:gap-8",
      )}
    >
      {/* Elegant placeholder portrait: monogram over node motif */}
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-ink",
          featured ? "h-28 w-28" : "h-20 w-20",
        )}
        aria-hidden
      >
        <svg
          viewBox="0 0 80 80"
          className="absolute inset-0 h-full w-full opacity-20"
        >
          <circle cx="16" cy="18" r="2" fill="#A3E635" />
          <circle cx="62" cy="26" r="1.5" fill="#F5F5F2" />
          <circle cx="54" cy="64" r="2" fill="#A3E635" />
          <line x1="16" y1="18" x2="62" y2="26" stroke="#F5F5F2" strokeWidth="0.5" />
          <line x1="62" y1="26" x2="54" y2="64" stroke="#F5F5F2" strokeWidth="0.5" />
        </svg>
        <span
          className={cn(
            "relative font-display font-bold text-lime/80 transition-transform duration-500 group-hover:scale-110",
            featured ? "text-3xl" : "text-2xl",
          )}
        >
          {initials(member.name)}
        </span>
      </div>

      <div className={cn("mt-5", featured && "sm:mt-0")}>
        {featured && (
          <p className="label-mono mb-2 text-lime-dim">Patron</p>
        )}
        <p className="font-display text-lg font-semibold leading-snug">
          {member.name}
        </p>
        <p
          className={cn(
            "label-mono mt-2 transition-colors duration-300",
            dimmed ? "text-faint" : "text-muted group-hover:text-lime",
          )}
        >
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export function ExecutiveTeam() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="team" className="scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="label-mono text-lime-dim">07 / Executive committee</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Meet the people behind TuringAI.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="sm:col-span-2 lg:col-span-3">
            <MemberCard
              member={patron}
              featured
              dimmed={focused !== null && focused !== patron.name}
              onFocus={() => setFocused(patron.name)}
              onBlur={() => setFocused(null)}
            />
          </Reveal>
          {committee.map((member, i) => (
            <Reveal key={member.name} delay={0.05 * (i % 3)}>
              <MemberCard
                member={member}
                dimmed={focused !== null && focused !== member.name}
                onFocus={() => setFocused(member.name)}
                onBlur={() => setFocused(null)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
