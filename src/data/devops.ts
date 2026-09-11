import type { Prompt } from '../types'

export const devops: Prompt[] = [
  {
    id: 'devops.multi-stage-dockerfile',
    title: 'Multi-stage Dockerfile',
    prompt:
      'Write Dockerfiles as multi-stage builds: compile and install dependencies in a builder stage, then copy only the runtime artifacts into a minimal final stage so compilers, dev dependencies, and source never ship in the image.',
    category: 'devops',
  },
  {
    id: 'devops.non-root-container',
    title: 'Run containers as non-root',
    prompt:
      'Create a dedicated user with an explicit UID and GID in the Dockerfile and switch to it with `USER` before the entrypoint. Never run the application process as root or install sudo in the image.',
    category: 'devops',
  },
  {
    id: 'devops.pin-base-image',
    title: 'Pin base images',
    prompt:
      'Pin base images to a specific version tag plus digest (`FROM node:22.4-slim@sha256:...`), never `latest` or a bare major tag, and let Renovate or Dependabot propose digest updates so upgrades are deliberate and reviewed.',
    category: 'devops',
  },
  {
    id: 'devops.minimal-base-image',
    title: 'Minimal base image',
    prompt:
      'Start from the smallest official base image that runs the workload (distroless, alpine, or `-slim` variants) and install only the packages the process needs at runtime, so the attack surface and pull time stay small.',
    category: 'devops',
  },
  {
    id: 'devops.dockerignore',
    title: 'Maintain .dockerignore',
    prompt:
      'Add a `.dockerignore` that excludes `.git`, `node_modules`, build output, test fixtures, local env files, and docs, so the build context stays small and secrets on the developer machine can never be copied into a layer.',
    category: 'devops',
  },
  {
    id: 'devops.layer-cache-order',
    title: 'Order layers for cache',
    prompt:
      'Order Dockerfile instructions from least to most frequently changing: copy only the dependency manifest and lockfile first, install dependencies, then copy the rest of the source, so a code change does not invalidate the dependency layer.',
    category: 'devops',
  },
  {
    id: 'devops.apt-single-run',
    title: 'Package installs in one RUN',
    prompt:
      'Run `apt-get update` and `apt-get install -y --no-install-recommends` in the same `RUN` instruction, list packages one per line sorted alphabetically, and end with `rm -rf /var/lib/apt/lists/*` so stale package indexes and caches never persist in a layer.',
    category: 'devops',
  },
  {
    id: 'devops.exec-form-entrypoint',
    title: 'Exec-form entrypoint',
    prompt:
      'Use the exec form for `ENTRYPOINT` and `CMD` (`["node", "server.js"]`, not a shell string) so the process runs as PID 1 and receives SIGTERM directly. Use `tini` or `--init` if the process spawns children that must be reaped.',
    category: 'devops',
  },
  {
    id: 'devops.no-secrets-in-image',
    title: 'No secrets in images',
    prompt:
      'Never put secrets in `ENV`, `ARG`, or copied files in a Dockerfile; they persist in layer history. Use BuildKit `--mount=type=secret` at build time and inject runtime secrets through the orchestrator.',
    category: 'devops',
  },
  {
    id: 'devops.one-process-per-container',
    title: 'One concern per container',
    prompt:
      'Run one process per container and treat containers as disposable: no cron daemons, no supervisord bundling several services, no local state that must survive a restart. Communicate between containers over the network, not a shared filesystem.',
    category: 'devops',
  },
  {
    id: 'devops.hardened-runtime',
    title: 'Hardened container runtime',
    prompt:
      'Run containers with a read-only root filesystem, `allowPrivilegeEscalation: false`, all Linux capabilities dropped, and never `privileged: true`. Mount an `emptyDir` or tmpfs for the few paths that need writes.',
    category: 'devops',
  },
  {
    id: 'devops.image-scanning',
    title: 'Scan images in CI',
    prompt:
      'Scan every built image with Trivy, Grype, or the registry scanner before it is pushed, fail the pipeline on critical and high CVEs with available fixes, and generate an SBOM alongside the image.',
    category: 'devops',
  },
  {
    id: 'devops.k8s-probes',
    title: 'Configure Kubernetes probes',
    prompt:
      'Define liveness, readiness, and startup probes on every Deployment with explicit `initialDelaySeconds`, `periodSeconds`, and `failureThreshold`. Point liveness at a cheap local check so a slow dependency never causes restart loops.',
    category: 'devops',
  },
  {
    id: 'devops.k8s-resource-limits',
    title: 'Set resource requests and limits',
    prompt:
      'Set CPU and memory requests on every container based on observed usage, and set a memory limit equal to or slightly above the request. Avoid CPU limits unless throttling is intended, and never ship a Pod spec with no resources block.',
    category: 'devops',
  },
  {
    id: 'devops.graceful-shutdown',
    title: 'Termination grace and preStop',
    prompt:
      'Set `terminationGracePeriodSeconds` above the application drain deadline and add a short `preStop` sleep so load balancers stop routing before SIGTERM is delivered. Confirm the application fails readiness first and drains in-flight requests within that window.',
    category: 'devops',
  },
  {
    id: 'devops.gitops-no-kubectl-edits',
    title: 'No manual cluster edits',
    prompt:
      'Treat the manifests in git (Helm, Kustomize, or plain YAML) as the only source of truth and let a GitOps controller or the pipeline apply them. Never `kubectl edit` or `kubectl apply` by hand against a shared cluster except during a declared incident, and backport the fix immediately.',
    category: 'devops',
  },
  {
    id: 'devops.ci-fail-fast',
    title: 'Fail fast in CI',
    prompt:
      'Order CI so the cheapest checks run first and stop the pipeline on the first failure: formatting and lint, then type checks, then unit tests, then build, then integration and e2e. Run independent stages in parallel.',
    category: 'devops',
  },
  {
    id: 'devops.ci-cache-dependencies',
    title: 'Cache dependencies by lockfile',
    prompt:
      'Cache dependency and build directories in CI with a key derived from the lockfile hash and a restore-key fallback to the latest cache on the default branch. Never cache anything that is an output of the tests themselves.',
    category: 'devops',
  },
  {
    id: 'devops.ci-reproducible-installs',
    title: 'Reproducible installs',
    prompt:
      'Install dependencies in CI with the lockfile-strict command (`npm ci`, `pnpm install --frozen-lockfile`, `pip install -r requirements.txt` with hashes, `poetry install --sync`) so the build fails if the lockfile and manifest disagree.',
    category: 'devops',
  },
  {
    id: 'devops.pin-actions-sha',
    title: 'Pin actions to commit SHA',
    prompt:
      'Reference third-party CI actions and orbs by full commit SHA with the version in a trailing comment (`uses: actions/checkout@<sha> # v4.1.7`), never by mutable tag or branch, and let Dependabot update the pins.',
    category: 'devops',
  },
  {
    id: 'devops.ci-least-privilege-token',
    title: 'Least-privilege CI token',
    prompt:
      'Declare `permissions: contents: read` at the top of every GitHub Actions workflow and grant additional scopes (`pull-requests: write`, `id-token: write`) only on the specific job that needs them.',
    category: 'devops',
  },
  {
    id: 'devops.ci-secrets-store',
    title: 'Secrets from the CI store',
    prompt:
      'Read secrets only from the CI secret store or a vault, scoped to the environment that needs them and gated behind environment protection rules for production. Never hard-code them in workflow files, echo them, or pass them as command-line arguments where they appear in process lists.',
    category: 'devops',
  },
  {
    id: 'devops.oidc-over-static-keys',
    title: 'OIDC instead of static keys',
    prompt:
      'Authenticate CI jobs to cloud providers with short-lived OIDC federation (`aws-actions/configure-aws-credentials` with a role, GCP workload identity) instead of long-lived access keys stored as secrets.',
    category: 'devops',
  },
  {
    id: 'devops.ci-script-injection',
    title: 'Prevent CI script injection',
    prompt:
      'Never interpolate untrusted event data (`github.event.pull_request.title`, branch names, issue bodies) directly into a `run:` script. Assign it to an environment variable in the `env:` block and reference the quoted variable in the shell.',
    category: 'devops',
  },
  {
    id: 'devops.ci-same-commands-as-local',
    title: 'Same commands in CI',
    prompt:
      'Put every build, test, and lint command behind a task runner target (Makefile, `just`, `npm run`, `task`) and have CI call those targets, so a developer can reproduce any pipeline failure locally with the identical command.',
    category: 'devops',
  },
  {
    id: 'devops.build-once-promote',
    title: 'Build once, promote everywhere',
    prompt:
      'Build a versioned, immutable artifact (container image by digest, tarball with checksum) exactly once per commit and promote that same artifact through staging and production. Never rebuild for a later environment.',
    category: 'devops',
  },
  {
    id: 'devops.twelve-factor-config',
    title: 'Same image, env-specific config',
    prompt:
      'Build one image and run it unchanged in every environment; inject differences only through environment variables or mounted secrets, never through per-environment images or config files baked into the build. Treat backing services (database, queue, cache) as attached resources swapped by URL.',
    category: 'devops',
  },
  {
    id: 'devops.iac-everything',
    title: 'All infrastructure as code',
    prompt:
      'Define every cloud resource in Terraform, OpenTofu, Pulumi, or CloudFormation and apply it only through the pipeline. No resource may be created or changed by hand in a console; if one is, import it into code before the next change.',
    category: 'devops',
  },
  {
    id: 'devops.iac-plan-in-pr',
    title: 'Review the plan output',
    prompt:
      'Post the `terraform plan` (or equivalent preview) output as a comment on every infrastructure PR and require a human to review the resources it will create, change, and destroy before apply runs. Block any plan that destroys stateful resources unless explicitly approved.',
    category: 'devops',
  },
  {
    id: 'devops.iac-idempotent-modules',
    title: 'Idempotent IaC modules',
    prompt:
      'Write infrastructure code so that applying it twice produces no changes: no timestamps or random values in names, no local-exec scripts that mutate state, and lifecycle rules for fields the provider rewrites. Pin provider and module versions.',
    category: 'devops',
  },
  {
    id: 'devops.iac-remote-state',
    title: 'Remote locked state',
    prompt:
      'Store IaC state in a remote backend with locking and versioning (S3 plus DynamoDB, GCS, Terraform Cloud), encrypt it at rest, and never commit state files or `.tfvars` containing secrets to the repository.',
    category: 'devops',
  },
  {
    id: 'devops.structured-logging',
    title: 'Logs to stdout only',
    prompt:
      'Write logs to stdout and stderr as one JSON object per line and let the platform collect and ship them. Never write log files inside the container, rotate logs in-process, or configure the application to ship logs itself.',
    category: 'devops',
  },
  {
    id: 'devops.golden-signal-metrics',
    title: 'Expose golden-signal metrics',
    prompt:
      'Expose a metrics endpoint in Prometheus or OpenTelemetry format covering the four golden signals: request rate, error rate, latency as histograms, and saturation (CPU, memory, queue depth, connection pool usage). Label by route and status class, never by unbounded values such as user id.',
    category: 'devops',
  },
  {
    id: 'devops.distributed-tracing',
    title: 'Propagate trace context',
    prompt:
      'Instrument services with OpenTelemetry and propagate W3C `traceparent` headers across every HTTP call, queue message, and background job so one request can be followed end to end. Attach the trace id to logs.',
    category: 'devops',
  },
  {
    id: 'devops.actionable-alerts',
    title: 'Actionable symptom alerts',
    prompt:
      'Alert on user-facing symptoms measured against an SLO (error rate, latency, availability), not on causes like CPU percentage. Every paging alert must link to a runbook that says what to check and what to do; delete alerts nobody acts on.',
    category: 'devops',
  },
  {
    id: 'devops.progressive-delivery',
    title: 'Canary or blue-green rollout',
    prompt:
      'Deploy with a progressive strategy: route a small canary percentage or a blue-green switch, watch error rate and latency against the previous version for a defined bake period, and promote only when the metrics hold.',
    category: 'devops',
  },
  {
    id: 'devops.rollback-plan',
    title: 'Rollback plan before deploy',
    prompt:
      'Before every production deploy, confirm the rollback command (redeploy previous image digest or flip traffic back) is documented and rehearsed, and automate rollback when the canary breaches its error or latency threshold.',
    category: 'devops',
  },
  {
    id: 'devops.backward-compatible-deploys',
    title: 'Backward-compatible releases',
    prompt:
      'Ship schema and API changes in the expand-then-contract pattern so version N and N+1 can run side by side during rollout: add the new column or field first, deploy code that handles both, migrate data, then remove the old path in a later release.',
    category: 'devops',
  },
  {
    id: 'devops.feature-flags',
    title: 'Decouple deploy from release',
    prompt:
      'Put risky or user-visible changes behind a feature flag so code can be deployed dark and enabled per environment, percentage, or account. Remove the flag and dead branch once the rollout is complete.',
    category: 'devops',
  },
]
