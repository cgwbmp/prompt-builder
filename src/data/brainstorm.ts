import type { Prompt } from '../types'

export const brainstorm: Prompt[] = [
  {
    id: 'brainstorm.many-ideas',
    title: '20 ideas, no filter',
    prompt: 'Generate 20 ideas without filtering for quality. Include some obvious ones and some unusual ones. One line each.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.diverse',
    title: 'Maximize diversity',
    prompt: 'Make the ideas as different from each other as possible. Avoid variations on the same theme.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.top-3',
    title: 'Pick the top 3',
    prompt: 'After listing ideas, pick the three most promising ones and explain in one sentence each why they stand out.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.constraints-flip',
    title: 'Flip the constraints',
    prompt: 'Take each constraint of the problem and imagine it removed or inverted. What becomes possible?',
    category: 'brainstorm',
  },
]
