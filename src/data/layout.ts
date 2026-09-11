import type { Prompt } from '../types'

export const layout: Prompt[] = [
  {
    id: 'layout.eight-point-spacing',
    title: '8pt spacing scale',
    prompt:
      'Use an 8px spacing scale for all margins, padding, and gaps: 8, 16, 24, 32, 48, 64, 96px. Allow 4px only for tight internal spacing such as icon-to-label gaps; never use odd or arbitrary values like 10px or 18px.',
    category: 'layout',
  },
  {
    id: 'layout.four-point-compact',
    title: '4pt scale for dense UI',
    prompt:
      'Build dense, data-heavy interfaces on a 4px spacing scale (4, 8, 12, 16, 20, 24, 32px) with 8px row padding in tables and 12px card padding. Keep every value on the 4px grid so rows and controls align across panels.',
    category: 'layout',
  },
  {
    id: 'layout.spacing-tokens',
    title: 'Named spacing tokens',
    prompt:
      'Define spacing as a named token scale (space-1 through space-12, where each step is at least 25% larger than the previous) and reference tokens everywhere; do not hardcode pixel values in component styles. When a gap looks wrong, move one step on the scale instead of inventing a value.',
    category: 'layout',
  },
  {
    id: 'layout.twelve-column-grid',
    title: '12-column grid',
    prompt:
      'Lay out page content on a 12-column grid with 24px gutters on desktop and 16px on mobile. Align every section and card to column boundaries, using 12, 6/6, 8/4, and 4/4/4 splits rather than freeform widths.',
    category: 'layout',
  },
  {
    id: 'layout.max-content-width',
    title: 'Max content width 1200px',
    prompt:
      'Cap the main content container at 1200px (1440px for wide data dashboards), centered with equal side margins of at least 24px. Do not let layouts stretch edge to edge on wide monitors; full-bleed is only for backgrounds and hero media.',
    category: 'layout',
  },
  {
    id: 'layout.reading-column',
    title: 'Narrow reading column',
    prompt:
      'Place long-form text in a single centered column with a max-width of 640-720px regardless of how wide the page container is. Media and code blocks may extend up to 960px, but the paragraph column itself stays narrow.',
    category: 'layout',
  },
  {
    id: 'layout.consistent-gutters',
    title: 'Consistent gutters and margins',
    prompt:
      'Use a single gutter value between all sibling elements at a given level (16px inside cards, 24px between cards, 64-96px between page sections) and keep the outer page margin identical on both sides. Never mix gutter sizes within one row or grid.',
    category: 'layout',
  },
  {
    id: 'layout.mobile-first-breakpoints',
    title: 'Mobile-first breakpoints',
    prompt:
      'Design for a 360px viewport first and add complexity at min-width breakpoints of 640, 768, 1024, and 1280px. Use no more than four breakpoints, and choose them by where the content breaks rather than by device names.',
    category: 'layout',
  },
  {
    id: 'layout.stack-under-640',
    title: 'Single column under 640px',
    prompt:
      'Below 640px collapse every multi-column layout to a single column with full-width cards and controls, and 16px side padding. Sidebars become a top bar or an off-canvas drawer, and tables switch to stacked rows or horizontal scroll inside their own container.',
    category: 'layout',
  },
  {
    id: 'layout.sticky-header-rules',
    title: 'Sticky header rules',
    prompt:
      'Make the top navigation sticky only if it is 64px or shorter and contains actions the user needs while scrolling. Never stack more than one sticky bar on mobile, and reserve no more than 15% of the viewport height for pinned elements.',
    category: 'layout',
  },
  {
    id: 'layout.sidebar-width',
    title: 'Sidebar 240-280px',
    prompt:
      'Give the primary navigation sidebar a fixed width of 240-280px on desktop, with a 56-64px collapsed icon rail variant. Nav items are 36-40px tall with 12px horizontal padding, and the sidebar scrolls independently of the content.',
    category: 'layout',
  },
  {
    id: 'layout.card-padding',
    title: 'Card padding rules',
    prompt:
      'Pad cards with 24px on desktop and 16px on mobile, with equal padding on all four sides. Use a 16px gap between stacked elements inside a card and a 24px gap between neighboring cards; card header, body, and footer share the same horizontal padding.',
    category: 'layout',
  },
  {
    id: 'layout.density-toggle',
    title: 'Comfortable and compact density',
    prompt:
      'Support two density modes driven by a single spacing multiplier: comfortable (48px table rows, 40px inputs, 24px card padding) and compact (36px rows, 32px inputs, 16px padding). Switching density changes spacing and control height only, never font size or layout structure.',
    category: 'layout',
  },
  {
    id: 'layout.single-left-edge',
    title: 'Align to one left edge',
    prompt:
      'Align headings, body text, form labels, and primary actions to a single shared left edge within each container. Do not center-align blocks of content or indent elements at different depths unless the indentation communicates hierarchy.',
    category: 'layout',
  },
  {
    id: 'layout.vertical-rhythm',
    title: 'Vertical rhythm on a baseline',
    prompt:
      'Keep all vertical spacing (line-heights, margins, component heights) in multiples of a 4px baseline so text baselines align across adjacent columns. A 24px line-height, 40px input, and 16px gap should all sit on the same rhythm.',
    category: 'layout',
  },
  {
    id: 'layout.whitespace-as-hierarchy',
    title: 'Whitespace signals grouping',
    prompt:
      'Make the space between groups always larger than the space within a group (for example 8px between a label and its input, 24px between fields, 48px between form sections). Use whitespace, not lines or boxes, as the first tool to separate content, and add dividers only when spacing alone is insufficient.',
    category: 'layout',
  },
  {
    id: 'layout.generous-whitespace',
    title: 'Start with more whitespace',
    prompt:
      'Start with more whitespace than feels necessary and remove it only where density is needed: 96px between landing page sections, 32px around card groups, and 48px of breathing room above and below page titles. Cramped layouts read as unfinished.',
    category: 'layout',
  },
  {
    id: 'layout.one-primary-action',
    title: 'One primary action per screen',
    prompt:
      'Give each screen or dialog exactly one visually primary button, placed at the end of the reading flow (bottom right of a dialog, top right of a page header). Secondary actions are outlined or text buttons placed to its left; destructive actions sit apart from the primary one.',
    category: 'layout',
  },
  {
    id: 'layout.above-the-fold',
    title: 'Above-the-fold priority',
    prompt:
      'Fit the page title, the one-sentence purpose, the primary action, and the most important data into the first 600px of viewport height on desktop and the first screen on mobile. Push secondary content, help, and history below that line.',
    category: 'layout',
  },
  {
    id: 'layout.empty-state-layout',
    title: 'Empty state layout',
    prompt:
      'Lay out empty states as a centered block with a max-width of 400px: an optional 48-64px illustration or icon, a one-line heading, one or two lines of explanation, and a single primary action. Place the block in the same area the content would occupy, not at the top of the page.',
    category: 'layout',
  },
  {
    id: 'layout.tap-target-44',
    title: 'Minimum 44px tap targets',
    prompt:
      'Make every interactive element at least 44x44px on touch devices (WCAG 2.5.5 enhanced) and 24x24px on desktop (WCAG 2.5.8 minimum), expanding the hit area with padding when the visible icon is smaller. Keep at least 8px between adjacent targets so neighboring taps cannot be confused.',
    category: 'layout',
  },
  {
    id: 'layout.control-heights',
    title: 'Consistent control heights',
    prompt:
      'Standardize control heights so buttons, inputs, and selects line up in a row: 32px small, 40px default, 48px large. Match icon buttons to the same heights and keep horizontal button padding at 16px for default size.',
    category: 'layout',
  },
  {
    id: 'layout.form-layout',
    title: 'Single-column forms, labels above',
    prompt:
      'Lay out forms in a single column with labels above inputs, an 8px gap between label and field, 24px between fields, and inputs no wider than 480px for text or sized to the expected content (for example 80px for a ZIP code). Put related short fields such as city and state side by side only when the pair is obvious.',
    category: 'layout',
  },
  {
    id: 'layout.table-layout',
    title: 'Table layout rules',
    prompt:
      'Set table rows to 48px (36px in compact mode) with 16px cell padding, left-align text and right-align numbers, and pin the header row on scroll. Give the first column a fixed width, let one text column flex, and keep action icons in a fixed 48px trailing column.',
    category: 'layout',
  },
  {
    id: 'layout.bento-grid',
    title: 'Bento grid feature layout',
    prompt:
      'Arrange feature or overview content in a bento grid: a 12-column, fixed-row-height grid where tiles span 4, 6, 8, or 12 columns and 1 or 2 rows, with 16px gaps and equal corner radius on every tile. Keep the tile pattern symmetric enough that no single-column gap is left over.',
    category: 'layout',
  },
  {
    id: 'layout.split-screen-hero',
    title: 'Split-screen hero',
    prompt:
      'Build the hero as a two-column split at 1024px and above: text (heading, subheading, primary and secondary action) in the left 5 columns and media in the right 7, vertically centered, with a minimum height of 560px. Below 1024px stack text above media with the media capped at 60vh.',
    category: 'layout',
  },
  {
    id: 'layout.f-pattern-scan',
    title: 'F-pattern for content pages',
    prompt:
      'Arrange text-heavy and list pages for F-pattern scanning: the most important information in the top-left, headings and key labels along the left edge, and secondary detail trailing to the right. Front-load the first two words of headings and list items.',
    category: 'layout',
  },
  {
    id: 'layout.z-pattern-landing',
    title: 'Z-pattern for landing pages',
    prompt:
      'Arrange sparse marketing and landing screens along a Z-pattern: logo top-left, primary navigation or CTA top-right, hero message across the middle, and the main call to action bottom-right. Keep the four corners of the Z as the only anchor points on the screen.',
    category: 'layout',
  },
  {
    id: 'layout.no-horizontal-scroll',
    title: 'No horizontal page scroll',
    prompt:
      'The page body must never scroll horizontally at any viewport width from 320px up. Wrap flex rows, use min-width: 0 on flex children, and confine wide tables, code blocks, and carousels to their own overflow-x: auto containers.',
    category: 'layout',
  },
  {
    id: 'layout.container-queries',
    title: 'Container queries for components',
    prompt:
      'Make reusable components adapt to their container, not the viewport: use container queries so a card switches from horizontal to stacked layout when its own width drops below 400px, wherever it is placed. Reserve viewport media queries for page-level structure.',
    category: 'layout',
  },
  {
    id: 'layout.aspect-ratio-media',
    title: 'Fixed aspect-ratio media boxes',
    prompt:
      'Give every image, video, and chart placeholder a fixed aspect-ratio box (16/9 for media, 4/3 for cards, 1/1 for avatars and thumbnails) with object-fit: cover, so layout is stable before the asset loads and rows of cards stay equal in height.',
    category: 'layout',
  },
  {
    id: 'layout.radius-scale',
    title: 'Border radius scale',
    prompt:
      'Use a fixed radius scale: 4px for inputs, chips, and small buttons, 8px for buttons and cards, 12-16px for modals and large panels, and full round only for avatars and pills. Nested elements use a radius smaller than or equal to their parent, never larger.',
    category: 'layout',
  },
  {
    id: 'layout.elevation-levels',
    title: 'Three elevation levels',
    prompt:
      'Limit elevation to three levels: level 0 flat with a 1px border for cards and panels, level 1 a soft shadow (0 1px 3px) for raised cards and dropdowns, level 2 a larger diffuse shadow (0 8px 24px) for modals and popovers. Elevation communicates layering only, so no shadows on static content and no shadow purely for decoration.',
    category: 'layout',
  },
  {
    id: 'layout.modal-sizing',
    title: 'Modal and drawer sizing',
    prompt:
      'Size dialogs at 480px for confirmations, 640px for forms, and 960px maximum for complex content, with 24px internal padding and a fixed footer for actions. On mobile, dialogs become full-screen sheets or bottom sheets, and side drawers are 320-400px wide on desktop.',
    category: 'layout',
  },
  {
    id: 'layout.page-header-layout',
    title: 'Page header structure',
    prompt:
      'Give every page a header row with breadcrumb or back link above, the page title (one line) left, and the primary action right-aligned on the same baseline, with 32px of space below before content begins. Tabs or filters, if present, sit directly under the title row.',
    category: 'layout',
  },
  {
    id: 'layout.icon-sizing-alignment',
    title: 'Icon sizes and alignment',
    prompt:
      'Use icons at 16px inside text and buttons, 20px in navigation, and 24px as standalone actions, always from a single icon set with one stroke width. Center icons optically with adjacent text and keep an 8px gap between an icon and its label.',
    category: 'layout',
  },
  {
    id: 'layout.proximity-grouping',
    title: 'Group related controls',
    prompt:
      'Group related controls (filter chips, toolbar buttons, pagination) with 4-8px gaps inside the group and at least 16px to the next group, so the user reads them as one unit. Do not separate a label from its control by more than 8px in any direction.',
    category: 'layout',
  },
]
