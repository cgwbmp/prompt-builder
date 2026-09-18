import { describe, expect, it } from 'vitest'
import type { Category, Prompt } from '../types'
import { CUSTOM_HEADER, buildOutput } from './join'

const categories: Category[] = [
  { id: 'role', label: 'Role / Persona', group: 'dev' },
  { id: 'testing', label: 'Testing', group: 'dev' },
  { id: 'tone', label: 'Communication Style', group: 'style' },
]

const prompts: Prompt[] = [
  { id: 'role.alpha', title: 'Alpha', prompt: 'Be an engineer.', category: 'role' },
  { id: 'role.beta', title: 'Beta', prompt: 'Be a reviewer.', category: 'role' },
  { id: 'testing.gamma', title: 'Gamma', prompt: '  Write tests first.  ', category: 'testing' },
  { id: 'tone.delta', title: 'Delta', prompt: 'Be concise.', category: 'tone' },
]

describe('buildOutput', () => {
  it('returns an empty string when nothing is selected and there is no custom text', () => {
    expect(buildOutput(prompts, categories, new Set(), '')).toBe('')
  })

  it('renders a selected prompt under its category label as a markdown header', () => {
    expect(buildOutput(prompts, categories, new Set(['role.alpha']), '')).toBe('## Role / Persona\n\nBe an engineer.')
  })

  it('skips categories that have no selected prompt', () => {
    const out = buildOutput(prompts, categories, new Set(['tone.delta']), '')
    expect(out).toBe('## Communication Style\n\nBe concise.')
  })

  it('orders sections by the categories array rather than by selection order', () => {
    const reversed = [...categories].reverse()
    const out = buildOutput(prompts, reversed, new Set(['role.alpha', 'tone.delta']), '')
    expect(out).toBe('## Communication Style\n\nBe concise.\n\n## Role / Persona\n\nBe an engineer.')
  })

  it('orders prompts within a section by catalog order rather than selection order', () => {
    const out = buildOutput(prompts, categories, new Set(['role.beta', 'role.alpha']), '')
    expect(out).toBe('## Role / Persona\n\nBe an engineer.\n\nBe a reviewer.')
  })

  it('separates every block with exactly one blank line', () => {
    const out = buildOutput(prompts, categories, new Set(['role.alpha', 'testing.gamma']), '')
    expect(out).toBe('## Role / Persona\n\nBe an engineer.\n\n## Testing\n\nWrite tests first.')
  })

  it('trims surrounding whitespace from each prompt body', () => {
    const out = buildOutput(prompts, categories, new Set(['testing.gamma']), '')
    expect(out).toBe('## Testing\n\nWrite tests first.')
  })

  it(`appends custom text last under "## ${CUSTOM_HEADER}"`, () => {
    const out = buildOutput(prompts, categories, new Set(['role.alpha']), 'Ship the login page.')
    expect(out).toBe('## Role / Persona\n\nBe an engineer.\n\n## Task\n\nShip the login page.')
  })

  it('emits only the custom block when custom text is given with no selection', () => {
    expect(buildOutput(prompts, categories, new Set(), 'Just this.')).toBe('## Task\n\nJust this.')
  })

  it('omits the custom block when the custom text is whitespace only', () => {
    expect(buildOutput(prompts, categories, new Set(['role.alpha']), '   \n  ')).toBe(
      '## Role / Persona\n\nBe an engineer.',
    )
  })

  it('trims surrounding whitespace from the custom text', () => {
    expect(buildOutput(prompts, categories, new Set(), '\n  Do the thing.  \n')).toBe('## Task\n\nDo the thing.')
  })

  it('ignores selected ids that are not in the catalog', () => {
    expect(buildOutput(prompts, categories, new Set(['ghost.id']), '')).toBe('')
  })

  it('ignores prompts whose category is not in the categories list', () => {
    const orphan: Prompt = { id: 'orphan.one', title: 'Orphan', prompt: 'Hidden.', category: 'nope' }
    expect(buildOutput([...prompts, orphan], categories, new Set(['orphan.one']), '')).toBe('')
  })

  it('returns an empty string when the categories list is empty', () => {
    expect(buildOutput(prompts, [], new Set(['role.alpha']), '')).toBe('')
  })
})
