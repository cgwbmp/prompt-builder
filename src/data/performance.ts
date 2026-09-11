import type { Prompt } from '../types'

export const performance: Prompt[] = [
  {
    id: 'performance.measure-before-optimizing',
    title: 'Measure before optimizing',
    prompt:
      'Measure before optimizing: reproduce the slowness with a benchmark or profile, identify the actual hotspot, and only then change code. Do not optimize based on intuition about what should be slow.',
    category: 'performance',
  },
  {
    id: 'performance.profile-with-flame-graphs',
    title: 'Profile, read the flame graph',
    prompt:
      'Use a profiler suited to the runtime (browser DevTools performance panel, py-spy or cProfile, pprof, perf, async-profiler) and read the flame graph for the widest frames. Quote the frames and percentages that justify the change.',
    category: 'performance',
  },
  {
    id: 'performance.set-a-budget',
    title: 'Set a performance budget',
    prompt:
      'Set an explicit performance budget before starting (for example p95 latency under 200 ms, initial JavaScript under 150 KB compressed, memory under 512 MB) and stop optimizing once the budget is met.',
    category: 'performance',
  },
  {
    id: 'performance.report-percentiles',
    title: 'Report p95, not averages',
    prompt:
      'Report latency and throughput as distributions: p50, p95, p99, and max, along with iteration count and warmup. Averages hide tail latency and are not an acceptable summary.',
    category: 'performance',
  },
  {
    id: 'performance.before-and-after-numbers',
    title: 'Before and after numbers',
    prompt:
      'For every optimization, include before and after measurements taken under identical conditions, the exact command or harness used, and the variance across runs. Do not claim a speedup without numbers.',
    category: 'performance',
  },
  {
    id: 'performance.rigorous-benchmarks',
    title: 'Benchmark rigorously',
    prompt:
      'Run benchmarks with warmup and multiple iterations on a quiet machine, using a proper harness (hyperfine, pytest-benchmark, JMH, criterion, benchmark.js) that handles JIT warmup and reports variance. Discard the first run.',
    category: 'performance',
  },
  {
    id: 'performance.realistic-data-volumes',
    title: 'Test at realistic scale',
    prompt:
      'Benchmark and profile with production-like data volumes and shapes. Code that is fast on ten rows can be pathological on ten million; test at the scale you actually expect in production.',
    category: 'performance',
  },
  {
    id: 'performance.no-premature-optimization',
    title: 'No premature optimization',
    prompt:
      'Do not micro-optimize code that is not on a measured hot path. Prefer the clear version, and leave a comment only where a non-obvious optimization was justified by a measurement.',
    category: 'performance',
  },
  {
    id: 'performance.state-the-tradeoff',
    title: 'State the trade-off',
    prompt:
      'State the trade-off of every optimization: added complexity, memory spent for speed, staleness introduced by caching, or reduced readability. If the trade-off is not worth the measured gain, recommend not doing it.',
    category: 'performance',
  },
  {
    id: 'performance.optimize-highest-leverage-layer',
    title: 'Optimize the highest layer first',
    prompt:
      'Optimize at the highest leverage layer first: eliminating a request beats making it faster, doing less work beats doing it faster, and removing a round trip beats shaving microseconds off a function.',
    category: 'performance',
  },
  {
    id: 'performance.complexity-before-constants',
    title: 'Fix complexity before constants',
    prompt:
      'Check the algorithmic complexity of loops over collections: replace nested scans with a hash lookup, avoid quadratic string building, and sort once instead of searching repeatedly. Fix the complexity class before tuning constant factors.',
    category: 'performance',
  },
  {
    id: 'performance.right-data-structure',
    title: 'Pick the right data structure',
    prompt:
      'Choose data structures by access pattern: a Set or Map for membership and lookup, a deque for queue operations, a heap for top-k, arrays for sequential scans. Do not use an array where an index would turn O(n) into O(1).',
    category: 'performance',
  },
  {
    id: 'performance.avoid-n-plus-one',
    title: 'Avoid N+1 access',
    prompt:
      'Avoid N+1 access patterns: when processing a list, fetch the related records with one batched query or request (IN clause, join, dataloader) instead of one call per item, and verify the query count in a test.',
    category: 'performance',
  },
  {
    id: 'performance.batch-and-parallelize-io',
    title: 'Batch and parallelize I/O',
    prompt:
      'Batch and pipeline I/O: group small writes, use bulk APIs, and issue independent network requests concurrently (Promise.all, asyncio.gather, worker pools) with a concurrency limit rather than one after another.',
    category: 'performance',
  },
  {
    id: 'performance.async-for-io-parallel-for-cpu',
    title: 'Async I/O, parallel CPU',
    prompt:
      'Do not add threads or processes to speed up I/O-bound code; use asynchronous concurrency. Use parallelism (workers, processes) only for CPU-bound work, and only after confirming the bottleneck is CPU.',
    category: 'performance',
  },
  {
    id: 'performance.keep-main-thread-free',
    title: 'Keep the main thread free',
    prompt:
      'Keep the event loop or UI thread responsive: move CPU-heavy work to worker threads or background jobs, never use synchronous file or network calls in request handlers, and yield periodically inside long loops.',
    category: 'performance',
  },
  {
    id: 'performance.cache-with-invalidation-plan',
    title: 'Cache with an invalidation plan',
    prompt:
      'Add a cache only with an invalidation plan: define the key, TTL, the event that invalidates it, the maximum size and eviction policy, and how a stale read would manifest to users. A cache without an invalidation story is a latent bug.',
    category: 'performance',
  },
  {
    id: 'performance.prevent-cache-stampedes',
    title: 'Prevent cache stampedes',
    prompt:
      'Protect caches against stampedes: coalesce concurrent misses for the same key (single-flight), add jitter to TTLs, and consider stale-while-revalidate so expiry does not cause a burst of load on the origin.',
    category: 'performance',
  },
  {
    id: 'performance.memoize-pure-computations',
    title: 'Memoize repeated pure work',
    prompt:
      'Memoize or precompute expensive pure computations that repeat with the same inputs, and store derived values instead of recomputing them in every render, loop iteration, or request.',
    category: 'performance',
  },
  {
    id: 'performance.hoist-invariant-work',
    title: 'Hoist work out of loops',
    prompt:
      'Hoist invariant work out of loops: compile regular expressions once, resolve lookups and DOM queries outside the iteration, and avoid parsing or serializing the same data more than once per request.',
    category: 'performance',
  },
  {
    id: 'performance.lazy-load-non-critical',
    title: 'Lazy load non-critical code',
    prompt:
      'Load expensive resources on demand: code-split routes and heavy components, defer non-critical modules, and initialize costly objects at first use. Never lazy load what the initial render needs.',
    category: 'performance',
  },
  {
    id: 'performance.guard-bundle-size',
    title: 'Guard the bundle size',
    prompt:
      'Keep the JavaScript bundle small: check the size impact of every new dependency, import specific functions rather than whole libraries, replace heavy libraries with lighter equivalents, and run a bundle analyzer when size grows.',
    category: 'performance',
  },
  {
    id: 'performance.core-web-vitals-thresholds',
    title: 'Track Core Web Vitals',
    prompt:
      'Track Core Web Vitals (LCP under 2.5 s, INP under 200 ms, CLS under 0.1) with real-user data, and run Lighthouse in CI with thresholds so regressions fail the build rather than reaching users.',
    category: 'performance',
  },
  {
    id: 'performance.fast-startup',
    title: 'Fast startup and cold start',
    prompt:
      'Keep startup and cold-start fast: avoid work at module import time, defer heavy imports and initialization until first use, and measure startup with the runtime tracing flags before and after.',
    category: 'performance',
  },
  {
    id: 'performance.prevent-memory-leaks',
    title: 'Prevent memory leaks',
    prompt:
      'Prevent memory leaks: remove event listeners and timers on teardown, bound every cache and in-memory collection, close streams, files, and connections in finally blocks, and avoid long-lived closures that hold large objects.',
    category: 'performance',
  },
  {
    id: 'performance.stream-large-data',
    title: 'Stream large data',
    prompt:
      'Process large files and result sets as streams or cursors rather than loading everything into memory: iterate in chunks, pipe transforms, and page through database reads.',
    category: 'performance',
  },
  {
    id: 'performance.reduce-hot-path-allocations',
    title: 'Reduce hot-path allocations',
    prompt:
      'In hot paths, reduce allocations: reuse buffers, avoid creating closures and intermediate arrays per iteration, and prefer in-place operations, but only after a profile shows allocation or garbage collection pressure.',
    category: 'performance',
  },
  {
    id: 'performance.connection-reuse',
    title: 'Reuse connections',
    prompt:
      'Reuse connections: use a shared HTTP client with keep-alive and a database connection pool sized for the workload. Never create a new client or connection per request.',
    category: 'performance',
  },
  {
    id: 'performance.timeouts-and-backpressure',
    title: 'Timeouts and backpressure',
    prompt:
      'Set a timeout on every external call and apply backpressure to producers (bounded queues, semaphores) so a slow dependency degrades throughput gracefully instead of exhausting memory or threads.',
    category: 'performance',
  },
  {
    id: 'performance.compress-and-cache-responses',
    title: 'Compress and cache responses',
    prompt:
      'Enable response compression (brotli or gzip), send Cache-Control and ETag headers for static and cacheable responses, and serve static assets with long-lived immutable caching plus hashed filenames.',
    category: 'performance',
  },
  {
    id: 'performance.mind-serialization-cost',
    title: 'Mind serialization cost',
    prompt:
      'Watch serialization costs: do not clone via JSON stringify and parse, do not serialize fields the consumer never reads, and choose compact wire formats where payloads are large or frequent.',
    category: 'performance',
  },
  {
    id: 'performance.instrument-what-you-optimize',
    title: 'Instrument what you optimize',
    prompt:
      'Add a latency histogram or counter for the operation you optimize so the improvement is verifiable in production and future regressions are visible.',
    category: 'performance',
  },
  {
    id: 'performance.regression-guard',
    title: 'Guard against regressions',
    prompt:
      'Add a regression check for the optimized path: a benchmark in CI with a threshold, a bundle size limit, or a test asserting the number of queries, so the gain is protected against future changes.',
    category: 'performance',
  },
]
