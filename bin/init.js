#!/usr/bin/env node

import { cpSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const argIndex = process.argv[2] === "init" ? 3 : 2;
const target = process.argv[argIndex] || "my-app";
const exampleDir = resolve(__dirname, "../example");

try {
	cpSync(exampleDir, target, { recursive: true });
	console.log(`[tsk] ✔ New project created in "${target}"`);
} catch (err) {
	console.error("[tsk] ✗ Failed to scaffold a TSK project:\n", err.message);
	process.exit(1);
}
