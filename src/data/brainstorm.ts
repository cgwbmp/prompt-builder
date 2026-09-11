import type { Prompt } from '../types'

export const brainstorm: Prompt[] = [
  {
    id: 'brainstorm.state-problem-first',
    title: 'Restate the problem first',
    prompt:
      'Begin by restating the problem in one sentence, naming who has it and why the current way of handling it falls short. If the problem statement is vague, propose two sharper versions before generating any ideas.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.quantity-first',
    title: 'Quantity first, 20 ideas',
    prompt:
      'Generate at least 20 ideas before evaluating any of them. Number them, keep each to one line, and do not filter for feasibility, cost, or novelty during generation.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.maximize-diversity',
    title: 'Maximize diversity',
    prompt:
      'Make each idea differ from the others along at least one axis: audience, mechanism, cost, timescale, or channel. Drop any idea that is merely a variation of one already listed.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.obvious-to-wild',
    title: 'Order from obvious to wild',
    prompt:
      'Order ideas from the safest and most obvious to the most unconventional, and make sure the last quarter of the list would make a cautious stakeholder uncomfortable.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.push-past-exhaustion',
    title: 'Push past exhaustion',
    prompt:
      'When the list of ideas seems exhausted, push for ten more; the ideas that come after the obvious ones run out are often the most original. Mark where the exhaustion point was.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.scamper',
    title: 'Run SCAMPER',
    prompt:
      'Run the problem or existing solution through SCAMPER: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse. Produce at least one idea per lens and label which lens produced it.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.worst-idea-invert',
    title: 'Worst idea, then invert',
    prompt:
      'Start with the five worst possible ways to solve the problem, then invert each one into a serious idea. Show each bad idea and its inversion side by side.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.flip-constraints',
    title: 'Flip the constraints',
    prompt:
      'List the given constraints (budget, time, team, technology, rules), then generate ideas for a version where each constraint is removed or reversed. Note which of those ideas still survive when the constraint is put back.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.challenge-assumptions',
    title: 'Challenge hidden assumptions',
    prompt:
      'Before generating ideas, list the unstated assumptions baked into the problem statement. Pick the three that would change the answer most if they were false, and generate ideas as if each one were false.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.constraints-as-fuel',
    title: 'Constraints as fuel',
    prompt:
      'Treat any constraints given as creative inputs rather than filters. Generate at least five ideas that would only work because of the constraint, not in spite of it.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.combine-unrelated',
    title: 'Combine two unrelated ideas',
    prompt:
      'Pick two ideas or concepts from unrelated domains and force a combination that uses the core mechanism of both. Do this at least three times and explain in one line what each hybrid borrows from each parent.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.ten-x-one-tenth',
    title: '10x and 1/10 versions',
    prompt:
      'For each promising idea, describe a 10x version (ten times the ambition, scale, or budget) and a 1/10 version (something one person could do this week). Keep both versions on the list as separate ideas.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.other-field-expert',
    title: 'Borrow another field',
    prompt:
      'Reframe the problem the way a specialist from an unrelated field would approach it (a chef, an air-traffic controller, a librarian, a game designer, an ER nurse) and generate two ideas from each viewpoint.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.analogies-elsewhere',
    title: 'Find analogies elsewhere',
    prompt:
      'Find three cases from nature, history, or other industries where a structurally similar problem was solved, and translate each solution back into the current context as a concrete idea.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.question-storming',
    title: 'Question storming',
    prompt:
      'Before proposing solutions, generate 20 questions about the problem instead of answers, covering who, what, when, where, why, and how (starbursting). Then pick the three questions whose answers would most change the direction.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.how-might-we',
    title: 'How might we framing',
    prompt:
      'Rephrase the problem as three to five "How might we ..." questions at different levels of abstraction, from narrow to broad, and generate ideas under each question separately.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.provocation',
    title: 'Deliberate provocation',
    prompt:
      'Use a deliberate provocation: state something absurd about the situation ("customers pay us to leave", "the product has no interface", "it must work without electricity") and follow the logic to see what useful ideas fall out.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.random-stimulus',
    title: 'Random word stimulus',
    prompt:
      'Pick three random, unrelated nouns and force a connection between each one and the problem. Write down the idea each connection sparks, even if it seems far-fetched.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.opposite-of-existing',
    title: 'Do the opposite',
    prompt:
      'List what every competitor or existing solution does on the main dimensions (price, channel, speed, audience, format), then generate ideas that do the exact opposite on each dimension.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.remove-the-core',
    title: 'Remove the core',
    prompt:
      'Ask what remains if the most central feature, step, or ingredient is removed entirely, and generate ideas that solve the problem without it.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.stakeholder-perspectives',
    title: 'Multiple stakeholder viewpoints',
    prompt:
      'Generate ideas from the viewpoint of at least four distinct people (the buyer, the daily user, the skeptic, the person who has to maintain it) and label which perspective produced each idea.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.future-backwards',
    title: 'Work backwards from future',
    prompt:
      'Describe the ideal outcome five years from now in a short paragraph, then work backwards and list the ideas that would have been needed to get there.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.failure-driven-ideas',
    title: 'Ideas from imagined failure',
    prompt:
      'For the strongest idea, imagine it has failed a year from now and list the five most likely reasons. Turn each reason into a new idea or a modification of the original.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.crazy-eights',
    title: 'Crazy eights',
    prompt:
      'Produce eight distinct rough concepts in rapid succession, one or two sentences each, with no polishing and no repeats. Breadth now; depth comes later.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.yes-and',
    title: 'Yes, and',
    prompt:
      'Apply "yes, and" to every idea: instead of pointing out why an idea would not work, add the one change that would make it work.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.build-on-users-idea',
    title: "Build on the user's idea",
    prompt:
      'Treat the idea provided as the seed, not something to replace. Offer variations, extensions, and adjacent ideas that keep its core intent, and if you believe the seed itself is flawed, say so explicitly rather than quietly swapping it out.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.timebox-two-passes',
    title: 'Two timeboxed passes',
    prompt:
      'Work in two separate passes: first produce the raw idea list with no commentary, then expand only the five most promising ideas with two or three sentences each. Do not mix generation and expansion.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.group-and-label',
    title: 'Group and label ideas',
    prompt:
      'After generating ideas, cluster them into three to six groups by underlying theme, give each group a short label, and note which groups are crowded and which are nearly empty.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.name-every-idea',
    title: 'Name every idea',
    prompt:
      'Give every idea a short memorable name of two to four words so it can be referred to in discussion without being re-explained.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.one-line-pitches',
    title: 'One-line pitches',
    prompt:
      'Write every idea as a one-line pitch in the form "For [audience], [idea] so that [outcome]". Cut any idea that cannot be pitched in one line.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.effort-impact-sort',
    title: 'Rough effort-impact sort',
    prompt:
      'After generating, place each idea in a rough 2x2 of effort versus impact and list the low-effort, high-impact quadrant first. Keep the sort intuitive; do not compute scores.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.top-three-with-reasons',
    title: 'Pick top three',
    prompt:
      'End by picking the top three ideas and giving one sentence per idea on why it was chosen and one on its main risk. Do not rank the rest of the list.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.cheapest-test',
    title: 'Cheapest test per idea',
    prompt:
      'For each shortlisted idea, name the cheapest experiment that could disprove it within a week (a landing page, five customer conversations, a manual prototype) and state what result would count as failure.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.six-thinking-hats',
    title: 'Six thinking hats',
    prompt:
      'Examine the strongest idea through the six thinking hats: facts, feelings, risks, benefits, creative alternatives, and process. Write two sentences per hat.',
    category: 'brainstorm',
  },
  {
    id: 'brainstorm.mind-map-outline',
    title: 'Mind map as outline',
    prompt:
      'Present ideas as a mind map in indented outline form: the central problem at the root, main branches for themes, then sub-ideas. Every branch should have at least two children.',
    category: 'brainstorm',
  },
]
