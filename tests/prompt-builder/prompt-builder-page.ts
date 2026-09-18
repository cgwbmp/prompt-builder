import { expect, type Locator, type Page } from '@playwright/test'
import { BasePage } from '../base-page'

/** Search param that carries the selection. */
export const SELECTION_PARAM = 'p'

export class PromptBuilderPage extends BasePage {
  readonly search: Locator
  readonly output: Locator
  readonly task: Locator
  readonly copyButton: Locator
  readonly clearButton: Locator
  readonly quickFilters: Locator
  readonly sheetToggle: Locator
  readonly resultCount: Locator

  constructor(page: Page) {
    super(page)
    this.search = page.getByRole('searchbox', { name: /search prompts/i })
    this.output = page.getByRole('textbox', { name: /joined prompt output/i })
    this.task = page.getByRole('textbox', { name: /your task/i })
    this.copyButton = page.getByRole('button', { name: /copy to clipboard|copied/i })
    this.clearButton = page.getByRole('button', { name: /clear all/i })
    // "All" is a substring of "Clear all", so chips are always scoped to their group.
    this.quickFilters = page.getByRole('group', { name: /quick filters/i })
    this.sheetToggle = page.getByRole('button', { name: /your prompt/i })
    this.resultCount = page.getByText(/showing \d+ of \d+ prompts/i)
  }

  /** The select/deselect button of the card with this exact title. */
  card(title: string): Locator {
    return this.page.getByRole('button').filter({ has: this.page.getByRole('heading', { name: title, exact: true }) })
  }

  /** The star button of the card with this exact title. */
  favoriteToggle(title: string): Locator {
    return this.card(title)
      .locator('..')
      .getByRole('button', { name: /favorites/i })
  }

  quickFilter(name: 'All' | 'Favorites'): Locator {
    return this.quickFilters.getByRole('button', { name: new RegExp(name, 'i') })
  }

  categoryChip(group: string, label: string): Locator {
    return this.page.getByRole('group', { name: group }).getByRole('button', { name: label })
  }

  async selectPrompt(title: string): Promise<void> {
    const card = this.card(title)
    await card.click()
    await expect(card).toHaveAttribute('aria-pressed', 'true')
  }

  async addFavorite(title: string): Promise<void> {
    const star = this.favoriteToggle(title)
    await this.card(title).hover()
    await star.click()
    await expect(star).toHaveAttribute('aria-pressed', 'true')
  }

  /** Matches the URL once it encodes exactly this selection, in this order. */
  static selectionUrl(...ids: string[]): RegExp {
    if (ids.length === 0) return new RegExp(`^[^?]*$`)
    return new RegExp(`[?&]${SELECTION_PARAM}=${ids.map((id) => id.replace(/\./g, '\\.')).join(',')}(&|$)`)
  }

  async clipboardText(): Promise<string> {
    return this.page.evaluate(() => navigator.clipboard.readText())
  }
}
