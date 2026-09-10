import type { Prompt } from '../types'
import { role } from './role'
import { tone } from './tone'
import { format } from './format'
import { constraints } from './constraints'
import { reasoning } from './reasoning'
import { coding } from './coding'
import { review } from './review'
import { writing } from './writing'
import { summarize } from './summarize'
import { analysis } from './analysis'
import { brainstorm } from './brainstorm'
import { marketing } from './marketing'
import { business } from './business'
import { learning } from './learning'
import { translate } from './translate'
import { image } from './image'

export { CATEGORIES, CATEGORY_BY_ID } from './categories'

/** Flat catalog. Order within a category = order in its file. */
export const PROMPTS: Prompt[] = [
  ...role,
  ...tone,
  ...format,
  ...constraints,
  ...reasoning,
  ...coding,
  ...review,
  ...writing,
  ...summarize,
  ...analysis,
  ...brainstorm,
  ...marketing,
  ...business,
  ...learning,
  ...translate,
  ...image,
]

export const PROMPT_BY_ID: ReadonlyMap<string, Prompt> = new Map(PROMPTS.map((p) => [p.id, p]))
