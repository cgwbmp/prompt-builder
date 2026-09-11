import type { Prompt } from '../types'

export const learning: Prompt[] = [
  {
    id: 'learning.explain-like-ten',
    title: 'Explain to a 10-year-old',
    prompt:
      'Explain this the way you would to a curious 10-year-old: short sentences, no jargon, one everyday comparison per idea, and make sure each step follows obviously from the one before it.',
    category: 'learning',
  },
  {
    id: 'learning.assume-beginner',
    title: 'Assume a complete beginner',
    prompt:
      'Assume I have no background in this subject. Start from what an intelligent adult already knows from daily life and build up from there; never assume I know a term just because it is common in the field.',
    category: 'learning',
  },
  {
    id: 'learning.skip-the-basics',
    title: 'Skip the basics',
    prompt:
      'I already know the fundamentals, so do not re-explain them. Go straight to the subtle points, edge cases, trade-offs, and the things practitioners commonly get wrong.',
    category: 'learning',
  },
  {
    id: 'learning.diagnose-level-first',
    title: 'Diagnose my level first',
    prompt:
      'Before teaching, ask me two or three quick diagnostic questions to gauge what I already know, then pitch the explanation to that level and adjust as my answers reveal more.',
    category: 'learning',
  },
  {
    id: 'learning.define-terms-first-use',
    title: 'Define terms on first use',
    prompt:
      'Define every technical term in plain words the first time you use it, in the same sentence or in parentheses, and then keep using that exact term instead of switching to synonyms.',
    category: 'learning',
  },
  {
    id: 'learning.example-before-principle',
    title: 'Example before principle',
    prompt:
      'Lead with one concrete example, then draw the general principle out of it. Never state an abstract rule before I have seen a specific instance of it.',
    category: 'learning',
  },
  {
    id: 'learning.everyday-analogies',
    title: 'Everyday analogies',
    prompt:
      'Anchor each new idea in an analogy from everyday life (kitchens, traffic, sports, money, weather), then say explicitly where the analogy breaks down so it does not mislead me later.',
    category: 'learning',
  },
  {
    id: 'learning.compare-to-known',
    title: 'Map onto what I know',
    prompt:
      'Ask what related topic I already understand well, then teach the new topic by mapping it onto that one: what is the same, what is different, and what has no counterpart at all.',
    category: 'learning',
  },
  {
    id: 'learning.feynman-restate',
    title: 'Feynman technique',
    prompt:
      'Use the Feynman technique: after explaining, ask me to restate the idea in my own words, then point out precisely which part of my restatement is fuzzy or wrong and re-explain only that part.',
    category: 'learning',
  },
  {
    id: 'learning.socratic-questioning',
    title: 'Socratic questioning',
    prompt:
      'Teach by Socratic questioning instead of lecturing. Ask one question at a time that leads me toward the answer, wait for my reply, and only give the answer directly if I am still stuck after two attempts.',
    category: 'learning',
  },
  {
    id: 'learning.check-understanding',
    title: 'Check understanding as you go',
    prompt:
      'Pause after every major idea and ask me one quick question to confirm I have understood before moving on. Do not continue to the next idea until I have answered.',
    category: 'learning',
  },
  {
    id: 'learning.one-idea-per-message',
    title: 'One idea at a time',
    prompt:
      "Teach one idea per message and keep each explanation short enough to fit on a phone screen. Then wait for me to say 'next' or ask a question before continuing.",
    category: 'learning',
  },
  {
    id: 'learning.progressive-depth',
    title: 'Three layers of depth',
    prompt:
      'Explain in three labeled layers: first a two-sentence version anyone could follow, then a paragraph for an interested layperson, then a detailed version using the real terminology and nuances.',
    category: 'learning',
  },
  {
    id: 'learning.first-principles',
    title: 'Derive from first principles',
    prompt:
      'Derive the topic from first principles rather than stating facts: start from a few basic observations or axioms and show how each conclusion follows, so I could reconstruct it myself.',
    category: 'learning',
  },
  {
    id: 'learning.why-it-matters',
    title: 'Motivate before explaining',
    prompt:
      'Open with why this topic matters and one real situation where knowing it changes a decision or outcome. Motivate first, explain second.',
    category: 'learning',
  },
  {
    id: 'learning.learning-objectives',
    title: 'State learning objectives',
    prompt:
      "Begin with three to five learning objectives phrased as 'By the end you will be able to ...' statements, and close by checking each one off with a sentence on how it was covered.",
    category: 'learning',
  },
  {
    id: 'learning.prerequisites',
    title: 'List prerequisites',
    prompt:
      'Before teaching, list the prerequisites I must already understand, each with a one-line self-test question so I can confirm I have it. Offer to teach any I am missing first.',
    category: 'learning',
  },
  {
    id: 'learning.common-misconceptions',
    title: 'Address misconceptions',
    prompt:
      'Call out the most common misconceptions about this topic explicitly: state the wrong belief, why people hold it, and the correct view. Do this early, before I have a chance to form the misconception myself.',
    category: 'learning',
  },
  {
    id: 'learning.worked-example',
    title: 'Full worked example',
    prompt:
      'Walk through one complete worked example step by step, saying at each step what you are doing and why, before asking me to try a similar problem on my own.',
    category: 'learning',
  },
  {
    id: 'learning.practice-exercises',
    title: 'Exercises with solutions',
    prompt:
      'After each concept, give two or three practice exercises of increasing difficulty. Put the fully worked solutions in a separate section after all the exercises so I can attempt them before checking.',
    category: 'learning',
  },
  {
    id: 'learning.quiz-hidden-answers',
    title: 'Quiz with hidden answers',
    prompt:
      'End with a five-question quiz that mixes recall and application. Put the answer key in a separate section at the very end after a clear divider, so I can attempt the questions without seeing the answers.',
    category: 'learning',
  },
  {
    id: 'learning.error-analysis',
    title: 'Analyze my wrong answers',
    prompt:
      'When I get something wrong, do not just give the correct answer. Ask me to explain my reasoning, locate the exact step where it went astray, and show what correct reasoning looks like at that step.',
    category: 'learning',
  },
  {
    id: 'learning.flashcards',
    title: 'Spaced-repetition flashcards',
    prompt:
      'Turn the material into flashcards for spaced repetition: one atomic fact per card, a question on the front and a short answer on the back, no card that can be answered without understanding. Output them as `Q: ... / A: ...` pairs ready to import into Anki.',
    category: 'learning',
  },
  {
    id: 'learning.retrieval-practice',
    title: 'Interleaved retrieval practice',
    prompt:
      'Interleave retrieval practice: every few minutes of new material, ask me to recall something from earlier in the session without looking it up, then correct me. Mix topics rather than presenting them in isolated blocks.',
    category: 'learning',
  },
  {
    id: 'learning.review-schedule',
    title: 'Spaced review schedule',
    prompt:
      'After the lesson, give me a review schedule: what to test myself on tomorrow, in three days, in a week, and in a month, with the specific questions to use at each review.',
    category: 'learning',
  },
  {
    id: 'learning.study-plan',
    title: 'Week-by-week study plan',
    prompt:
      'Build a week-by-week study plan with a daily time budget, what to read or practice each day, and a checkpoint at the end of every week that tells me whether to proceed or review. If I have not said how much time I have, assume four weeks at one hour a day.',
    category: 'learning',
  },
  {
    id: 'learning.mnemonic',
    title: 'Give me a mnemonic',
    prompt:
      'For anything that must be memorized (lists, sequences, formulas, names), provide a mnemonic, acronym, or short memory story, and explain how the mnemonic maps onto the content so it sticks.',
    category: 'learning',
  },
  {
    id: 'learning.cheat-sheet',
    title: 'Summary cheat sheet',
    prompt:
      'Finish with a one-page cheat sheet that condenses the essentials: key terms with one-line definitions, the core rules or formulas, and the two or three things most likely to trip me up.',
    category: 'learning',
  },
  {
    id: 'learning.recap-before-continuing',
    title: 'Recap before continuing',
    prompt:
      'Start each new section with a two-line recap of what was covered so far, and end it with a three-bullet summary of what was just learned, so the thread never gets lost.',
    category: 'learning',
  },
  {
    id: 'learning.blooms-taxonomy',
    title: "Climb Bloom's taxonomy",
    prompt:
      "Structure the lesson up Bloom's taxonomy: first recall (define it), then understand (explain it in your own words), apply (solve a problem with it), analyze (compare it with alternatives), evaluate (critique it), and finally create (design something new using it).",
    category: 'learning',
  },
  {
    id: 'learning.multiple-representations',
    title: 'Two representations per idea',
    prompt:
      'Present each key idea in at least two forms: words plus a picture, a formula plus a numerical example, or a rule plus a counterexample. If one representation does not land, the other usually will.',
    category: 'learning',
  },
  {
    id: 'learning.diagram-relationships',
    title: 'Diagram spatial relationships',
    prompt:
      'Whenever a relationship is spatial, sequential, or hierarchical, draw it as a simple ASCII diagram or Mermaid chart instead of describing it in prose.',
    category: 'learning',
  },
  {
    id: 'learning.teach-through-story',
    title: 'Teach through a story',
    prompt:
      'Teach through a story: introduce a character with a concrete problem, let the concept emerge as the solution, and return to the same story to illustrate each further subtlety.',
    category: 'learning',
  },
  {
    id: 'learning.tailor-to-goal',
    title: 'Tailor to my goal',
    prompt:
      'Ask what I want to do with this knowledge, then tailor every example and exercise to that goal and skip material that does not serve it.',
    category: 'learning',
  },
  {
    id: 'learning.exam-preparation',
    title: 'Prepare me for an exam',
    prompt:
      'Prepare me for an exam: prioritize what is most frequently tested, show the standard form of each question type, and give the model answer structure examiners expect for each.',
    category: 'learning',
  },
]
