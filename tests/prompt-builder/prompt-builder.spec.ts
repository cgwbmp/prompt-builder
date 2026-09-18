import { expect, test } from '@playwright/test'
import { PromptBuilderPage, SELECTION_PARAM } from './prompt-builder-page'

/** Real catalog entries; ids are documented as never-renumbered. */
const ROLE_PROMPT = { id: 'role.senior-engineer', title: 'Senior software engineer' }
const TESTING_PROMPT = { id: 'testing.aaa-structure', title: 'Arrange, Act, Assert' }

test.describe('Prompt Builder', () => {
  test(
    'builds a prompt from two categories, copies it to the clipboard, and clears the selection',
    { tag: ['@critical', '@e2e', '@builder', '@PB-E2E-001'] },
    async ({ page }) => {
      const app = new PromptBuilderPage(page)
      await app.goto()

      await app.quickFilter('All').click()
      await app.search.fill(ROLE_PROMPT.title)
      await app.selectPrompt(ROLE_PROMPT.title)

      await app.search.fill(TESTING_PROMPT.title)
      await app.selectPrompt(TESTING_PROMPT.title)

      // Sections follow catalog order, not click order, and carry the category label.
      await expect(app.output).toHaveValue(/## Role \/ Persona[\s\S]+## Testing/)
      await expect(page).toHaveURL(PromptBuilderPage.selectionUrl(ROLE_PROMPT.id, TESTING_PROMPT.id))

      const built = await app.output.inputValue()
      await app.copyButton.click()
      await expect(app.copyButton).toHaveText(/copied/i)
      expect(await app.clipboardText()).toBe(built)

      await app.clearButton.click()
      await expect(app.output).toHaveValue('')
      await expect(page).toHaveURL(PromptBuilderPage.selectionUrl())
    },
  )

  test(
    'restores a shared selection from the link and drops ids that are not in the catalog',
    { tag: ['@critical', '@e2e', '@sharing', '@PB-E2E-002'] },
    async ({ page }) => {
      const app = new PromptBuilderPage(page)
      await app.goto(`?${SELECTION_PARAM}=${ROLE_PROMPT.id},not.a-real-prompt`)

      await expect(app.output).toHaveValue(/## Role \/ Persona/)
      // The unknown id is dropped, so a hand-edited link never poisons the output.
      await expect(page).toHaveURL(PromptBuilderPage.selectionUrl(ROLE_PROMPT.id))
      await expect(app.output).not.toHaveValue(/not\.a-real-prompt/)

      await app.quickFilter('All').click()
      await app.search.fill(ROLE_PROMPT.title)
      await expect(app.card(ROLE_PROMPT.title)).toHaveAttribute('aria-pressed', 'true')
    },
  )

  test(
    'narrows the catalog by search and by category, and explains an empty result',
    { tag: ['@high', '@e2e', '@filtering', '@PB-E2E-003'] },
    async ({ page }) => {
      const app = new PromptBuilderPage(page)
      await app.goto()

      await app.quickFilter('All').click()
      const allCount = await app.resultCount.textContent()
      const total = Number(/of (\d+)/.exec(allCount ?? '')?.[1])
      expect(total).toBeGreaterThan(100)

      await app.categoryChip('Development', 'Testing').click()
      await expect(app.card(TESTING_PROMPT.title)).toBeVisible()
      await expect(app.card(ROLE_PROMPT.title)).toHaveCount(0)
      await expect(app.resultCount).toHaveText(new RegExp(`of (?!${total}\\b)\\d+ prompts`))

      await app.search.fill('arrange')
      await expect(app.card(TESTING_PROMPT.title)).toBeVisible()

      await app.search.fill('zzz-no-such-prompt')
      await expect(page.getByText(/no prompts match/i)).toBeVisible()
    },
  )

  test(
    'keeps starred prompts across a reload and opens them on the Favorites tab',
    { tag: ['@critical', '@e2e', '@favorites', '@PB-E2E-004'] },
    async ({ page }) => {
      const app = new PromptBuilderPage(page)
      await app.goto()

      // Favorites is the landing tab and starts empty.
      await expect(page.getByText(/no favorites yet/i)).toBeVisible()

      await app.quickFilter('All').click()
      await app.search.fill(ROLE_PROMPT.title)
      await app.addFavorite(ROLE_PROMPT.title)

      await page.reload({ waitUntil: 'domcontentloaded' })

      await expect(app.quickFilter('Favorites')).toHaveAttribute('aria-pressed', 'true')
      await expect(app.card(ROLE_PROMPT.title)).toBeVisible()
      await expect(app.favoriteToggle(ROLE_PROMPT.title)).toHaveAttribute('aria-pressed', 'true')
    },
  )

  test(
    'reveals further pages of the catalog as the grid is scrolled',
    { tag: ['@medium', '@e2e', '@filtering', '@PB-E2E-005'] },
    async ({ page }) => {
      const app = new PromptBuilderPage(page)
      await app.goto()

      await app.quickFilter('All').click()
      await expect(app.resultCount).toHaveText(/showing 60 of/i)

      await page.getByRole('main').getByRole('heading', { level: 3 }).last().scrollIntoViewIfNeeded()
      await expect(app.resultCount).toHaveText(/showing 120 of/i)
    },
  )

  test.describe('on a phone-sized viewport', () => {
    test.use({ viewport: { width: 390, height: 844 } })

    test(
      'opens the output as a bottom sheet, appends the typed task, and closes on Escape',
      { tag: ['@critical', '@e2e', '@mobile', '@PB-E2E-006'] },
      async ({ page }) => {
        const app = new PromptBuilderPage(page)
        await app.goto(`?${SELECTION_PARAM}=${ROLE_PROMPT.id}`)

        // Collapsed by default: only the sheet header is on screen.
        await expect(app.sheetToggle).toHaveAttribute('aria-expanded', 'false')
        await expect(app.output).toBeHidden()

        await app.sheetToggle.click()
        await expect(app.sheetToggle).toHaveAttribute('aria-expanded', 'true')
        await expect(app.output).toHaveValue(/## Role \/ Persona/)

        await app.task.fill('Ship the checkout flow')
        await expect(app.output).toHaveValue(/## Task\s+Ship the checkout flow$/)

        await page.keyboard.press('Escape')
        await expect(app.sheetToggle).toHaveAttribute('aria-expanded', 'false')
        await expect(app.output).toBeHidden()
      },
    )
  })
})
