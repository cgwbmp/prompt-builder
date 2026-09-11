import type { Prompt } from '../types'
import { role } from './role'
import { agent } from './agent'
import { workflow } from './workflow'
import { method } from './method'
import { effort } from './effort'
import { codestyle } from './codestyle'
import { typescript } from './typescript'
import { python } from './python'
import { frontend } from './frontend'
import { accessibility } from './accessibility'
import { mobile } from './mobile'
import { backend } from './backend'
import { errors } from './errors'
import { database } from './database'
import { data } from './data'
import { testing } from './testing'
import { debugging } from './debugging'
import { review } from './review'
import { refactor } from './refactor'
import { security } from './security'
import { performance } from './performance'
import { architecture } from './architecture'
import { git } from './git'
import { deps } from './deps'
import { devops } from './devops'
import { shell } from './shell'
import { docs } from './docs'
import { i18n } from './i18n'
import { explain } from './explain'
import { ai } from './ai'
import { environment } from './environment'
import { visualStyle } from './visual-style'
import { mood } from './mood'
import { color } from './color'
import { typography } from './typography'
import { layout } from './layout'
import { motion } from './motion'
import { dataviz } from './dataviz'
import { ux } from './ux'
import { writing } from './writing'
import { summarize } from './summarize'
import { analysis } from './analysis'
import { brainstorm } from './brainstorm'
import { business } from './business'
import { marketing } from './marketing'
import { learning } from './learning'
import { translate } from './translate'
import { image } from './image'
import { context } from './context'
import { reasoning } from './reasoning'
import { tone } from './tone'
import { language } from './language'
import { format } from './format'

export { CATEGORIES, CATEGORY_BY_ID, CATEGORY_GROUPS } from './categories'

/** Flat catalog. Order within a category = order in its file. */
export const PROMPTS: Prompt[] = [
  ...role,
  ...agent,
  ...workflow,
  ...method,
  ...effort,
  ...codestyle,
  ...typescript,
  ...python,
  ...frontend,
  ...accessibility,
  ...mobile,
  ...backend,
  ...errors,
  ...database,
  ...data,
  ...testing,
  ...debugging,
  ...review,
  ...refactor,
  ...security,
  ...performance,
  ...architecture,
  ...git,
  ...deps,
  ...devops,
  ...shell,
  ...docs,
  ...i18n,
  ...explain,
  ...ai,
  ...environment,
  ...visualStyle,
  ...mood,
  ...color,
  ...typography,
  ...layout,
  ...motion,
  ...dataviz,
  ...ux,
  ...writing,
  ...summarize,
  ...analysis,
  ...brainstorm,
  ...business,
  ...marketing,
  ...learning,
  ...translate,
  ...image,
  ...context,
  ...reasoning,
  ...tone,
  ...language,
  ...format,
]

export const PROMPT_BY_ID: ReadonlyMap<string, Prompt> = new Map(PROMPTS.map((p) => [p.id, p]))
