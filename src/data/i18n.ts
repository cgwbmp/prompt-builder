import type { Prompt } from '../types'

export const i18n: Prompt[] = [
  {
    id: 'i18n.externalize-strings',
    title: 'Externalize every string',
    prompt:
      'Never hardcode user-facing text. Every visible string, including button labels, error messages, tooltips, placeholders, aria-labels, and page titles, lives in a message catalog under a key and is loaded through the i18n layer.',
    category: 'i18n',
  },
  {
    id: 'i18n.no-sentence-concatenation',
    title: 'No sentence concatenation',
    prompt:
      'Never assemble a sentence from fragments or variables in code; word order and agreement differ across languages. Write one complete message per sentence with named placeholders for the variable parts.',
    category: 'i18n',
  },
  {
    id: 'i18n.rich-text-in-one-message',
    title: 'Keep markup inside the message',
    prompt:
      'When a sentence contains a link, bold text, or an icon, keep it as a single message with rich-text tags such as <link>terms of service</link> instead of splitting it into separate strings around the element.',
    category: 'i18n',
  },
  {
    id: 'i18n.icu-plurals',
    title: 'ICU plurals for every count',
    prompt:
      'Use ICU MessageFormat plural syntax ({count, plural, =0 {...} one {...} other {...}}) for every quantity. Never write item(s), branch on count === 1 in code, or assume a language has only singular and plural; translators fill in zero, two, few, and many as their language requires.',
    category: 'i18n',
  },
  {
    id: 'i18n.icu-select',
    title: 'ICU select for variants',
    prompt:
      'Use ICU select ({gender, select, female {...} male {...} other {...}}) for gender or other variant text inside the message rather than choosing between separate strings in code, and always include an other branch.',
    category: 'i18n',
  },
  {
    id: 'i18n.named-placeholders',
    title: 'Named, not positional, placeholders',
    prompt:
      'Use named placeholders ({userName}, {dueDate}) rather than positional ones (%s, {0}) so translators can reorder them and understand what each value is.',
    category: 'i18n',
  },
  {
    id: 'i18n.intl-date-time',
    title: 'Intl for dates and times',
    prompt:
      'Format every date and time with Intl.DateTimeFormat (or the framework wrapper around it) using the active locale and named style options. Never hardcode patterns like MM/DD/YYYY or build dates by slicing toString output.',
    category: 'i18n',
  },
  {
    id: 'i18n.intl-numbers',
    title: 'Intl for numbers and percent',
    prompt:
      'Format numbers, percentages, and units with Intl.NumberFormat; never insert thousands separators, decimal points, or unit symbols manually. Use the unit style (kilometer, megabyte) instead of appending unit strings.',
    category: 'i18n',
  },
  {
    id: 'i18n.currency-formatting',
    title: 'Currency from the data',
    prompt:
      'Format money with Intl.NumberFormat style currency, taking the currency code from the data record, not from the locale. Store amounts as integers in minor units alongside the ISO 4217 code and never as floats.',
    category: 'i18n',
  },
  {
    id: 'i18n.relative-time',
    title: 'Relative time via Intl',
    prompt:
      'Produce relative phrases like "3 days ago" or "in 2 hours" with Intl.RelativeTimeFormat, and offer the absolute date in a tooltip or title. Do not hand-build these strings.',
    category: 'i18n',
  },
  {
    id: 'i18n.list-format',
    title: 'Intl.ListFormat for lists',
    prompt:
      'Join human-readable lists ("a, b, and c") with Intl.ListFormat using the conjunction or disjunction type; never join with a hardcoded ", " and " and ".',
    category: 'i18n',
  },
  {
    id: 'i18n.store-utc-display-local',
    title: 'Store UTC, display local',
    prompt:
      'Store timestamps as UTC (ISO 8601) and convert to the user time zone only at display time using an IANA zone identifier such as Europe/Berlin, never a fixed offset. Keep the preferred time zone on the user profile, not derived from the server.',
    category: 'i18n',
  },
  {
    id: 'i18n.future-events-local-time',
    title: 'Future events keep wall time',
    prompt:
      'For scheduled future events (meetings, reminders, recurring jobs), store the local wall-clock time together with the IANA time zone rather than a UTC instant, because daylight-saving rules can change between scheduling and occurrence.',
    category: 'i18n',
  },
  {
    id: 'i18n.locale-negotiation-chain',
    title: 'Locale negotiation and fallback',
    prompt:
      'Resolve the locale in this order: explicit user choice, URL or route, Accept-Language, then the default locale. Implement a fallback chain per BCP 47 (pt-BR to pt to en) so a missing regional translation falls back to the base language before the default.',
    category: 'i18n',
  },
  {
    id: 'i18n.bcp47-tags',
    title: 'Canonical BCP 47 tags',
    prompt:
      'Identify locales with canonical BCP 47 tags (en-US, zh-Hant-TW, sr-Latn) normalized with Intl.getCanonicalLocales. Never invent codes like en_us or use country codes alone as languages.',
    category: 'i18n',
  },
  {
    id: 'i18n.locale-in-url',
    title: 'Locale in the URL',
    prompt:
      'For indexable pages put the locale in the path or subdomain (/de/pricing) with hreflang alternates and an x-default, and apply automatic negotiation only on the bare root path. Never switch language based on IP alone.',
    category: 'i18n',
  },
  {
    id: 'i18n.html-lang-attribute',
    title: 'Set lang attributes',
    prompt:
      'Set the lang attribute on the html element to the active locale and update it on locale switch. Mark any inline fragment in another language with its own lang so hyphenation, fonts, quotes, and screen readers behave correctly.',
    category: 'i18n',
  },
  {
    id: 'i18n.logical-css-for-rtl',
    title: 'Logical CSS properties',
    prompt:
      'Use CSS logical properties and values (margin-inline-start, padding-block, inset-inline-end, text-align: start, border-start-start-radius) instead of left and right so the layout mirrors automatically when dir="rtl" is set on the html element.',
    category: 'i18n',
  },
  {
    id: 'i18n.bidi-isolation',
    title: 'Isolate inserted bidi text',
    prompt:
      'Wrap user-generated or variable text inserted into a sentence (names, file names, numbers with units) in <bdi> or unicode-bidi: isolate so it cannot reorder the surrounding punctuation in right-to-left contexts. Apply dir="auto" to inputs and text areas.',
    category: 'i18n',
  },
  {
    id: 'i18n.mirror-directional-icons',
    title: 'Mirror only directional icons',
    prompt:
      'In RTL layouts mirror icons that express direction or progress (back arrows, chevrons, indent, undo), but do not mirror icons depicting real objects, logos, checkmarks, or clocks. Mark mirrorable icons in the icon set rather than flipping ad hoc.',
    category: 'i18n',
  },
  {
    id: 'i18n.no-text-in-images',
    title: 'No text baked into images',
    prompt:
      'Do not embed text in raster images or static SVG artwork. Render text with HTML or CSS layered over the graphic, or provide per-locale image assets selected through the same locale mechanism as strings.',
    category: 'i18n',
  },
  {
    id: 'i18n.allow-text-expansion',
    title: 'Allow 30-50% text expansion',
    prompt:
      'Size buttons, labels, tabs, and table headers so they fit text 30 to 50 percent longer than the English source and taller glyphs from scripts like Thai or Devanagari. Avoid fixed widths and heights on text containers and let text wrap rather than overflow.',
    category: 'i18n',
  },
  {
    id: 'i18n.no-code-truncation',
    title: 'Do not truncate translations',
    prompt:
      'Do not truncate, abbreviate, or slice translated strings in code. If a compact variant is needed for a narrow space, add a separate short message key with a translator note about the character limit.',
    category: 'i18n',
  },
  {
    id: 'i18n.collator-sorting',
    title: 'Sort with Intl.Collator',
    prompt:
      'Sort user-visible lists with Intl.Collator for the active locale (with numeric: true for strings containing numbers) instead of the < operator, plain sort(), or localeCompare without a locale.',
    category: 'i18n',
  },
  {
    id: 'i18n.locale-case-rules',
    title: 'Locale-aware case changes',
    prompt:
      'Change case with toLocaleUpperCase and toLocaleLowerCase passing the active locale, and avoid CSS text-transform on translated text; Turkish dotted and dotless i and German sharp s break under naive casing. Leave capitalization choices to translators.',
    category: 'i18n',
  },
  {
    id: 'i18n.unicode-normalization',
    title: 'Normalize and segment Unicode',
    prompt:
      'Normalize user input to NFC before comparing, searching, or storing, and count or truncate text by grapheme clusters with Intl.Segmenter rather than by string length so emoji and combining marks are not split.',
    category: 'i18n',
  },
  {
    id: 'i18n.pseudo-localization',
    title: 'Pseudo-localize in tests',
    prompt:
      'Add a pseudo-locale that expands strings, replaces letters with accented equivalents, and wraps each message in brackets, and run the UI under it in CI screenshots to catch hardcoded strings, concatenation, and truncation before real translation starts.',
    category: 'i18n',
  },
  {
    id: 'i18n.message-key-naming',
    title: 'Keys by feature and purpose',
    prompt:
      'Name message keys by feature and role (checkout.submitButton, errors.paymentDeclined), not by English text, and create a separate key for each context even when the English happens to be identical, because translations may differ.',
    category: 'i18n',
  },
  {
    id: 'i18n.translator-context',
    title: 'Context notes for translators',
    prompt:
      'Give every message a description stating where it appears, what each placeholder contains with an example value, and any length limit. Extract messages with the framework tooling (for example formatjs extract) so descriptions travel to the translation platform.',
    category: 'i18n',
  },
  {
    id: 'i18n.missing-translation-policy',
    title: 'Handle missing translations',
    prompt:
      'When a key is missing in the active locale, fall back through the locale chain and log the missing key in development. Never render the raw key in production, and fail CI when the source locale is missing a key that the code references.',
    category: 'i18n',
  },
  {
    id: 'i18n.lazy-load-locale-bundles',
    title: 'Lazy-load locale bundles',
    prompt:
      'Split message catalogs and locale data per locale and load only the active one on demand, including any Intl polyfills, so users do not download every language. Keep the default locale in the initial bundle only if it is needed for first render.',
    category: 'i18n',
  },
  {
    id: 'i18n.never-branch-on-translations',
    title: 'Never compare translated strings',
    prompt:
      'Never compare, switch on, or store translated strings in logic or databases; use stable identifiers and enums and translate only at render time. Do the same for sort keys and URLs that must survive a locale change.',
    category: 'i18n',
  },
  {
    id: 'i18n.parse-localized-input',
    title: 'Parse input per locale',
    prompt:
      'Parse numbers and dates typed by users according to their locale (decimal comma, day-first dates) or use typed controls that return canonical values. Never run parseFloat or new Date on raw localized text.',
    category: 'i18n',
  },
  {
    id: 'i18n.names-addresses-phones',
    title: 'International names and addresses',
    prompt:
      'Do not assume first-name and last-name structure, ASCII characters, or US address fields. Use a single full-name field where possible, make address forms per country with the correct field order and optionality, and store phone numbers in E.164 validated by libphonenumber.',
    category: 'i18n',
  },
  {
    id: 'i18n.units-and-calendar',
    title: 'Regional units and calendars',
    prompt:
      'Derive measurement system, first day of the week, 12 or 24 hour clock, and calendar from the locale (Intl.Locale and its weekInfo and hourCycle) rather than assuming miles, Fahrenheit, Sunday, or the Gregorian calendar.',
    category: 'i18n',
  },
  {
    id: 'i18n.script-font-coverage',
    title: 'Font coverage for all scripts',
    prompt:
      'Make sure the font stack covers every script of the supported locales (CJK, Arabic, Hebrew, Cyrillic, Devanagari, Thai) with system fallbacks, and verify line-height and vertical alignment with those scripts, since many need more vertical space than Latin.',
    category: 'i18n',
  },
]
