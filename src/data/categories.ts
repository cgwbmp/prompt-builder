import type { Category, CategoryGroup } from '../types'

/** Chip-bar groups, in display order. Purely visual; filtering stays flat. */
export const CATEGORY_GROUPS: { id: CategoryGroup; label: string }[] = [
  { id: 'dev', label: 'Development' },
  { id: 'visual', label: 'Visual design' },
  { id: 'general', label: 'General' },
  { id: 'style', label: 'Response style' },
]

/**
 * Category registry. Order here defines:
 *  - chip order within each group in the filter bar
 *  - section order in the joined output
 *
 * `description` states what belongs in the category and what does not.
 */
export const CATEGORIES: Category[] = [
  // ---- Development -------------------------------------------------------
  {
    id: 'role',
    label: 'Role / Persona',
    group: 'dev',
    description:
      'Who the AI acts as: senior engineer, security reviewer, SRE, DBA, tech lead. Only identity and expertise, no task rules.',
  },
  {
    id: 'agent',
    label: 'Agent Working Rules',
    group: 'dev',
    description:
      'How an AI coding agent must behave: scope discipline, minimal diffs, when to ask, honesty, tooling limits. Not code style.',
  },
  {
    id: 'workflow',
    label: 'Planning & Workflow',
    group: 'dev',
    description:
      'Process before and during a change: plan first, incremental steps, verify, commit granularity. Not agent behavior rules.',
  },
  {
    id: 'effort',
    label: 'Effort & Depth',
    group: 'dev',
    description:
      'How much work to spend: exploration breadth, verification depth, thinking budget, when to stop. Not output length (see Tone).',
  },
  {
    id: 'codestyle',
    label: 'Code Style & Quality',
    group: 'dev',
    description:
      'Language-agnostic code quality: naming, function size, comments, immutability, error handling patterns. Not language specifics.',
  },
  {
    id: 'typescript',
    label: 'TypeScript & JavaScript',
    group: 'dev',
    description:
      'TS/JS specifics: strict types, generics, async patterns, modules, tooling. Not React or Node server concerns.',
  },
  {
    id: 'python',
    label: 'Python',
    group: 'dev',
    description:
      'Python specifics: typing, idioms, packaging, async, tooling like ruff/pytest. Not general code style.',
  },
  {
    id: 'frontend',
    label: 'Frontend & React',
    group: 'dev',
    description:
      'UI code: React components, hooks, state, CSS/Tailwind, rendering performance. Not generic TS, not accessibility rules.',
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    group: 'dev',
    description:
      'WCAG 2.2, ARIA, keyboard and focus, screen readers, motion and contrast preferences, testing a11y, including a11y rules inside React code. Not visual color rules.',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    group: 'dev',
    description:
      'iOS, Android, React Native, Flutter: platform conventions, navigation, gestures, offline, performance, store requirements.',
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    group: 'dev',
    description:
      'Server code: REST/GraphQL design, validation, auth flows, error responses, pagination, idempotency. Not database internals.',
  },
  {
    id: 'errors',
    label: 'Errors, Logging & Observability',
    group: 'dev',
    description:
      'App-level error handling, structured logging, metrics, tracing, alerting hooks. Not infra dashboards or pipelines.',
  },
  {
    id: 'database',
    label: 'Database & SQL',
    group: 'dev',
    description: 'Schema design, migrations, indexes, query optimization, transactions, ORMs. Not API layer concerns.',
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    group: 'dev',
    description:
      'Analytics SQL, pandas/dataframes, pipelines, notebooks, data quality, reproducibility. Not OLTP schema design.',
  },
  {
    id: 'testing',
    label: 'Testing',
    group: 'dev',
    description:
      'Unit, integration, e2e tests: what to cover, structure, mocking rules, flakiness, TDD. Not debugging existing failures.',
  },
  {
    id: 'debugging',
    label: 'Debugging',
    group: 'dev',
    description:
      'Finding root causes of failures: reproduce, isolate, hypothesize, verify fix. Not code review of working code.',
  },
  {
    id: 'review',
    label: 'Code Review',
    group: 'dev',
    description:
      'Reviewing a diff or PR: what to look for, severity ranking, how to report findings. Not fixing the bugs found.',
  },
  {
    id: 'refactor',
    label: 'Refactoring',
    group: 'dev',
    description:
      'Restructuring working code safely: behavior preservation, small steps, dead code, extraction. Not new features.',
  },
  {
    id: 'security',
    label: 'Security',
    group: 'dev',
    description: 'Secure coding: input validation, injection, secrets, auth, dependencies, OWASP. Not general review.',
  },
  {
    id: 'performance',
    label: 'Performance',
    group: 'dev',
    description:
      'Measuring and improving speed and resource use: profiling first, complexity, caching, memory, bundle size.',
  },
  {
    id: 'architecture',
    label: 'Architecture & Design',
    group: 'dev',
    description:
      'System and module design: boundaries, patterns, trade-offs, ADRs, scalability. Not line-level code style.',
  },
  {
    id: 'git',
    label: 'Git & Version Control',
    group: 'dev',
    description:
      'Commits, branches, PR descriptions, rebasing, history hygiene, conventional commits. Not CI pipelines.',
  },
  {
    id: 'deps',
    label: 'Dependencies & Packaging',
    group: 'dev',
    description:
      'Semver, lockfiles, upgrades, monorepos, publishing, license checks, supply-chain hygiene. Not security review.',
  },
  {
    id: 'devops',
    label: 'DevOps, CI/CD & Infra',
    group: 'dev',
    description:
      'Pipelines, Docker, Kubernetes, IaC, deployments, observability platforms, environments. Not application code.',
  },
  {
    id: 'shell',
    label: 'CLI & Shell Scripting',
    group: 'dev',
    description: 'Bash/zsh scripts, CLI tool design, one-liners, portability, safety flags. Not DevOps pipelines.',
  },
  {
    id: 'docs',
    label: 'Documentation',
    group: 'dev',
    description:
      'Writing for developers: READMEs, API docs, inline docs, changelogs, ADR text. Not PR descriptions or commit messages.',
  },
  {
    id: 'i18n',
    label: 'Internationalization',
    group: 'dev',
    description:
      'i18n in code: message catalogs, ICU plurals, RTL, date/number/currency APIs, locale fallback. Not translating text.',
  },
  {
    id: 'explain',
    label: 'Explain & Learn',
    group: 'dev',
    description:
      'Having the AI explain code, concepts, or errors to a human: depth, analogies, walkthroughs. Not writing docs.',
  },
  {
    id: 'ai',
    label: 'AI & LLM Integration',
    group: 'dev',
    description:
      'Building with LLMs: prompt design in apps, tool use, RAG, evals, cost and latency, safety. Not prompts for the assistant itself.',
  },
  {
    id: 'environment',
    label: 'Environment & Compatibility',
    group: 'dev',
    description:
      'Runtime, browser, and OS targets, offline or no-network, resource limits, legacy support, "must run on X" constraints.',
  },

  // ---- Visual design -----------------------------------------------------
  {
    id: 'visual-style',
    label: 'Visual Style',
    group: 'visual',
    description:
      'Overall look of any visual output (interfaces, slides, graphics, brand): minimal, glassmorphism, neo-brutalist, flat, retro, editorial. Not color or type specifics.',
  },
  {
    id: 'mood',
    label: 'Mood & Feel',
    group: 'visual',
    description:
      'Emotional register of a design: calm, playful, premium, trustworthy, energetic, technical. Expressed as design direction, not palette values.',
  },
  {
    id: 'color',
    label: 'Color & Theme',
    group: 'visual',
    description:
      'Palettes, theming, contrast, dark mode, semantic color tokens, accent usage, gradients, for any visual medium. Not typography, layout, or chart palettes (see Data Visualization).',
  },
  {
    id: 'typography',
    label: 'Typography',
    group: 'visual',
    description:
      'Font pairing, type scale, weights, line height, measure, hierarchy, numerals, monospace usage. Not color.',
  },
  {
    id: 'layout',
    label: 'Layout & Spacing',
    group: 'visual',
    description:
      'Grids, spacing scale, density, alignment, responsive breakpoints, whitespace, sizing, for screens, slides, or print. Not motion.',
  },
  {
    id: 'motion',
    label: 'Motion & Interaction',
    group: 'visual',
    description:
      'Transitions, micro-interactions, hover and focus states, loading states, easing, duration, reduced motion.',
  },
  {
    id: 'dataviz',
    label: 'Data Visualization',
    group: 'visual',
    description:
      'Chart choice, axes and scales, color for data, annotations, honesty, accessibility of charts. Not general UI color.',
  },
  {
    id: 'ux',
    label: 'UX & Usability',
    group: 'visual',
    description:
      'Flows, forms, empty/loading/error states, onboarding, microcopy, confirmations, feedback. Not visual style or a11y specs.',
  },

  // ---- General -----------------------------------------------------------
  {
    id: 'writing',
    label: 'Writing & Editing',
    group: 'general',
    description:
      'General prose for humans: emails, announcements, proposals, editing and proofreading. Not developer documentation.',
  },
  {
    id: 'summarize',
    label: 'Summarize & Extract',
    group: 'general',
    description:
      'Condensing text and pulling out facts, action items, decisions, and structure from documents, threads, and transcripts.',
  },
  {
    id: 'analysis',
    label: 'Analysis & Research',
    group: 'general',
    description:
      'Evaluating options, comparing, investigating, weighing evidence, and producing recommendations. Not software architecture.',
  },
  {
    id: 'brainstorm',
    label: 'Brainstorming & Ideas',
    group: 'general',
    description: 'Generating and shaping options: divergent ideation, constraints, ranking, and picking winners.',
  },
  {
    id: 'business',
    label: 'Business & Productivity',
    group: 'general',
    description: 'Plans, meetings, decisions, goals, stakeholder communication, and product thinking.',
  },
  {
    id: 'marketing',
    label: 'Marketing & Copy',
    group: 'general',
    description:
      'Persuasive and promotional text: headlines, landing pages, launch posts, release announcements, social copy.',
  },
  {
    id: 'learning',
    label: 'Teaching & Explaining',
    group: 'general',
    description:
      'Teaching any topic to a human: audience level, analogies, exercises, quizzes, study plans. Not code explanation.',
  },
  {
    id: 'translate',
    label: 'Translation & Language',
    group: 'general',
    description: 'Translating between languages and registers, localization, tone adaptation, and language correction.',
  },
  {
    id: 'image',
    label: 'Image Generation',
    group: 'general',
    description: 'Modifiers for image models: style, medium, lighting, camera, composition, mood, negative prompts.',
  },

  // ---- Response style ----------------------------------------------------
  {
    id: 'context',
    label: 'Context Handling',
    group: 'style',
    description:
      'How the AI treats supplied material: only given sources, cite from context, ask for missing files, handle stale or conflicting inputs.',
  },
  {
    id: 'reasoning',
    label: 'Reasoning & Verification',
    group: 'style',
    description:
      'How the AI thinks and checks: step by step, alternatives, self-review, stating assumptions and uncertainty.',
  },
  {
    id: 'tone',
    label: 'Communication Style',
    group: 'style',
    description: 'How the AI talks: concise, direct, no hedging, no filler, level of detail. Not output structure.',
  },
  {
    id: 'language',
    label: 'Response Language',
    group: 'style',
    description:
      'Which language to answer in, keeping code and identifiers in English, term glossaries, bilingual output, simplified English.',
  },
  {
    id: 'format',
    label: 'Output Format',
    group: 'style',
    description:
      'Shape of the response: code only, unified diff, markdown sections, JSON, tables, file-by-file. Not tone.',
  },
]

export const CATEGORY_BY_ID: ReadonlyMap<string, Category> = new Map(CATEGORIES.map((c) => [c.id, c]))
