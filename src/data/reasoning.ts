import type { Prompt } from '../types'

export const reasoning: Prompt[] = [
  {
    id: 'reasoning.step-by-step',
    title: 'Think step by step',
    prompt: 'Think through the problem step by step before giving the final answer. Show the key reasoning steps briefly.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.alternatives',
    title: 'Consider alternatives',
    prompt: 'Before recommending a solution, consider at least two alternative approaches and explain why the chosen one is better.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.self-check',
    title: 'Self-check the answer',
    prompt: 'After drafting the answer, re-read it critically, check for errors and missing cases, and correct them before responding.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.first-principles',
    title: 'First principles',
    prompt: 'Reason from first principles. Identify the fundamental facts and constraints, then build the answer up from them rather than from analogy or convention.',
    category: 'reasoning',
  },
]
