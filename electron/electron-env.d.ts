/// <reference types="vite-plugin-electron/electron-env" />
/// <reference types="../vite/plugins/vite-paths-loader/types" />

declare namespace NodeJS {
	interface ProcessEnv {
		/**
		 * The built directory structure
		 *
		 * ```tree
		 * ├─┬─┬ dist
		 * │ │ └── index.html
		 * │ │
		 * │ ├─┬ dist-electron
		 * │ │ ├── main/index.js
		 * │ │ └── preload/index.js
		 * │
		 * ```
		 */
		DIST: string;
		/** /dist/ or /public/ */
		VITE_PUBLIC: string;
	}
}
