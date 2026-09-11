import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served as a GitHub Pages project site: https://<user>.github.io/prompt-builder/
  base: '/prompt-builder/',
  plugins: [react(), tailwindcss()],
  build: {
    // The prompt catalog (~650 kB of text) is the bundle; search needs it eagerly, so it can't be split.
    chunkSizeWarningLimit: 1000,
  },
})
