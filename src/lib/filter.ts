import type { CategoryId, Prompt } from '../types'

export const ALL = 'all' as const
export const FAVORITES = 'favorites' as const
export type CategoryFilter = CategoryId | typeof ALL | typeof FAVORITES

/**
 * Case-insensitive filter by category (or "all" / "favorites") and by
 * substring in title or prompt.
 */
export function filterPrompts(
  prompts: readonly Prompt[],
  category: CategoryFilter,
  query: string,
  favorites: ReadonlySet<string> = new Set(),
): Prompt[] {
  const q = query.trim().toLowerCase()
  return prompts.filter((p) => {
    if (category === FAVORITES) {
      if (!favorites.has(p.id)) return false
    } else if (category !== ALL && p.category !== category) {
      return false
    }
    if (!q) return true
    return p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q)
  })
}
