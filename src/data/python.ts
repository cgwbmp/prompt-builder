import type { Prompt } from '../types'

export const python: Prompt[] = [
  {
    id: 'python.type-hints-everywhere',
    title: 'Type hints on every signature',
    prompt:
      'Annotate every function parameter and return type, including `-> None`. Use modern built-in generics (`list[str]`, `dict[str, int]`) and `X | None` instead of `typing.List` or `Optional[X]`.',
    category: 'python',
  },
  {
    id: 'python.strict-type-checker',
    title: 'Pass a strict type checker',
    prompt:
      'Write code that passes mypy or pyright in strict mode. Do not use `Any` in public signatures; reach for `object`, a `TypeVar`, a `Protocol`, or a `TypedDict` instead, and add `# type: ignore[code]` only with the specific error code and a reason.',
    category: 'python',
  },
  {
    id: 'python.dataclasses-for-records',
    title: 'Dataclasses for internal records',
    prompt:
      'Represent structured internal data with `@dataclass(frozen=True, slots=True)` (or `NamedTuple` for tiny immutable pairs) rather than untyped dicts or tuples. Use `field(default_factory=...)` for mutable fields.',
    category: 'python',
  },
  {
    id: 'python.pydantic-at-boundaries',
    title: 'Pydantic at the boundary',
    prompt:
      'Parse untrusted or external data (request bodies, config, JSON files, API responses) into pydantic v2 `BaseModel` classes with `model_validate`, and load settings through `pydantic-settings` `BaseSettings`. Keep pydantic at the edges and pass plain dataclasses or domain objects inward.',
    category: 'python',
  },
  {
    id: 'python.f-strings',
    title: 'f-strings for formatting',
    prompt:
      'Use f-strings for all string interpolation; do not use `%` formatting, `.format()`, or `+` concatenation. Build long strings from a list with `"".join(parts)` rather than concatenating in a loop.',
    category: 'python',
  },
  {
    id: 'python.logging-not-print',
    title: 'Logging, not print',
    prompt:
      'Use `logger = logging.getLogger(__name__)` and never `print` outside a CLI entry point. Pass a format string with lazy arguments (`logger.info("user %s logged in", user_id)`) instead of an f-string, and use `logger.exception(...)` inside `except` blocks to capture the traceback.',
    category: 'python',
  },
  {
    id: 'python.pathlib',
    title: 'pathlib over os.path',
    prompt:
      'Use `pathlib.Path` for all filesystem paths: join with `/`, read with `Path.read_text(encoding="utf-8")`, and check with `.exists()`/`.is_file()`. Do not use `os.path` or string concatenation to build paths.',
    category: 'python',
  },
  {
    id: 'python.context-managers',
    title: 'Context managers for resources',
    prompt:
      'Acquire files, sockets, locks, database connections, and temporary directories with a `with` statement so they are always released. Write custom resource handling as `@contextlib.contextmanager` generators or classes with `__enter__`/`__exit__`; never rely on `__del__`.',
    category: 'python',
  },
  {
    id: 'python.specific-exceptions',
    title: 'Catch specific exceptions',
    prompt:
      'Catch the narrowest exception type that you can handle and never write a bare `except:` or `except Exception:` except at a top-level boundary that logs and re-raises. Keep the body of `try` blocks minimal and chain with `raise NewError(...) from exc` to preserve context.',
    category: 'python',
  },
  {
    id: 'python.custom-exception-hierarchy',
    title: 'Custom exception hierarchy',
    prompt:
      'Define a base exception per package (`class AppError(Exception)`) with specific subclasses, and raise them on invalid input or state instead of returning `None`, `False`, or error strings. Raise `ValueError`/`TypeError` for argument precondition failures.',
    category: 'python',
  },
  {
    id: 'python.no-assert-for-validation',
    title: 'No assert for validation',
    prompt:
      'Do not use `assert` to validate arguments or runtime state, because assertions are stripped under `python -O`. Raise an explicit exception instead; reserve `assert` for tests and internal invariants that document assumptions.',
    category: 'python',
  },
  {
    id: 'python.no-mutable-defaults',
    title: 'No mutable default arguments',
    prompt:
      'Never use a mutable object (`[]`, `{}`, `set()`, a dataclass instance) as a default parameter value. Default to `None` and create the object inside the function, or use `field(default_factory=list)` in dataclasses.',
    category: 'python',
  },
  {
    id: 'python.comprehensions',
    title: 'Comprehensions vs loops',
    prompt:
      'Use a list, dict, or set comprehension for a simple map or filter with one `for` clause. Fall back to an explicit loop when there are nested clauses, side effects, or the expression needs a comment, and prefer comprehensions or generator expressions over `map`/`filter` with `lambda`.',
    category: 'python',
  },
  {
    id: 'python.generators-for-streams',
    title: 'Generators for large sequences',
    prompt:
      'Yield items from a generator instead of building a full list when the sequence is large, unbounded, or consumed once. Use `itertools` (`islice`, `chain`, `batched`, `groupby`) for composition and document generator functions with a `Yields:` section.',
    category: 'python',
  },
  {
    id: 'python.main-guard',
    title: 'main() with a __main__ guard',
    prompt:
      'Put script logic in a `main() -> int` function and call it under `if __name__ == "__main__": raise SystemExit(main())`. No side effects at module import time beyond defining names and constants.',
    category: 'python',
  },
  {
    id: 'python.iteration-idioms',
    title: 'Idiomatic iteration',
    prompt:
      'Iterate directly over containers; use `enumerate()` when an index is needed, `zip(a, b, strict=True)` for parallel iteration, `.items()` for dicts, and tuple unpacking. Never write `for i in range(len(seq))`.',
    category: 'python',
  },
  {
    id: 'python.truthiness-and-none',
    title: 'None checks and truthiness',
    prompt:
      'Compare to `None` with `is` / `is not`, never `==`. Use implicit truthiness for emptiness checks (`if not items:`) rather than `len(items) == 0`, but compare numbers explicitly (`if count == 0:`) because `0` is falsy.',
    category: 'python',
  },
  {
    id: 'python.eafp',
    title: 'EAFP over LBYL',
    prompt:
      'Prefer asking forgiveness over permission: use `dict.get`, `try`/`except KeyError`, and `getattr(obj, name, default)` instead of checking `in` or `hasattr` first, which is racy and slower on the happy path.',
    category: 'python',
  },
  {
    id: 'python.imports',
    title: 'Import hygiene',
    prompt:
      'Place all imports at the top of the module, grouped stdlib, third-party, then local, and sorted (ruff handles this). Use absolute imports, never `from x import *`, and import modules rather than individual functions when names would collide.',
    category: 'python',
  },
  {
    id: 'python.pyproject-and-uv',
    title: 'pyproject.toml and a lockfile',
    prompt:
      'Declare metadata and dependencies in `pyproject.toml` (PEP 621) and manage them with uv (or poetry) so a lockfile pins exact versions. Use a `src/` layout, install the project in editable mode, and never `pip install` into the system interpreter.',
    category: 'python',
  },
  {
    id: 'python.virtualenv-always',
    title: 'Always inside the venv',
    prompt:
      'Run every Python command through the project virtual environment (`uv run ...`, `poetry run ...`, or an activated `.venv`). Never invoke the global `python` or `pip`, and never add a dependency without recording it in `pyproject.toml`.',
    category: 'python',
  },
  {
    id: 'python.ruff-format-and-lint',
    title: 'Ruff for lint and format',
    prompt:
      'Format with `ruff format` and lint with `ruff check --fix` in place of black, isort, flake8, and pyupgrade. Keep the default 88-character line length, enable the `E`, `F`, `I`, `UP`, `B`, `SIM`, and `RUF` rule sets, and fix findings rather than adding `# noqa`.',
    category: 'python',
  },
  {
    id: 'python.pytest-fixtures',
    title: 'pytest with fixtures',
    prompt:
      'Write tests with pytest, not `unittest`: plain functions, bare `assert`, fixtures in `conftest.py` instead of `setUp`, and built-in fixtures `tmp_path`, `monkeypatch`, `capsys`, and `caplog`. Use `@pytest.mark.parametrize` for input tables instead of loops inside tests.',
    category: 'python',
  },
  {
    id: 'python.pytest-raises-and-mocks',
    title: 'pytest.raises and boundary mocks',
    prompt:
      'Assert exceptions with `pytest.raises(SpecificError, match=r"...")`, never a broad `Exception`. Mock only at process boundaries (network, clock, filesystem) by patching the name where it is looked up, and prefer `monkeypatch` over global `unittest.mock.patch` decorators.',
    category: 'python',
  },
  {
    id: 'python.async-io-only',
    title: 'Async only for I/O',
    prompt:
      'Use `async def` only for I/O-bound code and never block the event loop with `time.sleep`, `requests`, or CPU-heavy work; use `asyncio.sleep`, `httpx.AsyncClient`, and `asyncio.to_thread` instead. Run concurrent coroutines with `asyncio.TaskGroup` (or `gather`) and bound them with `asyncio.timeout`.',
    category: 'python',
  },
  {
    id: 'python.protocols-for-duck-typing',
    title: 'Protocols for interfaces',
    prompt:
      'Define interfaces as `typing.Protocol` classes so any object with the right methods satisfies them structurally. Use `abc.ABC` only when subclasses share concrete implementation; avoid deep inheritance in favor of composition.',
    category: 'python',
  },
  {
    id: 'python.enums-and-match',
    title: 'Enums and match statements',
    prompt:
      'Represent fixed sets of values with `enum.Enum` or `StrEnum` rather than bare string constants, and dispatch on them or on tagged dataclasses with a `match` statement instead of long `if`/`elif isinstance` chains. Include a `case _:` that raises for unhandled values.',
    category: 'python',
  },
  {
    id: 'python.immutability',
    title: 'Prefer immutable data',
    prompt:
      'Default to tuples, `frozenset`, `frozen=True` dataclasses, and `typing.Final` constants; use `Literal[...]` for closed sets of strings. Return new objects instead of mutating arguments, and never mutate module-level state.',
    category: 'python',
  },
  {
    id: 'python.avoid-power-features',
    title: 'Avoid magic',
    prompt:
      'Do not use custom metaclasses, `__getattr__` tricks, dynamic `import` hacks, runtime monkeypatching, or `eval`/`exec`. Stick to stdlib features like `dataclasses`, `enum`, `functools`, and `abc` that readers and type checkers understand.',
    category: 'python',
  },
  {
    id: 'python.properties-cheap',
    title: 'Properties stay cheap',
    prompt:
      'Use `@property` only for trivial, side-effect-free computed attributes. Anything that performs I/O, is expensive, or can fail must be an explicit method, and use `functools.cached_property` for values computed once.',
    category: 'python',
  },
  {
    id: 'python.keyword-only-args',
    title: 'Keyword-only arguments',
    prompt:
      'Force keyword-only arguments with a bare `*` when a function takes more than two parameters of the same type or any boolean flag, so calls read `send(msg, retry=True)` rather than `send(msg, True)`.',
    category: 'python',
  },
  {
    id: 'python.subprocess-safely',
    title: 'Safe subprocess calls',
    prompt:
      'Call external commands with `subprocess.run([...], check=True, capture_output=True, text=True)` and a list of arguments. Never use `shell=True` with interpolated input, and always set a `timeout`.',
    category: 'python',
  },
  {
    id: 'python.timezone-aware-datetimes',
    title: 'Timezone-aware datetimes',
    prompt:
      'Create datetimes with `datetime.now(tz=timezone.utc)` and never the naive `datetime.utcnow()` or `datetime.now()`. Store and transmit UTC in ISO 8601, and convert to local time only for display using `zoneinfo.ZoneInfo`.',
    category: 'python',
  },
  {
    id: 'python.explicit-encoding',
    title: 'Explicit encodings, str vs bytes',
    prompt:
      'Always pass `encoding="utf-8"` when opening text files and keep `str` and `bytes` strictly separate, converting explicitly with `.encode()`/`.decode()`. Never rely on the platform default encoding.',
    category: 'python',
  },
  {
    id: 'python.isinstance-not-type',
    title: 'isinstance for type checks',
    prompt:
      'Check types with `isinstance(x, Foo)` (or a tuple of types), never `type(x) == Foo`, so subclasses are handled. Prefer duck typing or a `Protocol` over runtime type checks where the behavior is what matters.',
    category: 'python',
  },
  {
    id: 'python.target-declared-version',
    title: 'Match requires-python',
    prompt:
      'Write for the interpreter version declared in `requires-python` and do not use syntax or stdlib features newer than it. Use `from __future__ import annotations` when forward references or newer typing syntax are needed on older supported versions.',
    category: 'python',
  },
]
