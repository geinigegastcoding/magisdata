"use client";

import { MoveHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

const MIN_POSITION = 12;
const MAX_POSITION = 88;
const ANIMATION_DURATION = 5600;

export default function ComparisonSlider({ beforeImage, afterImage }) {
  const [position, setPosition] = useState(50);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setPosition(50);
      return undefined;
    }

    let frameId = 0;
    let startTime = 0;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;
      const wave = (Math.sin(progress * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      const nextPosition = MIN_POSITION + wave * (MAX_POSITION - MIN_POSITION);

      setPosition(nextPosition);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-slate-900">
      <img
        alt="Oude website"
        className="absolute inset-0 h-full w-full object-cover grayscale"
        draggable="false"
        src={beforeImage}
      />

      <img
        alt="MagisData resultaat"
        className="absolute inset-0 h-full w-full object-cover"
        draggable="false"
        src={afterImage}
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />

      <div className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
        Oude website
      </div>
      <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-primary/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
        MagisData resultaat
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-12 -translate-x-1/2"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/95 shadow-[0_0_24px_rgba(255,255,255,0.7)]" />
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-xl">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
