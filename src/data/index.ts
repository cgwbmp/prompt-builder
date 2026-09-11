import type { Prompt } from '../types'
import { role } from './role'
import { agent } from './agent'
import { workflow } from './workflow'
import { codestyle } from './codestyle'
import { typescript } from './typescript'
import { python } from './python'
import { frontend } from './frontend'
import { backend } from './backend'
import { database } from './database'
import { testing } from './testing'
import { debugging } from './debugging'
import { review } from './review'
import { refactor } from './refactor'
import { security } from './security'
import { performance } from './performance'
import { architecture } from './architecture'
import { git } from './git'
import { devops } from './devops'
import { shell } from './shell'
import { docs } from './docs'
import { explain } from './explain'
import { ai } from './ai'
import { visualStyle } from './visual-style'
import { mood } from './mood'
import { color } from './color'
import { typography } from './typography'
import { layout } from './layout'
import { motion } from './motion'
import { writing } from './writing'
import { summarize } from './summarize'
import { analysis } from './analysis'
import { brainstorm } from './brainstorm'
import { business } from './business'
import { marketing } from './marketing'
import { learning } from './learning'
import { translate } from './translate'
import { image } from './image'
import { reasoning } from './reasoning'
import { tone } from './tone'
import { format } from './format'

export { CATEGORIES, CATEGORY_BY_ID } from './categories'

/** Flat catalog. Order within a category = order in its file. */
export const PROMPTS: Prompt[] = [
  ...role,
  ...agent,
  ...workflow,
  ...codestyle,
  ...typescript,
  ...python,
  ...frontend,
  ...backend,
  ...database,
  ...testing,
  ...debugging,
  ...review,
  ...refactor,
  ...security,
  ...performance,
  ...architecture,
  ...git,
  ...devops,
  ...shell,
  ...docs,
  ...explain,
  ...ai,
  ...visualStyle,
  ...mood,
  ...color,
  ...typography,
  ...layout,
  ...motion,
  ...writing,
  ...summarize,
  ...analysis,
  ...brainstorm,
  ...business,
  ...marketing,
  ...learning,
  ...translate,
  ...image,
  ...reasoning,
  ...tone,
  ...format,
]

export const PROMPT_BY_ID: ReadonlyMap<string, Prompt> = new Map(PROMPTS.map((p) => [p.id, p]))
