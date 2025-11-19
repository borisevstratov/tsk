import { h, type PropsWithChildren } from "@borisevstratov/tsk";

type Props = {
	title: string;
};

const ListItem = ({ title }: Props) => {
	return <li>{title}</li>;
};

const Section = ({ children }: PropsWithChildren) => (
	<section style="border: 2px solid black;">{children}</section>
);

const App = () => (
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>TSK Demo page</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</head>
		<body>
			<main style="max-width: 42rem; margin: 4rem auto; padding: 0 1rem;">
				<h1>Hello from TSK</h1>
				<p>No framework. No runtime. Just HTML.</p>
				<Section>
					<ul>
						{["Zero config", "Zero JS", "Zero excuses"].map((item) => (
							<ListItem title={item} />
						))}
					</ul>
				</Section>
			</main>
		</body>
	</html>
);

export default App;
