export type CategoryId = string

export interface Category {
  /** Stable kebab-case id, also used as the prefix of every prompt id in it. */
  id: CategoryId
  /** Human-readable label, used for chips and as the `## header` in output. */
  label: string
  description?: string
}

export interface Prompt {
  /** Stable id: `<category>.<slug>`. Never renumber — selection is keyed on it. */
  id: string
  /** Short human-friendly name shown on the card. */
  title: string
  /** AI-facing prompt text. */
  prompt: string
  category: CategoryId
}
