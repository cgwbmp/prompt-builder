import type { Prompt } from '../types'

export const translate: Prompt[] = [
  {
    id: 'translate.natural',
    title: 'Natural, not literal',
    prompt: 'Translate for meaning and natural flow in the target language, not word for word. Adapt idioms.',
    category: 'translate',
  },
  {
    id: 'translate.keep-format',
    title: 'Keep formatting',
    prompt: 'Preserve all formatting, placeholders, variables, and code exactly as they are. Translate only human-readable text.',
    category: 'translate',
  },
  {
    id: 'translate.register',
    title: 'Match register',
    prompt: 'Match the register of the original: formal stays formal, casual stays casual.',
    category: 'translate',
  },
  {
    id: 'translate.explain-choices',
    title: 'Explain tricky choices',
    prompt: 'After the translation, briefly note any terms that had no direct equivalent and how you handled them.',
    category: 'translate',
  },
]
