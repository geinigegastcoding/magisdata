import assert from "node:assert/strict";
import test from "node:test";
import { loadAnalytics, setConsent, trackEvent } from "../lib/analytics-consent.ts";

function browser(t, hostname) {
  const previous = { window: globalThis.window, document: globalThis.document };
  const storage = new Map();
  const scripts = [];
  globalThis.window = {
    location: { hostname },
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    dispatchEvent() {}
  };
  globalThis.document = { cookie: "", createElement: () => ({}), head: { appendChild: script => scripts.push(script) } };
  t.after(() => {
    for (const key of ["window", "document"]) {
      if (previous[key] === undefined) delete globalThis[key];
      else globalThis[key] = previous[key];
    }
  });
  return { scripts, calls: () => (window.dataLayer ?? []).map(args => Array.from(args)) };
}

test("production analytics only loads after permission and initializes once", t => {
  const state = browser(t, "magisdata.nl");
  loadAnalytics();
  trackEvent("generate_lead");
  assert.equal(state.scripts.length, 0, "visitors without consent must not contact analytics");
  assert.equal(state.calls().length, 0);
  setConsent("analytics_granted");
  loadAnalytics();
  assert.equal(state.scripts.length, 1, "revisiting a route must not load a second tracker");
  assert.match(state.scripts[0].src, /G-H6G8TMGDWY/);
  assert.equal(state.calls().filter(call => call[0] === "config").length, 1);
  trackEvent("generate_lead");
  assert.equal(state.calls().filter(call => call[0] === "event").length, 1);
  setConsent("denied");
  trackEvent("generate_lead");
  assert.equal(state.calls().filter(call => call[0] === "event").length, 1, "revoking permission must stop lead tracking");
});

test("development previews cannot contaminate production analytics even after consent", t => {
  const state = browser(t, "127.0.0.1");
  setConsent("analytics_granted");
  loadAnalytics();
  assert.equal(state.scripts.length, 0);
  assert.equal(state.calls().filter(call => call[0] === "config").length, 0);
});
