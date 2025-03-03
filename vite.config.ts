import { resolve } from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, "src/pages");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
	root,
	plugins: [react()],
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, "index.html"),
				blog: resolve(root, "blog", "index.html"),
				projects: resolve(root, "projects", "index.html"),
				stack: resolve(root, "stack", "index.html"),
				links: resolve(root, "links", "index.html"),
				about: resolve(root, "about", "index.html"),
			}
		}
	}
});
