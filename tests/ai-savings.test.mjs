import assert from "node:assert/strict";
import test from "node:test";
import { calculateAutomationSavings } from "../lib/ai-savings.mjs";

test("calculates annual recoverable work value from team inputs", () => {
  assert.deepEqual(
    calculateAutomationSavings({ people: 5, hoursPerWeek: 8, hourlyRate: 50 }),
    {
      weeklyHours: 40,
      weeklyValue: 2000,
      annualValue: 104000
    }
  );
});

test("clamps calculator inputs to safe minimums", () => {
  assert.deepEqual(
    calculateAutomationSavings({ people: 0, hoursPerWeek: -2, hourlyRate: 0 }),
    {
      weeklyHours: 0,
      weeklyValue: 0,
      annualValue: 0
    }
  );
});
