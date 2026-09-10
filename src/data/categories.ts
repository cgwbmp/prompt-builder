import type { Category } from '../types'

/**
 * Category registry. Order here defines:
 *  - chip order in the filter bar
 *  - section order in the joined output
 */
export const CATEGORIES: Category[] = [
  { id: 'role', label: 'Role / Persona', description: 'Who the AI should act as' },
  { id: 'tone', label: 'Tone & Style', description: 'Voice, register, personality' },
  { id: 'format', label: 'Output Format', description: 'Shape of the answer' },
  { id: 'constraints', label: 'Constraints & Rules', description: 'Hard limits and dos/don\'ts' },
  { id: 'reasoning', label: 'Reasoning & Process', description: 'How to think before answering' },
  { id: 'coding', label: 'Coding', description: 'Writing and changing code' },
  { id: 'review', label: 'Code Review & Debugging', description: 'Finding and fixing problems' },
  { id: 'writing', label: 'Writing & Editing', description: 'Prose, emails, docs' },
  { id: 'summarize', label: 'Summarize & Extract', description: 'Condense and pull out facts' },
  { id: 'analysis', label: 'Analysis & Research', description: 'Evaluate, compare, investigate' },
  { id: 'brainstorm', label: 'Brainstorming & Ideas', description: 'Generate options' },
  { id: 'marketing', label: 'Marketing & Copy', description: 'Persuasive and promotional text' },
  { id: 'business', label: 'Business & Productivity', description: 'Plans, meetings, decisions' },
  { id: 'learning', label: 'Teaching & Explaining', description: 'Make things understandable' },
  { id: 'translate', label: 'Translation & Language', description: 'Between languages and registers' },
  { id: 'image', label: 'Image Generation', description: 'Modifiers for image models' },
]

export const CATEGORY_BY_ID: ReadonlyMap<string, Category> = new Map(
  CATEGORIES.map((c) => [c.id, c]),
)
