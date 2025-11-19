import assert from "node:assert/strict";
import { mkdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { generate } from "../src/generate";

test("generate() – creates files correctly", async (t) => {
	const outDir = "test-dist";

	await rm(outDir, { recursive: true, force: true });
	await mkdir(outDir, { recursive: true });

	const routes = [
		{ path: "index.html", component: () => "<h1>Home</h1>" },
		{ path: "nested/404.html", component: () => "<p>Not Found</p>" },
	];

	await generate(routes, { outDir });

	const indexHtml = await readFile(path.join(outDir, "index.html"), "utf8");
	const nestedHtml = await readFile(
		path.join(outDir, "nested/404.html"),
		"utf8",
	);

	assert.equal(indexHtml, "<h1>Home</h1>");
	assert.equal(nestedHtml, "<p>Not Found</p>");
});
