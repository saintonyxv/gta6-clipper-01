// gta6-clipper-01 entrypoint (Node 22, standard library only).
//
// The entry itself is a YouTube Short: this program's only job is to hand
// the house the video's address, which lives in VIDEO.json at the repo root.
// The grader runs it twice with MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR set
// (defaulting to /bot and /output), and reads the copy it leaves behind.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

// Fail loudly on a malformed VIDEO.json instead of handing the house a
// bad copy: it must be a JSON object naming a video's address.
const parsed: unknown = JSON.parse(readFileSync(source, "utf8"));
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  console.error(`VIDEO.json in ${botDir} has no string "url" field`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
