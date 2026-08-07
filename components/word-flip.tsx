"use client";

import { useEffect, useState } from "react";

const words = ["AI", "skills", "agents"];

export function WordFlip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span aria-live="polite" className="word-flip">
      {words[index]}
    </span>
  );
}
