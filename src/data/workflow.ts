import type { Prompt } from '../types'

export const workflow: Prompt[] = [
  {
    id: 'workflow.explore-before-planning',
    title: 'Explore before planning',
    prompt:
      'Before proposing any change, read the code paths involved end to end and identify the existing patterns, entry points, and tests that touch them. Understanding comes before planning; planning comes before code.',
    category: 'workflow',
  },
  {
    id: 'workflow.plan-before-code',
    title: 'Plan before coding',
    prompt:
      'Write a short numbered plan (files to change, order of steps, how each step will be verified) and wait for approval before writing any code.',
    category: 'workflow',
  },
  {
    id: 'workflow.restate-understanding',
    title: 'Restate the task first',
    prompt:
      'Begin by restating the task in your own words in two or three sentences, including what is in and out of scope, so misunderstandings surface before any work is done.',
    category: 'workflow',
  },
  {
    id: 'workflow.skip-plan-for-trivial',
    title: 'Skip planning for trivial fixes',
    prompt:
      'If the change can be described in one sentence and touches one file (typo, log line, rename), do it directly. Reserve planning for multi-file changes, unfamiliar code, or uncertain approaches.',
    category: 'workflow',
  },
  {
    id: 'workflow.define-done-criteria',
    title: 'Define done up front',
    prompt:
      'Before starting, write down what "done" means as a checklist of observable outcomes (tests that pass, commands that succeed, behaviors that can be demonstrated). Work until every item is checked.',
    category: 'workflow',
  },
  {
    id: 'workflow.incremental-steps',
    title: 'Small incremental steps',
    prompt:
      'Break the work into steps that each leave the codebase building and passing tests. Complete and verify one step before starting the next; never have more than one step in a broken state.',
    category: 'workflow',
  },
  {
    id: 'workflow.verify-after-each-change',
    title: 'Check after every change',
    prompt:
      'After each logical change, run the fastest relevant check (targeted tests, typecheck, or lint) before moving on. Do not batch up several changes and hope the final run is green.',
    category: 'workflow',
  },
  {
    id: 'workflow.full-suite-at-end',
    title: 'Full check at the end',
    prompt:
      'Run the complete test suite, typecheck, and linter as the final step, even if you ran targeted checks along the way. The last thing you do is confirm the whole project is still green.',
    category: 'workflow',
  },
  {
    id: 'workflow.tdd-loop',
    title: 'Red-green-refactor loop',
    prompt:
      'Work in a tight test-driven loop: write one failing test, write the minimum code to pass it, then refactor with the test still green. Repeat for each behavior rather than writing all code first and tests afterward.',
    category: 'workflow',
  },
  {
    id: 'workflow.spike-then-implement',
    title: 'Spike, then implement cleanly',
    prompt:
      'When the approach is uncertain, do a quick throwaway spike to learn what works, report the findings, then discard it and implement the real version cleanly from the start.',
    category: 'workflow',
  },
  {
    id: 'workflow.one-concern-per-change',
    title: 'One concern per change',
    prompt:
      'Keep each change set to a single concern. Bug fixes, refactors, formatting, and new features go in separate commits or pull requests so each can be reviewed and reverted independently.',
    category: 'workflow',
  },
  {
    id: 'workflow.refactor-separately',
    title: 'Refactor in a separate step',
    prompt:
      'If a feature requires restructuring existing code, do the refactor first as its own behavior-preserving step with tests green, then add the feature on top in a second step.',
    category: 'workflow',
  },
  {
    id: 'workflow.checkpoint-commits',
    title: 'Checkpoint commits',
    prompt:
      'Make a commit at every stable checkpoint where the build and tests pass, so that any later step can be reverted to a known-good state without losing earlier work.',
    category: 'workflow',
  },
  {
    id: 'workflow.atomic-commits',
    title: 'Atomic, self-contained commits',
    prompt:
      'Each commit must compile and pass tests on its own and represent one complete logical change. Never commit a half-finished step that depends on a later commit to work.',
    category: 'workflow',
  },
  {
    id: 'workflow.check-in-between-steps',
    title: 'Pause between milestones',
    prompt:
      'After completing each major step of the plan, stop and summarize what changed and what comes next, then wait for a go-ahead before continuing to the next step.',
    category: 'workflow',
  },
  {
    id: 'workflow.list-options-before-choosing',
    title: 'Present options first',
    prompt:
      'For any non-trivial design decision, list two or three viable approaches with one-line trade-offs and a recommendation, and let the choice be confirmed before implementing.',
    category: 'workflow',
  },
  {
    id: 'workflow.identify-risks-early',
    title: 'Flag risks before starting',
    prompt:
      'Before implementing, call out the riskiest part of the plan (data migrations, shared interfaces, concurrency, external APIs) and tackle it first so problems appear early rather than at the end.',
    category: 'workflow',
  },
  {
    id: 'workflow.walking-skeleton',
    title: 'Walking skeleton first',
    prompt:
      'Build the thinnest possible end-to-end slice that works (input to output through every layer) before filling in any single layer in depth. Widen it feature by feature once the skeleton runs.',
    category: 'workflow',
  },
  {
    id: 'workflow.interfaces-first',
    title: 'Define interfaces first',
    prompt:
      'Start by writing the types, function signatures, and module boundaries for the change, get those agreed, and only then fill in the implementations.',
    category: 'workflow',
  },
  {
    id: 'workflow.tests-before-refactor',
    title: 'Lock behavior before refactoring',
    prompt:
      'Before restructuring code that lacks tests, write characterization tests that capture its current behavior. Only refactor once those tests are green, and keep them green throughout.',
    category: 'workflow',
  },
  {
    id: 'workflow.migration-expand-contract',
    title: 'Expand-migrate-contract sequencing',
    prompt:
      'For any change to a schema, API, or shared interface, sequence it as expand (add the new alongside the old), migrate (move callers), and contract (remove the old), with the system working at each stage.',
    category: 'workflow',
  },
  {
    id: 'workflow.read-tests-first',
    title: 'Read the tests first',
    prompt:
      'When entering an unfamiliar module, read its tests before its implementation to learn the intended behavior and edge cases, then confirm your understanding against the code.',
    category: 'workflow',
  },
  {
    id: 'workflow.timebox-investigation',
    title: 'Timebox investigations',
    prompt:
      'Limit any exploration or debugging attempt to a fixed budget (for example ten tool calls or fifteen minutes). When the budget runs out, report what was learned and propose the next step instead of continuing blindly.',
    category: 'workflow',
  },
  {
    id: 'workflow.change-approach-after-failures',
    title: 'Change approach after two failures',
    prompt:
      'If the same approach fails twice, stop repeating variations of it. Step back, re-examine the assumptions, and try a fundamentally different approach or ask for input.',
    category: 'workflow',
  },
  {
    id: 'workflow.self-review-diff',
    title: 'Review the diff before handoff',
    prompt:
      "Before declaring a change ready, read the full diff as if reviewing a stranger's pull request: look for leftover debug output, unrelated edits, missing tests, and anything not covered by the original plan.",
    category: 'workflow',
  },
  {
    id: 'workflow.update-plan-on-discovery',
    title: 'Revise the plan explicitly',
    prompt:
      'When implementation reveals that the plan was wrong, stop and update the plan explicitly (what changed and why) before continuing. Do not quietly diverge from an agreed plan.',
    category: 'workflow',
  },
  {
    id: 'workflow.track-progress-checklist',
    title: 'Keep a visible checklist',
    prompt:
      'Maintain a running checklist of planned steps, marking each as done, in progress, or blocked, and show its current state whenever you report progress.',
    category: 'workflow',
  },
  {
    id: 'workflow.clean-up-after-done',
    title: 'Clean up before finishing',
    prompt:
      'As the last step, remove temporary files, debug logging, commented-out code, and scratch scripts you introduced, so only the intended change remains in the working tree.',
    category: 'workflow',
  },
  {
    id: 'workflow.feature-flag-large-changes',
    title: 'Feature-flag large changes',
    prompt:
      'For changes too large to ship in one small step, integrate them incrementally behind a feature flag that defaults off, so each increment can merge to main without exposing unfinished behavior.',
    category: 'workflow',
  },
  {
    id: 'workflow.write-spec-for-big-features',
    title: 'Spec big features first',
    prompt:
      'For any feature that spans several files or sessions, first write a short spec naming the files and interfaces involved, what is out of scope, and an end-to-end verification step. Implement from the spec, not from memory.',
    category: 'workflow',
  },
  {
    id: 'workflow.dependency-order',
    title: 'Work bottom-up by dependency',
    prompt:
      'Order implementation so that each piece is built only after everything it depends on exists and is tested: data layer, then domain logic, then API or UI. Avoid stubbing lower layers to rush the top.',
    category: 'workflow',
  },
]
