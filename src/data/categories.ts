import type { Category } from '../types'

/**
 * Category registry. Order here defines:
 *  - chip order in the filter bar
 *  - section order in the joined output
 *
 * Groups: development, visual design, general, and cross-cutting
 * (reasoning, tone, format). `description` states what belongs in the
 * category and what does not.
 */
export const CATEGORIES: Category[] = [
  {
    id: 'role',
    label: 'Role / Persona',
    description: 'Who the AI acts as: senior engineer, security reviewer, SRE, DBA, tech lead. Only identity and expertise, no task rules.',
  },
  {
    id: 'agent',
    label: 'Agent Working Rules',
    description: 'How an AI coding agent must behave: scope discipline, minimal diffs, when to ask, honesty, tooling limits. Not code style.',
  },
  {
    id: 'workflow',
    label: 'Planning & Workflow',
    description: 'Process before and during a change: plan first, incremental steps, verify, commit granularity. Not agent behavior rules.',
  },
  {
    id: 'codestyle',
    label: 'Code Style & Quality',
    description: 'Language-agnostic code quality: naming, function size, comments, immutability, error handling patterns. Not language specifics.',
  },
  {
    id: 'typescript',
    label: 'TypeScript & JavaScript',
    description: 'TS/JS specifics: strict types, generics, async patterns, modules, tooling. Not React or Node server concerns.',
  },
  {
    id: 'python',
    label: 'Python',
    description: 'Python specifics: typing, idioms, packaging, async, tooling like ruff/pytest. Not general code style.',
  },
  {
    id: 'frontend',
    label: 'Frontend & React',
    description: 'UI code: React components, hooks, state, CSS/Tailwind, accessibility basics, rendering performance. Not generic TS.',
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    description: 'Server code: REST/GraphQL design, validation, auth flows, error responses, pagination, idempotency. Not database internals.',
  },
  {
    id: 'database',
    label: 'Database & SQL',
    description: 'Schema design, migrations, indexes, query optimization, transactions, ORMs. Not API layer concerns.',
  },
  {
    id: 'testing',
    label: 'Testing',
    description: 'Unit, integration, e2e tests: what to cover, structure, mocking rules, flakiness, TDD. Not debugging existing failures.',
  },
  {
    id: 'debugging',
    label: 'Debugging',
    description: 'Finding root causes of failures: reproduce, isolate, hypothesize, verify fix. Not code review of working code.',
  },
  {
    id: 'review',
    label: 'Code Review',
    description: 'Reviewing a diff or PR: what to look for, severity ranking, how to report findings. Not fixing the bugs found.',
  },
  {
    id: 'refactor',
    label: 'Refactoring',
    description: 'Restructuring working code safely: behavior preservation, small steps, dead code, extraction. Not new features.',
  },
  {
    id: 'security',
    label: 'Security',
    description: 'Secure coding: input validation, injection, secrets, auth, dependencies, OWASP. Not general review.',
  },
  {
    id: 'performance',
    label: 'Performance',
    description: 'Measuring and improving speed and resource use: profiling first, complexity, caching, memory, bundle size.',
  },
  {
    id: 'architecture',
    label: 'Architecture & Design',
    description: 'System and module design: boundaries, patterns, trade-offs, ADRs, scalability. Not line-level code style.',
  },
  {
    id: 'git',
    label: 'Git & Version Control',
    description: 'Commits, branches, PR descriptions, rebasing, history hygiene, conventional commits. Not CI pipelines.',
  },
  {
    id: 'devops',
    label: 'DevOps, CI/CD & Infra',
    description: 'Pipelines, Docker, Kubernetes, IaC, deployments, observability, environments. Not application code.',
  },
  {
    id: 'shell',
    label: 'CLI & Shell Scripting',
    description: 'Bash/zsh scripts, CLI tool design, one-liners, portability, safety flags. Not DevOps pipelines.',
  },
  {
    id: 'docs',
    label: 'Documentation',
    description: 'Writing for developers: READMEs, API docs, inline docs, changelogs, ADR text. Not PR descriptions or commit messages.',
  },
  {
    id: 'explain',
    label: 'Explain & Learn',
    description: 'Having the AI explain code, concepts, or errors to a human: depth, analogies, walkthroughs. Not writing docs.',
  },
  {
    id: 'ai',
    label: 'AI & LLM Integration',
    description: 'Building with LLMs: prompt design in apps, tool use, RAG, evals, cost and latency, safety. Not prompts for the assistant itself.',
  },
  {
    id: 'visual-style',
    label: 'Visual Style',
    description: 'Overall look of any visual output (interfaces, slides, graphics, brand): minimal, glassmorphism, neo-brutalist, flat, retro, editorial. Not color or type specifics.',
  },
  {
    id: 'mood',
    label: 'Mood & Feel',
    description: 'Emotional register of a design: calm, playful, premium, trustworthy, energetic, technical. Expressed as design direction, not palette values.',
  },
  {
    id: 'color',
    label: 'Color & Theme',
    description: 'Palettes, theming, contrast, dark mode, semantic color tokens, accent usage, gradients, for any visual medium. Not typography or layout.',
  },
  {
    id: 'typography',
    label: 'Typography',
    description: 'Font pairing, type scale, weights, line height, measure, hierarchy, numerals, monospace usage. Not color.',
  },
  {
    id: 'layout',
    label: 'Layout & Spacing',
    description: 'Grids, spacing scale, density, alignment, responsive breakpoints, whitespace, sizing, for screens, slides, or print. Not motion.',
  },
  {
    id: 'motion',
    label: 'Motion & Interaction',
    description: 'Transitions, micro-interactions, hover and focus states, loading states, easing, duration, reduced motion.',
  },
  {
    id: 'writing',
    label: 'Writing & Editing',
    description: 'General prose for humans: emails, announcements, proposals, editing and proofreading. Not developer documentation.',
  },
  {
    id: 'summarize',
    label: 'Summarize & Extract',
    description: 'Condensing text and pulling out facts, action items, decisions, and structure from documents, threads, and transcripts.',
  },
  {
    id: 'analysis',
    label: 'Analysis & Research',
    description: 'Evaluating options, comparing, investigating, weighing evidence, and producing recommendations. Not software architecture.',
  },
  {
    id: 'brainstorm',
    label: 'Brainstorming & Ideas',
    description: 'Generating and shaping options: divergent ideation, constraints, ranking, and picking winners.',
  },
  {
    id: 'business',
    label: 'Business & Productivity',
    description: 'Plans, meetings, decisions, goals, stakeholder communication, and product thinking.',
  },
  {
    id: 'marketing',
    label: 'Marketing & Copy',
    description: 'Persuasive and promotional text: headlines, landing pages, launch posts, release announcements, social copy.',
  },
  {
    id: 'learning',
    label: 'Teaching & Explaining',
    description: 'Teaching any topic to a human: audience level, analogies, exercises, quizzes, study plans. Not code explanation.',
  },
  {
    id: 'translate',
    label: 'Translation & Language',
    description: 'Translating between languages and registers, localization, tone adaptation, and language correction.',
  },
  {
    id: 'image',
    label: 'Image Generation',
    description: 'Modifiers for image models: style, medium, lighting, camera, composition, mood, negative prompts.',
  },
  {
    id: 'reasoning',
    label: 'Reasoning & Verification',
    description: 'How the AI thinks and checks: step by step, alternatives, self-review, stating assumptions and uncertainty.',
  },
  {
    id: 'tone',
    label: 'Communication Style',
    description: 'How the AI talks: concise, direct, no hedging, no filler, level of detail. Not output structure.',
  },
  {
    id: 'format',
    label: 'Output Format',
    description: 'Shape of the response: code only, unified diff, markdown sections, JSON, tables, file-by-file. Not tone.',
  },
]

export const CATEGORY_BY_ID: ReadonlyMap<string, Category> = new Map(
  CATEGORIES.map((c) => [c.id, c]),
)
