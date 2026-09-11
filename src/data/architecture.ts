import type { Prompt } from '../types'

export const architecture: Prompt[] = [
  {
    id: 'architecture.explicit-module-boundaries',
    title: 'Explicit module boundaries',
    prompt:
      "Organize code into modules with an explicit public interface and hide everything else. Other modules depend only on that public surface; never reach into another module's internals or private files.",
    category: 'architecture',
  },
  {
    id: 'architecture.dependencies-point-inward',
    title: 'Dependencies point inward',
    prompt:
      'Point dependencies inward: domain logic depends on nothing, application logic depends on the domain, and infrastructure (database, HTTP, frameworks, third-party SDKs) depends on both. Never import infrastructure from the domain layer.',
    category: 'architecture',
  },
  {
    id: 'architecture.ports-and-adapters',
    title: 'Ports and adapters',
    prompt:
      'Access external systems through ports (interfaces defined by the application) implemented by adapters, so the database, message broker, or third-party API can be swapped or faked in tests without touching business logic.',
    category: 'architecture',
  },
  {
    id: 'architecture.solid-pragmatically',
    title: 'SOLID, pragmatically',
    prompt:
      'Apply SOLID pragmatically: one reason to change per module, extension points only where variation is expected, substitutable implementations behind small focused interfaces, and abstractions at boundaries. Skip a principle where it adds indirection without a concrete variation.',
    category: 'architecture',
  },
  {
    id: 'architecture.rule-of-three',
    title: 'Abstract on the third use',
    prompt:
      'Do not introduce an abstraction until there are at least three concrete uses with a clearly shared shape. Duplication is cheaper than the wrong abstraction; when in doubt, keep the code inline.',
    category: 'architecture',
  },
  {
    id: 'architecture.explicit-over-implicit',
    title: 'Explicit dependency wiring',
    prompt:
      'Prefer explicit over implicit: pass dependencies as parameters or through a constructor rather than reaching for globals, singletons, or service locators, and keep all wiring visible in one composition root.',
    category: 'architecture',
  },
  {
    id: 'architecture.write-an-adr',
    title: 'Write an ADR',
    prompt:
      'Write an Architecture Decision Record for any decision that is hard to reverse or affects several teams (database, framework, messaging pattern, module boundaries, auth model). Record the context, options considered, the decision, and its consequences including the downsides accepted; never edit an accepted ADR, supersede it.',
    category: 'architecture',
  },
  {
    id: 'architecture.trade-off-table',
    title: 'Present a trade-off table',
    prompt:
      'When proposing a design, present at least two alternatives in a trade-off table covering complexity, performance, operational cost, reversibility, and team familiarity, then recommend one and say why the others lose.',
    category: 'architecture',
  },
  {
    id: 'architecture.non-functional-requirements-first',
    title: 'Non-functional requirements first',
    prompt:
      'Before designing, list the non-functional requirements explicitly: expected load, latency targets, availability, data retention, compliance, and team size. Every design decision must trace back to one of them.',
    category: 'architecture',
  },
  {
    id: 'architecture.simplest-that-meets-requirements',
    title: 'Simplest design that fits',
    prompt:
      'Choose the simplest architecture that meets the stated requirements. Add a layer, queue, cache, or service only when a specific requirement demands it, and name that requirement in the proposal.',
    category: 'architecture',
  },
  {
    id: 'architecture.rank-by-reversibility',
    title: 'Rank decisions by reversibility',
    prompt:
      'Rank design options by how cheaply they can be undone. Spend little effort on reversible choices (a library behind an interface) and most of it on the irreversible ones: data model, public contracts, and service boundaries.',
    category: 'architecture',
  },
  {
    id: 'architecture.twelve-factor-design',
    title: 'Twelve-Factor design',
    prompt:
      'Follow Twelve-Factor app design: configuration comes from the environment, dependencies are declared explicitly, backing services (database, cache, queue, mail) are attached resources swappable by config, and there are no environment-specific code branches.',
    category: 'architecture',
  },
  {
    id: 'architecture.idempotent-consumers',
    title: 'Idempotent consumers and handlers',
    prompt:
      'Design every message consumer and retryable handler to be idempotent: assume any message can be delivered more than once, deduplicate with an idempotency key or natural identifier, and make writes upserts or conditional updates.',
    category: 'architecture',
  },
  {
    id: 'architecture.monolith-first',
    title: 'Monolith first',
    prompt:
      'Start with a well-modularized monolith and extract a service only for a concrete reason: independent scaling, a separate team owning it, or a different deployment cadence. Do not begin a new system as microservices.',
    category: 'architecture',
  },
  {
    id: 'architecture.avoid-distributed-monolith',
    title: 'Avoid the distributed monolith',
    prompt:
      'Avoid the distributed monolith: if two services must always deploy together, share a database, or call each other synchronously in a chain, merge them or redraw the boundary between them.',
    category: 'architecture',
  },
  {
    id: 'architecture.exclusive-data-ownership',
    title: 'Each service owns its data',
    prompt:
      "Give each service exclusive ownership of its data. Other services obtain that data through the owner's API or published events, never by querying its tables directly.",
    category: 'architecture',
  },
  {
    id: 'architecture.events-only-when-decoupling-matters',
    title: 'Events only when decoupling pays',
    prompt:
      'Use events to decouple modules only when the producer genuinely should not know about its consumers. Before choosing events over direct calls, address ordering, at-least-once delivery, schema evolution, observability, and how to replay or repair.',
    category: 'architecture',
  },
  {
    id: 'architecture.consistency-boundaries',
    title: 'Define consistency boundaries',
    prompt:
      'Define transactional consistency boundaries explicitly: whatever must change atomically lives in one aggregate and one database; everything across that boundary is eventually consistent and designed to tolerate a delay.',
    category: 'architecture',
  },
  {
    id: 'architecture.cqrs-only-when-warranted',
    title: 'CQRS only when warranted',
    prompt:
      'Separate read and write models only when read and write workloads differ substantially in shape or scale. Otherwise keep a single model, since two models double the maintenance and introduce consistency lag.',
    category: 'architecture',
  },
  {
    id: 'architecture.bounded-contexts',
    title: 'Model bounded contexts',
    prompt:
      'Model the domain as bounded contexts, each with its own vocabulary. The same word (Customer, Order, Account) may mean different things in different contexts; do not force one shared model across them.',
    category: 'architecture',
  },
  {
    id: 'architecture.anti-corruption-layer',
    title: 'Anti-corruption layer',
    prompt:
      'When integrating a legacy or third-party system, wrap it in an anti-corruption layer that translates its model into yours, so its quirks and changes stay out of your domain.',
    category: 'architecture',
  },
  {
    id: 'architecture.define-failure-modes',
    title: 'Define every failure mode',
    prompt:
      'For every external dependency, define the failure mode: timeout, retry with backoff and a cap, circuit breaker, fallback, or degraded mode. State what the user experiences when the dependency is down.',
    category: 'architecture',
  },
  {
    id: 'architecture.name-the-next-bottleneck',
    title: 'Name the next bottleneck',
    prompt:
      'When asked about scalability, identify the first concrete bottleneck (single database writer, shared cache, sequential job, hot partition) and design for the next tenfold growth, not the next thousandfold.',
    category: 'architecture',
  },
  {
    id: 'architecture.cross-cutting-at-boundaries',
    title: 'Cross-cutting concerns at boundaries',
    prompt:
      'Handle cross-cutting concerns (logging, authentication, tracing, validation, retries) in middleware, decorators, or interceptors at the boundary, not scattered through business logic.',
    category: 'architecture',
  },
  {
    id: 'architecture.offload-to-background-jobs',
    title: 'Offload to background jobs',
    prompt:
      'Move work that need not finish within the request (emails, thumbnails, reports, webhooks) to a durable queue processed by workers, and return to the caller once the job is enqueued.',
    category: 'architecture',
  },
  {
    id: 'architecture.evolve-contracts-compatibly',
    title: 'Evolve contracts compatibly',
    prompt:
      'Evolve shared contracts (API schemas, event payloads, stored formats) backward-compatibly: add optional fields, never rename or remove without a deprecation period, and version explicitly only when a breaking change is unavoidable.',
    category: 'architecture',
  },
  {
    id: 'architecture.organize-by-feature',
    title: 'Organize by feature',
    prompt:
      'Organize code by feature or domain concept (orders, billing, notifications) rather than by technical layer (controllers, models, utils), so a change to one capability touches one folder.',
    category: 'architecture',
  },
  {
    id: 'architecture.no-catch-all-modules',
    title: 'No catch-all modules',
    prompt:
      'Do not create catch-all shared, common, or utils modules. Give shared code a name that says what it is (money, dates, http-client) and keep each such module cohesive around one concept.',
    category: 'architecture',
  },
  {
    id: 'architecture.enforce-boundaries-with-tooling',
    title: 'Enforce boundaries with tooling',
    prompt:
      'Enforce module boundaries with tooling (dependency-cruiser, ESLint import rules, ArchUnit, Go internal packages, Nx module boundaries) so violations fail the build instead of relying on convention and review.',
    category: 'architecture',
  },
  {
    id: 'architecture.diagram-context-and-containers',
    title: 'Diagram context and containers',
    prompt:
      'When describing a system design, provide a context diagram and a container diagram (C4 levels 1 and 2) showing the components, their responsibilities, and the protocols between them before going into code.',
    category: 'architecture',
  },
  {
    id: 'architecture.observability-by-design',
    title: 'Observability by design',
    prompt:
      'Design for observability from the start: propagate a correlation id across every service boundary, emit structured logs, and record metrics per business operation so failures can be traced without retrofitting instrumentation.',
    category: 'architecture',
  },
  {
    id: 'architecture.incremental-migration-path',
    title: 'Incremental migration path',
    prompt:
      'When proposing a large architectural change, include a migration path of incremental, reversible steps with a coexistence period for old and new, never a big-bang cutover.',
    category: 'architecture',
  },
]
