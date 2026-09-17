"use client";

import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { CONTACT_EMAIL } from "@/lib/content";

export function JoinCTA() {
  return (
    <section
      id="join"
      className="relative scroll-mt-20 overflow-hidden py-32 sm:py-44"
    >
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="label-mono text-lime-dim">08 / Join us</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Your next idea could{" "}
            <span className="text-lime">start here.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Join a community of students learning AI, exploring problems, and
            building practical skills together.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={`mailto:${CONTACT_EMAIL}?subject=Joining%20TuringAI%20Club`}>
              Join TuringAI
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={`mailto:${CONTACT_EMAIL}`} variant="ghost">
              <Mail className="h-4 w-4" />
              Get in Touch
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-dashed border-line bg-ink-2/60 px-6 py-5">
            <span className="flex items-center gap-2 text-sm text-muted">
              <MessageCircle className="h-4 w-4 text-lime-dim" />
              WhatsApp community group
            </span>
            <span className="label-mono text-faint">
              Group link placeholder — shared at onboarding
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 space-y-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block text-paper/90 underline decoration-lime/40 underline-offset-4 transition-colors hover:text-lime"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="label-mono text-faint">CEDAT · Makerere University</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
