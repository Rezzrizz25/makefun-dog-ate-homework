// The Dog Ate My Homework: Funniest Excuse
// Entry: one line, the excuse a dog gives after being caught eating the homework.
// Character count: 119 (verified: entry.txt is 119 characters, single line, under the 200 limit)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Look, the homework looked at me first. It sat there all week whispering 'chew me' in pencil, so I did my duty as a dog.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`gate violated: entry is ${ENTRY.length} characters (must be 1-200, non-blank)`);
}
if (ENTRY.includes("\n")) {
  throw new Error("gate violated: entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
