import type { Prompt } from '../types'

export const refactor: Prompt[] = [
  {
    id: 'refactor.preserve-behavior',
    title: 'Preserve observable behavior',
    prompt:
      'A refactoring changes structure, never observable behavior. If a change would alter outputs, error handling, ordering, or side effects for any input, it is not a refactoring: call it out and handle it as a separate change.',
    category: 'refactor',
  },
  {
    id: 'refactor.tests-green-before-and-after',
    title: 'Tests green before and after',
    prompt:
      'Run the relevant test suite before starting and after every refactoring step. If tests are already failing before you begin, stop and report instead of refactoring on top of a red build.',
    category: 'refactor',
  },
  {
    id: 'refactor.characterization-tests-first',
    title: 'Characterization tests first',
    prompt:
      'Before restructuring code that lacks tests, write characterization tests that pin down what it currently does, including quirks and apparent bugs. Capture actual outputs, not what the code should do, then refactor under that safety net.',
    category: 'refactor',
  },
  {
    id: 'refactor.golden-master',
    title: 'Golden master for complex output',
    prompt:
      'For code that produces complex output (reports, rendered documents, serialized data), record the output for a broad set of inputs before refactoring and diff the new output against that golden master afterwards.',
    category: 'refactor',
  },
  {
    id: 'refactor.one-refactoring-per-commit',
    title: 'One refactoring per commit',
    prompt:
      'Make one named refactoring per commit, for example Extract Function parseHeader or Rename Variable tmp to retryCount. Never combine two refactorings, and never combine a refactoring with a bug fix or feature in the same commit.',
    category: 'refactor',
  },
  {
    id: 'refactor.small-steps',
    title: 'Small steps, always compiling',
    prompt:
      'Work in small transformations that leave the code compiling and passing at every point. Prefer ten tiny safe steps over one large rewrite, and stop to run tests between them.',
    category: 'refactor',
  },
  {
    id: 'refactor.two-hats',
    title: 'One hat at a time',
    prompt:
      'Either you are refactoring (structure changes, tests untouched) or you are adding behavior (tests change first, then code). If you discover a bug or missing feature mid-refactoring, write it down, finish the refactoring, and address it afterwards.',
    category: 'refactor',
  },
  {
    id: 'refactor.preparatory-refactoring',
    title: 'Preparatory refactoring only',
    prompt:
      'Refactor along the path of the change you need to make: first make the change easy, then make the easy change. Leave unrelated modules alone even if they could be improved, and list them as follow-ups instead.',
    category: 'refactor',
  },
  {
    id: 'refactor.catalog-vocabulary',
    title: 'Use catalog vocabulary',
    prompt:
      "Describe each refactoring using the names from Fowler's catalog (Extract Function, Inline Variable, Move Field, Split Phase, Replace Conditional with Polymorphism) so the intent of every step is recognizable at a glance.",
    category: 'refactor',
  },
  {
    id: 'refactor.extract-function',
    title: 'Extract function for intent',
    prompt:
      'Extract a function whenever a block of code needs a comment to explain what it does. Name the function after its intent rather than its mechanics, so the call site reads as a summary of the algorithm.',
    category: 'refactor',
  },
  {
    id: 'refactor.inline-needless-indirection',
    title: 'Inline needless indirection',
    prompt:
      'Inline functions, variables, and classes that add a hop without adding meaning: a wrapper that only forwards a call, a variable used once whose name just restates the expression, a class with a single one-line method. Fewer hops make code easier to follow.',
    category: 'refactor',
  },
  {
    id: 'refactor.remove-dead-code',
    title: 'Delete dead code',
    prompt:
      'Delete unreachable branches, unused parameters and imports, commented-out code, and feature flags that are permanently on or off. Version control keeps the history, so do not keep dead code around just in case.',
    category: 'refactor',
  },
  {
    id: 'refactor.verify-dead-before-deleting',
    title: 'Verify dead before deleting',
    prompt:
      'Before deleting apparently unused code, confirm it is dead: search for dynamic references (reflection, string-based lookups, dependency injection registrations, templates, config files) and for exported symbols consumed by other packages.',
    category: 'refactor',
  },
  {
    id: 'refactor.rename-with-tooling',
    title: 'Rename with tooling',
    prompt:
      'When renaming a symbol, use the IDE or language server rename so every reference, import, and test updates atomically, then grep for string references the tool cannot see (log messages, config keys, serialized field names, docs).',
    category: 'refactor',
  },
  {
    id: 'refactor.pure-move-commits',
    title: 'Pure move commits',
    prompt:
      'When moving code between files or modules, make the move a pure move with no edits to the moved lines in the same commit, so the diff is a clean cut and paste that reviewers can verify at a glance.',
    category: 'refactor',
  },
  {
    id: 'refactor.guard-clauses',
    title: 'Guard clauses over nesting',
    prompt:
      'Replace nested conditionals with guard clauses: handle edge cases and early returns at the top of the function so the main path reads unindented and top to bottom.',
    category: 'refactor',
  },
  {
    id: 'refactor.decompose-conditional',
    title: 'Decompose complex conditionals',
    prompt:
      'Decompose complex conditionals by extracting the condition into a well-named predicate function and each branch into its own function, so the if statement reads like a sentence.',
    category: 'refactor',
  },
  {
    id: 'refactor.polymorphism-only-when-warranted',
    title: 'Polymorphism only when warranted',
    prompt:
      'Replace a conditional with polymorphism only when the same type switch appears in several places or new variants are expected. A single switch over a small closed set is clearer left as a switch.',
    category: 'refactor',
  },
  {
    id: 'refactor.remove-flag-argument',
    title: 'Remove flag arguments',
    prompt:
      'Remove boolean flag arguments that switch a function between two behaviors; provide two explicitly named functions instead, and share the common part through a private helper.',
    category: 'refactor',
  },
  {
    id: 'refactor.introduce-parameter-object',
    title: 'Introduce parameter object',
    prompt:
      'When several functions pass the same group of parameters together, introduce a parameter object or typed record for them, then move behavior that operates on those fields onto it.',
    category: 'refactor',
  },
  {
    id: 'refactor.split-phase',
    title: 'Split phase',
    prompt:
      'When one function both parses input and computes a result, or both computes and formats, split it into phases with an explicit intermediate data structure between them so each phase can be tested and changed independently.',
    category: 'refactor',
  },
  {
    id: 'refactor.separate-query-from-modifier',
    title: 'Separate query from modifier',
    prompt:
      'Separate functions that return a value from functions that cause side effects. A function that both mutates state and returns data should become two: a query with no side effects and a command that returns nothing.',
    category: 'refactor',
  },
  {
    id: 'refactor.replace-magic-literals',
    title: 'Replace magic literals',
    prompt:
      'Replace magic numbers and strings with named constants or enums that state their meaning, and use the constant everywhere the literal appears rather than in one place only.',
    category: 'refactor',
  },
  {
    id: 'refactor.encapsulate-shared-data',
    title: 'Encapsulate shared data',
    prompt:
      'Before restructuring widely shared mutable data, encapsulate it behind accessor functions so all reads and writes go through one place that you can then change safely.',
    category: 'refactor',
  },
  {
    id: 'refactor.loop-to-pipeline',
    title: 'Loops to pipelines when clearer',
    prompt:
      "Replace loops that filter, map, and accumulate with the language's collection pipeline (map/filter/reduce, streams, comprehensions) when the result reads more clearly, and keep an explicit loop when it does not.",
    category: 'refactor',
  },
  {
    id: 'refactor.strangler-fig',
    title: 'Strangler fig for legacy',
    prompt:
      'Migrate legacy code with the strangler fig pattern: route calls through a facade, build the new implementation behind it, switch callers over incrementally, and delete the old path only once nothing uses it. Do not attempt a big-bang rewrite.',
    category: 'refactor',
  },
  {
    id: 'refactor.find-seams',
    title: 'Find seams to break dependencies',
    prompt:
      'To get untested legacy code under test, find or create a seam: a place where behavior can be substituted (constructor injection, an interface, a passed-in function, an overridable method) without editing the logic you want to test.',
    category: 'refactor',
  },
  {
    id: 'refactor.sprout-method',
    title: 'Sprout instead of editing',
    prompt:
      'When logic must be added to a large untested function, do not edit it in place. Write the new logic as a separate, fully tested function or class (sprout method or sprout class) and call it from the legacy code with a one-line change.',
    category: 'refactor',
  },
  {
    id: 'refactor.keep-public-api-stable',
    title: 'Keep public API stable',
    prompt:
      'Keep public interfaces, exported names, and serialized formats unchanged during refactoring. If an interface must change, add the new form, mark the old one deprecated with a pointer, migrate callers, and remove the old form last.',
    category: 'refactor',
  },
  {
    id: 'refactor.no-speculative-generality',
    title: 'No speculative generality',
    prompt:
      'Do not introduce abstractions, interfaces, or configuration for hypothetical future needs while refactoring. Remove existing speculative generality when you find it: unused parameters, abstract classes with one implementation, hooks nobody calls.',
    category: 'refactor',
  },
  {
    id: 'refactor.document-migration-boundary',
    title: 'Document incomplete migrations',
    prompt:
      'If a pattern migration cannot be finished in one series of changes, document the boundary in code (which modules use the old approach, which use the new, and where new code should go) so it does not silently become two competing conventions.',
    category: 'refactor',
  },
  {
    id: 'refactor.compiler-as-safety-net',
    title: 'Let the compiler guide edits',
    prompt:
      'Use the type checker as a safety net: when changing a signature or type, let the resulting compile errors lead you to every affected call site instead of grepping. In dynamically typed code, add types or tests first.',
    category: 'refactor',
  },
  {
    id: 'refactor.check-complexity-unchanged',
    title: 'Check complexity did not regress',
    prompt:
      'After refactoring a hot path, confirm the algorithmic complexity is unchanged; a structurally equivalent refactoring can still turn one pass into two or add a lookup inside a loop. Mention the check in your summary.',
    category: 'refactor',
  },
  {
    id: 'refactor.revert-not-debug-forward',
    title: 'Revert, do not debug forward',
    prompt:
      'If a refactoring step breaks tests and the cause is not obvious within a few minutes, revert the step and retry with a smaller one instead of debugging forward from a broken state.',
    category: 'refactor',
  },
  {
    id: 'refactor.explain-equivalence',
    title: 'Explain why behavior is equal',
    prompt:
      'For each refactoring, state what changed structurally and why behavior is unchanged (same inputs, outputs, exceptions, and side effects), pointing to the tests that demonstrate it.',
    category: 'refactor',
  },
]
