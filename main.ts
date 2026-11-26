// Thursday 26 November 2026 — the world in one image (make.fun news-image-20261126).
// The front page is drawn by a PIL script and shipped as entry.png beside this
// file; this program copies it to the output path the grader expects. Node 22,
// standard library only. Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
