"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "magisdata-consultation-bar-dismissed";
const DISMISS_DAYS = 7;

export default function StickyConsultationBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const dismissedUntil = window.localStorage.getItem(STORAGE_KEY);

    if (dismissedUntil && Number(dismissedUntil) > Date.now()) {
      return undefined;
    }

    let timeoutId = 0;

    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        return;
      }

      const progress = window.scrollY / scrollHeight;

      if (progress >= 0.35) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);

        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
      }
    };

    timeoutId = window.setTimeout(() => {
      setVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }, 18000);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dismiss = () => {
    const dismissedUntil =
      Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
    window.localStorage.setItem(STORAGE_KEY, String(dismissedUntil));
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-md">
      <div className="relative rounded-4xl border border-white/50 bg-white/95 p-5 shadow-soft backdrop-blur">
        <button
          aria-label="Sluiten"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          onClick={dismiss}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="pr-10 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Gratis websitescan
        </p>
        <h3 className="mt-2 text-xl font-bold text-on-surface">
          Wil je weten waar je website nu aanvragen laat liggen?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
          Vraag een korte scan aan en krijg helder waar meer vertrouwen,
          duidelijkheid en conversie winst te halen zijn.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            href="#contact"
          >
            Vraag mijn scan aan
          </a>
          <button
            className="inline-flex items-center justify-center rounded-full bg-surface-container-high px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-highest"
            onClick={dismiss}
            type="button"
          >
            Misschien later
          </button>
        </div>
      </div>
    </div>
  );
}
