import type { Prompt } from '../types'

export const environment: Prompt[] = [
  {
    id: 'environment.node-18',
    title: 'Target Node 18',
    prompt:
      'The code must run on Node.js 18. Do not use APIs, flags, or syntax added in later Node releases; check the "Added in" version in the Node docs for anything you are unsure about, and keep the `engines.node` field consistent with this target.',
    category: 'environment',
  },
  {
    id: 'environment.node-20',
    title: 'Target Node 20 LTS',
    prompt:
      'Target Node.js 20 LTS. Use built-ins that are stable in Node 20 (`node:test`, `structuredClone`, `AbortSignal.timeout`, `node:crypto` Web Crypto) instead of polyfills or third-party equivalents, and avoid anything still marked experimental in that release.',
    category: 'environment',
  },
  {
    id: 'environment.node-22',
    title: 'Target Node 22',
    prompt:
      'Target Node.js 22 or newer. Prefer modern built-ins over dependencies (native `fetch`, `node:test`, `Array.prototype.toSorted`, `Set` methods) and do not add compatibility shims for older Node versions.',
    category: 'environment',
  },
  {
    id: 'environment.python-3-10',
    title: 'Target Python 3.10',
    prompt:
      'The code must run on Python 3.10. Do not use features added in 3.11 or later (`tomllib`, `ExceptionGroup`, `Self` typing, `StrEnum`); use backports such as `typing_extensions` only when there is no 3.10-native alternative.',
    category: 'environment',
  },
  {
    id: 'environment.python-3-12',
    title: 'Target Python 3.12',
    prompt:
      'Target Python 3.12 or newer. Use modern syntax freely (`type` statements, PEP 695 generics, `match`, `tomllib`) and do not add compatibility code for older interpreters.',
    category: 'environment',
  },
  {
    id: 'environment.browsers-last-2',
    title: 'Browsers: last 2 versions',
    prompt:
      'Frontend code must work in the Browserslist target "last 2 versions, not dead". Check a feature against that support range before using it without transpilation, and route any newer syntax through the build tool rather than hand-written fallbacks.',
    category: 'environment',
  },
  {
    id: 'environment.es2020-output',
    title: 'ES2020 output',
    prompt:
      'Emitted JavaScript must be ES2020. Do not rely on runtime features newer than that (top-level await, `#private` class methods, `Array.prototype.at`, `Object.hasOwn`) without a transpile or polyfill step, and keep the compiler `target` set to ES2020.',
    category: 'environment',
  },
  {
    id: 'environment.safari-15',
    title: 'Support Safari 15+',
    prompt:
      'The UI must work in Safari 15 and later, including iOS Safari. Before using a CSS or web platform feature, confirm it shipped by Safari 15.0 on caniuse or MDN; avoid features that arrived later, such as `:has()`, container queries, and `Array.prototype.findLast`, unless a fallback is provided.',
    category: 'environment',
  },
  {
    id: 'environment.no-network-build',
    title: 'No network at build time',
    prompt:
      'The build must succeed with no network access. Do not add steps that download anything during the build (postinstall fetches, remote schemas, font or binary downloads); everything needed must come from the lockfile-resolved dependencies or be checked in.',
    category: 'environment',
  },
  {
    id: 'environment.offline-runtime',
    title: 'Must work offline',
    prompt:
      'The application must function without an internet connection. Do not load scripts, styles, fonts, or data from CDNs or remote URLs at runtime; bundle or vendor them, and design any network feature to degrade gracefully when the request fails.',
    category: 'environment',
  },
  {
    id: 'environment.air-gapped',
    title: 'Air-gapped deployment',
    prompt:
      'The target environment is air-gapped: no outbound network at install, build, or runtime. Assume packages come from an internal mirror, avoid dependencies that phone home or fetch binaries on install, and never rely on telemetry, update checks, or remote license validation.',
    category: 'environment',
  },
  {
    id: 'environment.corporate-proxy',
    title: 'Behind a corporate proxy',
    prompt:
      'All outbound traffic goes through a corporate HTTP proxy with a custom CA. Any HTTP client you use or generate must honor `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY`, and must accept an extra CA bundle from an environment variable instead of disabling TLS verification.',
    category: 'environment',
  },
  {
    id: 'environment.cross-platform-paths',
    title: 'Windows, macOS, Linux paths',
    prompt:
      'The code must run on Windows, macOS, and Linux. Build paths with the platform path API (`path.join`, `pathlib`) rather than string concatenation with `/`, never hardcode drive letters or home directory layouts, and do not shell out to Unix-only tools such as `sed`, `grep`, or `rm -rf`.',
    category: 'environment',
  },
  {
    id: 'environment.line-endings-case',
    title: 'Line endings and case sensitivity',
    prompt:
      'Assume files may arrive with CRLF line endings and that the filesystem may be case-sensitive. Normalize line endings when parsing text, match import paths and filenames exactly by case, and do not rely on two names differing only in case.',
    category: 'environment',
  },
  {
    id: 'environment.alpine-musl',
    title: 'Alpine / musl container',
    prompt:
      'The runtime image is Alpine Linux with musl libc. Avoid packages that ship only glibc-linked prebuilt binaries, verify that any native dependency provides a musl build, and use BusyBox-compatible shell syntax in container scripts.',
    category: 'environment',
  },
  {
    id: 'environment.arm-and-x86',
    title: 'ARM64 and x86_64',
    prompt:
      'The code and images must run on both linux/arm64 and linux/amd64. Do not hardcode an architecture in download URLs, Docker base tags, or build flags; use multi-arch images and architecture-detecting logic, and flag any dependency that lacks an arm64 build.',
    category: 'environment',
  },
  {
    id: 'environment.memory-limit-512',
    title: '512 MB memory limit',
    prompt:
      'The process runs with a hard 512 MB memory limit. Stream large inputs instead of loading them into memory, avoid buffering whole responses or files, cap in-memory caches, and mention any operation whose memory use grows with input size.',
    category: 'environment',
  },
  {
    id: 'environment.single-cpu',
    title: 'Single vCPU budget',
    prompt:
      'The service runs on a single vCPU. Do not spawn worker pools or assume parallelism will speed anything up, keep the event loop free of long synchronous work, and prefer algorithmic improvements over concurrency.',
    category: 'environment',
  },
  {
    id: 'environment.serverless-limits',
    title: 'Serverless execution limits',
    prompt:
      'The code runs as a serverless function with a short execution timeout and a cold start on each new instance. Keep the bundle small, initialize clients lazily at module scope so they are reused across warm invocations, avoid work that can exceed the timeout, and never rely on local state surviving between invocations.',
    category: 'environment',
  },
  {
    id: 'environment.edge-runtime',
    title: 'Edge runtime, no Node APIs',
    prompt:
      'The code runs on an edge runtime (Cloudflare Workers, Vercel Edge, Deno Deploy). Use only Web Standard APIs (`fetch`, `Request`, `Response`, Web Crypto, `URL`, streams); do not import `fs`, `path`, `child_process`, `Buffer`, or any package that depends on them, and avoid raw TCP database drivers.',
    category: 'environment',
  },
  {
    id: 'environment.browser-only',
    title: 'Browser-only bundle',
    prompt:
      'This code ships to the browser only. Do not use Node built-ins (`fs`, `path`, `process`, `Buffer`) or packages that require them, do not reference `__dirname` or `require`, and assume no bundler shims are available.',
    category: 'environment',
  },
  {
    id: 'environment.no-native-modules',
    title: 'No native modules',
    prompt:
      'Do not add dependencies that require native compilation or prebuilt binaries (node-gyp, N-API addons, C extensions). Choose pure JavaScript or pure Python alternatives even when they are slower, and say when no pure alternative exists.',
    category: 'environment',
  },
  {
    id: 'environment.es5-legacy-build',
    title: 'ES5 legacy build',
    prompt:
      'The production bundle must be transpiled to ES5 and run without a module system at runtime. Do not use syntax or globals that cannot be transpiled or polyfilled (`Proxy`, `WeakRef`, BigInt, regex lookbehind), and ensure every needed polyfill is explicitly included.',
    category: 'environment',
  },
  {
    id: 'environment.low-end-mobile',
    title: 'Low-end mobile devices',
    prompt:
      'Users are on low-end Android phones with limited CPU and memory. Keep JavaScript work per interaction small, avoid heavy libraries and large images, lazy-load anything not needed for the first screen, and measure with CPU throttling enabled rather than on a desktop.',
    category: 'environment',
  },
  {
    id: 'environment.low-bandwidth',
    title: 'Low bandwidth connections',
    prompt:
      'Assume slow, metered, and intermittent connections. Minimize payload sizes, compress and cache aggressively, avoid polling, make requests resumable or idempotent so retries are safe, and never require a large download to reach the first usable state.',
    category: 'environment',
  },
  {
    id: 'environment.read-only-filesystem',
    title: 'Read-only filesystem',
    prompt:
      'The runtime filesystem is read-only except for a temp directory supplied via environment variable. Do not write caches, logs, or generated files next to the code; write only to the configured temp path and treat it as ephemeral.',
    category: 'environment',
  },
  {
    id: 'environment.no-root',
    title: 'No root privileges',
    prompt:
      'Everything runs as an unprivileged user. Do not bind ports below 1024, write to system directories, use `sudo`, or install anything system-wide; Dockerfiles must switch to a non-root user before the entrypoint.',
    category: 'environment',
  },
  {
    id: 'environment.single-file-distribution',
    title: 'Single-file distribution',
    prompt:
      'The deliverable must be a single self-contained file (one script, one bundle, or one binary). Inline or bundle all dependencies and assets, avoid runtime file lookups relative to the source, and do not require an install step before running.',
    category: 'environment',
  },
  {
    id: 'environment.deterministic-builds',
    title: 'Deterministic builds',
    prompt:
      'Builds must be reproducible: the same commit must produce byte-identical output. Pin every dependency and base image by exact version or digest, avoid embedding timestamps, random ids, or absolute build paths in artifacts, and use the lockfile-respecting install command (`npm ci`, `pnpm install --frozen-lockfile`, `uv sync --locked`).',
    category: 'environment',
  },
  {
    id: 'environment.package-manager-pnpm',
    title: 'Use pnpm only',
    prompt:
      'This project uses pnpm. Every install, run, and add command you show must use `pnpm` (`pnpm add`, `pnpm exec`, `pnpm -r`), never `npm` or `yarn`, and only `pnpm-lock.yaml` may exist as a lockfile.',
    category: 'environment',
  },
  {
    id: 'environment.package-manager-uv',
    title: 'Use uv for Python',
    prompt:
      'This project manages Python with uv. Show commands as `uv add`, `uv run`, and `uv sync`, declare dependencies in `pyproject.toml` rather than `requirements.txt`, and do not use `pip install` or `poetry` in instructions or scripts.',
    category: 'environment',
  },
  {
    id: 'environment.monorepo-workspaces',
    title: 'Monorepo workspace rules',
    prompt:
      'This is a monorepo managed with workspaces (Turborepo, Nx, or pnpm workspaces). Add dependencies to the specific package that needs them rather than the root, import sibling packages by their workspace name instead of relative paths across package boundaries, and run tasks through the monorepo tool so caching and ordering are respected.',
    category: 'environment',
  },
  {
    id: 'environment.dev-prod-parity',
    title: 'Dev/prod parity',
    prompt:
      'Keep development, staging, and production as similar as possible. Use the same database engine, queue, and runtime version locally as in production (via containers if needed), and do not introduce code paths that behave differently based on the environment name.',
    category: 'environment',
  },
  {
    id: 'environment.docker-container-target',
    title: 'Runs in a Docker container',
    prompt:
      'The service runs in a Docker container. Listen on `0.0.0.0` and the port given by the `PORT` environment variable, log to stdout and stderr instead of files, handle `SIGTERM` for graceful shutdown, and keep the image free of build-time tooling via a multi-stage build.',
    category: 'environment',
  },
]
