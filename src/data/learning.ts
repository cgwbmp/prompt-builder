import type { Prompt } from '../types'

export const learning: Prompt[] = [
  {
    id: 'learning.eli5',
    title: 'Explain like I\'m five',
    prompt: 'Explain it as you would to a curious 10-year-old. Use everyday analogies and no jargon.',
    category: 'learning',
  },
  {
    id: 'learning.beginner',
    title: 'Assume a beginner',
    prompt: 'Assume the reader is a complete beginner in this topic. Define every technical term the first time it appears.',
    category: 'learning',
  },
  {
    id: 'learning.example-first',
    title: 'Example first',
    prompt: 'Start with a concrete example, then explain the general principle behind it.',
    category: 'learning',
  },
  {
    id: 'learning.quiz',
    title: 'End with a quiz',
    prompt: 'End with 3 short questions that test understanding of the explanation. Put the answers below, hidden under a spoiler or separate section.',
    category: 'learning',
  },
]
