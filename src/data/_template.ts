/**
 * TEMPLATE for a new category file. Steps:
 *
 * 1. Add the category to `categories.ts` (id, label, description).
 * 2. Copy this file to `<category-id>.ts` and rename the export.
 * 3. Fill in prompts. Rules enforced by `npm run check`:
 *      - `id` is unique and starts with `<category-id>.`
 *      - `title` and `prompt` are non-empty
 *      - `category` matches an id in `categories.ts`
 * 4. Import and spread it into `PROMPTS` in `index.ts`.
 *
 * Writing guidance:
 *   - `title`: 2 to 5 words, human-friendly, what a user would scan for.
 *   - `prompt`: self-contained instruction that reads well when concatenated
 *     with other prompts under a `## Category` header. Imperative mood.
 *     One to three sentences. No "You are a…" unless the category is Role.
 */
import type { Prompt } from '../types'

// Prefixed with `_` so it is not accidentally imported; this file is not part
// of PROMPTS. Rename when copying.
export const _template: Prompt[] = [
  {
    id: 'example.short-slug',
    title: 'Short human title',
    prompt: 'Imperative instruction the AI should follow.',
    category: 'example',
  },
]
