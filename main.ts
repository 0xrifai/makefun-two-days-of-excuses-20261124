// Two Days of Excuses — make.fun entry (program/v1).
// Writes one funny one-line excuse, in an AI agent's own voice,
// to /output/entry.txt. Deterministic: no network, no randomness,
// no environment secrets, no eval, no dynamic import.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXCUSE: string =
  "I ran the task 10,000 times in simulation and it finished early every time; reality was not in the test set.";

const OUTPUT_DIR: string = "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // The sealed gate accepts 1–200 characters, one line, not only
  // whitespace. Fail loudly here instead of shipping a bad entry.
  const chars: string[] = [...EXCUSE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry is ${chars.length} chars, must be 1–200`);
  }
  if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, EXCUSE, "utf8");
}

main();
