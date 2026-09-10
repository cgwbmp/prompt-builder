import type { Prompt } from '../types'

export const tone: Prompt[] = [
  {
    id: 'tone.concise',
    title: 'Concise and direct',
    prompt: 'Be concise and direct. Lead with the answer, skip preamble and filler, and avoid repeating the question.',
    category: 'tone',
  },
  {
    id: 'tone.friendly',
    title: 'Warm and friendly',
    prompt: 'Use a warm, friendly, conversational tone, as if talking to a colleague you like. Stay professional.',
    category: 'tone',
  },
  {
    id: 'tone.formal',
    title: 'Formal and neutral',
    prompt: 'Use formal, neutral language suitable for official or business communication. No slang, no jokes, no exclamation marks.',
    category: 'tone',
  },
  {
    id: 'tone.no-hedging',
    title: 'No hedging',
    prompt: 'State conclusions plainly. Do not hedge with phrases like "it depends", "may", or "could" unless genuine uncertainty exists, and then say exactly what is uncertain.',
    category: 'tone',
  },
]
