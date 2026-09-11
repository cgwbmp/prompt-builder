import type { Prompt } from '../types'

export const reasoning: Prompt[] = [
  {
    id: 'reasoning.step-by-step',
    title: 'Think step by step',
    prompt:
      'Think through the problem step by step before giving the final answer. Show the key reasoning steps briefly.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.alternatives',
    title: 'Consider alternatives',
    prompt:
      'Before recommending a solution, consider at least two alternative approaches and explain why the chosen one is better.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.self-check',
    title: 'Self-check the answer',
    prompt:
      'After drafting the answer, re-read it critically, check for errors and missing cases, and correct them before responding.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.first-principles',
    title: 'First principles',
    prompt:
      'Reason from first principles. Identify the fundamental facts and constraints, then build the answer up from them rather than from analogy or convention.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.state-assumptions',
    title: 'State assumptions',
    prompt:
      'State every assumption you are making before giving the answer, and flag which ones would change the answer if they turned out to be wrong.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.list-unknowns',
    title: 'List the unknowns',
    prompt:
      'List what you do not know that would affect the answer, and say how each unknown could be resolved: a file to read, a command to run, or a question to ask.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.confidence',
    title: 'Estimate confidence',
    prompt:
      'Give a confidence level (high, medium, or low) for the answer and one sentence on what drives that confidence.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.what-would-change',
    title: 'What would change the answer',
    prompt:
      'Identify what evidence or condition would change your recommendation, so the reader knows when to revisit it.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.edge-cases',
    title: 'Enumerate edge cases',
    prompt:
      'Before finalizing, enumerate edge cases: empty input, null, zero, negative, very large, duplicate, concurrent access, unicode, and timeouts. Say which are handled and which are not.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.verify-by-running',
    title: 'Verify by running',
    prompt:
      'Verify claims by running the code, tests, or commands where possible instead of reasoning about what they would do. Report the actual output.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.lookup-apis',
    title: 'Look up APIs, never guess',
    prompt:
      'Do not guess function signatures, parameter names, or library behavior. Look them up in the installed source, type definitions, or official documentation, and say where you checked.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.read-before-claiming',
    title: 'Read before claiming',
    prompt:
      'Never make claims about code you have not read. If a file, function, or config is referenced, open it before describing its behavior.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.facts-vs-inferences',
    title: 'Facts vs inferences',
    prompt:
      'Separate verified facts from inferences. Mark inferences with words like "likely" or "I infer", and never present an inference as a fact.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.cite-evidence',
    title: 'Evidence for each conclusion',
    prompt:
      'Back each conclusion with the specific evidence that supports it: the file and line, the test output, or the documentation section. No evidence, no conclusion.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.work-backwards',
    title: 'Work backwards from the goal',
    prompt:
      'Work backwards from the desired end state: define what a correct result looks like, then derive the steps needed to reach it.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.decision-criteria-first',
    title: 'Criteria before options',
    prompt:
      'State the decision criteria before evaluating any option, so the criteria are not chosen to fit a preferred answer.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.steelman-alternative',
    title: 'Steelman the alternative',
    prompt:
      'Before rejecting an alternative approach, state the strongest case for it. Reject it only with a concrete reason, not a preference.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.explicit-tradeoffs',
    title: 'Name the trade-off',
    prompt: 'For every recommendation, name what it costs: the trade-off being accepted and who bears it.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.counterexample',
    title: 'Hunt for a counterexample',
    prompt:
      'Try to construct a counterexample that breaks your proposed solution before presenting it. If you find one, fix the solution; if not, say what you tried.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.cheapest-check-first',
    title: 'Cheapest check first',
    prompt:
      'Order verification by cost: run the quickest check that could falsify your answer before the expensive ones, and state the order you used.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.question-the-premise',
    title: 'Question the premise',
    prompt:
      'If the request rests on a false or questionable premise, say so before answering, then answer the corrected question.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.second-order-effects',
    title: 'Second-order effects',
    prompt:
      'Consider the second-order effects of a change: callers, downstream consumers, persisted data, concurrency, and deploy order. List any that could break.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.invariants',
    title: 'Check invariants',
    prompt: 'Identify the invariants the code relies on and check explicitly that your change preserves each one.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.check-the-math',
    title: 'Check the arithmetic',
    prompt:
      'Double-check arithmetic, units, off-by-one boundaries, and time zone conversions explicitly. Write out the calculation rather than stating the result.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.estimates-with-ranges',
    title: 'Estimates as ranges',
    prompt:
      'For any estimate of performance, effort, or size, show the inputs and the calculation, and give a range rather than a single number.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.sanity-check-output',
    title: 'Sanity check results',
    prompt:
      'Sanity check results against expectations: rough magnitude, sign, count, and type. If a result looks surprising, investigate before reporting it.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.scope-of-validity',
    title: 'Scope of validity',
    prompt:
      'State the scope in which the answer holds: language version, framework version, operating system, scale, and any configuration it assumes.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.stale-knowledge',
    title: 'Check for stale knowledge',
    prompt:
      'Check whether the information you rely on may be outdated: library versions, deprecated APIs, changed defaults. Say when your knowledge might be stale and verify against the installed version.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.do-not-rationalize',
    title: 'Update on contrary evidence',
    prompt:
      'If tests fail or evidence contradicts your answer, update the answer. Do not explain away the evidence or special-case a test to make it pass.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.simplest-explanation',
    title: 'Simplest consistent explanation',
    prompt:
      'Prefer the simplest explanation consistent with all the evidence, and list any evidence that a simpler explanation fails to account for.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.reversibility',
    title: 'Weigh reversibility',
    prompt:
      'When choosing between options, weigh how easily each can be undone. Under high uncertainty prefer the more reversible option, and say so.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.premortem',
    title: 'Run a premortem',
    prompt:
      'Before finalizing a plan or change, imagine it has failed in production and list the three most likely reasons. Address each or mark it as an accepted risk.',
    category: 'reasoning',
  },
  {
    id: 'reasoning.depth-to-stakes',
    title: 'Match depth to stakes',
    prompt:
      'Match reasoning depth to the stakes: for trivial, easily reverted changes answer directly; for irreversible, data-affecting, or security-relevant changes reason through it fully before acting.',
    category: 'reasoning',
  },
]
