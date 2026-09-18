# Changelog

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and
[Semantic Versioning](https://semver.org/spec/v2.0.0.html). Prompt and category
ids never change, so a catalog release is always additive.

## [1.1.0] - 2026-09-18

### Added

- End-to-end suite covering the six journeys the app exists for, run with
  `npm run test:e2e`.
- Open-source project files: license, contributing guide, code of conduct,
  security policy, issue and pull request templates, Dependabot, and a CI
  workflow that gates pull requests.
- The selection now lives in the URL, so any set of prompts is a shareable link.
- The "All" tab pages in cards as you scroll instead of mounting the whole
  catalog at once.
- `npm run build` lints with oxlint.

### Fixed

- The category chips report their grouping to assistive technology.

## [1.0.5] - 2026-09-11

### Added

- More prompts across the catalog.

## [1.0.4] - 2026-09-11

### Added

- More prompts across the catalog.

### Changed

- Reworded prompts that overlapped with their neighbours.

## [1.0.1] - 2026-09-11

Versions 1.0.2 and 1.0.3 shipped the same day and carry release housekeeping
only, with no user-facing change.

### Added

- First public release: the prompt catalog, category and search filtering,
  favorites, and the joined Markdown output.

[unreleased]: https://github.com/cgwbmp/prompt-builder/compare/v1.0.5...HEAD
[1.0.5]: https://github.com/cgwbmp/prompt-builder/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/cgwbmp/prompt-builder/compare/v1.0.3...v1.0.4
[1.0.1]: https://github.com/cgwbmp/prompt-builder/releases/tag/v1.0.1
