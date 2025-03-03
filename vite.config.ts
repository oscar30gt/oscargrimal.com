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
	}
});
