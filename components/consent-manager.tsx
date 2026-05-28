"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  loadAnalytics,
  readConsent,
  setConsent,
  trackEvent,
  type ConsentState
} from "@/lib/analytics-consent";

export function ConsentManager() {
  const [choice, setChoice] = useState<ConsentState>("unset");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const savedChoice = readConsent();
    setChoice(savedChoice);
    if (savedChoice === "analytics_granted") {
      loadAnalytics();
    }

    const depthSent = new Set<number>();
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("[data-consent-open]")) {
        setSettingsOpen(true);
      }

      const trackedCta = target?.closest<HTMLElement>("[data-track-cta]");
      if (trackedCta) {
        trackEvent("cta_click", {
          location: trackedCta.dataset.trackCta ?? "page",
          label: trackedCta.textContent?.trim().slice(0, 80) ?? "contact"
        });
      }

      const contactLink = target?.closest<HTMLAnchorElement>('a[href^="tel:"], a[href^="mailto:"]');
      if (contactLink) {
        trackEvent("contact_click", {
          method: contactLink.href.startsWith("tel:") ? "phone" : "email"
        });
      }
    };
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const percentage = (window.scrollY / available) * 100;
      [50, 90].forEach((threshold) => {
        if (percentage >= threshold && !depthSent.has(threshold)) {
          depthSent.add(threshold);
          trackEvent("scroll_depth", { percent: threshold });
        }
      });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (choice !== "unset" && !settingsOpen) {
    return null;
  }

  return (
    <aside aria-label="Cookievoorkeuren" aria-modal="true" className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-card md:p-6" role="dialog">
      <h2 className="text-lg font-extrabold text-navy">Cookies en analytics</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        We laden Google Analytics alleen na jouw toestemming. Formulieren werken ook zonder analytics. Lees meer in het{" "}
        <Link className="focus-ring rounded font-bold text-orange hover:text-orange-dark" href="/privacybeleid">
          privacybeleid
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          className="focus-ring rounded-xl bg-orange px-5 py-3 text-sm font-bold text-white hover:bg-orange-dark"
          onClick={() => {
            setConsent("analytics_granted");
            setChoice("analytics_granted");
            setSettingsOpen(false);
          }}
          type="button"
        >
          Accepteren
        </button>
        <button
          className="focus-ring rounded-xl border border-line bg-white px-5 py-3 text-sm font-bold text-navy hover:border-orange-soft hover:text-orange"
          onClick={() => {
            setConsent("denied");
            setChoice("denied");
            setSettingsOpen(false);
          }}
          type="button"
        >
          Weigeren
        </button>
      </div>
    </aside>
  );
}
