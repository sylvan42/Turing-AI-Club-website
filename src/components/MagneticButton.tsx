"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useFinePointer } from "@/hooks/useFinePointer";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/** CTA link with subtle magnetic pull on precise pointers. */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const magnetic = fine && !reduced;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const onPointerMove = (e: React.PointerEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.18);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.18);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={magnetic ? { x: springX, y: springY } : undefined}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3 font-display text-sm font-semibold tracking-wide transition-colors duration-200",
        variant === "primary"
          ? "bg-lime text-ink hover:bg-[#b8f34f]"
          : "border border-line text-paper hover:border-lime/50 hover:text-lime",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
