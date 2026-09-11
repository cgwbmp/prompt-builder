import type { Prompt } from '../types'

export const writing: Prompt[] = [
  {
    id: 'writing.proofread-only',
    title: 'Proofread only',
    prompt:
      'Proofread the supplied text for spelling, grammar, punctuation, and typos only. Do not rephrase sentences, change word choice, or alter structure; list each correction as before and after.',
    category: 'writing',
  },
  {
    id: 'writing.light-copyedit',
    title: 'Light copyedit, keep voice',
    prompt:
      "Copyedit the supplied text for clarity and flow while preserving the author's voice, vocabulary, and sentence rhythm. Change a sentence only when it is unclear or wrong, and never rewrite a passage that already works.",
    category: 'writing',
  },
  {
    id: 'writing.show-edits',
    title: 'Show and justify edits',
    prompt:
      'When editing, return the revised text followed by a list of every substantive change with a one-line reason for each, so the author can accept or reject each edit.',
    category: 'writing',
  },
  {
    id: 'writing.plain-english',
    title: 'Plain English rewrite',
    prompt:
      'Rewrite the supplied text in plain English: replace formal or Latinate words with everyday ones (use instead of utilize, help instead of facilitate, before instead of prior to), and prefer concrete nouns and verbs over abstractions.',
    category: 'writing',
  },
  {
    id: 'writing.short-sentences',
    title: 'Cap sentence length',
    prompt:
      'Rewrite so that sentences average 15 to 20 words and none exceeds 25. Split any sentence carrying two ideas, and keep one clause per sentence where possible.',
    category: 'writing',
  },
  {
    id: 'writing.active-voice-edit',
    title: 'Convert to active voice',
    prompt:
      'Rewrite every passive construction in the supplied text as active, naming the actor (subject, verb, object). Leave a sentence passive only when the actor is genuinely unknown or irrelevant, and flag those cases.',
    category: 'writing',
  },
  {
    id: 'writing.shorten-by-percent',
    title: 'Cut length by a third',
    prompt:
      'Shorten the supplied text by about 30 percent without losing any distinct point. Cut redundant qualifiers, throat-clearing openers, repeated ideas, and empty phrases first; do not remove facts, numbers, or commitments.',
    category: 'writing',
  },
  {
    id: 'writing.one-idea-per-paragraph',
    title: 'One idea per paragraph',
    prompt:
      'Restructure so each paragraph carries exactly one idea, stated in its first sentence, with the remaining sentences supporting it. Split paragraphs that cover two topics and merge fragments that cover the same one.',
    category: 'writing',
  },
  {
    id: 'writing.bluf',
    title: 'Bottom line up front',
    prompt:
      'Open the document with the bottom line up front (BLUF): the conclusion, decision, or request in the first one or two sentences. Put background, reasoning, and detail after it, in order of decreasing importance.',
    category: 'writing',
  },
  {
    id: 'writing.pyramid-structure',
    title: 'Minto pyramid structure',
    prompt:
      'Structure the piece as a pyramid: lead with the single main message, follow with two to four supporting arguments that are mutually exclusive and collectively exhaustive, then put evidence and detail under each argument.',
    category: 'writing',
  },
  {
    id: 'writing.scqa-opening',
    title: 'SCQA introduction',
    prompt:
      'Open with an SCQA introduction: one sentence of Situation the reader already agrees with, one sentence of Complication that changed things, the Question this raises, and then the Answer, before any detail.',
    category: 'writing',
  },
  {
    id: 'writing.email-structure',
    title: 'Professional email structure',
    prompt:
      'Structure emails as: a specific subject line, a one-line purpose in the opening sentence, the necessary context in at most one short paragraph, a clearly marked ask or next step with a date, and a brief sign-off. Keep the whole message under 150 words unless the content genuinely requires more.',
    category: 'writing',
  },
  {
    id: 'writing.subject-line',
    title: 'Specific subject lines',
    prompt:
      'Write email subject lines under 60 characters that state the topic and the required action or status, for example "Decision needed by Fri: vendor contract" or "FYI: Q3 timeline moved to Oct 12". Never use vague subjects like "Update" or "Question".',
    category: 'writing',
  },
  {
    id: 'writing.one-ask-per-message',
    title: 'One ask per message',
    prompt:
      'Make each message carry a single request, stated explicitly with who should do it and by when. If there are several unrelated asks, split them into separate messages or a numbered list with the owner named on each line.',
    category: 'writing',
  },
  {
    id: 'writing.internal-announcement',
    title: 'Internal announcement structure',
    prompt:
      'Write internal announcements in this order: what is changing, when it takes effect, who is affected, what they need to do (if anything), why the change is happening, and where to ask questions. Keep the what and when in the first two sentences.',
    category: 'writing',
  },
  {
    id: 'writing.proposal-structure',
    title: 'Proposal structure',
    prompt:
      'Structure proposals as: the recommendation in one sentence, the problem and its cost, the proposed solution, alternatives considered and why they were rejected, costs and resources, risks, and the specific decision being requested. Give each section a heading.',
    category: 'writing',
  },
  {
    id: 'writing.narrative-memo',
    title: 'Narrative memo, no bullets',
    prompt:
      'Write the piece as a narrative memo in full sentences and connected paragraphs, with no bullet points or slide-style fragments. Each paragraph must build on the previous one so the argument can be read straight through.',
    category: 'writing',
  },
  {
    id: 'writing.persuasive',
    title: 'Persuasive register',
    prompt:
      'Write to persuade: state the position up front, lead with the strongest argument, back each claim with a specific fact or example, address the most likely objection directly, and close with a clear call to action.',
    category: 'writing',
  },
  {
    id: 'writing.neutral-informational',
    title: 'Neutral informational register',
    prompt:
      'Write in a neutral, informational register: report facts and options without advocating, attribute opinions to their holders, and avoid evaluative adjectives (great, disappointing, obvious). The reader should not be able to tell what the writer prefers.',
    category: 'writing',
  },
  {
    id: 'writing.no-jargon',
    title: 'Remove jargon and acronyms',
    prompt:
      'Replace jargon, buzzwords, and internal shorthand with plain terms a new hire would understand. Spell out every acronym on first use, and cut phrases like leverage, synergy, circle back, and move the needle.',
    category: 'writing',
  },
  {
    id: 'writing.remove-hedging',
    title: 'Cut weasel words',
    prompt:
      'Remove hedging and weasel words from the supplied text: delete or replace somewhat, fairly, very, quite, arguably, it seems, I think, and significant. Where a hedge marks real uncertainty, replace it with a specific statement of what is unknown.',
    category: 'writing',
  },
  {
    id: 'writing.data-over-adjectives',
    title: 'Replace adjectives with data',
    prompt:
      'Replace evaluative adjectives and vague quantities with specific numbers, dates, and comparisons. Write "response time fell from 4.2s to 1.1s" instead of "performance improved dramatically"; if no figure exists, say so rather than inflating.',
    category: 'writing',
  },
  {
    id: 'writing.avoid-cliches',
    title: 'Replace cliches',
    prompt:
      'Replace cliches and stock phrases (at the end of the day, think outside the box, low-hanging fruit, game changer, in this day and age) with a fresh, literal statement of what is meant.',
    category: 'writing',
  },
  {
    id: 'writing.inclusive-language',
    title: 'Inclusive language',
    prompt:
      'Use inclusive language: gender-neutral terms (they, staff, chair) instead of gendered defaults, people-first or community-preferred disability terms, and no idioms that depend on a single culture. Flag any term you were unsure about.',
    category: 'writing',
  },
  {
    id: 'writing.consistent-tense-person',
    title: 'Consistent tense and person',
    prompt:
      'Keep tense and grammatical person consistent throughout the piece. Pick one tense for narration and one point of view (I, we, or you), and fix every sentence that drifts.',
    category: 'writing',
  },
  {
    id: 'writing.reading-level',
    title: 'Target an eighth-grade level',
    prompt:
      'Write at roughly an eighth-grade reading level (Flesch-Kincaid grade 8 or below): common words, short sentences, and no more than one subordinate clause per sentence. Keep technical terms only when they are the subject and define them on first use.',
    category: 'writing',
  },
  {
    id: 'writing.audience-rewrite',
    title: 'Rewrite for a named audience',
    prompt:
      'Before writing, state in one line who the reader is and what they already know. Then include only what that reader needs, use their vocabulary, and answer the question they are most likely to have first.',
    category: 'writing',
  },
  {
    id: 'writing.outline-first',
    title: 'Outline before drafting',
    prompt:
      'For anything longer than a few paragraphs, produce a headed outline with a one-line summary per section first and wait for approval before writing the full draft.',
    category: 'writing',
  },
  {
    id: 'writing.title-options',
    title: 'Offer title options',
    prompt:
      'When a document or email needs a title, offer three options in different styles (descriptive, benefit-led, question), each under ten words, and mark the one you recommend with a one-line reason.',
    category: 'writing',
  },
  {
    id: 'writing.parallel-structure',
    title: 'Parallel structure in lists',
    prompt:
      'Make every list and series grammatically parallel: all items start with the same part of speech, use the same tense, and complete the lead-in sentence the same way. Rewrite any item that breaks the pattern.',
    category: 'writing',
  },
  {
    id: 'writing.strong-verbs',
    title: 'Strong verbs, no nominalizations',
    prompt:
      'Turn nominalizations back into verbs: write "we decided" instead of "we made a decision", "analyze" instead of "conduct an analysis", "agree" instead of "reach an agreement". Prefer one precise verb over a verb plus adverb.',
    category: 'writing',
  },
  {
    id: 'writing.cut-redundancy',
    title: 'Cut redundant phrases',
    prompt:
      'Delete redundant pairs and padding: "in order to" becomes "to", "due to the fact that" becomes "because", "each and every" becomes "each", "at this point in time" becomes "now". Remove any sentence that restates the previous one.',
    category: 'writing',
  },
  {
    id: 'writing.delivering-bad-news',
    title: 'Deliver bad news directly',
    prompt:
      'When the message carries bad news (a rejection, a delay, a cancellation), state it plainly in the first two sentences, give the one or two real reasons, say what happens next, and skip apologetic preamble and excessive softening.',
    category: 'writing',
  },
  {
    id: 'writing.scannable-headings',
    title: 'Headings that carry the message',
    prompt:
      'Write headings and bold lead-ins as complete statements that convey the point ("Costs rise 12% under option B"), not topic labels ("Costs"). A reader skimming only the headings should get the whole argument.',
    category: 'writing',
  },
  {
    id: 'writing.explicit-call-to-action',
    title: 'Clear next step',
    prompt:
      'End every piece with the specific next step: what the reader should do, by when, and how to respond. Do not close with vague phrases like "let me know your thoughts" or "happy to discuss".',
    category: 'writing',
  },
  {
    id: 'writing.preserve-formatting-and-facts',
    title: 'Preserve facts and formatting',
    prompt:
      'When editing, keep every name, number, date, quotation, link, and the existing heading and list structure exactly as supplied unless told otherwise. If something looks factually wrong, flag it in a note instead of changing it.',
    category: 'writing',
  },
  {
    id: 'writing.spelling-variant',
    title: 'Match one spelling convention',
    prompt:
      'Use a single spelling and punctuation convention throughout (US or UK English), matching whichever the supplied text already uses most. Normalize date formats and the serial comma to that convention as well.',
    category: 'writing',
  },
]
