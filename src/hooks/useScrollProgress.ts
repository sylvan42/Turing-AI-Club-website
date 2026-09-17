"use client";

import { useEffect } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/**
 * Scroll progress (0–1) of a section through the viewport, driven by a
 * plain scroll listener. Offsets are fraction pairs: progress is 0 when
 * `top + startTarget * height` crosses `startViewport * viewportHeight`,
 * and 1 at the matching end pair — mirroring framer-motion's offset syntax
 * ("start start" → 0,0 · "end end" → 1,1 · "start end" → 0,1 …).
 */
export function useSectionProgress(
  ref: React.RefObject<HTMLElement | null>,
  startTarget: number,
  startViewport: number,
  endTarget: number,
  endViewport: number,
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const d0 = rect.top + startTarget * rect.height - startViewport * vh;
      const d1 = rect.top + endTarget * rect.height - endViewport * vh;
      const denom = d0 - d1;
      progress.set(
        denom === 0 ? 0 : Math.min(1, Math.max(0, d0 / denom)),
      );
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref, progress, startTarget, startViewport, endTarget, endViewport]);

  return progress;
}

/** Scroll progress (0–1) of the whole page. */
export function usePageProgress(): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      progress.set(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [progress]);

  return progress;
}
