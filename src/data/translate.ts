import type { Prompt } from '../types'

export const translate: Prompt[] = [
  {
    id: 'translate.natural-not-literal',
    title: 'Natural, not literal',
    prompt:
      'Translate for meaning, not word for word. Produce text a native speaker would naturally write, restructuring sentences wherever the source structure would sound foreign in the target language.',
    category: 'translate',
  },
  {
    id: 'translate.literal-for-legal',
    title: 'Literal for legal text',
    prompt:
      'This is a legal or contractual text: favor precision over fluency. Translate literally wherever a freer rendering could change scope or obligation, keep clause and section numbering intact, and render defined terms exactly as defined.',
    category: 'translate',
  },
  {
    id: 'translate.complete-and-faithful',
    title: 'Nothing added or dropped',
    prompt:
      'Do not add, omit, or soften anything. Every sentence in the source must have a counterpart in the target carrying the same information; do not insert explanations or drop repetitions the author chose.',
    category: 'translate',
  },
  {
    id: 'translate.preserve-formatting',
    title: 'Preserve formatting',
    prompt:
      'Preserve all formatting exactly: markdown, HTML tags and attributes, line breaks, list structure, headings, bold and italic markers. Translate only the human-readable text between them.',
    category: 'translate',
  },
  {
    id: 'translate.preserve-placeholders',
    title: 'Keep placeholders and code',
    prompt:
      'Leave placeholders, variables, and code untouched: `{name}`, `%s`, `{{count}}`, `$1`, URLs, file paths, and anything inside backticks or code blocks. Move them to where the target grammar needs them, but never translate, reorder within, or alter them.',
    category: 'translate',
  },
  {
    id: 'translate.match-register',
    title: 'Match the register',
    prompt:
      'Match the register of the source: if it is casual, stay casual; if it is formal or technical, keep it so. Do not upgrade slang into polished prose or flatten formal text into chat.',
    category: 'translate',
  },
  {
    id: 'translate.formal-address',
    title: 'Formal address (vous/Sie)',
    prompt:
      'Use the formal second person of the target language consistently throughout (vous in French, Sie in German, usted in Spanish, Lei in Italian), including matching verb agreement and possessives.',
    category: 'translate',
  },
  {
    id: 'translate.informal-address',
    title: 'Informal address (tu/du)',
    prompt:
      'Use the informal second person of the target language consistently throughout (tu in French, du in German, tu in Spanish and Italian), as you would for a friendly consumer app or a message between peers.',
    category: 'translate',
  },
  {
    id: 'translate.gender-neutral',
    title: 'Gender-neutral wording',
    prompt:
      'Use gender-neutral wording wherever the target language allows it: neutral nouns, plural constructions, or rephrasing to avoid gendered pronouns. Where a gendered form is grammatically unavoidable, choose the most inclusive accepted form and flag the choice.',
    category: 'translate',
  },
  {
    id: 'translate.keep-proper-nouns',
    title: 'Keep proper nouns',
    prompt:
      "Keep people's names, brand names, and product names in their original form. Translate place names only when an established target-language exonym exists (London becomes Londres in French); never translate company or product names.",
    category: 'translate',
  },
  {
    id: 'translate.keep-established-jargon',
    title: 'Keep established jargon',
    prompt:
      'Leave technical terms and industry jargon in English when the target-language community uses them as-is; translate them only when a widely adopted native term exists, and apply the same choice every time.',
    category: 'translate',
  },
  {
    id: 'translate.localize-numbers-dates',
    title: 'Localize dates and numbers',
    prompt:
      'Localize dates, times, numbers, currency, and units to the conventions of the target locale: date order, decimal and thousands separators, 12- or 24-hour clock, and currency symbol placement. Convert measurement units only for a general audience, and say so when you do.',
    category: 'translate',
  },
  {
    id: 'translate.native-punctuation',
    title: 'Native punctuation',
    prompt:
      "Use the target language's own punctuation and typography conventions: guillemets in French, low-high quotation marks in German, inverted question and exclamation marks in Spanish, full-width punctuation in Chinese and Japanese, and the correct spacing rules before punctuation.",
    category: 'translate',
  },
  {
    id: 'translate.explain-untranslatable',
    title: 'Explain untranslatable terms',
    prompt:
      'When a word or idiom has no direct equivalent, choose the closest natural rendering and add a brief translator note in square brackets explaining the nuance that was lost.',
    category: 'translate',
  },
  {
    id: 'translate.flag-ambiguities',
    title: 'Flag ambiguities',
    prompt:
      'Where the source is ambiguous (a word with several meanings, an unclear referent, unspecified gender or number), pick the most likely reading, mark it with [?], and list the ambiguities and alternative readings after the translation.',
    category: 'translate',
  },
  {
    id: 'translate.note-source-errors',
    title: 'Fix source errors, note them',
    prompt:
      'If the source contains an obvious typo, grammatical slip, or factual inconsistency, translate the intended meaning and list the source problem separately. Do not reproduce the mistake in the target.',
    category: 'translate',
  },
  {
    id: 'translate.side-by-side',
    title: 'Side-by-side output',
    prompt:
      'Output the translation side by side with the source: one table row or paired line per sentence or segment, source on the left and translation on the right, so the two can be compared segment by segment.',
    category: 'translate',
  },
  {
    id: 'translate.output-only-translation',
    title: 'Only the translation',
    prompt:
      'Output only the translated text. No preamble, no notes, no alternative renderings, and no quotation marks around the result, unless I explicitly ask for them.',
    category: 'translate',
  },
  {
    id: 'translate.glossary-consistency',
    title: 'Consistent key terms',
    prompt:
      'Translate each recurring key term the same way every time it appears. Before the translation, list the recurring terms with the target rendering you chose for each, then apply that glossary consistently.',
    category: 'translate',
  },
  {
    id: 'translate.use-provided-glossary',
    title: 'Glossary is mandatory',
    prompt:
      'If a glossary or preferred terminology is supplied, treat it as mandatory: use those exact target terms even where another rendering would read better, and flag any source term the glossary does not cover.',
    category: 'translate',
  },
  {
    id: 'translate.target-dialect',
    title: 'Ask for the target dialect',
    prompt:
      "If the regional variant of the target language is not specified, ask which one to use (en-US vs en-GB, pt-BR vs pt-PT, es-ES vs es-MX, zh-Hans vs zh-Hant), then apply that variant's spelling, vocabulary, and punctuation consistently.",
    category: 'translate',
  },
  {
    id: 'translate.detect-source-language',
    title: 'Detect the source language',
    prompt:
      'Detect the source language automatically and state it in one line before translating. If the text mixes languages, translate all of it into the target and note which parts were in which language.',
    category: 'translate',
  },
  {
    id: 'translate.back-translation-check',
    title: 'Back-translation check',
    prompt:
      'After translating, independently translate your result back into the source language and compare it with the original. Report any sentence where the meaning shifted, then fix the forward translation.',
    category: 'translate',
  },
  {
    id: 'translate.keep-length-ui-strings',
    title: 'Keep UI string length',
    prompt:
      'This is user interface text: keep each translated string within about 20 percent of the source length, prefer short synonyms, and never expand a button or menu label into a full sentence.',
    category: 'translate',
  },
  {
    id: 'translate.plural-forms',
    title: 'Handle plural forms',
    prompt:
      'Handle plurals correctly for the target language, including the zero, one, two, few, many, and other categories where the language distinguishes them, and produce a separate string for each plural form when translating UI messages.',
    category: 'translate',
  },
  {
    id: 'translate.subtitles',
    title: 'Translate as subtitles',
    prompt:
      'Translate as subtitles: at most 42 characters per line and two lines per cue, keep all timing codes unchanged, and condense the wording to fit rather than truncating it.',
    category: 'translate',
  },
  {
    id: 'translate.short-copy-options',
    title: 'Options for short copy',
    prompt:
      'For short phrases such as slogans, titles, and button labels, offer three alternative renderings with a one-line note on the nuance of each, and mark the one you recommend.',
    category: 'translate',
  },
  {
    id: 'translate.transliteration-rules',
    title: 'Standard transliteration',
    prompt:
      'When transliterating names or terms between scripts, use the standard romanization for the language (Pinyin for Mandarin, Hepburn for Japanese, Revised Romanization for Korean, BGN/PCGN for Russian), apply it consistently, and name the system used.',
    category: 'translate',
  },
  {
    id: 'translate.correct-grammar-only',
    title: 'Correct, do not translate',
    prompt:
      'Do not translate. Correct grammar, spelling, punctuation, and word choice in the original language only, keeping my meaning, voice, and sentence order wherever they are already acceptable.',
    category: 'translate',
  },
  {
    id: 'translate.explain-corrections',
    title: 'Explain each correction',
    prompt:
      'For every correction you make, show the original, the corrected version, and a one-line explanation of the rule involved, so I learn from the mistake instead of just receiving the fix.',
    category: 'translate',
  },
  {
    id: 'translate.tone-adaptation',
    title: 'Adapt tone and culture',
    prompt:
      'Adapt the tone, not just the words: rewrite so the text has the same effect on the target audience (persuasive stays persuasive, warm stays warm), replacing idioms, humor, and cultural references with local equivalents rather than translating them literally.',
    category: 'translate',
  },
  {
    id: 'translate.register-shift',
    title: 'Shift register, same language',
    prompt:
      'Rewrite the text in the same language at a different register: turn a casual message into a formal one, or a formal notice into friendly plain language, keeping every fact and commitment unchanged.',
    category: 'translate',
  },
  {
    id: 'translate.simplify-a2-b1',
    title: 'Simplify to A2-B1 level',
    prompt:
      'Write the target text at CEFR A2 to B1 level: common vocabulary, short sentences, one idea per sentence, no idioms, and a plain-word definition for any technical term you cannot avoid.',
    category: 'translate',
  },
  {
    id: 'translate.gloss-for-learners',
    title: 'Gloss for language learners',
    prompt:
      'Translate, then break the text down for a language learner: give a literal gloss of each phrase and explain the grammar and any idioms involved, so I can learn the language rather than just read the result.',
    category: 'translate',
  },
]
