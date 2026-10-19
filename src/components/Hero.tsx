"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero, navLinks } from "@/lib/content";
import { Mark } from "@/components/Mark";

/** Live thing: the fixed rail is the navigation; the active section's
 * label lifts to white and its dot ticks lime. Watches the anchor sections. */
function useActiveChapter(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const pick = () => {
      const mid = window.innerHeight / 2;
      let current: string | null = null;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom > mid) {
          current = el.id;
          break;
        }
      }
      setActive(current);
    };

    pick();
    const observer = new IntersectionObserver(pick, {
      rootMargin: "-45% 0px -45% 0px",
    });
    for (const el of sections) observer.observe(el);
    window.addEventListener("scroll", pick, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pick);
    };
  }, [ids.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}

function ChapterRail({ active }: { active: string | null }) {
  return (
    <nav
      aria-label="Site sections"
      className="fixed top-0 right-0 z-40 hidden h-svh w-[76px] shrink-0 flex-col justify-center md:flex"
    >
      {navLinks.map((link) => {
        const isActive = active === link.href.slice(1);
        return (
          <a
            key={link.href}
            href={link.href}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center gap-2 py-5 pl-6 text-fog transition-colors duration-300 hover:text-paper"
          >
            <span
              aria-hidden
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                isActive ? "bg-lime" : "bg-white/25 group-hover:bg-white/50"
              }`}
            />
            <span
              className={`leading-tight [writing-mode:vertical-rl] mr-5 step-small transition-colors duration-300 ${
                isActive ? "font-bold text-paper" : "font-medium"
              }`}
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function MobileBars() {
  return (
    <nav
      aria-label="Site sections"
      className="grid grid-cols-2 gap-px bg-ink md:hidden"
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="flex h-[52px] items-start bg-panel px-4 py-3 step-small font-medium text-paper transition-colors hover:bg-[#202020]"
        >
          {link.label}
        </a>
      ))}
      {/* 5th link keeps the pair odd; the join anchor fills the gap */}
      <a
        href="#join"
        className="flex h-[52px] items-start bg-lime px-4 py-3 step-small font-bold text-ink transition-colors hover:bg-[#d7fb63]"
      >
        Join
      </a>
    </nav>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  // One live drift: the mark rises gently as the page leaves the hero
  const markY = useTransform(scrollY, [0, 800], [0, -90]);

  const active = useActiveChapter(navLinks.map((l) => l.href.slice(1)));

  return (
    <header>
      {/* Mobile bars sit on top of the hero, inside the flow */}
      <div className="relative flex min-h-[92svh] flex-col md:h-svh">
        <ChapterRail active={active} />

        {/* Wordmark */}
        <div className="flex items-center gap-3 px-6 pt-8 sm:px-10">
          <Mark className="h-8 w-8 text-lime" />
          <p className="font-bold uppercase tracking-[0.14em]">
            Turing<span className="text-lime">AI</span> Club
          </p>
        </div>

        {/* Headline + sentence + action, left-anchored like the logo lockup */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-16 pt-10 sm:px-10">
          {reduced ? (
            <h1 className="display max-w-[12ch]">
              AI, <span className="text-lime">done here.</span>
            </h1>
          ) : (
            <motion.h1
              className="display max-w-[12ch]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              AI, <span className="text-lime">done here.</span>
            </motion.h1>
          )}
          <motion.p
            className="ink-soft step-lead mt-8 max-w-[34ch] font-medium"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.sentence}
          </motion.p>
          <motion.div
            className="mt-10"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#join" className="btn">
              Join the club
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <path
                  d="M2 9h13M10 3l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* The mark as the hero's graphic, drawn in on load */}
        <motion.div
          style={reduced ? undefined : { y: markY }}
          className="pointer-events-none absolute bottom-[8vh] right-[10%] hidden w-[clamp(240px,24vw,400px)] text-lime/90 md:block"
        >
          <Mark animate className="w-full" />
        </motion.div>
      </div>
      <MobileBars />
    </header>
  );
}
