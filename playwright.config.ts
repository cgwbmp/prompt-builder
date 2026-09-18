import { defineConfig } from '@playwright/test'

/** Vite serves the app under the GitHub Pages base path. */
const BASE_PATH = '/prompt-builder/'
// Not Vite's default 5173: the suite must never reuse a dev server started by hand.
const PORT = 5174
const ORIGIN = `http://127.0.0.1:${PORT}`

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: ORIGIN + BASE_PATH,
    // Installed Google Chrome, so no browser binaries are downloaded for this project.
    channel: 'chrome',
    // The copy journey reads back what landed on the clipboard.
    permissions: ['clipboard-read', 'clipboard-write'],
    viewport: { width: 1440, height: 900 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${PORT} --strictPort`,
    url: ORIGIN + BASE_PATH,
    reuseExistingServer: false,
    stdout: 'ignore',
  },
})
