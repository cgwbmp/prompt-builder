import type { Prompt } from '../types'

export const review: Prompt[] = [
  {
    id: 'review.bugs-first',
    title: 'Bugs before style',
    prompt:
      'Review the code for correctness bugs first, then security issues, then performance. Only mention style if it hides a real problem.',
    category: 'review',
  },
  {
    id: 'review.severity',
    title: 'Rank by severity',
    prompt:
      'List findings ranked by severity. For each: location, what is wrong, a concrete failure scenario, and a suggested fix.',
    category: 'review',
  },
  {
    id: 'review.root-cause',
    title: 'Find the root cause',
    prompt:
      'Do not stop at the symptom. Trace the bug to its root cause and explain the chain of events that leads to the failure.',
    category: 'review',
  },
  {
    id: 'review.security',
    title: 'Security focus',
    prompt:
      'Review with a security mindset: input validation, injection, auth and authorization, secrets handling, and unsafe defaults.',
    category: 'review',
  },
  {
    id: 'review.verdict-first',
    title: 'Verdict at the top',
    prompt:
      'Start the review with a one-line verdict (approve, approve with nits, request changes) and a two-sentence summary of the most important finding, before the detailed list.',
    category: 'review',
  },
  {
    id: 'review.blocking-vs-nit',
    title: 'Blocking versus non-blocking',
    prompt:
      'Label every comment as blocking or non-blocking. Blocking means the change should not merge until it is addressed; prefix minor preferences with `nit:` and optional ideas with `optional:` so the author can prioritize.',
    category: 'review',
  },
  {
    id: 'review.conventional-comments',
    title: 'Conventional Comments format',
    prompt:
      'Write each comment in Conventional Comments form: `<label> (decoration): <subject>` followed by discussion, using labels such as `issue`, `suggestion`, `question`, `nitpick`, `todo`, `praise`, and `thought`, with `(blocking)` or `(non-blocking)` decorations.',
    category: 'review',
  },
  {
    id: 'review.cite-file-line',
    title: 'Cite exact locations',
    prompt:
      'Reference every finding by `path/to/file.ext:line` and quote the offending line or expression, so the author can jump straight to it without searching.',
    category: 'review',
  },
  {
    id: 'review.ask-when-unsure',
    title: 'Ask rather than assert',
    prompt:
      'When you are not certain something is wrong, ask a specific question (what happens if `items` is empty here?) instead of asserting a bug. Reserve declarative findings for issues you have confirmed by reading the surrounding code.',
    category: 'review',
  },
  {
    id: 'review.explain-why',
    title: 'Explain the reasoning',
    prompt:
      'For every requested change, explain why it matters (what breaks, who is affected, what it costs later) and not only what to change. A reviewer comment without a reason is a style preference.',
    category: 'review',
  },
  {
    id: 'review.every-line',
    title: 'Read every line',
    prompt:
      'Read every changed line, including tests, config, migrations, generated files, and lockfile changes; do not skim large diffs. If a section is incomprehensible, say so and ask for clarification or a simplification.',
    category: 'review',
  },
  {
    id: 'review.surrounding-context',
    title: 'Check the surrounding context',
    prompt:
      'Read the callers and callees of changed functions, not just the diff hunks. Check that every call site still receives what it expects and that changed behavior does not break an existing contract elsewhere.',
    category: 'review',
  },
  {
    id: 'review.does-it-solve-the-problem',
    title: 'Solves the stated problem',
    prompt:
      'Compare the change against the linked issue or PR description and confirm it actually does what it claims, fully and nothing else. Flag scope creep and unrelated refactors bundled into the same change.',
    category: 'review',
  },
  {
    id: 'review.tests-present-and-meaningful',
    title: 'Check the tests',
    prompt:
      'Verify tests exist for the new behavior and for the fixed bug, that they would fail without the change, and that they assert on outcomes rather than mirroring the implementation. Call out untested branches by name.',
    category: 'review',
  },
  {
    id: 'review.error-paths',
    title: 'Trace the error paths',
    prompt:
      'For each new call that can fail (I/O, network, parsing, database), check what happens on failure: is the error handled, propagated with context, or swallowed? Flag empty catch blocks, ignored return values, and errors logged but not surfaced.',
    category: 'review',
  },
  {
    id: 'review.null-and-empty',
    title: 'Null and empty handling',
    prompt:
      'Look for values that can be null, undefined, empty, or missing at each new access: optional fields, array indexing, map lookups, first/last element, and parsed input. Name the field and the path through which it can be absent.',
    category: 'review',
  },
  {
    id: 'review.boundary-conditions',
    title: 'Boundary conditions',
    prompt:
      'Check off-by-one errors, inclusive versus exclusive ranges, zero and negative values, integer overflow, maximum sizes, empty collections, and single-element collections in every loop, slice, and comparison.',
    category: 'review',
  },
  {
    id: 'review.concurrency',
    title: 'Concurrency and races',
    prompt:
      'Look for check-then-act sequences, shared mutable state without synchronization, missing awaits, non-atomic read-modify-write on shared stores, and resources not released on every path. Describe the interleaving that causes the bug.',
    category: 'review',
  },
  {
    id: 'review.resource-cleanup',
    title: 'Resource lifecycle',
    prompt:
      'Verify that every opened file, connection, lock, subscription, timer, or listener is closed or released on all paths including exceptions and early returns, and that async operations are cancelled or awaited on teardown.',
    category: 'review',
  },
  {
    id: 'review.backward-compatibility',
    title: 'Breaking change check',
    prompt:
      'Identify any change to a public API, database schema, serialized format, config key, event shape, or CLI flag and state whether it is backward compatible. Flag breaking changes that lack a migration path or a version bump.',
    category: 'review',
  },
  {
    id: 'review.over-engineering',
    title: 'Flag over-engineering',
    prompt:
      'Call out abstractions, configuration, generality, or extension points added for hypothetical future needs rather than the current requirement. Ask for the simpler version that solves only the problem at hand.',
    category: 'review',
  },
  {
    id: 'review.complexity-readability',
    title: 'Readable by the next engineer',
    prompt:
      'Flag code that a competent engineer unfamiliar with the change could not understand quickly: deeply nested logic, clever one-liners, unclear names, and comments that explain what instead of why. Ask for simpler code rather than more explanation.',
    category: 'review',
  },
  {
    id: 'review.dependency-changes',
    title: 'Scrutinize new dependencies',
    prompt:
      'For any added or upgraded dependency, check that it is necessary, actively maintained, appropriately licensed, pinned in the lockfile, and not replaceable by a few lines of code or something already in the project.',
    category: 'review',
  },
  {
    id: 'review.performance-hotspots',
    title: 'Spot obvious performance traps',
    prompt:
      'Flag queries or network calls inside loops, unbounded result sets, repeated computation of the same value, accidental quadratic behavior, and large payloads loaded fully into memory. Only raise performance concerns you can tie to a realistic input size.',
    category: 'review',
  },
  {
    id: 'review.logging-and-secrets',
    title: 'Logging and sensitive data',
    prompt:
      'Check that new log statements and error messages do not include passwords, tokens, personal data, or full request bodies, and that failures on important paths are logged with enough context to diagnose.',
    category: 'review',
  },
  {
    id: 'review.style-defer-to-guide',
    title: 'Style: defer to the guide',
    prompt:
      'Raise style points only when they contradict the project style guide or linter configuration. Do not request changes based on personal preference, and do not rewrite working code into your own idiom.',
    category: 'review',
  },
  {
    id: 'review.respect-author-approach',
    title: "Respect the author's approach",
    prompt:
      'Review the change the author made, not the change you would have made. Suggest a different approach only when the current one has a concrete defect, and present it as an alternative with trade-offs rather than a rewrite.',
    category: 'review',
  },
  {
    id: 'review.comment-code-not-person',
    title: 'Critique code, not author',
    prompt:
      'Phrase every comment about the code (`this branch returns before releasing the lock`) rather than the author (`you forgot to release the lock`). Be direct about problems and courteous in wording.',
    category: 'review',
  },
  {
    id: 'review.praise-specific',
    title: 'Specific praise only',
    prompt:
      'Point out at most one or two things done well, and be specific about why (`the retry wrapper makes the failure mode explicit`). Skip generic praise; it adds noise and dilutes real findings.',
    category: 'review',
  },
  {
    id: 'review.suggest-not-fix',
    title: 'Suggest, do not rewrite',
    prompt:
      'Describe the required change and, when helpful, show a short snippet of the fix, but do not produce a full rewritten version of the file or apply the changes. The author owns the fix.',
    category: 'review',
  },
  {
    id: 'review.docs-and-comments-updated',
    title: 'Docs match the change',
    prompt:
      'Check that READMEs, API docs, inline comments, and configuration examples affected by the change were updated, and flag comments that now describe old behavior.',
    category: 'review',
  },
  {
    id: 'review.no-findings-is-valid',
    title: 'Say when it is clean',
    prompt:
      'If you find no real problems after a thorough read, say so plainly and approve; do not manufacture nits to appear diligent.',
    category: 'review',
  },
  {
    id: 'review.risk-summary',
    title: 'State the merge risk',
    prompt:
      'End the review with a short risk assessment: what could go wrong in production if this merges as is, how it would be noticed, and how it could be rolled back.',
    category: 'review',
  },
]
