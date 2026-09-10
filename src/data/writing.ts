import type { Prompt } from '../types'

export const writing: Prompt[] = [
  {
    id: 'writing.proofread',
    title: 'Proofread only',
    prompt: 'Proofread the text for spelling, grammar, and punctuation. Do not change meaning, tone, or structure.',
    category: 'writing',
  },
  {
    id: 'writing.simplify',
    title: 'Simplify language',
    prompt: 'Rewrite for clarity: shorter sentences, plain words, active voice. Keep all facts and the original meaning.',
    category: 'writing',
  },
  {
    id: 'writing.email',
    title: 'Professional email',
    prompt: 'Write it as a professional email: clear subject line, brief greeting, the point in the first sentence, and a specific call to action.',
    category: 'writing',
  },
  {
    id: 'writing.keep-voice',
    title: 'Preserve my voice',
    prompt: 'Preserve the author\'s voice and word choices as much as possible. Change only what is necessary.',
    category: 'writing',
  },
]
