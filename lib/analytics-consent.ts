export type ConsentState = "unset" | "denied" | "analytics_granted";

export const CONSENT_STORAGE_KEY = "magisdata-consent";
export const GA_MEASUREMENT_ID = "G-H6G8TMGDWY";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    magisAnalyticsLoaded?: boolean;
    magisAnalyticsConfigured?: boolean;
  }
}

export function normalizeConsent(value: string | null): ConsentState {
  if (value === "denied" || value === "analytics_granted") {
    return value;
  }

  return "unset";
}

export function mayTrack(state: ConsentState): boolean {
  return state === "analytics_granted";
}

export function readConsent(): ConsentState {
  if (typeof window === "undefined") {
    return "unset";
  }

  try {
    return normalizeConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    return "unset";
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });
}

export function clearAnalyticsCookies() {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || (!name.startsWith("_ga") && name !== "_gid")) {
      return;
    }

    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.magisdata.nl; SameSite=Lax`;
  });
}

export function loadAnalytics(consent: ConsentState = readConsent()) {
  if (typeof window === "undefined" || !mayTrack(consent)) {
    return;
  }

  ensureGtag();

  if (typeof document !== "undefined" && !window.magisAnalyticsLoaded) {
    window.magisAnalyticsLoaded = true;
    const script = document.createElement("script");
    script.async = true;
    script.id = "google-tag";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  if (!window.magisAnalyticsConfigured) {
    window.magisAnalyticsConfigured = true;
    window.gtag?.("js", new Date());
    window.gtag?.("config", GA_MEASUREMENT_ID);
  }
}

export function setConsent(state: Exclude<ConsentState, "unset">) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, state);
  } catch {
    // Consent still applies for this page view when browser storage is unavailable.
  }

  if (state === "analytics_granted") {
    loadAnalytics(state);
  } else {
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
      });
    }
    clearAnalyticsCookies();
    window.magisAnalyticsConfigured = false;
  }

  window.dispatchEvent(new CustomEvent("magisdata:consent", { detail: state }));
}

export function trackEvent(name: string, parameters: Record<string, string | number> = {}) {
  if (!mayTrack(readConsent()) || !window.gtag) {
    return;
  }

  window.gtag("event", name, parameters);
}
