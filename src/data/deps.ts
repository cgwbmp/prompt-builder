import type { Prompt } from '../types'

export const deps: Prompt[] = [
  {
    id: 'deps.prefer-stdlib',
    title: 'Prefer stdlib and existing deps',
    prompt:
      'Before proposing a dependency, check whether the standard library or a package already in the lockfile covers the need. Do not add a package for something that takes under 50 lines to write and test in the project.',
    category: 'deps',
  },
  {
    id: 'deps.justify-new-dependency',
    title: 'Justify every new dependency',
    prompt:
      'When a new dependency is genuinely needed, state its license, install size, number of transitive dependencies, last release date, and maintainer activity, and name the alternatives that were rejected and why.',
    category: 'deps',
  },
  {
    id: 'deps.check-transitive-tree',
    title: 'Inspect the transitive tree',
    prompt:
      'Before adopting a package, inspect what it pulls in (npm ls --all, npm explain, pnpm why). Prefer packages with zero or very few transitive dependencies over convenience wrappers that drag in dozens.',
    category: 'deps',
  },
  {
    id: 'deps.check-bundle-impact',
    title: 'Check bundle impact first',
    prompt:
      'For any dependency shipped to the browser, check its size and tree-shakeability (bundlephobia or a bundle analyzer) before adding it, and reject packages that duplicate something already in the bundle or ship their own polyfills.',
    category: 'deps',
  },
  {
    id: 'deps.pin-exact-in-apps',
    title: 'Pin exact versions in apps',
    prompt:
      'In applications and services, declare dependencies with exact versions in package.json (no ^ or ~ ranges) so upgrades are always an explicit, reviewable change.',
    category: 'deps',
  },
  {
    id: 'deps.ranges-in-libraries',
    title: 'Use ranges in libraries',
    prompt:
      'In published libraries, declare runtime dependencies as caret ranges (^1.4.0) rather than exact versions so consumers can deduplicate them, and move host frameworks to peerDependencies.',
    category: 'deps',
  },
  {
    id: 'deps.commit-lockfile',
    title: 'Always commit the lockfile',
    prompt:
      'Commit the lockfile (package-lock.json, pnpm-lock.yaml, yarn.lock, poetry.lock, Cargo.lock) for every application. Never hand-edit it, never add it to .gitignore, and regenerate it only through the package manager.',
    category: 'deps',
  },
  {
    id: 'deps.frozen-lockfile-ci',
    title: 'Frozen lockfile in CI',
    prompt:
      'In CI and Docker builds install with npm ci, pnpm install --frozen-lockfile, or yarn install --immutable so the build fails when package.json and the lockfile disagree instead of silently resolving new versions.',
    category: 'deps',
  },
  {
    id: 'deps.pin-package-manager',
    title: 'Pin the package manager',
    prompt:
      'Pin the package manager and its version with the packageManager field (Corepack) or an equivalent, so every developer and CI job resolves the lockfile with the same tool version.',
    category: 'deps',
  },
  {
    id: 'deps.no-git-or-url-deps',
    title: 'No git or URL dependencies',
    prompt:
      'Every dependency must resolve to an immutable published version. Do not depend on git URLs, branch names, tarball URLs, or the latest tag; if a fork is required, publish it under a scoped name.',
    category: 'deps',
  },
  {
    id: 'deps.semver-discipline',
    title: 'Strict semver for releases',
    prompt:
      'Version published packages by semver strictly: any change to a public signature, exported name, default value, or minimum supported runtime is a major; new backward-compatible capability is a minor; everything else is a patch.',
    category: 'deps',
  },
  {
    id: 'deps.automate-release-versioning',
    title: 'Automate version bumps',
    prompt:
      'Derive version bumps and the changelog from Conventional Commits or changeset files at release time (Changesets, semantic-release, release-please) instead of editing version numbers and changelogs by hand.',
    category: 'deps',
  },
  {
    id: 'deps.deprecate-before-remove',
    title: 'Deprecate before removing',
    prompt:
      'Never remove a public API in the release that introduces its replacement. Mark it deprecated with a pointer to the replacement, keep it working for at least one minor release, and remove it only in the next major.',
    category: 'deps',
  },
  {
    id: 'deps.prerelease-dist-tags',
    title: 'Pre-releases under dist-tags',
    prompt:
      'Publish unstable builds as prerelease versions (2.0.0-beta.1) under a dist-tag such as next or beta so the latest tag never points at unfinished code.',
    category: 'deps',
  },
  {
    id: 'deps.never-unpublish',
    title: 'Deprecate, never unpublish',
    prompt:
      'Do not unpublish a released version. Publish a fixed version and mark the bad one with npm deprecate and a message that names the fix, so existing installs keep working and get a warning.',
    category: 'deps',
  },
  {
    id: 'deps.one-major-at-a-time',
    title: 'One major at a time',
    prompt:
      'Upgrade one major version of one package at a time. Read the migration guide and changelog for that version, apply the codemods it provides, run the full test suite, and only then start the next upgrade.',
    category: 'deps',
  },
  {
    id: 'deps.separate-upgrade-commits',
    title: 'Isolate upgrades from features',
    prompt:
      'Keep dependency upgrades in their own commit or pull request, separate from feature work, so a regression can be bisected and reverted without undoing product changes.',
    category: 'deps',
  },
  {
    id: 'deps.automated-update-bot',
    title: 'Grouped automated updates',
    prompt:
      'Configure Renovate or Dependabot to open update PRs: group minor and patch bumps, schedule them off-hours, require CI to pass, and set a minimum release age of several days before auto-merge so freshly compromised releases are not pulled in immediately.',
    category: 'deps',
  },
  {
    id: 'deps.remove-unused',
    title: 'Remove unused dependencies',
    prompt:
      'Run a dead-dependency check (depcheck, knip, deptry) as part of maintenance and remove packages that are no longer imported, including unused devDependencies and stale type packages.',
    category: 'deps',
  },
  {
    id: 'deps.dedupe-versions',
    title: 'One version per package',
    prompt:
      'Avoid multiple versions of the same package in the dependency tree. Run npm dedupe or pnpm dedupe after upgrades, and treat overrides or resolutions as a documented temporary fix with a linked issue, not a permanent state.',
    category: 'deps',
  },
  {
    id: 'deps.dev-vs-runtime',
    title: 'Separate dev and runtime deps',
    prompt:
      'Put compilers, bundlers, test runners, linters, and type packages in devDependencies so production installs and container images (npm ci --omit=dev) contain only what runs at runtime.',
    category: 'deps',
  },
  {
    id: 'deps.peer-dependency-hygiene',
    title: 'Peer dependency hygiene',
    prompt:
      'In a library, declare the host framework or plugin system (React, Vue, ESLint, Prisma) as a peerDependency with a range covering every major you test against, add it to devDependencies for local development, and never bundle it into your output.',
    category: 'deps',
  },
  {
    id: 'deps.workspace-protocol',
    title: 'Monorepo workspace conventions',
    prompt:
      'In a monorepo use native workspaces and reference internal packages with the workspace protocol (workspace:*) so they link locally and are rewritten to real versions on publish. Do not publish and reinstall to share code within the repo.',
    category: 'deps',
  },
  {
    id: 'deps.single-version-policy',
    title: 'Single version policy',
    prompt:
      'Align shared dependencies to one version across every workspace package (syncpack, manypkg check, or a catalog). Two packages in the same monorepo on different versions of react, typescript, or the test runner is a bug to fix, not a state to tolerate.',
    category: 'deps',
  },
  {
    id: 'deps.internal-package-boundaries',
    title: 'Import via package entry points',
    prompt:
      'Internal packages must import each other only through their published package name and public entry point, never via relative paths into another package src folder. Enforce this with a lint rule such as no-restricted-imports or eslint-plugin-boundaries.',
    category: 'deps',
  },
  {
    id: 'deps.esm-first-dual-build',
    title: 'ESM first, CJS if needed',
    prompt:
      'Publish libraries as ESM by default, add a CJS build only when known consumers require it, and emit type declarations for each format. Verify the published shape with publint and arethetypeswrong before releasing.',
    category: 'deps',
  },
  {
    id: 'deps.exports-map',
    title: 'Explicit exports map',
    prompt:
      'Define an exports map in package.json with explicit entries for the root and each supported subpath, listing the types condition first, then import and require. Do not expose internal files, and set the type field deliberately rather than by default.',
    category: 'deps',
  },
  {
    id: 'deps.side-effects-flag',
    title: 'Declare sideEffects',
    prompt:
      'Set sideEffects to false in a library package.json, or list the specific files that do have side effects (CSS imports, polyfills, global registrations), so bundlers can tree-shake unused exports.',
    category: 'deps',
  },
  {
    id: 'deps.minimal-published-files',
    title: 'Publish only what is needed',
    prompt:
      'Use the files field so a published package contains only the build output, type declarations, README, and LICENSE, never tests, sources, configs, or .env files. Run npm pack --dry-run and review the file list before every release.',
    category: 'deps',
  },
  {
    id: 'deps.engines-field',
    title: 'Declare supported runtimes',
    prompt:
      'Declare the supported runtime range in the engines field and pin the local version with .nvmrc or .node-version. Test in CI against both the oldest and the newest supported version, and treat raising the minimum as a major release.',
    category: 'deps',
  },
  {
    id: 'deps.no-install-scripts',
    title: 'No install-time scripts',
    prompt:
      'Do not add preinstall, install, or postinstall scripts to a package. If native code is unavoidable, ship prebuilt binaries via optionalDependencies and fall back gracefully when they are missing.',
    category: 'deps',
  },
  {
    id: 'deps.ignore-scripts-on-install',
    title: 'Ignore scripts when installing',
    prompt:
      'Install with ignore-scripts enabled in CI (and in .npmrc for the project) and explicitly allow-list the few packages that legitimately need lifecycle scripts, so a compromised transitive dependency cannot execute code at install time.',
    category: 'deps',
  },
  {
    id: 'deps.lockfile-integrity-check',
    title: 'Validate lockfile integrity',
    prompt:
      'Run lockfile-lint or an equivalent in CI to ensure every resolved URL uses https and points to the expected registry host, and that every entry carries an integrity hash. Fail the build on any lockfile pointing at a git or unknown host.',
    category: 'deps',
  },
  {
    id: 'deps.publish-with-provenance',
    title: 'Publish with provenance',
    prompt:
      'Publish packages only from CI using a trusted publisher (OIDC) with npm publish --provenance, never from a laptop with a long-lived token. Require 2FA on the package and organization.',
    category: 'deps',
  },
  {
    id: 'deps.license-allowlist',
    title: 'Enforce a license allowlist',
    prompt:
      'Maintain an allowlist of acceptable licenses (typically MIT, Apache-2.0, BSD-2/3-Clause, ISC, 0BSD) and fail CI when a new dependency introduces a copyleft license such as GPL, AGPL, or SSPL, or has no detectable license.',
    category: 'deps',
  },
  {
    id: 'deps.patch-over-fork',
    title: 'Patch before forking or vendoring',
    prompt:
      'When a dependency needs a small fix, use patch-package or pnpm patch and open an upstream PR rather than forking or copying the code. Vendor only when the package is tiny or unmaintained, and record the upstream version and every local change in a header comment.',
    category: 'deps',
  },
  {
    id: 'deps.private-registry-config',
    title: 'Private registry via .npmrc',
    prompt:
      'When a private registry or mirror is in use, configure it in the project .npmrc scoped per package scope, never in individual developer machines only, so CI, containers, and new developers resolve the same sources.',
    category: 'deps',
  },
]
