import type { Prompt } from '../types'

export const shell: Prompt[] = [
  {
    id: 'shell.strict-mode',
    title: 'Strict mode flags',
    prompt:
      'Start every bash script with `set -euo pipefail` so it exits on the first failing command, treats unset variables as errors, and fails a pipeline when any stage fails. Remember `set -e` is ignored inside `if` conditions and `&&`/`||` chains, so check those explicitly.',
    category: 'shell',
  },
  {
    id: 'shell.bash-shebang',
    title: 'Portable bash shebang',
    prompt:
      'Use `#!/usr/bin/env bash` as the shebang for bash scripts so the script runs with the bash found on PATH, and never rely on `sh` being bash.',
    category: 'shell',
  },
  {
    id: 'shell.quote-expansions',
    title: 'Quote every expansion',
    prompt:
      'Double-quote every variable and command substitution (`"$var"`, `"$(cmd)"`, `"${arr[@]}"`, `"$@"`) unless word splitting is intentional and commented. Unquoted expansions break on spaces, globs, and empty values.',
    category: 'shell',
  },
  {
    id: 'shell.double-brackets',
    title: 'Use [[ ]] for tests',
    prompt:
      'Use `[[ ... ]]` instead of `[ ... ]` or `test` in bash conditionals; it avoids word splitting and pathname expansion and supports `=~` regex and `==` glob matches. Use `(( ... ))` for numeric comparisons.',
    category: 'shell',
  },
  {
    id: 'shell.command-substitution',
    title: '$(...) not backticks',
    prompt:
      'Use `$(command)` for command substitution, never backticks; it nests cleanly and is easier to read.',
    category: 'shell',
  },
  {
    id: 'shell.shellcheck-clean',
    title: 'ShellCheck clean',
    prompt:
      'Keep every script free of ShellCheck warnings at the default severity. When a warning must be suppressed, add a `# shellcheck disable=SCxxxx` directive on the line above with a comment explaining why.',
    category: 'shell',
  },
  {
    id: 'shell.posix-when-required',
    title: 'POSIX sh when required',
    prompt:
      'When a script must run under `/bin/sh` (Alpine, BusyBox, init scripts), use `#!/bin/sh`, avoid bash-only features (arrays, `[[ ]]`, `local -n`, `${var,,}`, process substitution), and lint with `shellcheck --shell=sh`.',
    category: 'shell',
  },
  {
    id: 'shell.never-parse-ls',
    title: 'Never parse ls',
    prompt:
      'Never parse the output of `ls`. Iterate files with a glob (`for f in ./*.log; do`) guarded by `nullglob`, or use `find ... -print0 | xargs -0` and `while IFS= read -r -d "" f` so names with spaces or newlines are handled.',
    category: 'shell',
  },
  {
    id: 'shell.mktemp-trap-cleanup',
    title: 'mktemp with trap cleanup',
    prompt:
      'Create temporary files and directories with `mktemp` or `mktemp -d`, store the path in a variable, and register `trap "rm -rf -- \\"$tmp\\"" EXIT` immediately so cleanup runs on success, failure, and Ctrl-C alike.',
    category: 'shell',
  },
  {
    id: 'shell.usage-and-help',
    title: 'Usage and --help',
    prompt:
      'Give every script a `usage()` function that prints a one-line synopsis, each flag with a description, and an example invocation. Print it on `-h`/`--help` with exit 0, and on invalid arguments to stderr with exit 2.',
    category: 'shell',
  },
  {
    id: 'shell.exit-codes',
    title: 'Meaningful exit codes',
    prompt:
      'Exit 0 only on success. Use 1 for general failure, 2 for usage errors, and document any additional codes in the help text. Never exit 0 after printing an error, and never mask a failure with `|| true` unless the failure is genuinely irrelevant.',
    category: 'shell',
  },
  {
    id: 'shell.stderr-for-messages',
    title: 'stdout data, stderr messages',
    prompt:
      'Write only the primary output to stdout and send all progress, warnings, and errors to stderr with `>&2`, so the script can be piped or captured without diagnostic text polluting the data.',
    category: 'shell',
  },
  {
    id: 'shell.long-flags-in-scripts',
    title: 'Long flags in scripts',
    prompt:
      'In scripts, call other tools with their long flags (`--recursive`, `--force`, `--output`) rather than single letters so the intent is readable without consulting a man page. Reserve short flags for interactive use.',
    category: 'shell',
  },
  {
    id: 'shell.printf-over-echo',
    title: 'printf over echo',
    prompt:
      'Use `printf` instead of `echo` for any output that includes variables, escape sequences, or values that could start with a dash; `echo` behavior varies between shells. Use `printf "%s\\n" "$var"`, never `printf "$var"`.',
    category: 'shell',
  },
  {
    id: 'shell.dry-run-flag',
    title: 'Support --dry-run',
    prompt:
      'Add a `-n`/`--dry-run` flag to any script that modifies files, systems, or remote resources. In dry-run mode print each command that would run, prefixed clearly, and execute nothing.',
    category: 'shell',
  },
  {
    id: 'shell.idempotent-scripts',
    title: 'Idempotent scripts',
    prompt:
      'Make scripts safe to re-run: use `mkdir -p`, check whether a resource exists before creating it, use `ln -sfn`, and skip steps whose result is already present. A second run must be a no-op, not a failure.',
    category: 'shell',
  },
  {
    id: 'shell.no-sudo-inside',
    title: 'No sudo inside scripts',
    prompt:
      'Never call `sudo` inside a script. If elevated privileges are required, check `[[ $EUID -eq 0 ]]` at the start and exit with a clear message telling the user to rerun the script with sudo.',
    category: 'shell',
  },
  {
    id: 'shell.local-and-readonly',
    title: 'local and readonly variables',
    prompt:
      'Declare function variables with `local`, constants with `readonly`, and separate `local x` from `x=$(cmd)` so the exit status of the substitution is not masked. Use UPPER_CASE only for environment variables and constants, lower_case for everything else.',
    category: 'shell',
  },
  {
    id: 'shell.main-function',
    title: 'main function pattern',
    prompt:
      'Structure scripts longer than a screen as a set of functions with a `main()` at the bottom invoked as `main "$@"`. Parse arguments inside main and keep no executable statements at the top level besides `set` options and constants.',
    category: 'shell',
  },
  {
    id: 'shell.arrays-for-arguments',
    title: 'Arrays for argument lists',
    prompt:
      'Build command arguments in a bash array (`args=(--flag "$value"); cmd "${args[@]}"`) instead of a space-joined string so values with spaces survive intact. Never store commands in strings and `eval` them.',
    category: 'shell',
  },
  {
    id: 'shell.avoid-eval',
    title: 'Avoid eval',
    prompt:
      'Do not use `eval`. Use arrays, indirect expansion (`${!name}`), `declare -n`, or a `case` statement instead; `eval` on any externally influenced string is a command injection.',
    category: 'shell',
  },
  {
    id: 'shell.while-read-loop',
    title: 'Safe line reading',
    prompt:
      'Read input line by line with `while IFS= read -r line; do ...; done < file` or `< <(command)`, never `for line in $(cat file)`. Avoid piping into `while` when the loop sets variables you need afterwards, since the pipe runs in a subshell.',
    category: 'shell',
  },
  {
    id: 'shell.cd-failure',
    title: 'Guard cd and paths',
    prompt:
      'Always write `cd "$dir" || exit 1` (or run the block in a subshell) so a failed `cd` cannot cause later commands to run in the wrong directory. Resolve the script directory with `SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"` instead of assuming the cwd.',
    category: 'shell',
  },
  {
    id: 'shell.end-of-options',
    title: 'Guard against dash filenames',
    prompt:
      'Use `--` to end option parsing before passing user-supplied paths (`rm -rf -- "$path"`) and prefix globs with `./` (`./*` not `*`) so a file named `-rf` cannot be interpreted as a flag.',
    category: 'shell',
  },
  {
    id: 'shell.check-dependencies',
    title: 'Check required commands',
    prompt:
      'At the top of the script verify every external command it depends on with `command -v jq >/dev/null 2>&1 || { echo "jq is required" >&2; exit 1; }`. Never use `which`. Fail before doing any work rather than halfway through.',
    category: 'shell',
  },
  {
    id: 'shell.rewrite-when-complex',
    title: 'Rewrite past 100 lines',
    prompt:
      'If a shell script grows beyond roughly 100 lines, needs data structures beyond flat arrays, or has non-trivial control flow, rewrite it in Python, Go, or the project language. Shell is for glue and wrappers, not applications.',
    category: 'shell',
  },
  {
    id: 'shell.prefer-builtins',
    title: 'Prefer builtins',
    prompt:
      'Prefer bash builtins over spawning processes for simple work: parameter expansion (`${var%.txt}`, `${var//a/b}`) instead of `sed` or `basename`, `$(( ))` instead of `expr`, `[[ ]]` instead of `grep -q` on a variable. Reserve external tools for streams and files.',
    category: 'shell',
  },
  {
    id: 'shell.env-defaults',
    title: 'Env vars with defaults',
    prompt:
      'Read tunables from environment variables with explicit defaults (`: "${TIMEOUT:=30}"` or `timeout="${TIMEOUT:-30}"`) and document each one in the help text. Never hard-code hostnames, ports, or absolute paths that differ between machines.',
    category: 'shell',
  },
  {
    id: 'shell.debug-trace-flag',
    title: 'Debug tracing flag',
    prompt:
      'Support a `--debug` flag or `DEBUG=1` environment variable that turns on `set -x` with a `PS4` showing the line number, and keep it off by default so normal runs stay quiet.',
    category: 'shell',
  },
  {
    id: 'shell.log-helpers',
    title: 'Logging helper functions',
    prompt:
      'Define small `log`, `warn`, and `die` helpers that write to stderr with a consistent prefix and, for `die`, exit with a non-zero status; call them instead of scattering raw `echo` statements.',
    category: 'shell',
  },
  {
    id: 'shell.actionable-errors',
    title: 'Actionable error messages',
    prompt:
      'Every error message must say what failed, the value or path involved, and what the user can do about it (`Config file not found: /etc/app.yml. Pass --config or set APP_CONFIG.`). Never exit with only a status code and no message.',
    category: 'shell',
  },
  {
    id: 'shell.header-comment',
    title: 'Script header comment',
    prompt:
      'Begin each script with a comment block stating its purpose, usage synopsis, required environment variables, and external dependencies, so it can be understood without reading the body.',
    category: 'shell',
  },
  {
    id: 'shell.cli-subcommands',
    title: 'Noun-verb subcommands',
    prompt:
      'Design multi-purpose CLIs around subcommands (`tool resource action`, e.g. `tool cache clear`) with a shared set of global flags, and make each subcommand support `--help` on its own. Do not accept ambiguous abbreviations of subcommand names.',
    category: 'shell',
  },
  {
    id: 'shell.json-output-flag',
    title: 'Provide --json output',
    prompt:
      'Offer a `--json` flag that emits a stable, machine-readable structure to stdout with no decoration, and keep the default human output free to change. Treat the JSON shape as a public API and only add fields, never rename or remove them.',
    category: 'shell',
  },
  {
    id: 'shell.non-interactive-mode',
    title: 'Non-interactive mode',
    prompt:
      'Prompt only when stdin is a TTY, provide `--no-input` (or `--yes`) to skip every prompt, and make every interactive choice also settable by a flag or environment variable so the tool works in CI and cron.',
    category: 'shell',
  },
  {
    id: 'shell.confirm-destructive',
    title: 'Force flag for destructive ops',
    prompt:
      'Before deleting, overwriting, or modifying remote state, print exactly what will be affected and require confirmation; in non-interactive mode require an explicit `--force` or `--yes` flag and refuse otherwise.',
    category: 'shell',
  },
  {
    id: 'shell.standard-flag-names',
    title: 'Standard flag names',
    prompt:
      'Use the conventional flag names users already expect: `-h/--help`, `--version`, `-v/--verbose`, `-q/--quiet`, `-n/--dry-run`, `-f/--force`, `-o/--output`, and `-` to mean stdin or stdout. Give every short flag a long equivalent.',
    category: 'shell',
  },
  {
    id: 'shell.no-secrets-in-flags',
    title: 'No secrets in flags',
    prompt:
      'Never accept passwords or tokens as command-line flags, since they appear in process lists and shell history. Read them from an environment variable, a file path flag (`--token-file`), or stdin.',
    category: 'shell',
  },
  {
    id: 'shell.tty-aware-color',
    title: 'TTY-aware color and progress',
    prompt:
      'Emit ANSI color and progress animations only when stdout is a TTY, and disable them when `NO_COLOR` is set or `--no-color` is passed, so logs and pipes receive plain text.',
    category: 'shell',
  },
  {
    id: 'shell.readable-one-liners',
    title: 'Readable one-liners',
    prompt:
      'When providing a shell one-liner, break long pipelines one stage per line with the pipe at the start of each continuation line, and add a one-sentence explanation of what each stage does. Prefer a clear pipeline over a clever `awk` or `sed` program nobody can maintain.',
    category: 'shell',
  },
]
