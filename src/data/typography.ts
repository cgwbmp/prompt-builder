import type { Prompt } from '../types'

export const typography: Prompt[] = [
  {
    id: 'typography.system-font-stack',
    title: 'System font stack',
    prompt:
      'Use the native system font stack for all UI text (font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif) with no web font downloads. Rely on size, weight, and spacing for character rather than a custom typeface.',
    category: 'typography',
  },
  {
    id: 'typography.single-family',
    title: 'One typeface only',
    prompt:
      'Use exactly one type family for the entire interface, including headings, body, labels, and buttons. Create all hierarchy with size, weight, and letter-spacing within that single family.',
    category: 'typography',
  },
  {
    id: 'typography.grotesk-humanist-pairing',
    title: 'Grotesk heading, humanist body',
    prompt:
      'Pair a neutral grotesk sans (Inter, Geist, or Space Grotesk style) for headings and UI controls with a warmer humanist sans (Source Sans, Lato, or Nunito Sans style) for body copy. Keep the pairing to those two families and give each a clearly separate job so the contrast reads as intentional.',
    category: 'typography',
  },
  {
    id: 'typography.serif-editorial',
    title: 'Serif for editorial content',
    prompt:
      'Set long-form and editorial content (articles, marketing narrative, pull quotes) in a high-contrast serif such as a Georgia, Source Serif, or Playfair style at 18-20px, and keep all functional UI (navigation, buttons, forms, tables) in a sans-serif so the two registers never mix.',
    category: 'typography',
  },
  {
    id: 'typography.monospace-for-data',
    title: 'Monospace for code and data',
    prompt:
      'Set code snippets, identifiers, hashes, file paths, keyboard shortcuts, and timestamps in a monospace face (JetBrains Mono, IBM Plex Mono, or the system monospace stack) one step smaller than the surrounding body size. Never use monospace for prose or labels.',
    category: 'typography',
  },
  {
    id: 'typography.tabular-numerals',
    title: 'Tabular numerals in tables',
    prompt:
      'Enable tabular, lining numerals (font-variant-numeric: tabular-nums lining-nums) on every column of numbers, price, counter, timer, and dashboard metric so digits align vertically and values do not jitter as they update. Right-align numeric columns.',
    category: 'typography',
  },
  {
    id: 'typography.modular-scale',
    title: 'Major Third modular scale',
    prompt:
      'Derive all font sizes from a 1.25 (Major Third) modular scale based on a 16px root: roughly 12.8, 16, 20, 25, 31, 39, 49px, rounded to whole pixels. Every text size on the screen must come from this scale; do not introduce arbitrary sizes like 15px or 22px.',
    category: 'typography',
  },
  {
    id: 'typography.fixed-scale-tokens',
    title: 'Named size tokens',
    prompt:
      'Expose the type scale as a small set of named tokens (xs 12, sm 14, base 16, lg 18, xl 20, 2xl 24, 3xl 30, 4xl 36px), each bundled with its own line-height and letter-spacing. Components reference tokens by name and never set a raw font-size.',
    category: 'typography',
  },
  {
    id: 'typography.max-three-sizes',
    title: 'Max three sizes per screen',
    prompt:
      'Use at most three distinct font sizes on any single screen: one for the primary heading, one for body and controls, and one for secondary or caption text. If a fourth level of hierarchy is needed, express it with weight or opacity, not another size.',
    category: 'typography',
  },
  {
    id: 'typography.line-height-rules',
    title: 'Line-height 1.5 body, 1.2 headings',
    prompt:
      'Set body text line-height to 1.5 and tighten it as size increases: 1.3 for 24-30px headings, 1.1-1.2 for anything above 32px. Set line-height as a unitless ratio, never a fixed pixel value, so it scales with the text.',
    category: 'typography',
  },
  {
    id: 'typography.measure-60-75ch',
    title: 'Measure of 60-75 characters',
    prompt:
      'Constrain running text to a measure of 60-75 characters per line (max-width: 65ch on paragraphs) and never let body copy run the full width of a wide container. Short captions and UI labels are exempt.',
    category: 'typography',
  },
  {
    id: 'typography.tight-tracking-headings',
    title: 'Tighter tracking on large headings',
    prompt:
      'Apply negative letter-spacing to large headings, scaling with size: -0.01em at 24px, -0.02em at 32-40px, -0.03em at 48px and above. Leave body text at the default tracking of 0.',
    category: 'typography',
  },
  {
    id: 'typography.two-three-weights',
    title: 'Two or three weights only',
    prompt:
      'Limit the interface to two or three font weights, typically 400 for body, 500 or 600 for labels and emphasis, and 700 for headings. Do not use 100-300 weights for anything smaller than 40px, and never use more than one bold weight.',
    category: 'typography',
  },
  {
    id: 'typography.no-faux-styles',
    title: 'No faux bold or italic',
    prompt:
      'Only use weights and italic styles that the loaded font actually ships; never let the browser synthesize them (set font-synthesis: none). If a font has no italic, express emphasis with weight instead.',
    category: 'typography',
  },
  {
    id: 'typography.sentence-case-labels',
    title: 'Sentence case for UI labels',
    prompt:
      'Write all buttons, menu items, headings, form labels, and tab names in sentence case (only the first word and proper nouns capitalized). Never use Title Case or all caps for standard UI labels.',
    category: 'typography',
  },
  {
    id: 'typography.caps-small-labels',
    title: 'All-caps only with tracking',
    prompt:
      'Reserve all-caps text for small eyebrow labels, section overlines, and table headers at 12-13px. Whenever text is set in caps, add letter-spacing of 0.05-0.1em and use weight 500-600 so it stays legible; never set body copy or headings above 14px in all caps.',
    category: 'typography',
  },
  {
    id: 'typography.min-16px-mobile',
    title: 'Minimum 16px body on mobile',
    prompt:
      'Set body text and all form inputs to a minimum of 16px on mobile viewports (this also prevents iOS Safari from zooming on focus). Nothing user-readable may go below 12px on any device, and 12px is reserved for captions and legal text.',
    category: 'typography',
  },
  {
    id: 'typography.fluid-clamp',
    title: 'Fluid type with clamp()',
    prompt:
      'Make headings fluid with clamp(), for example font-size: clamp(2rem, 1.2rem + 2.5vw, 3.5rem), so they scale smoothly between 360px and 1440px viewports without breakpoint jumps. Keep body text at a fixed 16-18px; only headings and display text are fluid.',
    category: 'typography',
  },
  {
    id: 'typography.truncation-rules',
    title: 'Truncation with ellipsis',
    prompt:
      'Truncate single-line text such as file names, table cells, and list titles with an ellipsis (overflow: hidden; text-overflow: ellipsis; white-space: nowrap) and expose the full value in a title attribute or tooltip. Clamp multi-line descriptions to 2 or 3 lines with -webkit-line-clamp. Never truncate headings, error messages, or buttons.',
    category: 'typography',
  },
  {
    id: 'typography.wrap-balance-headings',
    title: 'Balanced headings, no widows',
    prompt:
      'Apply text-wrap: balance to headings and text-wrap: pretty to paragraphs so no heading ends with a single orphaned word and no paragraph ends with a widow. Keep headings to two lines maximum.',
    category: 'typography',
  },
  {
    id: 'typography.hanging-punctuation',
    title: 'Hanging punctuation and quotes',
    prompt:
      'Let opening quotation marks and bullets hang outside the text block (hanging-punctuation: first, or a negative text-indent fallback) so the left edge of quotes and lists stays optically aligned with the paragraph edge. Use proper typographic quotes and apostrophes rather than straight ones in rendered copy.',
    category: 'typography',
  },
  {
    id: 'typography.font-loading-strategy',
    title: 'Font loading: swap and preload',
    prompt:
      'Self-host web fonts as woff2 with font-display: swap, preload only the one or two files needed for the first render, and subset to the Latin range unless other scripts are required. Pick a fallback with similar metrics and use size-adjust so the swap causes no visible layout shift.',
    category: 'typography',
  },
  {
    id: 'typography.variable-font',
    title: 'Single variable font file',
    prompt:
      'Ship one variable font file covering the weight axis (and optical size if available) instead of separate static files per weight. Use intermediate weights like 450 or 550 where it improves the hierarchy, but keep the total count of distinct weights in use to three.',
    category: 'typography',
  },
  {
    id: 'typography.hierarchy-via-weight',
    title: 'Hierarchy by weight, not size',
    prompt:
      'Build hierarchy in dense UI (tables, lists, cards, settings) primarily with weight: keep the size the same and set the primary value at 600, supporting text at 400. Use size differences only to separate page-level sections.',
    category: 'typography',
  },
  {
    id: 'typography.muted-secondary-text',
    title: 'Muted secondary text',
    prompt:
      'De-emphasize secondary text (metadata, descriptions, timestamps) by lowering weight to 400 and reducing opacity or using a lighter neutral tone while keeping the same font size as the primary text. Never shrink secondary text below 14px just to make it look less important.',
    category: 'typography',
  },
  {
    id: 'typography.heading-structure',
    title: 'One h1, sequential headings',
    prompt:
      'Give every screen exactly one h1 that names the page, and nest h2-h4 sequentially without skipping levels. Style headings by their visual role using classes, not by picking a heading tag for its default size.',
    category: 'typography',
  },
  {
    id: 'typography.paragraph-spacing',
    title: 'Paragraph spacing, no indents',
    prompt:
      'Separate paragraphs with a bottom margin equal to 0.75-1em of the body size and no first-line indent. Set the space above a heading to roughly twice the space below it so headings visually attach to the content they introduce.',
    category: 'typography',
  },
  {
    id: 'typography.left-aligned-ragged',
    title: 'Left-aligned, ragged right',
    prompt:
      'Left-align all body copy with a ragged right edge; never justify text in UI and never center more than two consecutive lines. Center alignment is allowed only for short hero headings, empty-state messages, and single-line captions.',
    category: 'typography',
  },
  {
    id: 'typography.emphasis-once',
    title: 'One emphasis style per sentence',
    prompt:
      'Emphasize with a single device at a time: use semibold (600) for key terms and italic for titles or asides, and never combine bold, italic, underline, or caps on the same word. Reserve underlines exclusively for links.',
    category: 'typography',
  },
  {
    id: 'typography.link-styling',
    title: 'Link underline styling',
    prompt:
      'Underline inline links in body text with text-decoration-thickness: 1px, text-underline-offset: 0.15em, and text-decoration-skip-ink: auto so descenders are not crossed. Links in navigation, cards, and buttons may drop the underline but must then be distinguishable by weight or placement.',
    category: 'typography',
  },
  {
    id: 'typography.button-label-type',
    title: 'Button and input type',
    prompt:
      'Set button labels at 14-16px, weight 500-600, letter-spacing 0, with the text vertically centered by matching line-height to the control height. Inputs, selects, and their labels use the same size as body text; placeholder text uses weight 400 at reduced opacity and is never the only label.',
    category: 'typography',
  },
  {
    id: 'typography.dashboard-metric-type',
    title: 'Dashboard metric typography',
    prompt:
      'Set headline metrics on dashboards at 32-48px with weight 600, letter-spacing -0.02em, and tabular numerals, with the label directly above at 12-13px weight 500. Put units and percentage signs at 60% of the number size, aligned to the baseline.',
    category: 'typography',
  },
  {
    id: 'typography.caption-and-help-text',
    title: 'Captions and help text',
    prompt:
      'Set captions, helper text, and field hints at 12-13px with line-height 1.4 and weight 400, placed directly below the element they describe with a 4-6px gap. Keep them to one line where possible and never below 12px.',
    category: 'typography',
  },
  {
    id: 'typography.optical-alignment',
    title: 'Optical alignment of text',
    prompt:
      'Optically align text with icons and edges rather than trusting the bounding box: nudge large headings a few pixels left to compensate for side bearings, and vertically center icon-plus-label rows on the x-height, not the line box. Cap heights and baselines should align across mixed sizes in a row.',
    category: 'typography',
  },
  {
    id: 'typography.display-text-rules',
    title: 'Display text above 48px',
    prompt:
      'For hero and display text above 48px use line-height 1.0-1.05, letter-spacing -0.03 to -0.04em, and a weight of 500-600 rather than 700-900, which turns heavy at that size. Keep display text to a maximum of 6-8 words per line.',
    category: 'typography',
  },
  {
    id: 'typography.readable-numbers-and-units',
    title: 'Formatting numbers in text',
    prompt:
      'Format numbers in UI copy for scanning: thousands separators, at most two decimals unless the domain requires more, abbreviated large values (1.2k, 3.4M) only in dense views, and units separated from the value by a thin or regular space. Use a real minus sign and multiplication sign in rendered output where the font supports them.',
    category: 'typography',
  },
]
