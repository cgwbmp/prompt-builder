import type { Prompt } from '../types'

export const docs: Prompt[] = [
  {
    id: 'docs.readme-structure',
    title: 'README structure',
    prompt:
      'Structure the README in this order: one-paragraph description of what the project does and who it is for, why it exists, Quickstart, Usage, Configuration, Development (how to run tests), Contributing, and License. Link out to deeper docs rather than inlining them.',
    category: 'docs',
  },
  {
    id: 'docs.readme-first-screen',
    title: 'README above the fold',
    prompt:
      'Make the first screen of the README answer three questions without scrolling: what this is, how to install it (one command), and the smallest working example. Move badges, history, and architecture below that.',
    category: 'docs',
  },
  {
    id: 'docs.quickstart-five-minutes',
    title: 'Copy-paste quickstart',
    prompt:
      'Write the Quickstart as a numbered sequence of copy-pasteable commands that takes a new developer from clone to a running example in under five minutes, stating prerequisites and their versions up front. Test it on a clean machine or container.',
    category: 'docs',
  },
  {
    id: 'docs.docs-next-to-code',
    title: 'Docs live with the code',
    prompt:
      'Keep documentation in the same repository as the code it describes, in a `docs/` directory or a README beside each package, so it is versioned, reviewed, and branched together with the code.',
    category: 'docs',
  },
  {
    id: 'docs.update-docs-with-code',
    title: 'Update docs with code',
    prompt:
      'Whenever a change alters behavior, configuration, a CLI flag, or a public signature, update the affected README sections, docstrings, and reference pages in the same change. A change that leaves the docs stale is incomplete.',
    category: 'docs',
  },
  {
    id: 'docs.delete-stale-docs',
    title: 'Delete stale docs',
    prompt:
      'Remove documentation that is outdated, duplicated, or describes removed features rather than leaving it with a warning banner. A short, accurate document beats a long one that is partly wrong; version control preserves anything deleted.',
    category: 'docs',
  },
  {
    id: 'docs.diataxis-quadrants',
    title: 'Diataxis document types',
    prompt:
      'Classify every documentation page as exactly one Diataxis type (tutorial, how-to guide, reference, or explanation) and do not mix them: keep conceptual discussion out of how-to steps and keep step-by-step instructions out of reference pages.',
    category: 'docs',
  },
  {
    id: 'docs.tutorial-style',
    title: 'Tutorials are hands-on lessons',
    prompt:
      'Write tutorials as a guided lesson in which the reader does something concrete at every step and sees a visible result, with minimal theory. Assume no prior knowledge of the project, guarantee the steps work in order, and link to explanation pages for the why.',
    category: 'docs',
  },
  {
    id: 'docs.howto-style',
    title: 'How-to guides solve one task',
    prompt:
      'Title how-to guides with the goal ("How to rotate API keys"), assume a competent reader who already knows the basics, list prerequisites, and give only the steps needed to reach the goal. Omit background and alternatives.',
    category: 'docs',
  },
  {
    id: 'docs.reference-style',
    title: 'Reference is austere and complete',
    prompt:
      'Write reference documentation as neutral, complete facts that mirror the structure of the code or API: every option, parameter, default, type, and error. Describe, do not instruct or persuade, and generate it from source where possible.',
    category: 'docs',
  },
  {
    id: 'docs.explanation-style',
    title: 'Explanation covers the why',
    prompt:
      'Write explanation pages to give context: the problem, the design chosen, alternatives considered, trade-offs, and constraints. Do not include step-by-step instructions; link to the how-to guides instead.',
    category: 'docs',
  },
  {
    id: 'docs.audience-first',
    title: 'State audience and prerequisites',
    prompt:
      'Begin every document with one sentence naming who it is for and what they should already know or have installed, then what they will be able to do after reading it. Write the rest for that reader only.',
    category: 'docs',
  },
  {
    id: 'docs.jsdoc-format',
    title: 'JSDoc/TSDoc format',
    prompt:
      'Document exported JavaScript and TypeScript symbols with JSDoc/TSDoc: a one-line summary, a blank line, then `@param name - description` for each parameter, `@returns`, `@throws` for every error the caller must handle, and an `@example` block. Omit types in TypeScript files; the signature already has them.',
    category: 'docs',
  },
  {
    id: 'docs.python-docstring-style',
    title: 'Google-style Python docstrings',
    prompt:
      'Write Python docstrings in Google style: a one-line imperative summary, a blank line, then `Args:`, `Returns:` (or `Yields:`), and `Raises:` sections. Match whichever style the codebase already uses (Google, NumPy, or reST) and never mix styles within a project.',
    category: 'docs',
  },
  {
    id: 'docs.docstring-contract-not-signature',
    title: 'Docstrings state the contract',
    prompt:
      'Make docstrings describe what the caller needs and cannot see in the signature: preconditions, side effects, thread safety, units, edge-case behavior on empty or null input, and error conditions. Do not restate the parameter types or paraphrase the function name.',
    category: 'docs',
  },
  {
    id: 'docs.skip-trivial-docstrings',
    title: 'No docstrings on trivial code',
    prompt:
      'Do not add docstrings or doc comments to self-explanatory getters, setters, one-line wrappers, or private helpers whose name says everything. Reserve documentation for public API and anything with non-obvious behavior.',
    category: 'docs',
  },
  {
    id: 'docs.runnable-examples',
    title: 'Examples that run',
    prompt:
      'Every code example in the docs must be complete and runnable as written: include the imports, use realistic values, and show expected output. Put examples under test (doctest, an `examples/` directory run in CI, or snippet extraction) so they break when the API changes.',
    category: 'docs',
  },
  {
    id: 'docs.example-before-abstraction',
    title: 'Example before abstraction',
    prompt:
      'Lead each section with a concrete, minimal example of the most common case, then describe the general rule and options. Readers skim for code first and read prose only when the example does not fit their case.',
    category: 'docs',
  },
  {
    id: 'docs.keep-a-changelog',
    title: 'Keep a Changelog format',
    prompt:
      'Maintain `CHANGELOG.md` in Keep a Changelog format: newest version first, each heading `## [x.y.z] - YYYY-MM-DD`, entries grouped under Added, Changed, Deprecated, Removed, Fixed, and Security, and version headings linked to the comparison diff.',
    category: 'docs',
  },
  {
    id: 'docs.changelog-for-humans',
    title: 'Changelog for humans',
    prompt:
      'Write changelog entries as user-facing outcomes ("Retries failed uploads up to 3 times") rather than pasting commit subjects or PR titles. Skip internal refactors and CI changes that users cannot observe.',
    category: 'docs',
  },
  {
    id: 'docs.changelog-unreleased-breaking',
    title: 'Unreleased and breaking entries',
    prompt:
      'Keep an `## [Unreleased]` section at the top of the changelog and add an entry in the same change that introduces the behavior. Mark breaking changes with a **BREAKING** prefix and include the migration steps directly in the entry.',
    category: 'docs',
  },
  {
    id: 'docs.deprecation-notices',
    title: 'Document deprecations',
    prompt:
      'When deprecating an API, flag, or option, document the replacement, the version in which it will be removed, and a before/after migration snippet, both in the changelog and in the docstring or reference entry of the deprecated item.',
    category: 'docs',
  },
  {
    id: 'docs.openapi-source-of-truth',
    title: 'OpenAPI as source of truth',
    prompt:
      'Treat the OpenAPI specification as the single source of truth for HTTP API docs and generate the reference from it. Give every operation a summary, a description, an example request and response, and documented error responses with their status codes.',
    category: 'docs',
  },
  {
    id: 'docs.adr-format',
    title: 'ADR text format',
    prompt:
      'Write architecture decision records with a numbered title, Status (proposed, accepted, deprecated, superseded), Context, Decision, and Consequences sections, in a few paragraphs each. Never edit an accepted ADR to change the decision; write a new one that supersedes it.',
    category: 'docs',
  },
  {
    id: 'docs.mermaid-diagrams',
    title: 'Diagrams as Mermaid',
    prompt:
      'Draw architecture, sequence, and state diagrams as Mermaid code blocks inside the markdown rather than exported images, so they are diffable, reviewable, and update alongside the text. Keep each diagram to one idea and under about 15 nodes.',
    category: 'docs',
  },
  {
    id: 'docs.google-style-voice',
    title: 'Second person, active, present',
    prompt:
      'Write in second person ("you"), active voice, and present tense, following the Google developer documentation style guide. Use sentence case for headings and put conditions before instructions ("To enable caching, set ...").',
    category: 'docs',
  },
  {
    id: 'docs.no-simply-just',
    title: 'Drop "simply" and "just"',
    prompt:
      'Avoid words that judge difficulty or assume knowledge: "simply", "just", "easy", "obviously", "of course". Define every acronym on first use and avoid idioms that do not translate.',
    category: 'docs',
  },
  {
    id: 'docs.consistent-terminology',
    title: 'One term per concept in docs',
    prompt:
      'Use exactly one name for each concept throughout the docs and match the names used in the code and UI; do not alternate between "workspace", "project", and "repo" for the same thing. Add a glossary when the domain has more than a handful of terms.',
    category: 'docs',
  },
  {
    id: 'docs.code-block-conventions',
    title: 'Code block conventions',
    prompt:
      'Tag every fenced code block with its language, show shell commands without a `$` prompt so they can be copied directly, and separate expected output into its own block. Wrap file paths, commands, flags, and identifiers in inline code.',
    category: 'docs',
  },
  {
    id: 'docs.placeholder-convention',
    title: 'Consistent placeholders',
    prompt:
      'Mark values the reader must replace with a single consistent convention such as `<PROJECT_ID>` or `YOUR_API_KEY`, explain each placeholder the first time it appears, and never use a realistic-looking value that could be pasted by mistake.',
    category: 'docs',
  },
  {
    id: 'docs.config-reference-table',
    title: 'Configuration reference table',
    prompt:
      'Document every configuration option, environment variable, and CLI flag in a table with columns for name, type, default, whether it is required, and a one-line description including valid values. Keep the table exhaustive and generated from the code where possible.',
    category: 'docs',
  },
  {
    id: 'docs.troubleshooting-section',
    title: 'Troubleshooting with exact errors',
    prompt:
      'Add a Troubleshooting section listing the exact error messages users hit, verbatim so they are searchable, each followed by the cause and the fix. Update it whenever a support question is answered twice.',
    category: 'docs',
  },
  {
    id: 'docs.link-do-not-duplicate',
    title: 'Link, do not duplicate',
    prompt:
      'Keep a single source of truth for each fact and link to it from everywhere else rather than copying it. If a paragraph exists in two places, delete one and link.',
    category: 'docs',
  },
  {
    id: 'docs.version-annotations',
    title: 'Mark version-specific content',
    prompt:
      'State which version of the software a document applies to, and annotate features with the version they were introduced or changed ("Added in v2.3"), so readers on older releases know what does not apply to them.',
    category: 'docs',
  },
  {
    id: 'docs.scannable-headings',
    title: 'Scannable headings',
    prompt:
      'Write headings that state the content, not the topic ("Configure retries" rather than "Retries"), keep one idea per section, and add a table of contents to any page longer than three screens. Never nest headings deeper than three levels.',
    category: 'docs',
  },
  {
    id: 'docs.minimum-viable-docs',
    title: 'Minimum viable documentation',
    prompt:
      'Write the smallest set of documentation that lets the target reader succeed and keep it accurate, rather than aiming for completeness. Prune anything that has not been needed; short and correct beats comprehensive and stale.',
    category: 'docs',
  },
  {
    id: 'docs.no-placeholders-left',
    title: 'No unfinished sections',
    prompt:
      'Never leave "TODO", "coming soon", lorem ipsum, or empty headings in published documentation. Either write the section or remove it and note the gap in an issue.',
    category: 'docs',
  },
  {
    id: 'docs.contributing-guide',
    title: 'CONTRIBUTING guide',
    prompt:
      'Provide a `CONTRIBUTING.md` that explains how to set up the development environment, run the tests and linters, the branch and review expectations, and how to propose larger changes. Link it from the README.',
    category: 'docs',
  },
  {
    id: 'docs.prefer-text-over-screenshots',
    title: 'Text over screenshots',
    prompt:
      'Prefer text, code, and Mermaid diagrams over screenshots; screenshots go stale, are not searchable or diffable, and are inaccessible. When a screenshot is unavoidable, add alt text and crop to the relevant region.',
    category: 'docs',
  },
  {
    id: 'docs.package-level-readmes',
    title: 'README per package',
    prompt:
      'In a monorepo, give every package or service its own short README stating its purpose, its public entry points, how to run it in isolation, and who owns it, and link each from the root README.',
    category: 'docs',
  },
]
