/**
 * Validates the prompt catalog. Run with `npm run check`.
 * Exits non-zero on any error so it can gate CI.
 */
import { CATEGORIES, CATEGORY_BY_ID, PROMPTS } from '../src/data/index.ts'

const errors: string[] = []
const seen = new Set<string>()

for (const p of PROMPTS) {
  const where = `prompt "${p.id}"`

  if (!p.id || typeof p.id !== 'string') errors.push(`${where}: missing id`)
  if (seen.has(p.id)) errors.push(`${where}: duplicate id`)
  seen.add(p.id)

  if (!p.title?.trim()) errors.push(`${where}: empty title`)
  if (!p.prompt?.trim()) errors.push(`${where}: empty prompt`)

  if (!CATEGORY_BY_ID.has(p.category)) errors.push(`${where}: unknown category "${p.category}"`)
  if (!p.id.startsWith(`${p.category}.`)) errors.push(`${where}: id must start with "${p.category}."`)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.id)) {
    errors.push(`${where}: id must be kebab-case "<category>.<slug>"`)
  }
}

const catIds = new Set<string>()
for (const c of CATEGORIES) {
  if (catIds.has(c.id)) errors.push(`category "${c.id}": duplicate id`)
  catIds.add(c.id)
  if (!c.label?.trim()) errors.push(`category "${c.id}": empty label`)
}

const counts = new Map<string, number>()
for (const p of PROMPTS) counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
for (const c of CATEGORIES) {
  if (!counts.has(c.id)) console.warn(`warn: category "${c.id}" has no prompts`)
}

if (errors.length > 0) {
  console.error(`✗ ${errors.length} problem(s):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}

console.log(`✓ ${PROMPTS.length} prompts in ${CATEGORIES.length} categories, no problems.`)
for (const c of CATEGORIES) console.log(`  ${String(counts.get(c.id) ?? 0).padStart(4)}  ${c.label}`)
