import { describe, expect, it } from 'vitest'
import type { Prompt } from '../types'
import { ALL, FAVORITES, filterPrompts } from './filter'

const prompts: Prompt[] = [
  { id: 'role.alpha', title: 'Alpha Lead', prompt: 'Act as a lead engineer.', category: 'role' },
  { id: 'role.beta', title: 'Beta Reviewer', prompt: 'Review code for SECURITY holes.', category: 'role' },
  { id: 'tone.gamma', title: 'Gamma Voice', prompt: 'Be concise and direct.', category: 'tone' },
]

describe('filterPrompts', () => {
  it('returns every prompt when category is "all" and the query is empty', () => {
    expect(filterPrompts(prompts, ALL, '')).toEqual(prompts)
  })

  it('returns only prompts whose category matches the given category id', () => {
    expect(filterPrompts(prompts, 'role', '').map((p) => p.id)).toEqual(['role.alpha', 'role.beta'])
  })

  it('returns an empty array for a category id that is not in the catalog', () => {
    expect(filterPrompts(prompts, 'does-not-exist', '')).toEqual([])
  })

  it('returns only favorited prompts when category is "favorites"', () => {
    const favorites = new Set(['role.beta', 'tone.gamma'])
    expect(filterPrompts(prompts, FAVORITES, '', favorites).map((p) => p.id)).toEqual(['role.beta', 'tone.gamma'])
  })

  it('returns an empty array for "favorites" when no favorites are passed', () => {
    expect(filterPrompts(prompts, FAVORITES, '')).toEqual([])
  })

  it('ignores the category when filtering favorites, so favorites span categories', () => {
    const favorites = new Set(['role.alpha', 'tone.gamma'])
    expect(filterPrompts(prompts, FAVORITES, '', favorites).map((p) => p.id)).toEqual(['role.alpha', 'tone.gamma'])
  })

  it('matches the query against the title case-insensitively', () => {
    expect(filterPrompts(prompts, ALL, 'ALPHA').map((p) => p.id)).toEqual(['role.alpha'])
  })

  it('matches the query against the prompt body case-insensitively', () => {
    expect(filterPrompts(prompts, ALL, 'security').map((p) => p.id)).toEqual(['role.beta'])
  })

  it('treats a whitespace-only query as no query at all', () => {
    expect(filterPrompts(prompts, ALL, '   \n\t ')).toEqual(prompts)
  })

  it('trims surrounding whitespace off the query before matching', () => {
    expect(filterPrompts(prompts, ALL, '  gamma  ').map((p) => p.id)).toEqual(['tone.gamma'])
  })

  it('matches on a substring rather than requiring a whole word', () => {
    expect(filterPrompts(prompts, ALL, 'oncis').map((p) => p.id)).toEqual(['tone.gamma'])
  })

  it('applies category and query together rather than either alone', () => {
    expect(filterPrompts(prompts, 'role', 'concise')).toEqual([])
  })

  it('applies the query on top of the favorites filter', () => {
    const favorites = new Set(['role.alpha', 'role.beta'])
    expect(filterPrompts(prompts, FAVORITES, 'alpha', favorites).map((p) => p.id)).toEqual(['role.alpha'])
  })

  it('returns an empty array when no prompt matches the query', () => {
    expect(filterPrompts(prompts, ALL, 'zzzz-no-such-text')).toEqual([])
  })

  it('returns an empty array when the catalog is empty', () => {
    expect(filterPrompts([], ALL, '')).toEqual([])
  })

  it('preserves catalog order in the result', () => {
    expect(filterPrompts(prompts, ALL, 'a').map((p) => p.id)).toEqual(['role.alpha', 'role.beta', 'tone.gamma'])
  })

  it('does not mutate the input array', () => {
    const input = [...prompts]
    filterPrompts(input, 'role', 'alpha')
    expect(input).toEqual(prompts)
  })
})
