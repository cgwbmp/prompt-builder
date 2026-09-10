import type { Category, Prompt } from '../types'

export const CUSTOM_HEADER = 'Task'

/**
 * Build the AI-ready output.
 * - Sections follow `categories` order; empty categories are skipped.
 * - Within a section, prompts follow `prompts` (catalog) order.
 * - Custom text, if non-empty after trimming, goes last under `## Task`.
 */
export function buildOutput(
  prompts: readonly Prompt[],
  categories: readonly Category[],
  selectedIds: ReadonlySet<string>,
  custom: string,
): string {
  const blocks: string[] = []

  for (const category of categories) {
    const chosen = prompts.filter((p) => p.category === category.id && selectedIds.has(p.id))
    if (chosen.length === 0) continue
    blocks.push([`## ${category.label}`, ...chosen.map((p) => p.prompt.trim())].join('\n\n'))
  }

  const task = custom.trim()
  if (task) blocks.push(`## ${CUSTOM_HEADER}\n\n${task}`)

  return blocks.join('\n\n')
}
