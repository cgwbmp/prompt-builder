import type { Prompt } from '../types'

export const backend: Prompt[] = [
  {
    id: 'backend.resource-naming',
    title: 'Resource-oriented URLs',
    prompt:
      'Name endpoints after resources using plural lowercase kebab-case nouns (`/orders`, `/orders/{id}/line-items`), never verbs. Nest at most two levels deep and express non-CRUD actions as a sub-resource or a custom method such as `POST /orders/{id}:cancel`.',
    category: 'backend',
  },
  {
    id: 'backend.http-method-semantics',
    title: 'Honor HTTP method semantics',
    prompt:
      'Keep GET safe and side-effect free, make PUT a full idempotent replacement, use PATCH for partial updates, make DELETE idempotent, and use POST for creation and non-idempotent actions. Never perform writes through GET or expose the same operation under multiple methods.',
    category: 'backend',
  },
  {
    id: 'backend.status-codes',
    title: 'Precise status codes',
    prompt:
      'Return 201 with a `Location` header for creation, 204 for successful responses without a body, 202 for accepted async work, 400 for malformed requests, 422 for well-formed but invalid input, 401 for missing or invalid credentials, 403 for insufficient permission, 404 for unknown resources, 409 for state conflicts, and 429 for rate limits. Use 5xx only for server faults and never return 200 with an error in the body.',
    category: 'backend',
  },
  {
    id: 'backend.error-envelope',
    title: 'RFC 9457 error envelope',
    prompt:
      'Return every error, including framework and validation errors, in the same RFC 9457 Problem Details shape: `type`, `title`, `status`, `detail`, `instance`, plus an `errors` array of `{ field, message, code }` for validation and the request id. Never leak stack traces, SQL, or internal class names to clients.',
    category: 'backend',
  },
  {
    id: 'backend.central-error-handler',
    title: 'Central error mapping',
    prompt:
      'Throw typed domain errors from services and translate them to HTTP responses in one error-handling middleware, never in individual handlers. Map unexpected exceptions to a generic 500 body while logging the full error with the request id.',
    category: 'backend',
  },
  {
    id: 'backend.validate-at-boundary',
    title: 'Validate at the edge',
    prompt:
      'Validate every request body, query parameter, path parameter, and header against a schema (zod, pydantic, JSON Schema) before any business logic runs, rejecting or stripping unknown fields. Convert the validated input into typed domain objects so inner layers never re-check shapes.',
    category: 'backend',
  },
  {
    id: 'backend.input-size-limits',
    title: 'Enforce input size limits',
    prompt:
      'Cap request body size (for example 1 MB for JSON), array lengths, string lengths, JSON nesting depth, upload sizes, and the maximum page size, returning 413 or 422 when exceeded. Set these limits explicitly in the framework and in every schema rather than relying on defaults.',
    category: 'backend',
  },
  {
    id: 'backend.cursor-pagination',
    title: 'Cursor pagination by default',
    prompt:
      'Paginate every collection endpoint with an opaque cursor: accept `page_size` (with a default and a hard maximum) and `cursor`, and return `{ data, next_cursor }` with `next_cursor` null on the last page. Order by a stable key with a unique tiebreaker, and use offset pagination only for small, admin-only lists.',
    category: 'backend',
  },
  {
    id: 'backend.filtering-sorting-allowlist',
    title: 'Allowlisted filtering and sorting',
    prompt:
      'Support filtering and sorting through an explicit allowlist of fields (`?status=open&sort=-created_at`) and reject unknown fields with 400. Never pass client-supplied field names, operators, or expressions through to the data layer.',
    category: 'backend',
  },
  {
    id: 'backend.idempotency-keys',
    title: 'Idempotency keys on writes',
    prompt:
      'Accept an `Idempotency-Key` header on POST requests that create resources or trigger side effects such as payments. Store the key with a hash of the request and the original response for at least 24 hours, replay the stored response on retry, return 409 while the first attempt is still in progress, and return 422 if the same key arrives with a different payload.',
    category: 'backend',
  },
  {
    id: 'backend.authn-vs-authz',
    title: 'Authentication then authorization',
    prompt:
      'Authenticate once in middleware and respond 401 when credentials are missing or invalid; authorize in every handler against the specific resource and action (ownership, role, scope) and respond 403 when denied. Never rely on unguessable ids as protection, and decide consistently whether hidden resources answer 404 or 403.',
    category: 'backend',
  },
  {
    id: 'backend.token-flows',
    title: 'Token lifecycle flows',
    prompt:
      'Issue short-lived access tokens (minutes) with rotating refresh tokens that are revoked on reuse. Serve browser clients via `HttpOnly`, `Secure`, `SameSite` cookies with CSRF protection, and API clients via `Authorization: Bearer` headers; never accept tokens in query strings.',
    category: 'backend',
  },
  {
    id: 'backend.rate-limiting',
    title: 'Rate limit with headers',
    prompt:
      'Rate limit per API key or user and per IP using a token bucket or sliding window, with stricter limits on authentication and expensive endpoints. Respond 429 with `Retry-After` and expose `RateLimit-Limit`, `RateLimit-Remaining`, and `RateLimit-Reset` headers on every response.',
    category: 'backend',
  },
  {
    id: 'backend.request-ids',
    title: 'Propagate request ids',
    prompt:
      'Accept an incoming `X-Request-Id` (or W3C `traceparent`) or generate one, attach it to every log line for that request, forward it on all downstream calls, and echo it in the response headers and error bodies so a user report can be matched to server logs.',
    category: 'backend',
  },
  {
    id: 'backend.structured-logging',
    title: 'One log line per request',
    prompt:
      'Emit one structured log line per request with method, route template, status, duration, request id, and authenticated principal id. Never log request bodies, tokens, passwords, or personal data.',
    category: 'backend',
  },
  {
    id: 'backend.outbound-timeouts',
    title: 'Timeouts on every call',
    prompt:
      'Set explicit connect and total timeouts on every outbound HTTP, database, cache, and queue call; there is no such thing as a call without a deadline. Enforce a server-side request timeout as well, and move any work that cannot finish within it to an asynchronous job.',
    category: 'backend',
  },
  {
    id: 'backend.retries-with-backoff',
    title: 'Retry only what is safe',
    prompt:
      'Retry outbound calls only for idempotent operations and transient errors (timeouts, 502/503/504, connection resets), using exponential backoff with jitter and a small attempt cap, and honoring `Retry-After`. Add a circuit breaker for dependencies that fail repeatedly so a slow downstream does not exhaust your workers.',
    category: 'backend',
  },
  {
    id: 'backend.api-versioning',
    title: 'Version from day one',
    prompt:
      'Put a major version in the path (`/v1/`) from the first release and bump it only for breaking changes. Announce removals with `Deprecation` and `Sunset` headers and a documented timeline before shipping a new major version, and keep the previous version running through that window.',
    category: 'backend',
  },
  {
    id: 'backend.backward-compatibility',
    title: 'Additive changes only',
    prompt:
      'Within an API version only add optional fields, new endpoints, and new enum values; never rename or remove fields, change a field type, tighten validation, or change default behavior. Document that clients must ignore unknown fields and handle unknown enum values gracefully.',
    category: 'backend',
  },
  {
    id: 'backend.openapi-source-of-truth',
    title: 'OpenAPI as the contract',
    prompt:
      'Maintain an OpenAPI 3.1 specification for every endpoint, either hand-written and validated against the implementation or generated from the route schemas, including request and response examples and all error responses. Generate client SDKs and types from it rather than writing them by hand.',
    category: 'backend',
  },
  {
    id: 'backend.config-from-env',
    title: 'Config from environment',
    prompt:
      'Read all configuration (ports, URLs, credentials, feature flags) from environment variables per the Twelve-Factor App, parse it into a single typed config object at startup, and fail fast with a clear message if a required value is missing or invalid. Never hard-code environment-specific values or commit `.env` files.',
    category: 'backend',
  },
  {
    id: 'backend.graceful-shutdown',
    title: 'Graceful shutdown on SIGTERM',
    prompt:
      'Handle SIGTERM by immediately failing the readiness check, stopping acceptance of new connections, draining in-flight requests within a deadline (for example 25 seconds), closing database pools, queues, and other clients, and then exiting with code 0. Start fast so restarts and scale-outs are cheap.',
    category: 'backend',
  },
  {
    id: 'backend.health-endpoints',
    title: 'Liveness and readiness endpoints',
    prompt:
      'Expose a cheap unauthenticated `/healthz` liveness endpoint that only confirms the process is running and a separate `/readyz` readiness endpoint that checks required dependencies and returns 503 while starting up or shutting down. Exclude both from request logs and rate limits.',
    category: 'backend',
  },
  {
    id: 'backend.stateless-processes',
    title: 'Stateless processes',
    prompt:
      'Keep no per-user state in process memory: store sessions, caches, and locks in a shared backing service such as Redis or the database so any instance can serve any request. Never depend on sticky sessions or local disk between requests.',
    category: 'backend',
  },
  {
    id: 'backend.layered-handlers',
    title: 'Thin handlers, rich services',
    prompt:
      'Keep HTTP handlers to parsing, validation, calling one service method, and serializing the result. Put business rules in service modules that know nothing about HTTP, and hide storage behind repository functions so the service can be tested without a web server.',
    category: 'backend',
  },
  {
    id: 'backend.explicit-response-dtos',
    title: 'Explicit response shapes',
    prompt:
      'Never return database rows or ORM entities directly. Map them through an explicit response schema that allowlists fields, so adding a column (such as a password hash or internal flag) can never leak into the API.',
    category: 'backend',
  },
  {
    id: 'backend.json-conventions',
    title: 'Consistent JSON conventions',
    prompt:
      'Pick one key casing (snake_case or camelCase) and apply it to every payload. Serialize timestamps as ISO 8601 UTC strings with a `Z` suffix, ids as strings, money as integer minor units or decimal strings, and document whether `null` and an absent key mean the same thing.',
    category: 'backend',
  },
  {
    id: 'backend.partial-updates',
    title: 'PATCH as JSON Merge Patch',
    prompt:
      'Implement PATCH using JSON Merge Patch semantics (RFC 7396): only supplied keys change, `null` clears a field, and absent keys are untouched. Validate the merged result against the full resource schema before saving.',
    category: 'backend',
  },
  {
    id: 'backend.optimistic-concurrency',
    title: 'ETags for concurrent updates',
    prompt:
      'Return an `ETag` (or version number) with each resource and require `If-Match` on PUT and PATCH, responding 412 Precondition Failed when the version has changed. This prevents lost updates when two clients edit the same resource.',
    category: 'backend',
  },
  {
    id: 'backend.async-long-running',
    title: 'Async jobs for slow work',
    prompt:
      'For operations that take longer than about a second, enqueue a job and respond 202 with a `Location` pointing at a status resource the client can poll (or a webhook to notify). Make job handlers idempotent and safe to retry because queues deliver at least once.',
    category: 'backend',
  },
  {
    id: 'backend.batch-endpoints',
    title: 'Bulk operations with per-item results',
    prompt:
      'When offering bulk create or update, accept a bounded array (document the maximum), process items independently, and return a per-item result list with individual status and error rather than failing the whole batch on one bad item, unless the operation is explicitly transactional.',
    category: 'backend',
  },
  {
    id: 'backend.webhooks',
    title: 'Signed, retried webhooks',
    prompt:
      'Sign outgoing webhook payloads with an HMAC over the body and a timestamp in a header, include a unique event id and event type, retry failed deliveries with exponential backoff, and document that consumers must verify the signature and deduplicate by event id.',
    category: 'backend',
  },
  {
    id: 'backend.graphql-conventions',
    title: 'GraphQL schema discipline',
    prompt:
      'For GraphQL, design the schema first with nullable fields only where absence is meaningful, use Relay-style connections for lists, return domain errors as typed union results or `errors[].extensions.code` rather than throwing, and enforce query depth and complexity limits plus persisted queries in production.',
    category: 'backend',
  },
  {
    id: 'backend.cors-allowlist',
    title: 'Explicit CORS policy',
    prompt:
      'Configure CORS with an explicit allowlist of origins, methods, and headers; never reflect the request Origin header back, and never combine a wildcard origin with credentials. Cache preflight responses with `Access-Control-Max-Age` and keep the list in configuration, not code.',
    category: 'backend',
  },
  {
    id: 'backend.http-caching',
    title: 'Cache headers on reads',
    prompt:
      'Set `Cache-Control` on every GET response: `private, no-store` for user-specific data, `public, max-age` for shareable data, and support `ETag`/`If-None-Match` to return 304 for unchanged resources. Never let authenticated responses be cached by shared proxies.',
    category: 'backend',
  },
  {
    id: 'backend.dependency-injection',
    title: 'Inject clients, no import-time singletons',
    prompt:
      'Construct database pools, HTTP clients, and queues once at startup and pass them into services explicitly (constructor or factory arguments) instead of importing module-level singletons. This makes services testable with fakes and makes the shutdown order explicit.',
    category: 'backend',
  },
  {
    id: 'backend.endpoint-metrics',
    title: 'Instrument every endpoint',
    prompt:
      'Record request rate, error rate, and latency histograms (RED metrics) per route template and status class, plus queue depth and dependency latency, and expose them for scraping. Label by route template, never by raw path, to keep cardinality bounded.',
    category: 'backend',
  },
]
