#!/usr/bin/env node

import { cpSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = process.argv[2] || "my-app";
const exampleDir = resolve(__dirname, "../example");

try {
	cpSync(exampleDir, target, { recursive: true });
	console.log(`✔ Project created in "${target}" based on "example"`);
} catch (err) {
	console.error("✗ Failed to scaffold project:\n", err.message);
	process.exit(1);
}
