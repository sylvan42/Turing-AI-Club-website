"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on navigation
  const onNavigate = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
          scrolled ? "h-14" : "h-[4.5rem]",
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
        >
          <LogoMark className="h-5 w-auto" />
          <span>
            Turing<span className="text-lime">AI</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "group relative py-2 text-sm transition-colors duration-200",
                  active === link.href
                    ? "text-paper"
                    : "text-muted hover:text-paper",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-lime transition-transform duration-300",
                    active === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="hidden min-h-10 cursor-pointer items-center rounded-full bg-lime px-5 py-2 font-display text-sm font-semibold text-ink transition-colors duration-200 hover:bg-[#b8f34f] md:inline-flex"
          >
            Join the Club
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-paper md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={onNavigate}
                    className="block rounded-lg px-3 py-3 font-display text-lg text-paper transition-colors hover:bg-ink-3"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-2 px-3 pb-1">
                <a
                  href="#join"
                  onClick={onNavigate}
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-lime px-5 font-display text-sm font-semibold text-ink"
                >
                  Join the Club
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/** Simplified mark echoing the club logo: three bars and a dot. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 24" fill="none" className={className} aria-hidden>
      <rect x="0" y="0" width="22" height="5" rx="2.5" fill="#A3E635" />
      <rect x="0" y="9.5" width="15" height="5" rx="2.5" fill="#A3E635" />
      <rect x="0" y="19" width="9" height="5" rx="2.5" fill="#A3E635" />
      <circle cx="27" cy="21.5" r="5" fill="#A3E635" />
    </svg>
  );
}
