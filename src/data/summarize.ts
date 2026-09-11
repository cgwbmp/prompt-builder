import type { Prompt } from '../types'

export const summarize: Prompt[] = [
  {
    id: 'summarize.key-points',
    title: 'Key points as bullets',
    prompt:
      'Summarize the supplied material as three to seven bullet points, each a complete sentence under 20 words that states a distinct point. Order them by importance, not by where they appear in the source.',
    category: 'summarize',
  },
  {
    id: 'summarize.one-sentence',
    title: 'One-sentence summary',
    prompt:
      'Summarize the supplied material in a single sentence of at most 30 words that captures the main claim or outcome. Do not add a second sentence or a bullet list.',
    category: 'summarize',
  },
  {
    id: 'summarize.executive-summary',
    title: 'Executive summary',
    prompt:
      'Write an executive summary of 100 to 150 words for a reader who will not read the source: the conclusion or recommendation first, then the two or three facts that support it, then what is being asked of the reader.',
    category: 'summarize',
  },
  {
    id: 'summarize.layered',
    title: 'Layered summary',
    prompt:
      'Provide the summary in three layers: a one-sentence headline, a one-paragraph overview, and a detailed section-by-section summary, so the reader can stop at whichever depth they need.',
    category: 'summarize',
  },
  {
    id: 'summarize.action-items',
    title: 'Action items with owners',
    prompt:
      'Extract every action item as a checklist line in the form: action (starting with a verb), owner, due date. Write "owner unassigned" or "no date" when the source does not state one; do not invent either.',
    category: 'summarize',
  },
  {
    id: 'summarize.decisions-vs-open',
    title: 'Decisions vs open questions',
    prompt:
      'Separate the content into two lists: Decisions made (each with who decided and any stated rationale) and Open questions (each with who needs to answer it, if known). Do not list a topic as decided if the source only shows it was discussed.',
    category: 'summarize',
  },
  {
    id: 'summarize.extract-entities',
    title: 'Extract names, dates, numbers',
    prompt:
      'Extract every named person, organization, product, date, deadline, amount, and metric from the supplied text into a structured list grouped by type, keeping each value exactly as written in the source, including units and currency.',
    category: 'summarize',
  },
  {
    id: 'summarize.faithful-no-additions',
    title: 'Faithful to the source',
    prompt:
      'Include only information that is explicitly present in the supplied material. Do not add background knowledge, inferences, interpretations, or recommendations of your own; if a summary needs context the source lacks, note that gap instead of filling it.',
    category: 'summarize',
  },
  {
    id: 'summarize.quote-claims',
    title: 'Quote exact wording for claims',
    prompt:
      'For every claim, commitment, or figure in the summary, include the exact source wording in quotation marks alongside your paraphrase, so the reader can verify it without opening the source.',
    category: 'summarize',
  },
  {
    id: 'summarize.locate-in-source',
    title: 'Cite source location',
    prompt:
      'After each summarized point, reference where it comes from in the source (section heading, page number, timestamp, or message author and time) so the reader can jump to the original.',
    category: 'summarize',
  },
  {
    id: 'summarize.five-ws',
    title: 'Who, what, when, where, why',
    prompt:
      'Structure the summary under five labeled lines: Who, What, When, Where, Why. Fill each from the source and write "not stated" for any element the source does not answer.',
    category: 'summarize',
  },
  {
    id: 'summarize.timeline',
    title: 'Chronological timeline',
    prompt:
      'Reorganize the events described in the source into a chronological timeline, one dated line per event. Where the source gives only a relative time ("two weeks later"), keep it relative and mark the anchor event it depends on.',
    category: 'summarize',
  },
  {
    id: 'summarize.compare-two-documents',
    title: 'Compare two documents',
    prompt:
      'When given two versions or two documents, produce three lists: what is only in the first, what is only in the second, and what changed in meaning between them. Ignore purely cosmetic differences unless asked.',
    category: 'summarize',
  },
  {
    id: 'summarize.multi-source-synthesis',
    title: 'Synthesize multiple sources',
    prompt:
      'When summarizing several sources together, merge points that agree into one statement listing which sources support it, and present points where sources disagree side by side with attribution. Do not average away the disagreement.',
    category: 'summarize',
  },
  {
    id: 'summarize.meeting-minutes',
    title: 'Notes to formal minutes',
    prompt:
      'Turn raw meeting notes or a transcript into minutes with these sections: date and attendees, topics discussed (one short paragraph each), decisions, action items with owner and due date, and items deferred to the next meeting. Leave out side conversations and verbatim back-and-forth.',
    category: 'summarize',
  },
  {
    id: 'summarize.thread-summary',
    title: 'Thread to summary',
    prompt:
      'Summarize a long email or chat thread as: the original question or trigger, where the discussion landed, who still owes a reply, and any deadline mentioned. Write it for someone who was added to the thread late and has three minutes.',
    category: 'summarize',
  },
  {
    id: 'summarize.per-participant-positions',
    title: 'Positions by participant',
    prompt:
      'For a discussion with several participants, summarize each person on one line: the position they took, their main reason, and whether they changed their mind. Attribute only what each person actually said.',
    category: 'summarize',
  },
  {
    id: 'summarize.flag-ambiguity',
    title: 'Flag ambiguity and contradictions',
    prompt:
      'Add a final section titled Unclear or contradictory that lists any statements in the source that are vague, conflict with each other, or could be read two ways, quoting each one. Do not resolve them silently in the summary.',
    category: 'summarize',
  },
  {
    id: 'summarize.length-ratio',
    title: 'Keep a fixed length ratio',
    prompt:
      'Keep the summary at about 10 percent of the source length, and give every major section of the source proportional coverage. Do not let the summary spend most of its words on the opening of the source.',
    category: 'summarize',
  },
  {
    id: 'summarize.facts-table',
    title: 'Table of facts',
    prompt:
      'Present the extracted information as a table with columns for the fact, its value, the source location, and any stated caveat. One fact per row; do not combine two figures in one cell.',
    category: 'summarize',
  },
  {
    id: 'summarize.preserve-caveats',
    title: 'Preserve caveats and hedges',
    prompt:
      'Carry over the certainty level of the source. If the original says "may", "preliminary", "estimated", or "pending approval", keep that qualifier in the summary; never turn a tentative statement into a firm one.',
    category: 'summarize',
  },
  {
    id: 'summarize.source-fact-vs-opinion',
    title: 'Separate reported facts from opinions',
    prompt:
      'Sort the content of the source into what it presents as fact (with data or a citation) and what it presents as opinion, prediction, or recommendation. Label each summarized point as one or the other.',
    category: 'summarize',
  },
  {
    id: 'summarize.exact-numbers',
    title: 'Numbers exactly as written',
    prompt:
      'Reproduce every number, percentage, date, and unit exactly as it appears in the source. Do not round, convert units, or compute derived figures unless explicitly asked, and mark any figure you did compute as derived.',
    category: 'summarize',
  },
  {
    id: 'summarize.keep-source-terms',
    title: 'Keep the source terminology',
    prompt:
      'Use the same names, labels, and terms the source uses for people, projects, and concepts rather than substituting synonyms, so the summary can be searched against the original.',
    category: 'summarize',
  },
  {
    id: 'summarize.risks-and-blockers',
    title: 'Extract risks and blockers',
    prompt:
      'Extract every risk, blocker, dependency, and concern raised in the source into a list with the person who raised it and any proposed mitigation. Include items raised in passing, not only those given their own section.',
    category: 'summarize',
  },
  {
    id: 'summarize.identify-the-ask',
    title: 'Identify the ask',
    prompt:
      'State in one line what the sender or author is asking the reader to do, by when, and what happens if they do not. If the message contains no request, say so explicitly.',
    category: 'summarize',
  },
  {
    id: 'summarize.deadlines',
    title: 'Extract all deadlines',
    prompt:
      'List every deadline, date commitment, and time-bound promise in the source in date order, each with what is due and who committed to it. Convert relative dates ("end of next week") to absolute dates only when the source gives a reference date, and show your anchor.',
    category: 'summarize',
  },
  {
    id: 'summarize.audience-specific',
    title: 'Summary for a named audience',
    prompt:
      'Tailor the summary to the stated reader: include only what that person needs to act or decide, use their vocabulary, and put the item most relevant to their role first. Omit detail that only matters to other roles.',
    category: 'summarize',
  },
  {
    id: 'summarize.questions-answered',
    title: 'Questions the source answers',
    prompt:
      'List the questions the source answers, each followed by the one-sentence answer it gives. Then list any obvious question on the topic that the source does not address.',
    category: 'summarize',
  },
  {
    id: 'summarize.note-gaps',
    title: 'Note what is missing',
    prompt:
      'End the summary with a short list of information a reader would expect but the source does not provide, such as costs, dates, owners, or evidence for a key claim.',
    category: 'summarize',
  },
  {
    id: 'summarize.glossary',
    title: 'Glossary of terms',
    prompt:
      'Append a glossary of every acronym, code name, and specialist term in the source, each defined in one line using only the meaning the source gives or implies. Mark any term whose meaning the source never makes clear.',
    category: 'summarize',
  },
  {
    id: 'summarize.abstract-style',
    title: 'Structured abstract',
    prompt:
      'Summarize as a structured abstract with labeled parts: Purpose, Method or Approach, Findings, and Implications, each one to two sentences. Suitable for reports, studies, and proposals.',
    category: 'summarize',
  },
  {
    id: 'summarize.headline-and-subhead',
    title: 'Headline and subhead',
    prompt:
      'Give the summary a headline of at most ten words that states the outcome, followed by a two-sentence subhead that adds the key number or date and why it matters.',
    category: 'summarize',
  },
  {
    id: 'summarize.date-and-provenance',
    title: 'State date and provenance',
    prompt:
      'Begin the summary by stating what the source is, who produced it, and when, as far as the source reveals. If the date is missing or the content may be out of date, say so before the summary itself.',
    category: 'summarize',
  },
  {
    id: 'summarize.changes-since-last',
    title: 'What changed since last time',
    prompt:
      'When given a series of status reports or updates, summarize only what is new or changed in the latest one relative to the previous: new items, completed items, changed dates, and changed owners. Skip anything that is unchanged.',
    category: 'summarize',
  },
]
