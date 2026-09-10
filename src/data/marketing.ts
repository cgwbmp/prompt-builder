import type { Prompt } from '../types'

export const marketing: Prompt[] = [
  {
    id: 'marketing.benefits',
    title: 'Benefits over features',
    prompt: 'Lead with benefits to the customer, not product features. Translate every feature into what it lets the customer do or feel.',
    category: 'marketing',
  },
  {
    id: 'marketing.headlines',
    title: '10 headline variants',
    prompt: 'Write 10 headline variants. Mix styles: question, number, how-to, bold claim, and curiosity gap.',
    category: 'marketing',
  },
  {
    id: 'marketing.cta',
    title: 'Clear call to action',
    prompt: 'End with a single, specific call to action. Use an action verb and make the next step obvious.',
    category: 'marketing',
  },
  {
    id: 'marketing.no-hype',
    title: 'No hype words',
    prompt: 'Avoid hype and cliché words such as "revolutionary", "game-changing", "seamless", "unlock", and "next-level".',
    category: 'marketing',
  },
]
