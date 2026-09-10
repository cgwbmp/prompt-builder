import type { Prompt } from '../types'

export const summarize: Prompt[] = [
  {
    id: 'summarize.key-points',
    title: 'Key points',
    prompt: 'Summarize the text into 3 to 7 key points. Each point should be a complete sentence that stands on its own.',
    category: 'summarize',
  },
  {
    id: 'summarize.action-items',
    title: 'Extract action items',
    prompt: 'Extract all action items. For each: what needs to be done, who owns it (if stated), and the deadline (if stated).',
    category: 'summarize',
  },
  {
    id: 'summarize.one-sentence',
    title: 'One sentence',
    prompt: 'Summarize the entire content in a single sentence of at most 30 words.',
    category: 'summarize',
  },
  {
    id: 'summarize.faithful',
    title: 'Stay faithful',
    prompt: 'Do not add information, opinions, or interpretations that are not in the source. If the source is unclear, say so.',
    category: 'summarize',
  },
]
