import { copyFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import assert from "node:assert/strict";

// Next 16.2's exporter receives Windows separators, but its filename encoder only replaces "/".
const root = "out";
let copied = 0;
function visit(directory, segmentRoot) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const source = join(directory, entry.name);
    const base = segmentRoot ?? (entry.isDirectory() && entry.name.startsWith("__next.") ? directory : undefined);
    if (entry.isDirectory()) visit(source, base);
    else if (base && entry.name.endsWith(".txt")) {
      const destination = join(base, relative(base, source).replaceAll("\\", ".").replaceAll("/", "."));
      if (existsSync(destination)) assert.deepEqual(readFileSync(destination), readFileSync(source), "Conflicting exported segment: " + destination);
      else copyFileSync(source, destination);
      assert.deepEqual(readFileSync(destination), readFileSync(source), "Navigation payload must remain intact");
      copied++;
    }
  }
}
visit(root);
console.log("Verified " + copied + " Windows navigation segment aliases.");
