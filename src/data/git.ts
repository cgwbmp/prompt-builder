import type { Prompt } from '../types'

export const git: Prompt[] = [
  {
    id: 'git.conventional-commits',
    title: 'Conventional Commits format',
    prompt:
      'Write commit messages in Conventional Commits format: `type(scope): subject`, using types feat, fix, docs, style, refactor, perf, test, build, ci, and chore. Keep the scope short and lowercase, matching the module or area touched.',
    category: 'git',
  },
  {
    id: 'git.breaking-change-footer',
    title: 'Flag breaking changes',
    prompt:
      'Mark any backwards-incompatible commit with `!` after the type or scope (e.g. `feat(api)!: ...`) and add a `BREAKING CHANGE:` footer that states what broke and how callers must migrate.',
    category: 'git',
  },
  {
    id: 'git.imperative-subject',
    title: 'Imperative subject line',
    prompt:
      'Write the commit subject in the imperative mood so it completes the sentence "If applied, this commit will ...". Capitalize the first word when no type prefix is used, and never end the subject with a period.',
    category: 'git',
  },
  {
    id: 'git.subject-length',
    title: 'Subject 50/72 limits',
    prompt:
      'Keep the commit subject line under 50 characters, never more than 72, and hard-wrap the body at 72 columns so it reads cleanly in `git log`.',
    category: 'git',
  },
  {
    id: 'git.blank-line-body',
    title: 'Blank line before body',
    prompt:
      'Separate the commit subject from the body with exactly one blank line. Write the body as short paragraphs or hyphen bullets, not one run-on line.',
    category: 'git',
  },
  {
    id: 'git.body-explains-why',
    title: 'Body explains why',
    prompt:
      'Use the commit body to explain what changed and why, not how; the diff already shows the how. Mention the problem being solved, alternatives that were rejected, and any non-obvious side effects.',
    category: 'git',
  },
  {
    id: 'git.no-generic-subjects',
    title: 'No generic subjects',
    prompt:
      'Never use vague subjects such as "fix", "update", "changes", "wip", or "misc". Name the specific behavior that changed, for example `fix(auth): reject expired refresh tokens`.',
    category: 'git',
  },
  {
    id: 'git.explain-surprising-code',
    title: 'Explain surprising changes',
    prompt:
      'If a change would look wrong or arbitrary to someone reading it out of context (a workaround, a magic number, a disabled check), explain the reason in the commit body so `git blame` answers the question later.',
    category: 'git',
  },
  {
    id: 'git.atomic-commits',
    title: 'One logical change per commit',
    prompt:
      'Make every commit a single logical change that builds and passes tests on its own. Do not mix a refactor with a behavior change, or formatting with logic, in the same commit.',
    category: 'git',
  },
  {
    id: 'git.separate-formatting-commits',
    title: 'Separate formatting commits',
    prompt:
      'Put pure formatting, whitespace, import-ordering, or rename-only changes in their own commit so reviewers can skip them and the functional diff stays readable.',
    category: 'git',
  },
  {
    id: 'git.stage-hunks',
    title: 'Stage hunks deliberately',
    prompt:
      'Stage changes with `git add -p` or by explicit file path rather than `git add -A` or `git add .`, and inspect `git diff --staged` before committing so unrelated edits and stray files never land in the commit.',
    category: 'git',
  },
  {
    id: 'git.reference-issue',
    title: 'Reference the issue',
    prompt:
      'Reference the tracking issue in the commit footer using `Closes #123`, `Fixes #123`, or `Refs: PROJ-42`, not in the subject line. Never rely on the issue link alone; the message must still make sense without it.',
    category: 'git',
  },
  {
    id: 'git.co-authored-by',
    title: 'Credit co-authors',
    prompt:
      'When a change was produced with another person, add a `Co-authored-by: Name <email>` trailer for each contributor so attribution survives squashes and rebases.',
    category: 'git',
  },
  {
    id: 'git.signoff-dco',
    title: 'Sign commits when required',
    prompt:
      'Follow the repository signing policy: add a `Signed-off-by` trailer with `git commit -s` where the project uses the DCO, and sign with GPG or SSH (`git commit -S`) where verified signatures are required.',
    category: 'git',
  },
  {
    id: 'git.branch-naming',
    title: 'Branch naming convention',
    prompt:
      'Name branches `<type>/<short-kebab-description>`, for example `feat/user-export` or `fix/login-redirect-loop`, and include the ticket id when one exists (`fix/PROJ-42-login-redirect`). Use lowercase and hyphens only.',
    category: 'git',
  },
  {
    id: 'git.short-lived-branches',
    title: 'Short-lived branches',
    prompt:
      'Keep feature branches alive for days, not weeks. Rebase onto the latest main at least daily so integration conflicts stay small and surface early.',
    category: 'git',
  },
  {
    id: 'git.rebase-not-merge-main',
    title: 'Rebase onto main',
    prompt:
      'Update a feature branch by rebasing it onto main (`git rebase main`) rather than merging main into it, so the branch history stays linear and free of "Merge branch main" noise.',
    category: 'git',
  },
  {
    id: 'git.never-force-push-shared',
    title: 'Never force-push shared branches',
    prompt:
      'Never force-push to main, release, or any branch other people have checked out. On your own feature branch use `git push --force-with-lease`, never bare `--force`, so you cannot overwrite commits you have not seen.',
    category: 'git',
  },
  {
    id: 'git.never-rewrite-published',
    title: 'Never rewrite published history',
    prompt:
      'Do not amend, rebase, or reset commits that have already been pushed to a shared branch. Fix mistakes in published history with a new commit or `git revert`, which produces an inverse commit and leaves history intact.',
    category: 'git',
  },
  {
    id: 'git.cleanup-before-pr',
    title: 'Clean up history before PR',
    prompt:
      'Before opening a pull request, use `git rebase -i` to squash fixup and typo commits, reorder changes into a logical sequence, and reword messages so every commit in the branch is reviewable on its own.',
    category: 'git',
  },
  {
    id: 'git.fixup-during-review',
    title: 'Fixup commits during review',
    prompt:
      'While a PR is under review, address feedback with `git commit --fixup <sha>` pushed as new commits so reviewers can see what changed since their last pass. Run `git rebase -i --autosquash` only right before merge.',
    category: 'git',
  },
  {
    id: 'git.squash-merge-policy',
    title: 'Squash-merge PRs',
    prompt:
      'Squash-merge pull requests so main receives exactly one commit per PR. Write the squash commit message as a proper Conventional Commit with a real body, not the auto-generated list of intermediate commit subjects.',
    category: 'git',
  },
  {
    id: 'git.no-wip-on-main',
    title: 'No WIP commits on main',
    prompt:
      'Never let commits titled WIP, fixup, "oops", or "try again" reach main. Every commit on main must be a complete, described, buildable change.',
    category: 'git',
  },
  {
    id: 'git.pr-description-template',
    title: 'PR description template',
    prompt:
      'Structure every pull request description with three headings: What (the change in one or two sentences), Why (the problem or motivation, linking the issue), and How to test (exact commands or clicks a reviewer can follow). Add a Notes section for follow-ups or known gaps.',
    category: 'git',
  },
  {
    id: 'git.pr-title-conventional',
    title: 'PR title as commit subject',
    prompt:
      'Write the pull request title in the same format as a commit subject (Conventional Commits type, imperative, under 70 characters), since it usually becomes the squash commit message.',
    category: 'git',
  },
  {
    id: 'git.small-prs',
    title: 'Small, focused PRs',
    prompt:
      'Keep pull requests under roughly 400 changed lines and one purpose each. Split a larger change into a stack of dependent PRs (schema, then logic, then UI) rather than one large PR.',
    category: 'git',
  },
  {
    id: 'git.pr-risk-and-rollback',
    title: 'State risk and rollback',
    prompt:
      'In the PR description, call out the blast radius of the change, anything that cannot be reverted cleanly (data migrations, external API calls), and the exact steps to roll back if it misbehaves in production.',
    category: 'git',
  },
  {
    id: 'git.pr-ui-screenshots',
    title: 'Screenshots for UI changes',
    prompt:
      'For any change that affects the user interface, include before and after screenshots or a short recording in the PR description, and note which viewports or themes were checked.',
    category: 'git',
  },
  {
    id: 'git.self-review-diff',
    title: 'Self-review before requesting',
    prompt:
      'Before requesting review, read the full diff yourself as if you were the reviewer. Remove debug output, commented-out code, stray files, and leftover TODOs, and confirm the PR description still matches what the diff does.',
    category: 'git',
  },
  {
    id: 'git.draft-until-ready',
    title: 'Draft until CI is green',
    prompt:
      'Open pull requests as drafts while work is in progress and mark them ready for review only when CI passes and the description is complete, so reviewers are never pulled into an unfinished change.',
    category: 'git',
  },
  {
    id: 'git.gitignore-hygiene',
    title: '.gitignore hygiene',
    prompt:
      'Keep a root `.gitignore` that excludes build output, dependency directories, coverage reports, editor and OS files, and all `.env*` files except a committed `.env.example`. Never commit generated artifacts that can be rebuilt from source.',
    category: 'git',
  },
  {
    id: 'git.commit-lockfiles',
    title: 'Commit lockfiles',
    prompt:
      'Always commit dependency lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `poetry.lock`, `Cargo.lock`, `go.sum`) so every checkout installs identical versions, and update them in the same commit as the manifest change.',
    category: 'git',
  },
  {
    id: 'git.no-secrets-in-history',
    title: 'No secrets in history',
    prompt:
      'Never commit API keys, passwords, tokens, or private keys, even in a branch you plan to squash. If a secret has been committed, treat it as compromised: rotate it first, then purge it from history with `git filter-repo` and force-push only with team agreement.',
    category: 'git',
  },
  {
    id: 'git.never-skip-hooks',
    title: 'Never bypass hooks',
    prompt:
      'Do not use `--no-verify` to skip pre-commit or commit-msg hooks. If a hook fails, fix the underlying problem or fix the hook; bypassing it hides the failure until CI.',
    category: 'git',
  },
  {
    id: 'git.confirm-destructive-commands',
    title: 'Confirm destructive git commands',
    prompt:
      'Never run destructive git commands (`reset --hard`, `checkout -- .`, `clean -fd`, `branch -D`, `push --force`, `stash drop`) without first showing what will be lost and getting explicit confirmation.',
    category: 'git',
  },
  {
    id: 'git.resolve-conflicts-carefully',
    title: 'Resolve conflicts by intent',
    prompt:
      'When resolving merge conflicts, read both sides and preserve the intent of each; never blindly take "ours" or "theirs". Rebuild and rerun the tests after resolving before continuing the rebase or merge.',
    category: 'git',
  },
  {
    id: 'git.annotated-release-tags',
    title: 'Annotated SemVer tags',
    prompt:
      'Tag releases with annotated tags (`git tag -a v1.4.0 -m "..."`) using Semantic Versioning with a `v` prefix, and never move or delete a tag once pushed; publish a new patch version instead.',
    category: 'git',
  },
  {
    id: 'git.gitattributes-line-endings',
    title: 'Normalize line endings',
    prompt:
      'Add a `.gitattributes` with `* text=auto` plus explicit `eol=lf` for scripts and `binary` for images and archives, so line-ending differences never appear as diffs across operating systems.',
    category: 'git',
  },
]
