export type Route = {
	path: string;
	component: () => string;
};

export type GenerateOptions = {
	outDir?: string;
};

export type JSXNode = string | number | boolean | null | undefined | JSXNode[];

export type PropsWithChildren<T extends object = {}> = T & {
	children?: JSXNode;
};
