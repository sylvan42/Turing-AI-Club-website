"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  cluster: number;
};

const LIME = "163, 230, 53";
const WHITE = "245, 245, 242";

/**
 * Interactive node network behind the hero. Nodes drift, react to the
 * pointer, and — as `morph` (scroll progress) rises — reorganize into four
 * clusters aligned with Learn / Collaborate / Build / Demonstrate.
 */
export function HeroCanvas({ morph }: { morph: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let visible = true;
    const pointer = { x: -9999, y: -9999, active: false };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const NODE_COUNT = isMobile ? 26 : 58;
    const LINK_DIST = isMobile ? 110 : 150;

    const nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.8,
        cluster: i % 4,
      });
    }

    // Cluster centers for the four philosophy stages, near the bottom edge
    // where the LEARN → COLLABORATE → BUILD → DEMONSTRATE strip sits.
    const clusterCenter = (c: number) => ({
      x: width * (0.14 + c * 0.24),
      y: height * 0.88,
    });

    const draw = (morphT: number) => {
      ctx.clearRect(0, 0, width, height);

      // Links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.14;
            ctx.strokeStyle = `rgba(${WHITE}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // During the morph, thread a faint lime line between cluster centers.
      if (morphT > 0.15) {
        const lineAlpha = Math.min((morphT - 0.15) / 0.6, 1) * 0.5;
        ctx.strokeStyle = `rgba(${LIME}, ${lineAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let c = 0; c < 4; c++) {
          const p = clusterCenter(c);
          if (c === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Nodes
      for (const n of nodes) {
        const nearPointer =
          pointer.active && Math.hypot(n.x - pointer.x, n.y - pointer.y) < 120;
        ctx.fillStyle = nearPointer
          ? `rgba(${LIME}, 0.9)`
          : `rgba(${WHITE}, ${0.35 + morphT * 0.25})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      if (!running) return;
      if (!visible) {
        raf = requestAnimationFrame(step);
        return;
      }
      const morphT = Math.min(Math.max(morph.get(), 0), 1);

      for (const n of nodes) {
        if (morphT < 0.02) {
          // Free drift + gentle pointer attraction
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 200 && dist > 1) {
              n.vx += (dx / dist) * 0.012;
              n.vy += (dy / dist) * 0.012;
            }
          }
          n.vx *= 0.99;
          n.vy *= 0.99;
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.min(Math.max(n.x, 0), width);
          n.y = Math.min(Math.max(n.y, 0), height);
        } else {
          // Lerp toward the node's cluster with slight jitter ring
          const c = clusterCenter(n.cluster);
          const angle = (nodes.indexOf(n) / NODE_COUNT) * Math.PI * 2;
          const ring = 18 + (n.r - 1.2) * 14;
          const tx = c.x + Math.cos(angle * 3) * ring;
          const ty = c.y + Math.sin(angle * 3) * ring * 0.5;
          const ease = 0.04 + morphT * 0.08;
          n.x += (tx - n.x) * ease * morphT;
          n.y += (ty - n.y) * ease * morphT;
        }
      }

      draw(morphT);
      raf = requestAnimationFrame(step);
    };

    if (reduced) {
      // Static constellation: a single laid-out frame, no animation loop.
      draw(0);
    } else {
      raf = requestAnimationFrame(step);
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const parent = canvas.parentElement ?? canvas;
    parent.addEventListener("pointermove", onPointerMove);
    parent.addEventListener("pointerleave", onPointerLeave);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const onVisibility = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => {
      resize();
      if (reduced) draw(0);
    };
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onPointerMove);
      parent.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, [morph, reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
