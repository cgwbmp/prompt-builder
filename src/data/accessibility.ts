import type { Prompt } from '../types'

export const accessibility: Prompt[] = [
  {
    id: 'accessibility.wcag-22-aa-baseline',
    title: 'WCAG 2.2 AA baseline',
    prompt:
      'Treat WCAG 2.2 Level AA as the minimum bar for every UI change. When a design request conflicts with it, name the success criterion (for example 2.4.11 Focus Not Obscured) and propose a compliant alternative instead of silently complying.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.semantic-html-first',
    title: 'Semantic HTML before ARIA',
    prompt:
      'Build with native semantic elements (button, a, nav, main, ul, table, dialog, details, select) before reaching for div or span with a role. A native element provides keyboard behavior, focusability, and a role for free; a div with a role provides none of them.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.aria-only-when-needed',
    title: 'ARIA only when needed',
    prompt:
      'Add ARIA only when no native element expresses the semantics, and never override the role of a native element. For every ARIA attribute you add, be able to state the screen reader behavior it produces; remove any you cannot justify.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.accessible-name-every-control',
    title: 'Accessible name on every control',
    prompt:
      'Give every interactive control an accessible name that says what it does, via visible text, a label element, aria-labelledby, or aria-label. Icon-only buttons need aria-label, and the decorative icon inside them needs aria-hidden="true".',
    category: 'accessibility',
  },
  {
    id: 'accessibility.label-in-name',
    title: 'Visible label in the name',
    prompt:
      'Make the accessible name start with or contain the visible label text (WCAG 2.5.3 Label in Name) so voice-control users can activate a control by saying what they see. Do not give a button labeled "Save" an aria-label of "Submit form".',
    category: 'accessibility',
  },
  {
    id: 'accessibility.visible-focus',
    title: 'Visible focus indicator',
    prompt:
      'Never remove focus outlines without replacing them. Style :focus-visible with an indicator at least 2 CSS px thick with 3:1 contrast against adjacent colors, and make sure the focused element is never fully hidden behind sticky headers, footers, or cookie banners.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.logical-tab-order',
    title: 'Logical tab order',
    prompt:
      'Keep DOM order equal to visual reading order so Tab follows the layout. Never use positive tabindex values; use tabindex="0" only to make a custom widget focusable and tabindex="-1" only for programmatic focus targets.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.skip-link',
    title: 'Skip to main content link',
    prompt:
      'Add a "Skip to main content" link as the first focusable element on every page, visually hidden until it receives focus, that moves focus to the main landmark.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.keyboard-operable-everything',
    title: 'Everything works by keyboard',
    prompt:
      'Every action available by mouse or touch must be available by keyboard alone: Enter and Space activate, Escape dismisses, and arrow keys move within composite widgets (tabs, menus, listboxes, radio groups, sliders) exactly as the WAI-ARIA Authoring Practices pattern for that widget specifies.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.no-keyboard-trap',
    title: 'No keyboard traps',
    prompt:
      'Focus must always be able to leave a component with Tab, Shift+Tab, or Escape. The only permitted focus trap is inside an open modal dialog, and it must be released the moment the dialog closes.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.dialog-focus-management',
    title: 'Dialog focus management',
    prompt:
      'When a dialog opens, move focus into it (first focusable element or its heading), make background content inert or aria-hidden, close on Escape, and on close return focus to the element that opened it. Prefer the native dialog element with showModal() which does most of this.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.route-change-focus',
    title: 'Focus on route change',
    prompt:
      'On client-side navigation, update document.title and move focus to the new view (its h1 or main container with tabindex="-1") so screen reader and keyboard users know the page changed and do not remain on a stale element.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.live-regions',
    title: 'Live regions for async updates',
    prompt:
      'Announce asynchronous results (result counts, "saved", toasts, validation summaries) through a live region: aria-live="polite" or role="status" for status, role="alert" only for urgent errors. Render the live region container on page load and change its text; regions created on the fly are often not announced.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.form-labels-explicit',
    title: 'Explicit form labels',
    prompt:
      'Every form field has a visible label programmatically associated with it (label for/id or a wrapping label). Placeholder text is not a label; keep it for optional hints that can disappear without losing information.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.error-association',
    title: 'Associate errors with fields',
    prompt:
      'Link each validation message to its field with aria-describedby, set aria-invalid="true" on the failing field, and on submit move focus to the first invalid field or to an error summary whose entries link to each field. State what is wrong and how to fix it in the message text.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.required-and-hints',
    title: 'Required fields and hints',
    prompt:
      'Indicate required fields in text, not by color or an asterisk alone, and connect format hints and character limits to the input via aria-describedby so they are read before the user types. Use autocomplete attributes on personal-data fields.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.color-not-sole-indicator',
    title: 'Never color alone',
    prompt:
      'Never convey state (error, selected, active, required, link) by color alone. Pair color with text, an icon, an underline, a border change, or a pattern so the state is perceivable without color vision.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.reduced-motion-and-pause',
    title: 'Reduced motion and pause controls',
    prompt:
      'Disable non-essential animation under @media (prefers-reduced-motion: reduce), replacing movement with fades or instant changes, and give any content that moves, blinks, or auto-updates for more than five seconds a pause, stop, or hide control. Never flash content more than three times per second.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.forced-colors-and-contrast',
    title: 'Forced colors and high contrast',
    prompt:
      'Support Windows High Contrast (forced-colors: active) and prefers-contrast: more: express boundaries and states with border and outline rather than only background or box-shadow, use CSS system colors where you opt out of forced colors, and check that icons and focus rings survive.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.target-size',
    title: 'Minimum target size',
    prompt:
      'Make every pointer target at least 24 by 24 CSS px, or spaced so a 24 px circle centered on it does not intersect another target (WCAG 2.5.8), and prefer 44 by 44 for primary touch controls. Inline links in prose are exempt; icon buttons, list row actions, and close buttons are not.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.pointer-cancellation',
    title: 'Activate on release, not press',
    prompt:
      'Trigger actions on the up event (click, pointerup), never on pointerdown or touchstart, so users can abort by moving away before release. Provide an undo or confirmation for destructive actions triggered by a single pointer action.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.alt-text-rules',
    title: 'Alt text: informative vs decorative',
    prompt:
      'Give informative images alt text that conveys their purpose in one sentence without "image of" or "picture of"; give purely decorative images alt="" so they are skipped. For complex images such as charts and diagrams, provide the full information as nearby text or a linked description.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.heading-hierarchy',
    title: 'Heading hierarchy',
    prompt:
      'Use exactly one h1 per page and nest headings without skipping levels. Choose the heading level by document outline and adjust its appearance with CSS; never pick h4 because it looks the right size.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.landmarks',
    title: 'Landmark regions',
    prompt:
      'Wrap page regions in landmarks (header, nav, main, aside, footer, or section with a heading) with exactly one main per page. When a landmark type appears more than once, label each with aria-label or aria-labelledby so they can be told apart in a screen reader rotor.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.data-tables',
    title: 'Accessible data tables',
    prompt:
      'Mark up tabular data with table, thead, th with scope="col" or scope="row", and a caption that names the table. Do not use tables for layout, and do not build tables from divs with role="grid" unless you implement full grid keyboard navigation.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.link-text-meaningful',
    title: 'Meaningful link and button text',
    prompt:
      'Link and button text must make sense out of context: no "click here", "here", or bare "Read more". If the visible label must stay short, add the specific target with visually hidden text or aria-label, keeping the visible words in the name.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.media-captions-transcripts',
    title: 'Captions and transcripts',
    prompt:
      'Provide synchronized captions for video with speech, a transcript for audio-only content, and audio description or an equivalent text alternative for visual-only information. Never autoplay sound, and expose pause, stop, and volume controls for any media.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.timeouts-and-auto-refresh',
    title: 'Adjustable timeouts',
    prompt:
      'Let users turn off, adjust, or extend any time limit, warning them at least 20 seconds before expiry with a simple action to extend, and preserve entered data across a session timeout. Let users pause or stop auto-refreshing content such as feeds and carousels.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.zoom-and-reflow',
    title: 'Zoom to 400% without loss',
    prompt:
      'Support 200 percent browser zoom without horizontal scrolling and 400 percent at a 1280 px viewport (reflow to 320 CSS px) without losing content or function. Use rem-based sizing and avoid fixed heights or overflow: hidden on text containers.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.text-spacing-resilience',
    title: 'Survive user text spacing',
    prompt:
      'Ensure layouts do not clip or overlap when users override text to line-height 1.5, paragraph spacing 2em, letter spacing 0.12em, and word spacing 0.16em (WCAG 1.4.12). Let containers grow with their text.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.hidden-content-consistency',
    title: 'Hide content consistently',
    prompt:
      'Hide content from everyone with display: none or the hidden attribute; use aria-hidden="true" only for content that is visible but redundant for screen readers, and never on a focusable element. Use a visually-hidden (sr-only) class for text meant only for assistive technology.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.disabled-and-busy-states',
    title: 'Announce disabled and busy states',
    prompt:
      'For controls that are temporarily unavailable, prefer aria-disabled="true" over the disabled attribute so they stay focusable and can explain why via aria-describedby. Set aria-busy="true" on a region while it reloads and reflect loading in text, not only in a spinner.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.custom-widgets-apg',
    title: 'Custom widgets follow APG',
    prompt:
      'Before writing a custom combobox, tabs, menu, tree, slider, or disclosure, implement the exact roles, states (aria-expanded, aria-selected, aria-activedescendant, aria-controls), and keyboard interactions from the matching WAI-ARIA Authoring Practices Guide pattern. Prefer a well-tested headless UI library over a bespoke widget.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.drag-and-drop-alternative',
    title: 'Alternative to drag and drop',
    prompt:
      'For every drag-and-drop interaction, provide a single-pointer alternative (move up/down buttons, a "move to" menu, cut and paste) and an equivalent keyboard path (WCAG 2.5.7 Dragging Movements). Announce the result of a move through a live region.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.redundant-entry-and-help',
    title: 'No redundant entry',
    prompt:
      'Within a multi-step process, never ask for information the user already entered; auto-populate it or offer it for selection (WCAG 3.3.7). Keep help mechanisms such as contact links or chat in the same relative location on every page (3.2.6).',
    category: 'accessibility',
  },
  {
    id: 'accessibility.accessible-authentication',
    title: 'Accessible authentication',
    prompt:
      'Do not make login depend on a cognitive test: allow paste into password and one-time-code fields, support password managers and autofill (autocomplete="current-password", "one-time-code"), and offer an alternative to any puzzle CAPTCHA (WCAG 3.3.8).',
    category: 'accessibility',
  },
  {
    id: 'accessibility.lang-attribute',
    title: 'Language attribute',
    prompt:
      'Set lang on the html element to the page language (for example lang="en" or lang="de") and mark inline passages in another language with their own lang attribute so screen readers switch pronunciation.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.accessible-charts',
    title: 'Accessible charts',
    prompt:
      'For every chart, provide the underlying data as a table or a text summary of the key takeaway, give the svg or canvas role="img" with an aria-label stating the conclusion, and distinguish series by shape, pattern, or direct labels rather than color alone.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.screen-reader-testing',
    title: 'Test with a screen reader',
    prompt:
      'Before calling an interactive component done, test it with at least one screen reader (VoiceOver with Safari on macOS or iOS, NVDA with Firefox or Chrome on Windows) and report what is announced at each step. "It works" is not a result; the announcement text is.',
    category: 'accessibility',
  },
  {
    id: 'accessibility.axe-floor-not-ceiling',
    title: 'Automated checks are a floor',
    prompt:
      'Run axe-core (or the axe-based Lighthouse audit) in CI and fail the build on any violation, but treat it as a floor: automated tools detect roughly a third of accessibility issues. Follow every new interactive pattern with a keyboard-only pass and a screen reader pass.',
    category: 'accessibility',
  },
]
