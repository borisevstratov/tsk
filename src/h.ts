import _h from "stringjsx";

export const h: typeof _h = _h;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}
