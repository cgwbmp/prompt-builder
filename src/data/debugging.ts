import type { Prompt } from '../types'

export const debugging: Prompt[] = [
  {
    id: 'debugging.reproduce-first',
    title: 'Reproduce before fixing',
    prompt:
      'Reproduce the failure reliably before changing any code. If it cannot be reproduced, gathering the exact steps, inputs, environment, and version is the task; do not propose a fix for a bug you have not seen fail.',
    category: 'debugging',
  },
  {
    id: 'debugging.minimal-repro',
    title: 'Minimize the reproduction',
    prompt:
      'Shrink the reproduction to the smallest input, shortest code path, and fewest dependencies that still trigger the failure. Remove one element at a time and re-run after each removal until nothing more can be removed.',
    category: 'debugging',
  },
  {
    id: 'debugging.read-error-fully',
    title: 'Read the whole error',
    prompt:
      'Read the entire error message and stack trace before forming a theory, including the innermost cause in a chained exception and the first error in a log rather than the last. Quote the exact line you are acting on.',
    category: 'debugging',
  },
  {
    id: 'debugging.first-frame-in-own-code',
    title: 'First project frame in trace',
    prompt:
      'In a stack trace, locate the first frame that is in project code rather than a library or framework and start the investigation there; the top frame in vendor code is usually where the bad value was detected, not where it was created.',
    category: 'debugging',
  },
  {
    id: 'debugging.check-recent-changes',
    title: 'Check what changed',
    prompt:
      'Before any deep investigation, ask what changed since it last worked: recent commits, dependency updates, config or environment changes, data changes, infrastructure. Run `git log` and `git diff` on the relevant paths and inspect lockfile changes.',
    category: 'debugging',
  },
  {
    id: 'debugging.git-bisect',
    title: 'Bisect the history',
    prompt:
      'When a regression has a known-good and known-bad version, use `git bisect` with a script that exits non-zero on the failure to find the exact commit, rather than reading through diffs by hand.',
    category: 'debugging',
  },
  {
    id: 'debugging.binary-search-system',
    title: 'Divide and conquer',
    prompt:
      'Narrow the search by halving: verify the data is correct at a midpoint of the pipeline, then move toward the half where it goes wrong. Determine which side of the boundary you are on before looking at any specific line.',
    category: 'debugging',
  },
  {
    id: 'debugging.one-hypothesis',
    title: 'One hypothesis at a time',
    prompt:
      'State one specific, falsifiable hypothesis (`the cache returns stale data when the key contains a slash`), design the single check that would confirm or refute it, run it, and record the outcome before forming the next hypothesis.',
    category: 'debugging',
  },
  {
    id: 'debugging.change-one-thing',
    title: 'Change one variable',
    prompt:
      'Change exactly one variable per experiment and revert it before trying the next. If several things were changed and the bug disappeared, back the changes out one by one until it returns, so the real cause is identified.',
    category: 'debugging',
  },
  {
    id: 'debugging.look-dont-guess',
    title: 'Look, do not guess',
    prompt:
      'Do not reason from the code about what a value probably is; print it, inspect it in a debugger, or query it. Confirm the actual runtime values, types, and code path at the point of failure before proposing any change.',
    category: 'debugging',
  },
  {
    id: 'debugging.verify-assumptions',
    title: 'Check the plug',
    prompt:
      'Verify the boring assumptions first: the right file is being run, the right environment and branch are active, the config is the one you think, the service is actually reachable, the build is fresh, and the test is actually executing the changed code.',
    category: 'debugging',
  },
  {
    id: 'debugging.probably-your-code',
    title: 'Suspect your own code first',
    prompt:
      'Assume the bug is in recently written project code before suspecting the framework, database, compiler, or operating system. Only investigate a library bug after producing a minimal reproduction that contains no project code.',
    category: 'debugging',
  },
  {
    id: 'debugging.trust-nothing',
    title: 'Trust nothing without evidence',
    prompt:
      'Treat comments, documentation, variable names, and log messages as claims, not facts. Confirm what the code actually does and what the data actually contains; a misleading name or stale comment is a frequent hiding place for bugs.',
    category: 'debugging',
  },
  {
    id: 'debugging.targeted-logging',
    title: 'Add targeted logging',
    prompt:
      'When a debugger is impractical, add temporary log statements that print the variable name, its value, and its type at each step of the suspect path with a unique prefix for easy grepping and removal. Remove them all before finishing.',
    category: 'debugging',
  },
  {
    id: 'debugging.look-at-the-data',
    title: 'Inspect the real data',
    prompt:
      'Look at the actual failing record, request payload, or file, not a hypothetical example. Query the database row, dump the exact request, or open the input; bugs live in the specific data (nulls, empty strings, unicode, trailing whitespace, timezone offsets) that the code did not expect.',
    category: 'debugging',
  },
  {
    id: 'debugging.compare-working-case',
    title: 'Compare with a working case',
    prompt:
      'Find the closest input, environment, or version that works and diff it against the failing one: same code with different data, same data in a different environment. The difference is the shortlist of causes.',
    category: 'debugging',
  },
  {
    id: 'debugging.intermittent-find-condition',
    title: 'Make intermittent bugs reliable',
    prompt:
      'For an intermittent failure, find the uncontrolled variable that makes it intermittent (timing, ordering, concurrency, shared state, external service, clock) and control it to make the failure happen every time. Run the reproduction in a loop and capture everything when it fails.',
    category: 'debugging',
  },
  {
    id: 'debugging.race-conditions',
    title: 'Suspect concurrency',
    prompt:
      'When a bug appears only under load, only in CI, or only sometimes, look for race conditions: unsynchronized shared state, check-then-act sequences, missing awaits, and order-dependent initialization. Reproduce by inserting artificial delays or running the path concurrently.',
    category: 'debugging',
  },
  {
    id: 'debugging.audit-trail',
    title: 'Keep an audit trail',
    prompt:
      'Record each hypothesis tested, the exact command or change, and the observed result as you go. Report this log so ruled-out causes are not re-investigated and the reasoning can be checked.',
    category: 'debugging',
  },
  {
    id: 'debugging.explain-out-loud',
    title: 'Explain the bug plainly',
    prompt:
      'Before proposing a fix, write a plain-language explanation of what the code was expected to do, what it actually did, and why. If the explanation has a gap, the investigation is not finished.',
    category: 'debugging',
  },
  {
    id: 'debugging.root-cause-not-symptom',
    title: 'Fix cause, not symptom',
    prompt:
      'Do not fix a bug by catching the exception, adding a null check at the crash site, or retrying. Trace the bad value or state back to where it was first produced and fix it there; explain why the original code produced it.',
    category: 'debugging',
  },
  {
    id: 'debugging.five-whys',
    title: 'Ask why repeatedly',
    prompt:
      'After identifying the immediate cause, ask why it happened at least three more times (why was the value null, why did the caller pass it, why did validation allow it) to find the deepest cause worth fixing and any process gap that let it ship.',
    category: 'debugging',
  },
  {
    id: 'debugging.regression-test',
    title: 'Add a regression test',
    prompt:
      'Turn the reproduction into an automated test that fails before the fix and passes after it, named after the bug or issue. Run it against the unfixed code to prove it catches the bug before applying the fix.',
    category: 'debugging',
  },
  {
    id: 'debugging.verify-fix',
    title: 'Prove the fix fixed it',
    prompt:
      'After applying a fix, re-run the original reproduction and confirm the failure is gone, then revert the fix and confirm the failure returns. A bug that stops appearing without an understood cause is not fixed.',
    category: 'debugging',
  },
  {
    id: 'debugging.check-for-siblings',
    title: 'Find sibling occurrences',
    prompt:
      'Once the root cause is known, grep the codebase for the same pattern (same helper misuse, same off-by-one, same unchecked return value) and list every other occurrence, even if only the reported one is fixed.',
    category: 'debugging',
  },
  {
    id: 'debugging.no-shotgun-changes',
    title: 'No shotgun debugging',
    prompt:
      'Do not make speculative edits to see what happens, sprinkle try/catch blocks, or rewrite the suspect function from scratch. Every change during debugging must test a stated hypothesis or be the final fix.',
    category: 'debugging',
  },
  {
    id: 'debugging.use-a-debugger',
    title: 'Use the debugger',
    prompt:
      'Set a breakpoint or use the language debugger (`node --inspect`, `pdb`/`breakpoint()`, `dlv`, IDE debugger) at the failure point and step backward through the call stack inspecting locals, rather than repeatedly editing and re-running with prints.',
    category: 'debugging',
  },
  {
    id: 'debugging.environment-differences',
    title: 'Diff the environments',
    prompt:
      'When a bug appears in one environment but not another, enumerate the concrete differences: runtime and dependency versions, environment variables, locale and timezone, file permissions, network access, data volume, and build flags. Check each one rather than assuming the environments are equivalent.',
    category: 'debugging',
  },
  {
    id: 'debugging.read-the-source',
    title: 'Read the library source',
    prompt:
      'When a library behaves unexpectedly, open its actual installed source in `node_modules`, `site-packages`, or the vendored module and read the code path taken, rather than relying on documentation that may describe a different version.',
    category: 'debugging',
  },
  {
    id: 'debugging.check-versions',
    title: 'Confirm versions in use',
    prompt:
      'Print the exact runtime and dependency versions actually loaded at the failure point (`node -v`, `pip show`, lockfile entry, `import x; x.__version__`) and compare them with what the documentation and the working environment use.',
    category: 'debugging',
  },
  {
    id: 'debugging.report-symptoms-not-theories',
    title: 'Report symptoms, then theories',
    prompt:
      'When describing the bug, separate observed facts (exact error text, inputs, frequency, environment) from interpretation. State what was seen first, then what is suspected and how confident you are.',
    category: 'debugging',
  },
  {
    id: 'debugging.time-box-and-escalate',
    title: 'Time-box and ask for help',
    prompt:
      'If an investigation exceeds a reasonable time budget without narrowing the cause, stop and summarize what has been ruled out, what remains, and what information or access would unblock it, rather than continuing to guess.',
    category: 'debugging',
  },
  {
    id: 'debugging.clean-up-instrumentation',
    title: 'Clean up after debugging',
    prompt:
      'Before finishing, remove every temporary print, log, breakpoint, commented-out block, hard-coded value, and disabled test added during the investigation. Keep only instrumentation that was deliberately promoted to permanent structured logging.',
    category: 'debugging',
  },
  {
    id: 'debugging.improve-error-message',
    title: 'Make the failure loud',
    prompt:
      'If the bug was hard to find because the failure was silent or the error was vague, make the code fail loudly and early at the point where the invalid state is first detectable, with a message that includes the offending value.',
    category: 'debugging',
  },
]
