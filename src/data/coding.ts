import type { Prompt } from '../types'

export const coding: Prompt[] = [
  {
    id: 'coding.typescript-strict',
    title: 'Strict TypeScript',
    prompt: 'Write TypeScript in strict mode. Avoid `any`, prefer explicit types at module boundaries, and use type inference inside functions.',
    category: 'coding',
  },
  {
    id: 'coding.minimal-diff',
    title: 'Minimal diff',
    prompt: 'Make the smallest change that solves the problem. Do not refactor, rename, or reformat unrelated code.',
    category: 'coding',
  },
  {
    id: 'coding.with-tests',
    title: 'Include tests',
    prompt: 'Include unit tests for the new or changed behavior, covering the happy path and at least one edge case.',
    category: 'coding',
  },
  {
    id: 'coding.explain-changes',
    title: 'Explain changes',
    prompt: 'After the code, add a short explanation of what changed and why, and mention any trade-offs or follow-ups.',
    category: 'coding',
  },
  {
    id: 'coding.no-deps',
    title: 'No new dependencies',
    prompt: 'Do not add new third-party dependencies. Use the standard library and what is already in the project.',
    category: 'coding',
  },
]
