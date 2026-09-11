import type { Prompt } from '../types'

export const color: Prompt[] = [
  {
    id: 'color.mono-one-accent',
    title: 'Monochrome plus one accent',
    prompt:
      'Use a monochrome palette (a single neutral scale for backgrounds, borders, and text) plus exactly one accent color. Reserve the accent for primary actions, active states, and links; everything else stays neutral.',
    category: 'color',
  },
  {
    id: 'color.dark-mode-first',
    title: 'Dark mode first',
    prompt:
      'Design dark mode as the primary theme: start from a dark neutral base, make elevated surfaces progressively lighter, and pick every token value for the dark theme first. Derive the light theme afterwards from the same tokens rather than designing it separately.',
    category: 'color',
  },
  {
    id: 'color.light-mode-first',
    title: 'Light mode first',
    prompt:
      'Design light mode as the primary theme: an off-white base, slightly darker or bordered surfaces for cards, dark neutral text, and accents at full brand saturation. Add a dark theme only after the light palette is complete and tested.',
    category: 'color',
  },
  {
    id: 'color.both-themes-tokens',
    title: 'Light and dark via tokens',
    prompt:
      'Support both light and dark themes through a single set of semantic tokens (background, surface, border, text-primary, text-secondary, accent, and status colors) with separate values per theme. Components must reference tokens only, so switching themes requires no component changes.',
    category: 'color',
  },
  {
    id: 'color.semantic-status-tokens',
    title: 'Semantic status colors',
    prompt:
      'Define dedicated semantic colors for success, warning, danger, and info, each with a strong variant for icons and text and a soft tinted variant for backgrounds. Never reuse the brand accent for a status meaning, and never use status colors for decoration.',
    category: 'color',
  },
  {
    id: 'color.sixty-thirty-ten',
    title: '60-30-10 balance',
    prompt:
      'Follow the 60-30-10 rule: roughly 60 percent of visible area in the dominant neutral background, 30 percent in a secondary surface or supporting color, and 10 percent in the accent. If the accent covers more than about a tenth of the screen, pull it back.',
    category: 'color',
  },
  {
    id: 'color.wcag-aa',
    title: 'WCAG AA contrast',
    prompt:
      'Meet WCAG 2.2 AA contrast: at least 4.5:1 for normal text, 3:1 for large text (24px or 19px bold), and 3:1 for UI component boundaries and icons against their background. Check every text and background token pair in both themes.',
    category: 'color',
  },
  {
    id: 'color.aaa-body-text',
    title: 'AAA for body text',
    prompt:
      'Hold body text to WCAG AAA: at least 7:1 contrast for paragraph and label text and 4.5:1 for large headings. Pick the text token darkness (or lightness in dark mode) from that requirement rather than from taste.',
    category: 'color',
  },
  {
    id: 'color.no-pure-black-white',
    title: 'No pure black or white',
    prompt:
      'Avoid #000000 and #FFFFFF for large areas and text. Use a very dark neutral for text and dark surfaces and a slightly tinted off-white for light backgrounds to reduce glare and harsh contrast.',
    category: 'color',
  },
  {
    id: 'color.tinted-neutrals',
    title: 'Tinted neutrals',
    prompt:
      'Do not use flat achromatic grays. Tint the entire neutral scale with a small amount of the brand hue (low chroma, same hue angle) so backgrounds, borders, and text feel cohesive with the accent.',
    category: 'color',
  },
  {
    id: 'color.warm-neutrals',
    title: 'Warm neutrals',
    prompt:
      'Use a warm neutral scale (grays leaning toward beige, sand, or taupe) for backgrounds, borders, and secondary text. Keep the warmth consistent across every neutral step so nothing reads as a mismatched cool gray.',
    category: 'color',
  },
  {
    id: 'color.cool-neutrals',
    title: 'Cool neutrals',
    prompt:
      'Use a cool neutral scale (grays leaning toward slate or blue-gray) for backgrounds, borders, and secondary text. Keep the coolness consistent across every neutral step and avoid mixing in warm grays.',
    category: 'color',
  },
  {
    id: 'color.pastel',
    title: 'Pastel palette',
    prompt:
      'Build the palette from pastels: high lightness, low-to-medium chroma hues for surfaces, tags, and illustrations. Because pastels lack contrast, pair them with a dark neutral for all text and icons rather than colored text.',
    category: 'color',
  },
  {
    id: 'color.high-saturation',
    title: 'High-saturation bold',
    prompt:
      'Use vivid, fully saturated hues for accents, headers, and large blocks, paired with a plain neutral so they do not fight each other. Limit to two or three saturated hues and keep saturated colors off body text.',
    category: 'color',
  },
  {
    id: 'color.muted-earth',
    title: 'Muted earth palette',
    prompt:
      'Use a muted earth palette: low-chroma terracotta, olive, ochre, clay, and sand, with a warm off-white base and deep brown-black text. Avoid any pure or neon hue that would break the natural feel.',
    category: 'color',
  },
  {
    id: 'color.jewel-tones',
    title: 'Jewel tones',
    prompt:
      'Use deep saturated jewel tones such as emerald, sapphire, ruby, and amethyst for accents and feature surfaces against a dark or richly neutral base. Keep tones deep rather than bright so they read as luxurious rather than playful.',
    category: 'color',
  },
  {
    id: 'color.duotone',
    title: 'Duotone',
    prompt:
      'Restrict the palette to two hues: one dominant and one contrasting accent, plus a neutral for text. Apply the duotone treatment to imagery as well, mapping shadows and highlights to the two hues.',
    category: 'color',
  },
  {
    id: 'color.gradient-accents-only',
    title: 'Gradients only as accents',
    prompt:
      'Allow gradients only on small accent elements: primary buttons, progress indicators, badges, and a single hero highlight. Keep all backgrounds, cards, and text on solid colors, and use gradients between two adjacent hues rather than distant ones.',
    category: 'color',
  },
  {
    id: 'color.no-gradients',
    title: 'No gradients',
    prompt:
      'Do not use gradients anywhere. Every surface, button, icon, and background is a solid flat color; convey depth through tone steps and borders instead.',
    category: 'color',
  },
  {
    id: 'color.brand-accent-not-background',
    title: 'Brand color as accent only',
    prompt:
      'Use the brand color as an accent, not as a background: on primary buttons, active navigation, focus indicators, links, and small highlights. Do not fill headers, sidebars, or large panels with the brand color.',
    category: 'color',
  },
  {
    id: 'color.interactive-state-steps',
    title: 'Hover and active color steps',
    prompt:
      'Define hover, active, and disabled colors as explicit steps on the same scale as the base color: hover one step darker (or lighter in dark mode), active two steps, disabled at reduced saturation and lightness. Do not use opacity changes to simulate these states on filled elements.',
    category: 'color',
  },
  {
    id: 'color.color-blind-safe',
    title: 'Color-blind safe palette',
    prompt:
      'Choose accent and status colors that stay distinguishable under deuteranopia, protanopia, and tritanopia; avoid relying on red versus green pairs and prefer blue/orange or purple/yellow oppositions. Verify with a color-blindness simulator.',
    category: 'color',
  },
  {
    id: 'color.css-variables',
    title: 'Colors as CSS variables',
    prompt:
      'Define every color once as a CSS custom property on :root (and override under a dark-theme selector or prefers-color-scheme) and reference only those variables in components. No hard-coded hex, rgb, or named colors anywhere in component styles.',
    category: 'color',
  },
  {
    id: 'color.semantic-token-naming',
    title: 'Role-based token names',
    prompt:
      'Name color tokens by role, not by hue: use names like --color-bg-surface, --color-text-muted, --color-border-strong, --color-accent rather than --blue-500. Keep a primitive palette layer beneath and map semantic tokens onto it.',
    category: 'color',
  },
  {
    id: 'color.oklch-scales',
    title: 'Generate scales in OKLCH',
    prompt:
      'Generate color scales in OKLCH so lightness steps are perceptually even: hold hue constant, step lightness in equal increments, and reduce chroma toward the light and dark ends. Output hex fallbacks alongside the oklch() values.',
    category: 'color',
  },
  {
    id: 'color.neutral-scale-10',
    title: '10-step neutral scale',
    prompt:
      'Build a neutral scale of 10-11 steps (50, 100, 200 ... 900, 950) and assign them to fixed roles: page background, card surface, subtle border, strong border, disabled text, secondary text, primary text. Do not introduce ad hoc grays outside the scale.',
    category: 'color',
  },
  {
    id: 'color.surface-elevation-tint',
    title: 'Elevation through surface tint',
    prompt:
      'Express elevation through surface color rather than shadows: define surface levels (base, raised, overlay) where each higher level is slightly lighter in dark mode and slightly more tinted or lighter in light mode. Do not use shadows alone to indicate hierarchy in dark mode.',
    category: 'color',
  },
  {
    id: 'color.dark-mode-desaturate',
    title: 'Desaturate for dark mode',
    prompt:
      'In dark mode, lower the saturation of accent and status colors and raise their lightness so they meet contrast without glowing or vibrating against dark surfaces. Do not reuse light-mode hex values unchanged.',
    category: 'color',
  },
  {
    id: 'color.focus-ring',
    title: 'Focus ring color',
    prompt:
      'Use a single dedicated focus ring color across the whole design, at least 3:1 against adjacent backgrounds, rendered as a 2px outline with a 2px offset. Never remove the focus outline without replacing it with an equally visible colored indicator.',
    category: 'color',
  },
  {
    id: 'color.link-color',
    title: 'Link color rules',
    prompt:
      'Give links one consistent color distinct from body text and from the primary button color, with a visited state that is subtly different and a hover state one step darker. Inline links in paragraphs must also be underlined so they do not depend on color alone.',
    category: 'color',
  },
  {
    id: 'color.text-hierarchy-solid',
    title: 'Text hierarchy with solid tokens',
    prompt:
      'Define three text colors as solid tokens: primary for headings and body, secondary for supporting text, and tertiary or disabled for hints and placeholders. Do not create text hierarchy with opacity on a single color, since that breaks on tinted or image backgrounds.',
    category: 'color',
  },
  {
    id: 'color.glow-neon-accents',
    title: 'Glow and neon accents',
    prompt:
      'Use neon accents with a soft outer glow (a blurred box-shadow in the same hue) on a dark base for primary actions, active borders, and key numbers. Limit glow to a few focal elements and keep body text unglowed for readability.',
    category: 'color',
  },
  {
    id: 'color.reserve-danger',
    title: 'Reserve red for danger',
    prompt:
      'Reserve the danger color exclusively for destructive actions, errors, and critical alerts. Do not use it for branding, emphasis, required-field markers, or sale badges, so its meaning stays unambiguous.',
    category: 'color',
  },
  {
    id: 'color.limited-hue-count',
    title: 'Limit the hue count',
    prompt:
      'Keep the palette to at most one neutral scale, one primary accent, one optional secondary accent, and the four status colors. Do not introduce any additional hue for a single component or page.',
    category: 'color',
  },
  {
    id: 'color.adjust-brand-for-contrast',
    title: 'Adjust brand color for contrast',
    prompt:
      'If the brand color fails contrast requirements as text or as a button background with white text, create a darker (or lighter) accessible variant and use that for text and interactive states, keeping the original only for large decorative areas. Never sacrifice contrast to match the logo exactly.',
    category: 'color',
  },
  {
    id: 'color.disabled-state-color',
    title: 'Disabled state color',
    prompt:
      'Render disabled controls with a dedicated muted fill and text token that is clearly lower contrast than enabled controls but still legible (aim for about 3:1). Do not use pure transparency for disabled states.',
    category: 'color',
  },
]
