import type { Prompt } from '../types'

export const review: Prompt[] = [
  {
    id: 'review.bugs-first',
    title: 'Bugs before style',
    prompt: 'Review the code for correctness bugs first, then security issues, then performance. Only mention style if it hides a real problem.',
    category: 'review',
  },
  {
    id: 'review.severity',
    title: 'Rank by severity',
    prompt: 'List findings ranked by severity. For each: location, what is wrong, a concrete failure scenario, and a suggested fix.',
    category: 'review',
  },
  {
    id: 'review.root-cause',
    title: 'Find the root cause',
    prompt: 'Do not stop at the symptom. Trace the bug to its root cause and explain the chain of events that leads to the failure.',
    category: 'review',
  },
  {
    id: 'review.security',
    title: 'Security focus',
    prompt: 'Review with a security mindset: input validation, injection, auth and authorization, secrets handling, and unsafe defaults.',
    category: 'review',
  },
]
