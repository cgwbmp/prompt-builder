import type { Prompt } from '../types'

export const constraints: Prompt[] = [
  {
    id: 'constraints.no-assumptions',
    title: 'Ask before assuming',
    prompt: 'If any requirement is ambiguous, ask a clarifying question before answering instead of guessing.',
    category: 'constraints',
  },
  {
    id: 'constraints.cite-sources',
    title: 'Cite sources',
    prompt: 'Support factual claims with sources. If you cannot verify a claim, say so explicitly rather than presenting it as fact.',
    category: 'constraints',
  },
  {
    id: 'constraints.word-limit',
    title: 'Under 200 words',
    prompt: 'Keep the entire response under 200 words.',
    category: 'constraints',
  },
  {
    id: 'constraints.no-fluff',
    title: 'No fluff or disclaimers',
    prompt: 'Do not add disclaimers, apologies, moralizing, or generic advice. Do not restate the question.',
    category: 'constraints',
  },
]
