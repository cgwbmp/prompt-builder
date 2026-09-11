import type { Prompt } from '../types'

export const codestyle: Prompt[] = [
  {
    id: 'codestyle.intention-revealing-names',
    title: 'Intention-revealing names',
    prompt:
      'Name every variable, function, and type for what it means in the domain, not how it is implemented. A reader should understand its purpose without opening the definition.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-abbreviations',
    title: 'No abbreviations',
    prompt:
      'Spell names out in full. Do not abbreviate (use customerCount, not custCnt) except for universally understood terms like id, url, and http.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.verb-noun-naming',
    title: 'Verbs, nouns, predicates',
    prompt:
      'Name functions with a verb phrase describing what they do (fetchOrders, validateEmail), data with nouns (order, emailAddress), and booleans as predicates (isReady, hasPermission, canRetry).',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-noise-words',
    title: 'Avoid noise words in names',
    prompt:
      'Do not pad names with words that add no meaning such as Data, Info, Manager, Helper, Util, or Object. Pick a name that says what the thing actually is.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.short-functions',
    title: 'Keep functions short',
    prompt:
      'Keep functions under about 30 lines and focused on one task. When a block inside a function needs a comment to explain what it does, extract it into a named function instead.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.single-responsibility',
    title: 'One responsibility per unit',
    prompt:
      'Each function, class, and module should have exactly one reason to change. If describing what it does requires the word "and", split it.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.one-abstraction-level',
    title: 'One abstraction level per function',
    prompt:
      'Do not mix high-level orchestration with low-level details in the same function. A function should read as a list of steps at a single level; push the details into named helpers.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.few-parameters',
    title: 'Three parameters or fewer',
    prompt:
      'Limit functions to three parameters. If more are needed, group related values into a single options object or a named type.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-boolean-flags',
    title: 'No boolean flag parameters',
    prompt:
      'Do not pass boolean flags that switch a function between two behaviors. Split it into two clearly named functions or pass a named enum-style value instead.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.early-returns',
    title: 'Early returns over nesting',
    prompt:
      'Handle invalid input, edge cases, and error conditions at the top of a function with early returns or guard clauses, so the main logic stays at the lowest indentation level.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.limit-nesting',
    title: 'Limit nesting depth',
    prompt:
      'Keep nesting to two levels at most. Flatten deeper structures with guard clauses, extracted functions, or by inverting conditions.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.comments-explain-why',
    title: 'Comments explain why',
    prompt:
      'Write comments only to explain why the code is the way it is: a non-obvious constraint, a workaround, a business rule, or a link to the issue. Never write comments that restate what the code visibly does.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-commented-out-code',
    title: 'No commented-out code',
    prompt:
      'Never leave commented-out code. Delete it; version control keeps the history if it is ever needed again.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-magic-numbers',
    title: 'No magic numbers or strings',
    prompt:
      'Replace every unexplained literal with a named constant that states its meaning (MAX_RETRY_ATTEMPTS = 3, not 3). The only bare literals allowed are 0, 1, and empty values whose meaning is obvious in context.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.prefer-immutability',
    title: 'Prefer immutability',
    prompt:
      'Treat data as immutable by default: declare values as constants, return new objects instead of mutating arguments, and never modify a parameter that was passed in.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.pure-functions',
    title: 'Pure functions where possible',
    prompt:
      'Separate pure computation from side effects. Keep the core logic in pure functions that take inputs and return outputs, and push I/O, time, randomness, and global state to the edges.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-global-state',
    title: 'Avoid global mutable state',
    prompt:
      'Do not use global mutable variables or singletons that hold state. Pass dependencies and state explicitly so every function can be understood and tested in isolation.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.fail-fast',
    title: 'Fail fast',
    prompt:
      'Validate inputs and preconditions at the boundary and fail immediately with a clear error. Do not let invalid data travel deeper into the system where the failure will be harder to trace.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-swallowed-errors',
    title: 'Never swallow errors',
    prompt:
      'Never catch an error and do nothing, or log it and continue as if nothing happened. Either handle it meaningfully, rethrow it with added context, or let it propagate.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.errors-with-context',
    title: 'Errors carry context',
    prompt:
      'When raising or wrapping an error, include what was being attempted and the relevant identifiers (which user, which file, which request), so the message alone is enough to start debugging.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.specific-error-types',
    title: 'Specific error types',
    prompt:
      'Use distinct, specific error types for distinct failure modes rather than one generic error with a message string, so callers can handle each case deliberately.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.narrow-try-blocks',
    title: 'Narrow try blocks',
    prompt:
      'Wrap only the single operation that can fail in a try block. Do not put an entire function body inside a try so that unrelated failures are caught by the same handler.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-null-returns',
    title: 'Avoid returning null',
    prompt:
      'Prefer returning an empty collection, a default value, or an explicit optional or result type over null or undefined, so callers are not forced to remember null checks.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.yagni',
    title: 'YAGNI: no speculative code',
    prompt:
      'Do not build abstractions, configuration options, or extension points for hypothetical future needs. Write the simplest code that solves the current problem and generalize only when a second real use case appears.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.rule-of-three',
    title: 'DRY, but rule of three',
    prompt:
      'Tolerate a small duplication twice; extract shared code only on the third occurrence, and only when the duplicates truly represent the same concept rather than coincidentally similar code.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-clever-code',
    title: 'Boring over clever',
    prompt:
      'Prefer obvious, boring code over clever tricks. If a construct would make a reader pause to work out what it does, rewrite it in the plainer form even if it is a few lines longer.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.composition-over-inheritance',
    title: 'Composition over inheritance',
    prompt:
      'Prefer composing small objects and functions over class inheritance hierarchies. Use inheritance only for a genuine is-a relationship, and keep hierarchies at most one level deep.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.consistent-formatting',
    title: 'Use the project formatter',
    prompt:
      'Follow the formatting the project formatter or linter produces exactly and never hand-format differently. If the project has no formatter, match the surrounding code precisely.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.explicit-over-implicit',
    title: 'Explicit over implicit',
    prompt:
      'Make behavior explicit: no hidden defaults, no reliance on implicit type coercion, no action-at-a-distance through side effects. A reader should not need to know framework magic to predict what a line does.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.small-files',
    title: 'Keep files focused and small',
    prompt:
      'Keep each file to a single cohesive concern and under a few hundred lines. When a file grows past that or starts hosting unrelated things, split it along its natural seams.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.locality',
    title: 'Keep related code together',
    prompt:
      'Declare variables as close as possible to their first use and place helper functions next to their callers. Code that changes together should live together.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-side-effects-in-getters',
    title: 'Commands and queries separate',
    prompt:
      'A function should either return a value or cause a side effect, never both. Getters and predicates must not mutate state, and mutating operations should not double as lookups.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.positive-conditionals',
    title: 'Positive, simple conditionals',
    prompt:
      'Write conditions in positive form (if isEnabled, not if !isDisabled) and extract complex boolean expressions into a well-named variable or function that states what the condition means.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.no-premature-optimization',
    title: 'Clarity before micro-optimization',
    prompt:
      'Write the clear version first. Do not sacrifice readability for speculative performance gains; optimize only where a measurement shows a real problem, and comment why that code is written the fast way.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.minimal-public-surface',
    title: 'Minimal public surface',
    prompt:
      'Export or expose only what other modules actually need. Keep everything else private so it can be changed freely without affecting callers.',
    category: 'codestyle',
  },
  {
    id: 'codestyle.consistent-vocabulary',
    title: 'One word per concept',
    prompt:
      'Use one term for each concept across the codebase (do not mix fetch, get, retrieve, and load for the same kind of operation) and never reuse one term for two different concepts.',
    category: 'codestyle',
  },
]
