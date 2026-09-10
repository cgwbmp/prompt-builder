import type { CategoryId, Prompt } from '../types'

export const ALL = 'all' as const
export type CategoryFilter = CategoryId | typeof ALL

/** Case-insensitive filter by category and by substring in title or prompt. */
export function filterPrompts(
  prompts: readonly Prompt[],
  category: CategoryFilter,
  query: string,
): Prompt[] {
  const q = query.trim().toLowerCase()
  return prompts.filter((p) => {
    if (category !== ALL && p.category !== category) return false
    if (!q) return true
    return p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q)
  })
}
