import { resolve } from 'path'
import { defineConfig } from "vite"

export default defineConfig({
	base: "./",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				project1: resolve(__dirname, 'project-1.html'),
				project2: resolve(__dirname, 'project-2.html'),
				project3: resolve(__dirname, 'project-3.html'),
			},
		},
	},
})
