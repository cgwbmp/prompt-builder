import type { Prompt } from '../types'

export const language: Prompt[] = [
  {
    id: 'language.english',
    title: 'Respond in English',
    prompt:
      'Write all prose in English for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.russian',
    title: 'Respond in Russian',
    prompt:
      'Write all prose in Russian for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.german',
    title: 'Respond in German',
    prompt:
      'Write all prose in German for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.spanish',
    title: 'Respond in Spanish',
    prompt:
      'Write all prose in Spanish for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.french',
    title: 'Respond in French',
    prompt:
      'Write all prose in French for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.portuguese',
    title: 'Respond in Portuguese',
    prompt:
      'Write all prose in Portuguese for the whole conversation, using the Brazilian variant unless I specify otherwise, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.chinese-simplified',
    title: 'Respond in Chinese (Simplified)',
    prompt:
      'Write all prose in Simplified Chinese for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.japanese',
    title: 'Respond in Japanese',
    prompt:
      'Write all prose in Japanese for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.ukrainian',
    title: 'Respond in Ukrainian',
    prompt:
      'Write all prose in Ukrainian for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.polish',
    title: 'Respond in Polish',
    prompt:
      'Write all prose in Polish for the whole conversation, regardless of the language of my messages or of the material I share.',
    category: 'language',
  },
  {
    id: 'language.match-my-language',
    title: 'Match my language',
    prompt: 'Reply in the language I write each message in. If I switch languages between messages, switch with me.',
    category: 'language',
  },
  {
    id: 'language.dominant-language-when-mixed',
    title: 'Dominant language when mixed',
    prompt:
      'If my message mixes languages, reply in the one that carries most of the words, and do not mirror the mixing.',
    category: 'language',
  },
  {
    id: 'language.code-in-english',
    title: 'Code stays in English',
    prompt:
      'Whatever language the prose is in, keep all code, identifiers, variable and function names, file names, commit messages, and code comments in English.',
    category: 'language',
  },
  {
    id: 'language.keep-english-tech-terms',
    title: 'Keep English tech terms',
    prompt:
      'In a non-English reply, keep established technical terms in English (commit, pull request, middleware, cache, endpoint) rather than translating them, and add a short gloss in parentheses the first time each term appears.',
    category: 'language',
  },
  {
    id: 'language.translate-tech-terms',
    title: 'Translate tech terms where possible',
    prompt:
      'In a non-English reply, use the accepted native-language term for technical concepts wherever one is in common use, and give the English original in parentheses on first use so I can search for it.',
    category: 'language',
  },
  {
    id: 'language.glossary-at-end',
    title: 'Glossary at the end',
    prompt:
      'End the reply with a short glossary section listing each technical term you used, its English form, and a one-line definition.',
    category: 'language',
  },
  {
    id: 'language.bilingual-then-english',
    title: 'Bilingual: answer, then English',
    prompt:
      'Give the full answer in my language first, then repeat the same content in English under a heading "English", so both versions can be shared as-is.',
    category: 'language',
  },
  {
    id: 'language.prose-only-never-code-blocks',
    title: 'Translate prose, never code blocks',
    prompt:
      'When writing in a non-English language, translate only the prose. Leave code blocks, command lines, file paths, log excerpts, and error messages exactly as they are, including any English text inside them.',
    category: 'language',
  },
  {
    id: 'language.simple-english-b1',
    title: 'Simple English (B1)',
    prompt:
      'Write in simple English at CEFR B1 level for non-native readers: common words, short sentences with one idea each, present tense and active voice, and a plain definition for any technical term you cannot avoid.',
    category: 'language',
  },
  {
    id: 'language.no-idioms',
    title: 'No idioms or cultural references',
    prompt:
      'Avoid idioms, slang, humor, sports metaphors, and culture-specific references that a reader from another country might not know. Say the plain meaning instead.',
    category: 'language',
  },
  {
    id: 'language.metric-and-iso-dates',
    title: 'Metric units and ISO dates',
    prompt:
      'Use metric units, 24-hour time, and ISO 8601 dates (YYYY-MM-DD) in all prose. Name the time zone whenever you give a clock time.',
    category: 'language',
  },
  {
    id: 'language.spell-out-acronyms',
    title: 'Spell out acronyms',
    prompt:
      'Spell out every acronym or abbreviation in full the first time it appears in a reply, with the short form in parentheses, then use the short form.',
    category: 'language',
  },
  {
    id: 'language.american-spelling',
    title: 'American English spelling',
    prompt:
      'Use American English spelling and vocabulary consistently (color, organize, behavior, license as a noun), including in headings and lists.',
    category: 'language',
  },
  {
    id: 'language.british-spelling',
    title: 'British English spelling',
    prompt:
      'Use British English spelling and vocabulary consistently (colour, organise, behaviour, licence as a noun), including in headings and lists.',
    category: 'language',
  },
  {
    id: 'language.formal-address-to-me',
    title: 'Formal address to me',
    prompt:
      'When addressing me in a language that distinguishes formal and informal second person, use the formal form consistently (Sie in German, vous in French, usted in Spanish, vy in Russian and Ukrainian).',
    category: 'language',
  },
  {
    id: 'language.informal-address-to-me',
    title: 'Informal address to me',
    prompt:
      'When addressing me in a language that distinguishes formal and informal second person, use the informal form consistently (du in German, tu in French and Spanish, ty in Russian, Ukrainian, and Polish).',
    category: 'language',
  },
  {
    id: 'language.one-rendering-per-term',
    title: 'One rendering per term',
    prompt:
      'When writing in a non-English language, pick one translation for each English technical term and use it for the entire conversation. Do not alternate between a translated form and the English form.',
    category: 'language',
  },
  {
    id: 'language.no-mid-answer-switching',
    title: 'No switching mid-answer',
    prompt:
      'Keep the entire reply in a single language. Do not drift into English for headings, list items, or summaries when the rest of the reply is in another language.',
    category: 'language',
  },
  {
    id: 'language.ui-strings-in-product-language',
    title: 'UI strings in product language',
    prompt:
      'Write any user-facing strings, error messages, and UI labels you produce in the language the product ships in, and write your explanation to me in my language. Do not translate one into the other.',
    category: 'language',
  },
  {
    id: 'language.ask-which-language',
    title: 'Ask which language when unclear',
    prompt:
      'If it is unclear which language I want the reply in (for example, an English question about a document in another language), ask before answering instead of choosing on your own.',
    category: 'language',
  },
  {
    id: 'language.native-script-not-transliteration',
    title: 'Native script, no transliteration',
    prompt:
      'When replying in a language with its own script (Cyrillic, Chinese, Japanese), use that script. Do not transliterate into Latin letters unless I write to you that way first.',
    category: 'language',
  },
  {
    id: 'language.neutral-international-english',
    title: 'Neutral international English',
    prompt:
      'Write in neutral international English: avoid regional slang and regionally specific spelling where a neutral alternative exists, and prefer wording that reads the same to American, British, and non-native readers.',
    category: 'language',
  },
  {
    id: 'language.translate-quoted-material',
    title: 'Translate quoted material too',
    prompt:
      'When replying in a non-English language, translate any English prose you quote from documentation or messages into my language, and keep the original English in parentheses only when the exact wording matters.',
    category: 'language',
  },
]
