import type { Prompt } from '../types'

export const errors: Prompt[] = [
  {
    id: 'errors.validate-at-boundaries',
    title: 'Validate at boundaries only',
    prompt:
      'Validate inputs, configuration, and environment where they enter the system (request handler, message consumer, CLI parser, startup) and reject immediately with a specific error. Inside the core, trust already-validated data instead of re-checking defensively at every layer.',
    category: 'errors',
  },
  {
    id: 'errors.crash-on-bad-config',
    title: 'Refuse to start misconfigured',
    prompt:
      'At startup, load and validate every required setting and connection; if anything is missing or malformed, log the exact key and exit non-zero rather than starting in a state that fails on the first request.',
    category: 'errors',
  },
  {
    id: 'errors.catch-where-you-can-act',
    title: 'Catch where you can act',
    prompt:
      'Catch an error only where you can recover, translate it into a domain result, or add context and rethrow. Let everything else propagate to a single top-level handler per entry point (HTTP middleware, job runner, CLI main) instead of catching in intermediate layers.',
    category: 'errors',
  },
  {
    id: 'errors.domain-vs-programmer-errors',
    title: 'Domain errors vs bugs',
    prompt:
      'Model expected failures as typed domain errors (NotFound, Conflict, ValidationFailed, RateLimited, DependencyUnavailable) that carry a stable code and structured fields, and keep them separate from programmer errors such as null dereferences, which should surface loudly rather than be handled.',
    category: 'errors',
  },
  {
    id: 'errors.expected-outcomes-as-values',
    title: 'Expected outcomes as values',
    prompt:
      'Return expected outcomes such as validation failure, not-found, or user cancellation as result values or discriminated unions on hot paths, and reserve exceptions for conditions the caller cannot reasonably anticipate. Never use exceptions for ordinary control flow.',
    category: 'errors',
  },
  {
    id: 'errors.wrap-with-cause',
    title: 'Wrap errors with cause',
    prompt:
      'When rethrowing, wrap the original error with what was being attempted ("loading invoice 123 for tenant acme") and keep the original as the cause (the Error cause option, %w in Go, raise ... from in Python) so the full chain and original stack reach the log.',
    category: 'errors',
  },
  {
    id: 'errors.single-translation-point',
    title: 'One error-mapping point',
    prompt:
      'Translate errors into HTTP responses, exit codes, or UI messages in exactly one place per entry point. Business code throws or returns domain errors and never builds response bodies, chooses status codes, or formats user text.',
    category: 'errors',
  },
  {
    id: 'errors.error-code-catalog',
    title: 'Error code catalog',
    prompt:
      'Maintain a catalog of machine-readable error codes (PAYMENT_DECLINED, ORDER_NOT_FOUND) each with a fixed meaning, status mapping, user message template, and remediation note. Add a new code rather than repurposing one, and never change the meaning of a published code.',
    category: 'errors',
  },
  {
    id: 'errors.user-facing-messages',
    title: 'User-facing message rules',
    prompt:
      'User-facing error messages state what happened, what the user can do next, and a short reference id that support can match to logs. Never show stack traces, SQL, internal hostnames, or raw exception text to end users.',
    category: 'errors',
  },
  {
    id: 'errors.retry-budget-backoff-jitter',
    title: 'Retry with budget and jitter',
    prompt:
      'Retry only idempotent operations (or ones protected by an idempotency key), only on transient failures (timeouts, connection resets, 429, 503), with exponential backoff, full jitter, a small attempt cap (about 3), and a per-client retry budget so retries can never multiply load during an outage. Honor Retry-After when present.',
    category: 'errors',
  },
  {
    id: 'errors.circuit-breaker',
    title: 'Circuit breakers per dependency',
    prompt:
      'Wrap calls to each external dependency in a circuit breaker that opens after a failure or slow-call threshold, fails fast while open, and probes with a half-open trial before closing. Export breaker state as a metric and log state transitions once, not on every rejected call.',
    category: 'errors',
  },
  {
    id: 'errors.deadline-propagation',
    title: 'Deadlines, not just timeouts',
    prompt:
      'Set an explicit timeout on every network, database, queue, and lock call and propagate a deadline through the call chain (context deadline, AbortSignal) so each downstream timeout is shorter than the remaining budget of its caller. A default of "wait forever" is a bug.',
    category: 'errors',
  },
  {
    id: 'errors.bulkheads',
    title: 'Bulkhead dependencies',
    prompt:
      'Isolate each dependency with its own connection pool, worker pool, or concurrency limit so a slow third-party API cannot exhaust the threads or connections needed by unrelated endpoints. Reject with a fast error when the bulkhead is full instead of queueing indefinitely.',
    category: 'errors',
  },
  {
    id: 'errors.graceful-degradation',
    title: 'Define the fallback',
    prompt:
      'For every non-critical dependency (recommendations, analytics, avatars, search suggestions) define what happens when it fails: cached value, static default, or feature hidden. The core path must still complete, and every degraded response increments a metric.',
    category: 'errors',
  },
  {
    id: 'errors.kill-switches',
    title: 'Kill switch for risky paths',
    prompt:
      'Put each external integration and each new risky code path behind a runtime flag that on-call can flip without a deploy, and make the disabled behavior an explicit, tested fallback rather than an exception.',
    category: 'errors',
  },
  {
    id: 'errors.structured-json-logs',
    title: 'Structured JSON log schema',
    prompt:
      'Emit logs as single-line JSON with a fixed set of top-level fields (UTC ISO 8601 timestamp, level, message, service, version, trace_id, span_id) plus event-specific key-value fields. Keep the message a static template ("payment capture failed") and put every variable in a field so logs can be queried and grouped.',
    category: 'errors',
  },
  {
    id: 'errors.log-level-semantics',
    title: 'Log level semantics',
    prompt:
      'ERROR means a failure that was not handled and needs human attention; WARN means an anomaly that was handled (retry succeeded, fallback used, deprecated call); INFO means a business event or state transition; DEBUG is developer detail off in production. Never log expected client errors such as validation failures or 404s at ERROR.',
    category: 'errors',
  },
  {
    id: 'errors.log-once-at-boundary',
    title: 'Log each error once',
    prompt:
      'Log an error exactly once, at the boundary where it is finally handled, with its full cause chain. Do not log-and-rethrow in inner layers; that produces several entries for one failure, inflates error counts, and buries the real context.',
    category: 'errors',
  },
  {
    id: 'errors.actionable-log-context',
    title: 'Actionable context in logs',
    prompt:
      'Every WARN or ERROR log includes the identifiers needed to act (entity ids, tenant, operation, dependency name, attempt number, elapsed milliseconds) but not whole object dumps. Write the message for an on-call engineer who has never seen the code.',
    category: 'errors',
  },
  {
    id: 'errors.redaction-in-logger',
    title: 'Redact in the logger',
    prompt:
      'Enforce log hygiene in the logging layer, not at call sites: a redaction step for known sensitive keys (password, token, authorization, cookie, secret, card_number, email) and request or response bodies off by default. Assume anything that reaches the logger is stored for months and searchable by many people.',
    category: 'errors',
  },
  {
    id: 'errors.log-storm-protection',
    title: 'Prevent log storms',
    prompt:
      'Rate-limit or aggregate repeated identical errors (log the first occurrence, then a count every N seconds) so a single outage cannot emit millions of lines, exhaust disk, or blow the logging budget.',
    category: 'errors',
  },
  {
    id: 'errors.correlation-id-context',
    title: 'Correlation id in every log',
    prompt:
      'Accept or generate a correlation id at the edge and bind it to the logging context for the entire unit of work, including async continuations, background jobs it spawns, and outgoing requests. Return it in error responses so a user report can be matched to the exact log lines and trace.',
    category: 'errors',
  },
  {
    id: 'errors.red-use-metric-naming',
    title: 'RED/USE metrics, consistent names',
    prompt:
      'Instrument every service with RED metrics (request rate, error rate, duration) and every resource with USE (utilization, saturation, errors). Name metrics snake_case as namespace_subsystem_name_unit with base units (seconds, bytes), and express dimensions as labels rather than encoding them in the name.',
    category: 'errors',
  },
  {
    id: 'errors.latency-histograms',
    title: 'Latency as histograms',
    prompt:
      'Record latency as a histogram with buckets placed around your SLO thresholds, never as an average or gauge, and report p50, p95, and p99. Keep the latency of successful and failed requests separate; fast failures hide slow successes.',
    category: 'errors',
  },
  {
    id: 'errors.low-cardinality-labels',
    title: 'Low-cardinality metric labels',
    prompt:
      'Never put unbounded values (user id, request id, email, raw URL with ids) in metric labels; use a route template or enumerated category instead. High-cardinality detail belongs in log fields and span attributes, not metrics.',
    category: 'errors',
  },
  {
    id: 'errors.otel-semantic-conventions',
    title: 'OpenTelemetry attribute names',
    prompt:
      'Use OpenTelemetry semantic conventions for attribute names (http.request.method, http.response.status_code, db.system, server.address, error.type, messaging.system) across logs, spans, and metrics, and namespace custom attributes under your service or company name. Never invent attributes inside a standard namespace.',
    category: 'errors',
  },
  {
    id: 'errors.spans-for-io-and-propagation',
    title: 'Span every I/O, propagate context',
    prompt:
      'Create a span for every outbound I/O (HTTP call, DB query, cache access, queue publish and consume) named by operation not by unique id ("GET /users/{id}", "SELECT users"), record exceptions on the span, and set error status only for real failures. Propagate W3C traceparent across every hop including queues and scheduled jobs, linking consumer spans to their producers.',
    category: 'errors',
  },
  {
    id: 'errors.trace-sampling-strategy',
    title: 'Sample traces deliberately',
    prompt:
      'Sample traces by rule or tail-based: keep all traces with errors or latency above the SLO, keep a small fixed percentage of healthy traffic, and never sample logs or metrics. Document the sampling rate so any count derived from traces is corrected for it.',
    category: 'errors',
  },
  {
    id: 'errors.telemetry-never-breaks-app',
    title: 'Telemetry never breaks the app',
    prompt:
      'Logging, metrics, and tracing calls are non-blocking, bounded in memory, and fail silently (incrementing an internal drop counter) when the backend is unreachable. A telemetry outage must never cause a request to fail or slow down.',
    category: 'errors',
  },
  {
    id: 'errors.slo-burn-rate-alerts',
    title: 'Alert on SLO burn rate',
    prompt:
      'Define SLIs (success ratio, latency under threshold) and SLOs for each user-facing operation, and alert on error-budget burn rate over multiple windows (for example 14x over 1 hour and 6x over 6 hours) rather than on raw thresholds like CPU or queue depth. Causes go on dashboards; only symptoms page a human.',
    category: 'errors',
  },
  {
    id: 'errors.runbook-in-every-alert',
    title: 'Runbook link in every alert',
    prompt:
      'Every alert definition includes a link to a runbook that states what the alert means, how to confirm it, likely causes in order of probability, mitigation steps, and the dashboard and log query to use. Do not merge an alert without its runbook.',
    category: 'errors',
  },
  {
    id: 'errors.dead-letter-queues',
    title: 'Dead-letter poison messages',
    prompt:
      'Give every consumer a dead-letter queue: after N failed attempts with backoff, move the message with the failure reason and attempt count attached, alert on DLQ depth, and provide a replay tool. Never drop a message silently or retry a poison message forever.',
    category: 'errors',
  },
  {
    id: 'errors.async-job-health',
    title: 'Observe background jobs',
    prompt:
      'Instrument background and scheduled jobs like requests: log start and finish with duration and outcome, emit success and failure counts and queue lag, record the last successful run time per job, and alert on staleness (no success within the expected interval), not only on explicit failures.',
    category: 'errors',
  },
  {
    id: 'errors.handle-every-async-error',
    title: 'No unhandled async errors',
    prompt:
      'Every promise, task, goroutine, or callback must have its error handled or propagated: no fire-and-forget without a catch that logs, no empty catch blocks, no ignored return codes. Either await it or detach it explicitly with an error handler attached.',
    category: 'errors',
  },
  {
    id: 'errors.crash-handlers-flush-exit',
    title: 'Crash handlers flush and exit',
    prompt:
      'Register top-level handlers for uncaught exceptions, unhandled rejections, panics, and SIGTERM that log the error with its stack, flush logs and telemetry, and exit non-zero so the supervisor restarts a clean process. Never swallow an uncaught error and continue in an unknown state.',
    category: 'errors',
  },
  {
    id: 'errors.error-tracker-grouping',
    title: 'Error tracker with fingerprints',
    prompt:
      'Send unhandled errors to an error tracker (Sentry or equivalent) tagged with release version, environment, and a pseudonymous user or tenant id, with breadcrumbs of recent actions, and configure fingerprinting so one root cause groups into a single issue instead of hundreds.',
    category: 'errors',
  },
  {
    id: 'errors.test-failure-paths',
    title: 'Test the failure paths',
    prompt:
      'For each dependency, inject faults (timeout, connection refused, 500, malformed payload) in tests and assert the domain error type, the mapped status or exit code, the user-facing message, and that the expected log line and metric were emitted.',
    category: 'errors',
  },
]
