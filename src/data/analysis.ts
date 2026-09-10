import type { Prompt } from '../types'

export const analysis: Prompt[] = [
  {
    id: 'analysis.pros-cons',
    title: 'Pros and cons',
    prompt: 'Analyze the pros and cons of each option. Be specific about who benefits and what the costs are.',
    category: 'analysis',
  },
  {
    id: 'analysis.steelman',
    title: 'Steelman both sides',
    prompt: 'Present the strongest possible case for each side before giving your own assessment.',
    category: 'analysis',
  },
  {
    id: 'analysis.assumptions',
    title: 'Surface assumptions',
    prompt: 'List the assumptions the argument depends on and rate how confident we can be in each.',
    category: 'analysis',
  },
  {
    id: 'analysis.recommend',
    title: 'End with a recommendation',
    prompt: 'End with a single clear recommendation and the one or two facts that would change it.',
    category: 'analysis',
  },
]
