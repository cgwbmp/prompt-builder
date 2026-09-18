import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // Only unit specs under src/. `tests/` holds the Playwright suite.
    include: ['src/**/*.spec.{ts,tsx}'],
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      // `include` is explicit so untested files still count against the threshold.
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/data/**', 'src/main.tsx', 'src/types.ts', 'src/test/**', 'src/**/*.spec.{ts,tsx}'],
      thresholds: { lines: 80, branches: 80, functions: 80, statements: 80 },
    },
  },
})
