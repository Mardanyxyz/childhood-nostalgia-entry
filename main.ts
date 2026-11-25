// Childhood Nostalgia — make.fun bounty entry (v1)
// Writes exactly one sentence (<=280 chars) to /output/entry.txt
// and prints it to stdout. A single, concrete childhood memory:
// grandmother's kitchen, warm rice steam, a summer evening.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Steam from grandmother's rice pot fogged the kitchen window as she hummed and stirred, and I sat barefoot on the cool tiles at dusk, waiting for the lid to lift and the smell of warm rice to find me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
