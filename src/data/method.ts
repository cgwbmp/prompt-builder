import type { Prompt } from '../types'

export const method: Prompt[] = [
  // Test-first methods
  {
    id: 'method.tdd-loop',
    title: 'TDD red-green-refactor',
    prompt:
      'Work in a tight test-driven loop: write one failing test, write the minimum code to pass it, then refactor with the test still green. Repeat for each behavior rather than writing all code first and tests afterward.',
    category: 'method',
  },
  {
    id: 'method.outside-in-tdd',
    title: 'Outside-in TDD',
    prompt:
      'Practice outside-in TDD: start with a failing acceptance test at the system boundary (HTTP endpoint, CLI, UI), then drive inward one collaborator at a time, using test doubles for collaborators that do not exist yet and replacing them as each is implemented.',
    category: 'method',
  },
  {
    id: 'method.inside-out-tdd',
    title: 'Inside-out TDD',
    prompt:
      'Practice inside-out TDD: start from the core domain logic with unit tests that use real collaborators, then compose outward through services to the boundary. Mock only external systems, never your own code.',
    category: 'method',
  },
  {
    id: 'method.bdd',
    title: 'Behavior-driven development',
    prompt:
      'Follow BDD: before writing code, express each behavior as Given/When/Then scenarios in the language of the domain, agree on them, then automate them as executable acceptance tests and implement until they pass. The scenarios are the specification.',
    category: 'method',
  },
  {
    id: 'method.acceptance-tests-first',
    title: 'Acceptance tests first',
    prompt:
      'For every user story, turn each acceptance criterion into an automated end-to-end or integration test before implementation begins. The story is done only when every acceptance test passes and no criterion lacks a test.',
    category: 'method',
  },
  {
    id: 'method.example-mapping',
    title: 'Example mapping first',
    prompt:
      'Before implementing a story, run example mapping: list the business rules, at least one concrete example per rule, and every open question. Do not start coding while an open question remains; turn the examples into tests when you do.',
    category: 'method',
  },
  {
    id: 'method.test-after',
    title: 'Implement first, test after',
    prompt:
      'Do not use test-first. Implement the change, then write tests that cover its behavior, including failure paths, before declaring it done. Tests are still mandatory; only the order differs.',
    category: 'method',
  },

  // Specification-first methods
  {
    id: 'method.spec-driven',
    title: 'Spec-driven development',
    prompt:
      'For any change that spans several files or sessions, write a short spec first: the files and interfaces involved, the behavior in concrete terms, what is out of scope, and an end-to-end verification step. Implement from the spec, keep it updated as the source of truth, and change the spec before changing behavior.',
    category: 'method',
  },
  {
    id: 'method.design-doc-first',
    title: 'Design doc before code',
    prompt:
      'For any feature larger than a day of work, write a design document before implementation: context, goals and non-goals, proposed design, alternatives considered, risks, and rollout. Get it reviewed and only then start coding.',
    category: 'method',
  },
  {
    id: 'method.interfaces-first',
    title: 'Contract before implementation',
    prompt:
      "Define the contract first (types, function signatures, API schema, event shapes) and check it against the callers' needs before writing any implementation. Implementations are cheap to change; contracts are not.",
    category: 'method',
  },
  {
    id: 'method.api-first',
    title: 'API-first',
    prompt:
      'Design the API contract (OpenAPI, GraphQL schema, or protobuf) before any implementation, review it with the consumers, and generate server stubs, client types, and a mock server from it so client and server can be built in parallel against the same contract.',
    category: 'method',
  },
  {
    id: 'method.readme-driven',
    title: 'README-driven development',
    prompt:
      'Write the README before the code: installation, a usage example, and the public API as the user will experience it. If a feature is awkward to explain in the README, redesign it before implementing it.',
    category: 'method',
  },
  {
    id: 'method.type-driven',
    title: 'Type-driven development',
    prompt:
      'Model the domain in types first so that invalid states are unrepresentable (sum types for states, branded types for identifiers, no optional fields that are required in some states), then let compiler errors drive the implementation until it type-checks.',
    category: 'method',
  },

  // Domain modeling methods
  {
    id: 'method.ddd',
    title: 'Domain-driven design',
    prompt:
      'Follow domain-driven design: build a ubiquitous language with the domain experts and use its exact terms in code, keep business rules in a rich domain model of entities, value objects, and aggregates, and keep infrastructure (persistence, HTTP, messaging) out of the domain layer.',
    category: 'method',
  },
  {
    id: 'method.event-storming',
    title: 'Event storming first',
    prompt:
      'Before modeling a new domain area, list the domain events in past tense on a timeline (OrderPlaced, PaymentCaptured), then add the commands that cause them, the actors, and the aggregates that own them. Derive the model and the module boundaries from that map.',
    category: 'method',
  },

  // Delivery methods
  {
    id: 'method.walking-skeleton',
    title: 'Walking skeleton first',
    prompt:
      'Build the thinnest possible end-to-end slice that works (input to output through every layer) before filling in any single layer in depth. Widen it feature by feature once the skeleton runs.',
    category: 'method',
  },
  {
    id: 'method.vertical-slices',
    title: 'Vertical slices',
    prompt:
      'Deliver every feature as a thin vertical slice through all layers (UI, API, domain, storage) that a user can exercise, rather than completing one layer for all features first. Each slice must be independently deployable and demonstrable.',
    category: 'method',
  },
  {
    id: 'method.spike-then-implement',
    title: 'Spike, then implement cleanly',
    prompt:
      'When the approach is uncertain, do a quick throwaway spike to learn what works, report the findings, then discard it and implement the real version cleanly from the start.',
    category: 'method',
  },
  {
    id: 'method.prototype-to-validate',
    title: 'Prototype to validate',
    prompt:
      'Before engineering a feature properly, build a low-fidelity prototype (clickable mock, hard-coded data, or script) that is good enough to put in front of users and answer the product question. Treat it as disposable and state what it must prove.',
    category: 'method',
  },
  {
    id: 'method.thin-mvp',
    title: 'Thin MVP, then iterate',
    prompt:
      'Implement the smallest version that delivers the user outcome end to end, ship it, and iterate on real feedback. List every deferred capability explicitly so nothing is silently dropped.',
    category: 'method',
  },
  {
    id: 'method.work-right-fast',
    title: 'Make it work, right, fast',
    prompt:
      'Proceed in three explicit passes: first make it work (correct on the happy path), then make it right (clean structure, edge cases, tests), then make it fast only where a measurement demands it. Say which pass you are in.',
    category: 'method',
  },
  {
    id: 'method.evolutionary-design',
    title: 'Evolutionary design',
    prompt:
      'Do not design up front beyond the current requirement. Build the simplest thing that works, rely on the test suite, and refactor toward better structure as each new requirement reveals it, rather than predicting future needs.',
    category: 'method',
  },
  {
    id: 'method.trunk-based',
    title: 'Trunk-based development',
    prompt:
      'Practice trunk-based development: integrate into main at least once a day in small commits, keep any branch shorter than a day, hide incomplete work behind feature flags rather than long-lived branches, and keep main releasable at every commit.',
    category: 'method',
  },
  {
    id: 'method.hypothesis-driven',
    title: 'Hypothesis-driven development',
    prompt:
      'Frame each feature as a hypothesis before building it: "We believe X for users Y; we will know it is true when metric Z changes by N." Instrument the metric as part of the change and report the result after release.',
    category: 'method',
  },
]
