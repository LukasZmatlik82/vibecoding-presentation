"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Gradient } from "whatamesh";

/**
 * Stripe-style animated mesh via `whatamesh`.
 * Canvas id is unique to this template to avoid clashes with other MeshGradient instances.
 */
const CANVAS_ID = "hero-template-whatamesh-canvas";

const gradientVars: CSSProperties & Record<string, string> = {
  width: "100%",
  height: "100%",
  display: "block",
  "--gradient-color-1": "#3EE6A6",
  "--gradient-color-2": "#6D28D9",
  "--gradient-color-3": "#A78BFA",
  "--gradient-color-4": "#F59E0B",
};

const ribbonMask: CSSProperties = {
  maskImage:
    "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.25) 32%, rgba(0,0,0,0.82) 48%, black 58%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.25) 32%, rgba(0,0,0,0.82) 48%, black 58%)",
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
};

export function MeshGradient() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const el = document.getElementById(CANVAS_ID);
    if (!el) return;

    const gradient = new Gradient();
    gradient.initGradient(`#${CANVAS_ID}`);

    if (reduceMotion) {
      gradient.pause();
    }

    return () => {
      gradient.pause();
      (gradient as Gradient & { disconnect: () => void }).disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white"
    >
      <div className="absolute inset-0" style={ribbonMask}>
        <canvas id={CANVAS_ID} className="h-full w-full" style={gradientVars} />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_58%_at_24%_42%,rgba(255,255,255,0.9),rgba(255,255,255,0.35)_48%,transparent_70%)]"
        aria-hidden
      />
    </div>
  );
}
