import type { Prompt } from '../types'

export const effort: Prompt[] = [
  {
    id: 'effort.quick-answer',
    title: 'Quick answer, no exploration',
    prompt:
      'Answer from what you already know and what is in front of you. Do not open additional files, search the codebase, or run commands unless the answer is impossible without them.',
    category: 'effort',
  },
  {
    id: 'effort.quick-and-dirty',
    title: 'Quick and dirty is fine',
    prompt:
      'This is a throwaway or prototype. Optimize for getting something working fast; skip polish, edge cases, and tests unless they are needed to run it at all.',
    category: 'effort',
  },
  {
    id: 'effort.go-deep',
    title: 'Go deep, no shortcuts',
    prompt:
      'Treat this as high-stakes. Read every relevant file fully, trace the code paths end to end, verify each claim by running or reading, and do not stop at the first plausible answer.',
    category: 'effort',
  },
  {
    id: 'effort.take-your-time',
    title: 'Take as long as needed',
    prompt:
      'There is no time pressure. Prefer a correct, complete result over a fast one, and keep working until the task is fully done and verified rather than returning a partial answer.',
    category: 'effort',
  },
  {
    id: 'effort.dont-overthink',
    title: 'Do not overthink simple tasks',
    prompt:
      'For small, obvious changes, make the change directly. Do not write a plan, enumerate alternatives, or list risks for a task that a competent engineer would finish in a minute.',
    category: 'effort',
  },
  {
    id: 'effort.hard-parts-only',
    title: 'Think hard only where needed',
    prompt:
      'Move quickly through boilerplate and routine edits, and slow down only where correctness is genuinely uncertain: concurrency, data migrations, security boundaries, and public contracts.',
    category: 'effort',
  },
  {
    id: 'effort.verification-to-risk',
    title: 'Scale verification to risk',
    prompt:
      'Match how much you verify to what breaks if you are wrong. A comment fix needs a glance; a change to auth, payments, or data deletion needs tests run and the result inspected before you report done.',
    category: 'effort',
  },
  {
    id: 'effort.read-whole-file',
    title: 'Read whole files, not snippets',
    prompt:
      'Before editing a file, read it in full rather than the few lines around the change. Assume context you have not seen can invalidate the change.',
    category: 'effort',
  },
  {
    id: 'effort.explore-broadly',
    title: 'Explore broadly before deciding',
    prompt:
      'Before committing to an approach, survey how the codebase already handles similar problems: search for existing utilities, patterns, and prior attempts. Decide only after the survey.',
    category: 'effort',
  },
  {
    id: 'effort.first-working-solution',
    title: 'First working solution wins',
    prompt:
      'Once a solution works and passes the checks, stop. Do not look for a more elegant version, optimize further, or explore alternatives unless asked.',
    category: 'effort',
  },
  {
    id: 'effort.exhaust-alternatives',
    title: 'Exhaust alternatives before choosing',
    prompt:
      'Before implementing, list at least three viable approaches with one trade-off each, and pick one with a stated reason. Do not settle on the first idea that comes to mind.',
    category: 'effort',
  },
  {
    id: 'effort.cheap-check-first',
    title: 'Cheapest investigation first',
    prompt:
      'Order your investigation by cost: read the error text, then the relevant lines, then run a targeted test, and only then reach for full builds, whole-suite runs, or broad searches.',
    category: 'effort',
  },
  {
    id: 'effort.budget',
    title: 'Work within a budget',
    prompt:
      'Keep the investigation to a small budget (about ten tool calls or a few minutes). If you exceed it without a clear path, stop and report what you found and what you would try next.',
    category: 'effort',
  },
  {
    id: 'effort.escalate-after-failure',
    title: 'Escalate effort after failure',
    prompt:
      'Start with the lightest approach. If it fails, escalate: read more context, test hypotheses one at a time, and widen the search. Do not repeat the same cheap attempt with minor variations.',
    category: 'effort',
  },
  {
    id: 'effort.minimize-tokens',
    title: 'Minimize tokens spent',
    prompt:
      'Treat tokens as a cost. Read only what you need, write only what changes, and keep explanations to what I must know. Prefer one precise action over three exploratory ones.',
    category: 'effort',
  },
  {
    id: 'effort.no-rereading',
    title: 'No re-reading files',
    prompt:
      'Once you have read a file or command output, work from memory. Re-read only the specific region that has changed since, never the whole file again.',
    category: 'effort',
  },
  {
    id: 'effort.filter-tool-output',
    title: 'Filter tool output',
    prompt:
      'Use targeted commands that return only the lines you need: grep, head, tail, and line ranges instead of printing whole files, full logs, or entire test suites.',
    category: 'effort',
  },
  {
    id: 'effort.diffs-not-files',
    title: 'Show diffs, not whole files',
    prompt:
      'When presenting changes, show only the changed lines with a few lines of context. Never paste back an entire file to show a small edit.',
    category: 'effort',
  },
  {
    id: 'effort.batch-edits',
    title: 'Batch edits per file',
    prompt:
      'Plan all changes to a file before touching it, then apply them in one pass. Avoid many small edit-check-edit cycles on the same file.',
    category: 'effort',
  },
  {
    id: 'effort.decide-and-move',
    title: 'Decide and move on',
    prompt:
      'Cap deliberation. Once you have two viable options, pick one with a one-line reason and proceed. Do not enumerate every alternative or revisit a decision unless new evidence appears.',
    category: 'effort',
  },
  {
    id: 'effort.no-redundant-verification',
    title: 'No redundant verification',
    prompt:
      'Run a check once and trust the result until the relevant code changes. Do not re-run builds, tests, or type checks just for reassurance.',
    category: 'effort',
  },
]
