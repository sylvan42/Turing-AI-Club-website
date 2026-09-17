"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { tracks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Tracks() {
  const [selected, setSelected] = useState<"beginner" | "intermediate">(
    "beginner",
  );
  const reduced = useReducedMotion();
  const track = tracks.find((t) => t.id === selected)!;

  return (
    <section
      id="tracks"
      className="relative scroll-mt-20 overflow-hidden py-28 sm:py-36"
    >
      {/* Background geometry shifts subtly per track */}
      <motion.div
        aria-hidden
        animate={
          reduced
            ? undefined
            : {
                x: selected === "beginner" ? "-10%" : "10%",
                rotate: selected === "beginner" ? 0 : 12,
              }
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full border border-lime/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="label-mono text-lime-dim">05 / Learning tracks</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find your starting point.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Two tracks, one community. Members are placed by their AI
            understanding and programming experience — both run on DataCamp,
            matched to your pace.
          </p>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={0.2}>
          <div
            role="group"
            aria-label="Choose a learning track"
            className="mt-12 inline-flex rounded-full border border-line bg-ink-2 p-1.5"
          >
            {tracks.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={selected === t.id}
                onClick={() => setSelected(t.id)}
                className={cn(
                  "relative min-h-11 cursor-pointer rounded-full px-6 py-2.5 font-display text-sm font-semibold transition-colors duration-300 sm:px-8",
                  selected === t.id
                    ? "text-ink"
                    : "text-muted hover:text-paper",
                )}
              >
                {selected === t.id && (
                  <motion.span
                    layoutId="track-pill"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-full bg-lime"
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Track panels */}
        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={track.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-lime/25 bg-ink-2 p-8 sm:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="label-mono text-lime-dim">
                    Track {track.index}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    {track.label}
                  </h3>
                  <p className="mt-2 font-display text-lg text-lime">
                    {track.level}
                  </p>
                </div>
                <span className="font-display text-7xl font-bold text-lime/10 sm:text-8xl">
                  {track.index}
                </span>
              </div>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                {track.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {track.topics.map((topic, i) => (
                  <motion.li
                    key={topic}
                    initial={reduced ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                    className="flex items-center gap-3 text-paper/90"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/10 text-lime">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* The other track, receding */}
          {tracks
            .filter((t) => t.id !== selected)
            .map((other) => (
              <motion.button
                key={other.id}
                type="button"
                onClick={() => setSelected(other.id)}
                initial={false}
                animate={reduced ? undefined : { opacity: 0.75, scale: 0.985 }}
                whileHover={reduced ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer rounded-3xl border border-line bg-ink-2/60 p-8 text-left transition-colors duration-300 hover:border-lime/25 sm:p-10"
              >
                <p className="label-mono text-faint">Track {other.index}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-muted">
                  {other.label}
                </h3>
                <p className="mt-2 font-display text-base text-faint">
                  {other.level}
                </p>
                <p className="label-mono mt-8 text-lime-dim">
                  Switch track →
                </p>
              </motion.button>
            ))}
        </div>
      </div>
    </section>
  );
}
