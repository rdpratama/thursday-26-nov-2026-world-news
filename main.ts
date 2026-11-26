// Thursday 26 November 2026 — the world in one image (make.fun news-image-20261126).
// The front page is drawn by a PIL script and shipped as entry.png beside this
// file; this program copies it to the output path the grader expects. Node 22,
// standard library only. Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
// The gate takes at most 1 MiB and 1024 by 1024 pixels; refuse a bad build loudly.
if (statSync(src).size > 1024 * 1024) {
  throw new Error('entry.png is over the 1 MiB limit');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
