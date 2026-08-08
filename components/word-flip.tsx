"use client";

import { useEffect, useState } from "react";

const words = [
  { label: "Claude", className: "is-claude", logo: "anthropic.svg" },
  { label: "OpenAI", className: "is-openai", logo: "openai.svg" },
  { label: "Gemini", className: "is-gemini", logo: "gemini.svg" }
];

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
    <span aria-live="polite" className={`word-flip ${words[index].className}`}>
      <img alt="" aria-hidden="true" src={`/assets/logos/${words[index].logo}`} />
      {words[index].label}
    </span>
  );
}
