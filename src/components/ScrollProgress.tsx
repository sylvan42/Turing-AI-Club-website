"use client";

import { motion, useSpring, useReducedMotion } from "framer-motion";
import { usePageProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const scrollYProgress = usePageProgress();
  const reduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-lime/80"
      style={{ scaleX }}
    />
  );
}
