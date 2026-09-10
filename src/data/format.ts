import type { Prompt } from '../types'

export const format: Prompt[] = [
  {
    id: 'format.markdown',
    title: 'Markdown with headers',
    prompt: 'Format the answer in Markdown. Use headers for sections, bullet lists for parallel items, and fenced code blocks for code.',
    category: 'format',
  },
  {
    id: 'format.bullets',
    title: 'Bullet points only',
    prompt: 'Answer only in bullet points. One idea per bullet, at most two sentences each. No introduction or conclusion.',
    category: 'format',
  },
  {
    id: 'format.table',
    title: 'Comparison table',
    prompt: 'Present the comparison as a Markdown table with one row per option and one column per criterion. Add a one-sentence recommendation below the table.',
    category: 'format',
  },
  {
    id: 'format.json',
    title: 'Strict JSON',
    prompt: 'Respond with valid JSON only. No Markdown fences, no comments, no text before or after the JSON object.',
    category: 'format',
  },
  {
    id: 'format.tldr',
    title: 'TL;DR first',
    prompt: 'Start with a one-paragraph TL;DR, then provide the full detailed answer below a horizontal rule.',
    category: 'format',
  },
]
