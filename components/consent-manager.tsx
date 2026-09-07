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
import { usePathname } from "next/navigation";

export function ConsentManager() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<ConsentState | null>(null);
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
  }, [pathname]);

  if (choice === null || (choice !== "unset" && !settingsOpen)) {
    return null;
  }

  return (
    <section aria-label="Cookievoorkeuren" className="v2-cookie-banner">
      <h2>Een kleine vraag over cookies.</h2>
      <p>
        Met jouw toestemming meten we websitebezoek via Google Analytics. De website en formulieren werken ook zonder. Meer in het{" "}
        <Link href="/privacybeleid">
          privacybeleid
        </Link>
        .
      </p>
      <div className="v2-cookie-actions">
        <button
          className="v2-cookie-button"
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
          className="v2-cookie-button"
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
    </section>
  );
}
