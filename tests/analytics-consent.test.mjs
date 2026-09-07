import assert from "node:assert/strict";
import test from "node:test";
import { loadAnalytics, setConsent } from "../lib/analytics-consent.ts";

test("visitors can refuse analytics without contacting Google; approval loads it only once", () => {
  const scripts = [];
  const storage = new Map();
  globalThis.window = {
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    dispatchEvent() {}
  };
  globalThis.document = { cookie: "", createElement: () => ({}), head: { appendChild: script => scripts.push(script) } };
  try {
    loadAnalytics();
    setConsent("denied");
    assert.equal(scripts.length, 0, "a refusal must not initiate analytics network requests");
    setConsent("analytics_granted");
    loadAnalytics();
    assert.equal(scripts.length, 1, "repeated route visits must not install duplicate trackers");
    const calls = window.dataLayer.map(call => Array.from(call));
    assert.equal(calls.filter(call => call[0] === "config").length, 1);
    assert.equal(calls[0][2].analytics_storage, "denied", "default consent must precede configuration");
    setConsent("denied");
    assert.equal(window.dataLayer.at(-1)[2].analytics_storage, "denied", "withdrawing consent must revoke analytics");
  } finally {
    delete globalThis.window;
    delete globalThis.document;
  }
});
