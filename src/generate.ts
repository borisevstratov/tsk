import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { GenerateOptions, Route } from "./types";

export async function generate(
	routes: Route[],
	options: GenerateOptions = {},
): Promise<void> {
	const { outDir = "dist" } = options;

	for (const route of routes) {
		const result = route.component().toString();

		const dir = path.dirname(path.join(outDir, route.path));
		await mkdir(dir, { recursive: true });

		const fullPath = path.join(outDir, route.path);
		await writeFile(fullPath, result);
		console.log("✔ Generated:", fullPath);
	}
}
