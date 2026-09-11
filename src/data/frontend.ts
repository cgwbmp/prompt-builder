import type { Prompt } from '../types'

export const frontend: Prompt[] = [
  {
    id: 'frontend.function-components-hooks',
    title: 'Function components and hooks',
    prompt:
      'Write every component as a function component using hooks; never class components. Call hooks only at the top level and unconditionally, and extract reusable stateful logic into custom `useSomething` hooks rather than higher-order components or render props.',
    category: 'frontend',
  },
  {
    id: 'frontend.derive-do-not-duplicate',
    title: 'Derive state, never duplicate',
    prompt:
      'If a value can be computed from existing props or state (a filtered list, a full name, a total), compute it during render. Never mirror it into `useState` and sync it with `useEffect`, which causes an extra render and lets the copies drift.',
    category: 'frontend',
  },
  {
    id: 'frontend.reset-state-with-key',
    title: 'Reset state with a key',
    prompt:
      'To reset a component when its subject changes (for example a profile editor when the user id changes), render it with a `key` equal to that identifier so React remounts it. Do not reset state manually inside an effect that watches the prop.',
    category: 'frontend',
  },
  {
    id: 'frontend.effects-only-for-sync',
    title: 'Effects only for external sync',
    prompt:
      'Use `useEffect` only to synchronize with something outside React (subscriptions, browser APIs, non-React widgets). Put event-driven logic in event handlers, never chain effects that set state to trigger other effects, and always return a cleanup that unsubscribes or ignores stale results.',
    category: 'frontend',
  },
  {
    id: 'frontend.data-fetching-library',
    title: 'Fetch with a data library',
    prompt:
      'Load server data with TanStack Query, SWR, or the framework loader instead of hand-rolled `useEffect` + `fetch`, so caching, deduplication, retries, and race conditions are handled. Key queries by every input that affects the result.',
    category: 'frontend',
  },
  {
    id: 'frontend.three-states',
    title: 'Loading, error, empty states',
    prompt:
      'Every asynchronous view must explicitly render its loading, error, and empty states in addition to the success state. Show a skeleton sized like the final content, an error message with a retry action, and a helpful empty state with a next step.',
    category: 'frontend',
  },
  {
    id: 'frontend.stable-keys',
    title: 'Stable unique keys',
    prompt:
      'Use a stable unique identifier from the data as the `key` for list items. Never use the array index for lists that can reorder, insert, or delete, and never generate keys with `Math.random()` or in render.',
    category: 'frontend',
  },
  {
    id: 'frontend.memoize-when-measured',
    title: 'Memoize only when measured',
    prompt:
      'Do not wrap components in `memo` or values in `useMemo`/`useCallback` by default. Profile with the React DevTools Profiler first; then prefer structural fixes (move state down, pass content as `children`) and memoize only the hot path that measurements identify.',
    category: 'frontend',
  },
  {
    id: 'frontend.colocate-state',
    title: 'Keep state local',
    prompt:
      'Keep state in the component that uses it and lift it only to the nearest common ancestor that needs it. Split unrelated values into separate `useState` calls, and switch to `useReducer` when several values change together in response to the same actions.',
    category: 'frontend',
  },
  {
    id: 'frontend.composition-before-context',
    title: 'Composition before context',
    prompt:
      'Pass props directly for one or two levels. Before reaching for context to avoid prop drilling, try composition: pass fully rendered elements as `children` or slot props. Use context only for global, rarely changing data such as theme, locale, or the current user, and split contexts by update frequency.',
    category: 'frontend',
  },
  {
    id: 'frontend.url-as-state',
    title: 'URL as state for navigation',
    prompt:
      'Store filters, sort order, pagination, selected tab, and open modal ids in the URL search params or route rather than component state, so views are shareable, bookmarkable, and survive reload.',
    category: 'frontend',
  },
  {
    id: 'frontend.server-state-vs-client-state',
    title: 'Separate server and client state',
    prompt:
      'Do not copy server data into a global store; let the query cache own it. Keep UI state local to components, and introduce a global client store (Zustand, Jotai, Redux) only for genuinely cross-cutting client-only state such as an in-progress multi-step wizard.',
    category: 'frontend',
  },
  {
    id: 'frontend.controlled-inputs',
    title: 'Controlled inputs, consistently',
    prompt:
      'Make form inputs controlled with `value` and `onChange` (or fully uncontrolled via a form library such as React Hook Form), but never switch an input between the two. Initialize controlled values to `""` rather than `undefined`.',
    category: 'frontend',
  },
  {
    id: 'frontend.forms-native-submit',
    title: 'Native form submission',
    prompt:
      'Wrap fields in a `<form>` with an `onSubmit` handler that calls `preventDefault()`, and include a real submit `<button type="submit">` so Enter works. Use native validation attributes (`required`, `type="email"`, `minLength`) as the first layer, disable the submit button while pending, and show field errors inline linked with `aria-describedby`.',
    category: 'frontend',
  },
  {
    id: 'frontend.pending-and-optimistic',
    title: 'Pending and optimistic updates',
    prompt:
      'For mutations, show a pending state immediately (disabled button, spinner, or `useTransition`), prevent double submission, and use `useOptimistic` or the query library optimistic update pattern for instant feedback with rollback on failure.',
    category: 'frontend',
  },
  {
    id: 'frontend.tailwind-conventions',
    title: 'Tailwind class conventions',
    prompt:
      'Style with Tailwind utility classes directly in JSX, merge conditional classes with `clsx` plus `tailwind-merge` (a `cn()` helper), and extract a component rather than a shared class string when markup repeats. Avoid `@apply` and arbitrary values like `w-[347px]`; use theme tokens.',
    category: 'frontend',
  },
  {
    id: 'frontend.css-variables-tokens',
    title: 'Design tokens as CSS variables',
    prompt:
      'Define colors, spacing, radii, and typography as CSS custom properties on `:root`, override them under `[data-theme="dark"]` or `.dark`, and reference the variables from Tailwind theme config or component styles. Never hard-code hex values in components.',
    category: 'frontend',
  },
  {
    id: 'frontend.mobile-first-responsive',
    title: 'Mobile-first responsive layout',
    prompt:
      'Write base styles for narrow screens and add `sm:`/`md:`/`lg:` overrides upward. Use flex and grid with relative units, avoid fixed pixel widths and heights, and verify the layout at 375px and with 200% browser zoom.',
    category: 'frontend',
  },
  {
    id: 'frontend.server-components-default',
    title: 'Server components by default',
    prompt:
      "In React Server Component frameworks (Next.js App Router), keep components on the server and fetch data directly in async server components. Add `'use client'` only at the smallest leaf that needs state, effects, or browser APIs, and pass only serializable props across the boundary.",
    category: 'frontend',
  },
  {
    id: 'frontend.hydration-safe',
    title: 'Hydration-safe rendering',
    prompt:
      'Never read `window`, `localStorage`, `Date.now()`, or random values during render, because server and client output would differ and cause hydration errors. Read browser-only values in an effect or via `useSyncExternalStore`, rendering a neutral placeholder first.',
    category: 'frontend',
  },
  {
    id: 'frontend.suspense-and-error-boundaries',
    title: 'Suspense and error boundaries',
    prompt:
      'Wrap independent sections in their own `<Suspense fallback>` so one slow region does not block the page, and place an error boundary around each route and each self-contained widget with a reset action. Reserve space for the fallback to avoid layout shift.',
    category: 'frontend',
  },
  {
    id: 'frontend.component-props-api',
    title: 'Small, typed component APIs',
    prompt:
      'Type props with an explicit `Props` interface, extend native element props via `ComponentPropsWithoutRef<"button">` and spread the rest onto the root element, and forward `ref` for reusable primitives. Use a `variant` string union instead of several mutually exclusive boolean props, and use `children` for composition.',
    category: 'frontend',
  },
  {
    id: 'frontend.handler-naming',
    title: 'onX props, handleX functions',
    prompt:
      'Name callback props `onSomething` (`onSelect`, `onClose`) and the internal functions that implement them `handleSomething`. Pass the handler reference, never call it inline as `onClick={handleClick()}`.',
    category: 'frontend',
  },
  {
    id: 'frontend.conditional-rendering',
    title: 'Safe conditional rendering',
    prompt:
      'Use early returns for whole-component conditions and ternaries for inline branches. Do not use `&&` with values that may be `0` or `NaN` (they render); coerce with `Boolean()` or compare explicitly.',
    category: 'frontend',
  },
  {
    id: 'frontend.no-inline-component-defs',
    title: 'No components defined in render',
    prompt:
      'Never define a component inside another component body; it gets a new identity on every render and remounts its subtree. Hoist it to module scope and pass data through props.',
    category: 'frontend',
  },
  {
    id: 'frontend.refs-not-state-for-mutables',
    title: 'Refs for non-rendered values',
    prompt:
      'Store values that do not affect output (timer ids, previous values, DOM nodes, in-flight flags) in `useRef`, not `useState`, and never read or write `ref.current` during render.',
    category: 'frontend',
  },
  {
    id: 'frontend.virtualize-long-lists',
    title: 'Virtualize long lists',
    prompt:
      'Render lists longer than roughly a hundred rows with a virtualizer (TanStack Virtual, react-window) so only visible rows mount. Paginate or infinite-scroll server data rather than loading it all.',
    category: 'frontend',
  },
  {
    id: 'frontend.images-and-code-splitting',
    title: 'Lazy images and route splitting',
    prompt:
      'Give every image explicit `width` and `height` (or an aspect-ratio box) to prevent layout shift, use `loading="lazy"` below the fold, and prefer the framework image component with modern formats. Code-split by route with `React.lazy` or dynamic imports behind `Suspense`.',
    category: 'frontend',
  },
  {
    id: 'frontend.css-animations',
    title: 'Animate with CSS transforms',
    prompt:
      'Animate with CSS `transform` and `opacity` (or the View Transitions API), not JavaScript-driven layout properties like `top`, `height`, or `margin`. Avoid reading layout (`offsetHeight`, `getBoundingClientRect`) and writing styles in the same frame.',
    category: 'frontend',
  },
  {
    id: 'frontend.sanitize-html',
    title: 'No raw HTML injection',
    prompt:
      'Avoid `dangerouslySetInnerHTML`. When rendering user- or CMS-provided HTML is unavoidable, sanitize it with DOMPurify first and never interpolate untrusted strings into `href`, `src`, or `style` attributes.',
    category: 'frontend',
  },
  {
    id: 'frontend.test-through-accessible-dom',
    title: 'Test via the accessible DOM',
    prompt:
      'Test components with React Testing Library by querying `getByRole`, `getByLabelText`, and `getByText`, and interact with `@testing-library/user-event`. Do not assert on component state, class names, or implementation details, and treat a missing role query as an accessibility bug to fix in the component.',
    category: 'frontend',
  },
  {
    id: 'frontend.colocate-component-files',
    title: 'One component per file',
    prompt:
      'Put each component in its own PascalCase file with its styles, tests, and stories beside it, and group by feature rather than by file type. Keep shared primitives in a `components/ui` folder separate from feature components.',
    category: 'frontend',
  },
]
