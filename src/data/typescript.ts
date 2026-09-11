import type { Prompt } from '../types'

export const typescript: Prompt[] = [
  {
    id: 'typescript.strict-mode',
    title: 'Strict compiler settings',
    prompt:
      'Write TypeScript that compiles under `strict: true` plus `noUncheckedIndexedAccess`, `noImplicitOverride`, and `exactOptionalPropertyTypes`. Never use `// @ts-ignore`; if a suppression is unavoidable use `// @ts-expect-error` with a one-line reason.',
    category: 'typescript',
  },
  {
    id: 'typescript.no-any',
    title: 'No any, use unknown',
    prompt:
      'Never use `any`, including implicit `any` and `Record<string, any>`. Type values of unknown shape as `unknown` and narrow them with type guards before use.',
    category: 'typescript',
  },
  {
    id: 'typescript.validate-at-boundaries',
    title: 'Schema-validate at boundaries',
    prompt:
      'Treat all external input (HTTP bodies, query strings, environment variables, JSON files, localStorage, `JSON.parse` output) as `unknown` and parse it with a schema library such as zod or valibot at the boundary. Derive the TypeScript type from the schema with `z.infer` instead of declaring it twice.',
    category: 'typescript',
  },
  {
    id: 'typescript.discriminated-unions',
    title: 'Discriminated unions for states',
    prompt:
      'Model mutually exclusive states as a discriminated union with a literal `kind` or `status` field (for example `{ status: "loading" } | { status: "error"; error: Error } | { status: "success"; data: T }`). Never represent them with parallel optional fields or multiple boolean flags.',
    category: 'typescript',
  },
  {
    id: 'typescript.exhaustive-switch',
    title: 'Exhaustive switch on unions',
    prompt:
      'When branching on a union, handle every member and end with a `default` that passes the value to an `assertNever(x: never)` helper, so adding a new variant fails to compile instead of silently falling through.',
    category: 'typescript',
  },
  {
    id: 'typescript.prefer-satisfies',
    title: 'Prefer satisfies over annotation',
    prompt:
      'Use `satisfies SomeType` to check an object literal against a type while preserving its narrow inferred literal types. Do not widen the value with a `: SomeType` annotation or force it with `as SomeType`.',
    category: 'typescript',
  },
  {
    id: 'typescript.no-type-assertions',
    title: 'Avoid as casts',
    prompt:
      "Do not use `as` type assertions except `as const`. Replace them with type guards, control-flow narrowing, or schema parsing. If a cast is truly unavoidable, add a comment explaining why it is safe and never chain `as unknown as T`.",
    category: 'typescript',
  },
  {
    id: 'typescript.no-non-null-assertion',
    title: 'No non-null assertions',
    prompt:
      'Never use the `!` non-null assertion operator. Handle the null or undefined case explicitly with an early return, `??`, optional chaining, or by throwing a descriptive error.',
    category: 'typescript',
  },
  {
    id: 'typescript.const-objects-not-enums',
    title: 'Const objects over enums',
    prompt:
      'Do not use `enum` (and never `const enum`). Express fixed sets as an `as const` object plus a derived type (`type Color = (typeof Color)[keyof typeof Color]`) or as a string literal union.',
    category: 'typescript',
  },
  {
    id: 'typescript.generics-restraint',
    title: 'Generics only when needed',
    prompt:
      'Introduce a type parameter only when it relates at least two positions (for example an argument and the return type). If a type parameter appears once, replace it with `unknown` or a concrete type. Never declare generic types whose parameter is unused.',
    category: 'typescript',
  },
  {
    id: 'typescript.interface-vs-type',
    title: 'Interface vs type alias',
    prompt:
      'Use `interface` for object shapes that may be extended or implemented and `type` for unions, intersections, tuples, and mapped or conditional types. Apply the same choice consistently across the codebase.',
    category: 'typescript',
  },
  {
    id: 'typescript.readonly-by-default',
    title: 'Readonly by default',
    prompt:
      'Mark properties that are not reassigned after construction as `readonly`, type arrays that are never mutated as `readonly T[]`, and freeze literal configuration with `as const`. Return new objects instead of mutating function arguments.',
    category: 'typescript',
  },
  {
    id: 'typescript.utility-types',
    title: 'Derive types, do not duplicate',
    prompt:
      'Derive related types from a single source with `Pick`, `Omit`, `Partial`, `Required`, `Extract`, `Exclude`, `ReturnType`, `Parameters`, and indexed access types (`User["id"]`) rather than hand-copying fields into a second declaration.',
    category: 'typescript',
  },
  {
    id: 'typescript.explicit-return-types',
    title: 'Explicit exported return types',
    prompt:
      'Annotate the return type of every exported function and public method so its contract is stable and errors surface at the definition rather than at call sites. Let inference handle local variables and inline callbacks.',
    category: 'typescript',
  },
  {
    id: 'typescript.no-floating-promises',
    title: 'No floating promises',
    prompt:
      'Every promise must be awaited, returned, or explicitly discarded with `void` and a comment. Use `async`/`await` consistently instead of mixing `.then()` chains, and never pass an async function where a synchronous callback is expected (for example `forEach`).',
    category: 'typescript',
  },
  {
    id: 'typescript.catch-unknown',
    title: 'Catch as unknown',
    prompt:
      'Type catch clauses as `catch (err: unknown)` and narrow with `instanceof Error` before reading `.message` or `.stack`. Throw only `Error` instances or subclasses, never strings or plain objects, and wrap lower-level errors with `new Error(msg, { cause })`.',
    category: 'typescript',
  },
  {
    id: 'typescript.result-types',
    title: 'Result types for expected failures',
    prompt:
      'For failures that are part of normal control flow (validation, not-found lookups, parse errors) return a discriminated `Result` type such as `{ ok: true; value: T } | { ok: false; error: E }` instead of throwing. Reserve exceptions for bugs and unrecoverable conditions.',
    category: 'typescript',
  },
  {
    id: 'typescript.custom-error-classes',
    title: 'Typed custom errors',
    prompt:
      'Define custom errors as classes extending `Error` with `name` set to the class name and a literal `code` field (for example `code = "NOT_FOUND" as const`), so callers discriminate on `code` rather than parsing message text.',
    category: 'typescript',
  },
  {
    id: 'typescript.esm-only',
    title: 'ES modules only',
    prompt:
      'Use ES module syntax exclusively: `import`/`export`, `"type": "module"` in package.json, and `import type` for type-only imports (enable `verbatimModuleSyntax`). Do not use `require`, `module.exports`, or `namespace`.',
    category: 'typescript',
  },
  {
    id: 'typescript.named-exports',
    title: 'Named exports only',
    prompt:
      'Use named exports and never default exports, so symbols keep one name across the codebase and are easy to grep and refactor. Avoid barrel `index.ts` files that re-export everything unless the package boundary requires one.',
    category: 'typescript',
  },
  {
    id: 'typescript.strict-equality-nullish',
    title: 'Strict equality and nullish',
    prompt:
      'Always use `===` and `!==`. Use `??` for defaults so that `0`, `""`, and `false` are preserved, and use `||` only when falsy values should genuinely be replaced. Apply optional chaining `?.` only where absence is a legitimate state, not to silence type errors.',
    category: 'typescript',
  },
  {
    id: 'typescript.type-predicates',
    title: 'Reusable type guards',
    prompt:
      'Write reusable narrowing as type predicate functions (`function isUser(x: unknown): x is User`) and prefer `in` checks and discriminant fields over duck-typing by property presence. Keep guards next to the type they guard.',
    category: 'typescript',
  },
  {
    id: 'typescript.branded-ids',
    title: 'Branded types for identifiers',
    prompt:
      'Use branded types for identifiers and units that must never be mixed, for example `type UserId = string & { readonly __brand: "UserId" }`, with a single constructor function that performs the cast. Never pass a raw `string` where a branded id is expected.',
    category: 'typescript',
  },
  {
    id: 'typescript.no-boxed-or-function-types',
    title: 'Precise primitive and function types',
    prompt:
      'Use lowercase primitives (`string`, `number`, `boolean`) and never boxed `String`, `Number`, `Boolean`, or `Object`. Type callbacks with explicit signatures such as `(id: string) => void` instead of `Function`, and use `void` (not `any`) for callback return values that are ignored.',
    category: 'typescript',
  },
  {
    id: 'typescript.unions-over-overloads',
    title: 'Unions before overloads',
    prompt:
      'Prefer union parameter types and optional parameters over function overloads. When overloads are truly needed, list the most specific signatures first and never write overloads that differ only in callback arity or trailing optional parameters.',
    category: 'typescript',
  },
  {
    id: 'typescript.optional-vs-undefined',
    title: 'Optional vs undefined properties',
    prompt:
      'Distinguish `prop?: T` (may be absent) from `prop: T | undefined` (must be present, may be undefined) and pick deliberately. Do not assign `undefined` explicitly to optional properties; omit the key instead so `exactOptionalPropertyTypes` stays satisfied.',
    category: 'typescript',
  },
  {
    id: 'typescript.functions-over-classes',
    title: 'Functions and modules over classes',
    prompt:
      'Prefer plain functions and modules. Use a `class` only when instances carry state plus behavior together; avoid decorators, parameter properties, and inheritance hierarchies unless a framework requires them.',
    category: 'typescript',
  },
  {
    id: 'typescript.immutable-array-ops',
    title: 'Non-mutating collection operations',
    prompt:
      'Prefer `map`, `filter`, `flatMap`, `toSorted`, `toReversed`, `with`, and spread over mutating `push`, `splice`, `sort`, or `reverse` on shared arrays. Use `for...of` instead of `forEach` when you need `await`, `break`, or `continue`.',
    category: 'typescript',
  },
  {
    id: 'typescript.map-set-for-dynamic-keys',
    title: 'Map and Set over objects',
    prompt:
      'Use `Map` and `Set` for collections keyed at runtime instead of plain objects, which inherit prototype keys and lose key typing. Use `Record<K, V>` only for fixed, known key sets, and `Object.entries`/`Object.fromEntries` for conversions.',
    category: 'typescript',
  },
  {
    id: 'typescript.parallel-async',
    title: 'Parallelize independent async work',
    prompt:
      'Run independent asynchronous operations concurrently with `Promise.all`, and use `Promise.allSettled` when partial failure is acceptable. Do not `await` inside a loop unless each iteration depends on the previous one, and wrap outbound calls with an `AbortController` timeout.',
    category: 'typescript',
  },
  {
    id: 'typescript.node-vs-browser',
    title: 'Respect Node vs browser APIs',
    prompt:
      'Do not assume `Buffer`, `process`, `fs`, or `__dirname` exist in browser code, nor `window`, `document`, or `localStorage` in Node. Isolate platform-specific code behind small modules and use shared Web APIs (`fetch`, `URL`, `TextEncoder`, `crypto.subtle`, `globalThis`) for code that must run in both.',
    category: 'typescript',
  },
  {
    id: 'typescript.numbers-and-parsing',
    title: 'Safe number handling',
    prompt:
      'Use `Number.isNaN` and `Number.isFinite` instead of the global versions, always pass a radix to `parseInt`, prefer `Number()` for whole-string conversion, and use `BigInt` for integers beyond `Number.MAX_SAFE_INTEGER`. Never compare floating-point money values directly; store minor units as integers.',
    category: 'typescript',
  },
  {
    id: 'typescript.dates-iso',
    title: 'ISO dates at boundaries',
    prompt:
      'Serialize dates as ISO 8601 UTC strings at API and storage boundaries and convert to `Date` (or Temporal) only inside the application. Never construct a `Date` from a non-ISO string or rely on the runtime local time zone.',
    category: 'typescript',
  },
  {
    id: 'typescript.const-no-var',
    title: 'const first, never var',
    prompt:
      'Declare with `const` by default, use `let` only when reassignment is required, and never use `var`. Do not reassign function parameters; create a new local instead.',
    category: 'typescript',
  },
  {
    id: 'typescript.eslint-typed-rules',
    title: 'Type-aware linting',
    prompt:
      'Lint with typescript-eslint using the `strict-type-checked` and `stylistic-type-checked` configs and format with Prettier. Run `tsc --noEmit` as a separate CI step, and never add an `eslint-disable` comment without a justification on the same line.',
    category: 'typescript',
  },
  {
    id: 'typescript.no-circular-imports',
    title: 'No circular imports',
    prompt:
      'Keep the module graph acyclic: if two modules import each other, extract the shared piece into a third module. Co-locate types with the code that owns them and reserve a shared `types.ts` for genuinely cross-cutting types.',
    category: 'typescript',
  },
  {
    id: 'typescript.template-literal-types',
    title: 'Template literal types for strings',
    prompt:
      'When a string must follow a pattern (event names like `user:${string}`, CSS units like `${number}px`, route paths), type it with a template literal type instead of plain `string` so invalid values are rejected at compile time.',
    category: 'typescript',
  },
]
