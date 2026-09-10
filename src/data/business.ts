import type { Prompt } from '../types'

export const business: Prompt[] = [
  {
    id: 'business.meeting-agenda',
    title: 'Meeting agenda',
    prompt: 'Create a meeting agenda: goal, attendees, time-boxed items, and the decision or output expected from each item.',
    category: 'business',
  },
  {
    id: 'business.decision-memo',
    title: 'Decision memo',
    prompt: 'Structure the answer as a decision memo: context, options considered, recommendation, risks, and next steps.',
    category: 'business',
  },
  {
    id: 'business.smart-goals',
    title: 'SMART goals',
    prompt: 'Rewrite the goals so each is Specific, Measurable, Achievable, Relevant, and Time-bound.',
    category: 'business',
  },
  {
    id: 'business.exec-summary',
    title: 'Executive summary',
    prompt: 'Write for a busy executive: the decision needed, the recommendation, and the three most important supporting facts. Nothing else.',
    category: 'business',
  },
]
