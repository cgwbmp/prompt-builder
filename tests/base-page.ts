import type { Page } from '@playwright/test'

/** Parent for every page object: shared navigation and readiness. */
export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = ''): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' })
  }
}
