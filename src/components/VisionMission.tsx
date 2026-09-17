"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { Reveal } from "@/components/Reveal";

export function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const scrollYProgress = useSectionProgress(sectionRef, 0, 0, 1, 1);

  // Vision holds, then morphs into Mission across the sticky window.
  const visionOpacity = useTransform(scrollYProgress, [0.15, 0.45], [1, 0]);
  const visionY = useTransform(scrollYProgress, [0.15, 0.45], [0, -46]);
  const missionOpacity = useTransform(scrollYProgress, [0.42, 0.68], [0, 1]);
  const missionY = useTransform(scrollYProgress, [0.42, 0.68], [46, 0]);
  const indexY = useTransform(scrollYProgress, [0.15, 0.68], ["0%", "-50%"]);
  const bannerOpacity = useTransform(scrollYProgress, [0.7, 0.88], [0, 1]);

  if (reduced) {
    // Static, fully readable fallback — no sticky scroll theater.
    return (
      <section id="vision" className="scroll-mt-20 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label-mono text-lime-dim">03 / Purpose</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Where we&apos;re going.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Statement index="01" title="Vision">
              Make Makerere a leading hub for practical AI learning and
              innovation in Uganda and the wider region.
            </Statement>
            <Statement index="02" title="Mission">
              Give students from every course real AI skills, put them in mixed
              teams, and help them build responsible solutions to real
              problems.
            </Statement>
          </div>
          <p className="label-mono mt-14 inline-block rounded-full border border-lime/30 bg-lime/5 px-5 py-3 text-lime">
            Open to every course at Makerere
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative min-h-[280svh] scroll-mt-20"
    >
      <div className="sticky top-0 flex min-h-svh items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute left-1/4 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-lime/[0.04] blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="label-mono text-lime-dim">03 / Purpose</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Where we&apos;re going.
            </h2>
          </Reveal>

          <div className="mt-14 flex items-start gap-8 sm:mt-20 sm:gap-14">
            {/* Shared index numeral that travels 01 → 02 */}
            <div
              className="relative h-24 overflow-hidden sm:h-32"
              aria-hidden
            >
              <motion.div
                style={{ y: indexY }}
                className="flex flex-col font-display text-7xl font-bold text-lime/20 sm:text-8xl"
              >
                <span className="h-24 sm:h-32">01</span>
                <span className="h-24 sm:h-32">02</span>
              </motion.div>
            </div>

            <div className="relative min-h-[16rem] flex-1 sm:min-h-[14rem]">
              <motion.div
                style={{ opacity: visionOpacity, y: visionY }}
                className="absolute inset-0"
              >
                <p className="label-mono text-muted">Vision</p>
                <p className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug text-paper sm:text-3xl md:text-4xl">
                  Make Makerere a leading hub for practical AI learning and
                  innovation in Uganda and the wider region.
                </p>
              </motion.div>
              <motion.div
                style={{ opacity: missionOpacity, y: missionY }}
                className="absolute inset-0"
              >
                <p className="label-mono text-muted">Mission</p>
                <p className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug text-paper sm:text-3xl md:text-4xl">
                  Give students from every course real AI skills, put them in
                  mixed teams, and help them build responsible solutions to
                  real problems.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.p
            style={{ opacity: bannerOpacity }}
            className="label-mono mt-16 inline-block rounded-full border border-lime/30 bg-lime/5 px-5 py-3 text-lime"
          >
            Open to every course at Makerere
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function Statement({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-display text-6xl font-bold text-lime/20">{index}</p>
      <p className="label-mono mt-4 text-muted">{title}</p>
      <p className="mt-3 font-display text-2xl font-medium leading-snug text-paper">
        {children}
      </p>
    </div>
  );
}
