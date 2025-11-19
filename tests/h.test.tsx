import assert from "node:assert/strict";
import test from "node:test";
/** @jsx h */
// biome-ignore lint/correctness/noUnusedImports: used by JSX transform
import { h } from "../src/h";
import type { PropsWithChildren } from "../src/types";

// Core testing
test("h() renders simple element", () => {
	const html = (<div class="test">Hello</div>).toString();
	assert.match(html, /Hello/);
	assert.match(html, /class="test"/);
});

test("h() renders nested elements", () => {
	const html = (
		<section>
			<h1>Title</h1>
			<p>Description</p>
		</section>
	).toString();

	assert.match(html, /<h1>Title<\/h1>/);
	assert.match(html, /<p>Description<\/p>/);
});

type ButtonProps = { label: string; type?: "button" | "submit" };
type CardProps = { title: string; content: string; count?: number };

// Function components
function Button({ label, type = "button" }: ButtonProps) {
	return <button type={type}>{label}</button>;
}

function Card({ title, content, count = 0 }: CardProps) {
	return (
		<div class="card">
			<h2>{title}</h2>
			<p>{content}</p>
			<span class="count">{count}</span>
		</div>
	);
}

// Nested component
function App() {
	return (
		<main>
			<Card title="Hello" content="World" count={5} />
			<Button label="Click me" type="submit" />
		</main>
	);
}

// Tests
test("Button component renders correctly", () => {
	const html = (<Button label="Save" />).toString();
	assert.match(html, /<button type="button">Save<\/button>/);
});

test("Card component renders with default count", () => {
	const html = (<Card title="T" content="C" />).toString();
	assert.match(html, /<h2>T<\/h2>/);
	assert.match(html, /<p>C<\/p>/);
	assert.match(html, /<span class="count">0<\/span>/);
});

test("Card component renders with custom count", () => {
	const html = (<Card title="T" content="C" count={42} />).toString();
	assert.match(html, /<span class="count">42<\/span>/);
});

test("App composes Card + Button correctly", () => {
	const html = (<App />).toString();
	assert.match(html, /<main>/);
	assert.match(html, /<div class="card">/);
	assert.match(html, /<h2>Hello<\/h2>/);
	assert.match(html, /<p>World<\/p>/);
	assert.match(html, /<span class="count">5<\/span>/);
	assert.match(html, /<button type="submit">Click me<\/button>/);
});

// PropsWithChildren
function Section({ children }: PropsWithChildren) {
	return <section>{children}</section>;
}

test("Section renders simple children", () => {
	const html = (<Section>Content</Section>).toString();
	assert.equal(html, "<section>Content</section>");
});

test("Section supports multiple children", () => {
	const html = (
		<Section>
			<span>First</span>
			<span>Second</span>
		</Section>
	).toString();

	assert.match(html, /^<section>/);
	assert.match(html, /<span>First<\/span>/);
	assert.match(html, /<span>Second<\/span>/);
	assert.match(html, /<\/section>$/);
});

test("Section handles no children", () => {
	// This checks behavior when props.children is undefined
	const html = (<Section />).toString();
	assert.equal(html, "<section></section>");
});

test("Section handles nested structure", () => {
	const html = (
		<Section>
			<div>
				<h3>Nested Title</h3>
				<p>Nested content</p>
			</div>
		</Section>
	).toString();

	assert.match(html, /<h3>Nested Title<\/h3>/);
	assert.match(html, /<p>Nested content<\/p>/);
	assert.match(html, /^<section>/);
});

test("Section handles mixed node types", () => {
	const html = (
		<Section>
			Hello 123 {false} <span>World</span>
		</Section>
	).toString();

	// Current implementation renders `false` literally as a string.
	assert.match(
		html,
		/^<section>Hello 123 false <span>World<\/span><\/section>$/,
	);
});
