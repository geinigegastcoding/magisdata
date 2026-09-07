import { copyFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";

// Next 16 exports nested segment paths on Windows, but the browser requests
// dot-separated filenames. Retain the originals and add the expected aliases.
const output = resolve("out");
let count = 0;

function visit(directory, segmentRoot) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const source = join(directory, entry.name);
    if (entry.isDirectory()) {
      visit(source, segmentRoot ?? (entry.name.startsWith("__next.") ? source : undefined));
    } else if (segmentRoot && entry.isFile() && entry.name.endsWith(".txt")) {
      const suffix = relative(segmentRoot, source).split(sep).join(".");
      const target = join(dirname(segmentRoot), `${basename(segmentRoot)}.${suffix}`);
      if (existsSync(target)) {
        if (!readFileSync(source).equals(readFileSync(target))) throw new Error(`Conflicting static segment: ${target}`);
      } else {
        copyFileSync(source, target);
        count++;
      }
    }
  }
}

visit(output);
console.log(`Static export: added ${count} segment filename aliases.`);
