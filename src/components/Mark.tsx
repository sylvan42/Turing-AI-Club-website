"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The club's logo mark, redrawn as vector: three speed-bars and a dot.
 * One graphic language for the whole site; `animate` staggers the draw-in
 * (static for reduced motion).
 */
export function Mark({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  const reduced = useReducedMotion();
  const grow = animate && !reduced;

  const bars = [
    { x: 8, y: 14, w: 58 },
    { x: 8, y: 43, w: 38 },
    { x: 8, y: 72, w: 24 },
  ];

  return (
    <svg viewBox="0 0 100 96" aria-hidden className={className} fill="currentColor">
      {bars.map((b, i) => (
        <motion.rect
          key={b.y}
          x={b.x}
          y={b.y}
          width={b.w}
          height={16}
          rx={8}
          style={{ transformBox: "fill-box", transformOrigin: "left center" }}
          initial={grow ? { scaleX: 0 } : false}
          animate={grow ? { scaleX: 1 } : undefined}
          transition={{
            duration: 0.5,
            delay: 0.15 + i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
      <motion.circle
        cx={82}
        cy={80}
        r={12}
        initial={grow ? { scale: 0 } : false}
        animate={grow ? { scale: 1 } : undefined}
        transition={{ duration: 0.4, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
