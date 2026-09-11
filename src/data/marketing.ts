import type { Prompt } from '../types'

export const marketing: Prompt[] = [
  {
    id: 'marketing.audience-first',
    title: 'Name the audience first',
    prompt:
      'Before writing, state in one line who the copy is for (role, situation, what they already believe) and write only to that reader. Do not try to address everyone at once.',
    category: 'marketing',
  },
  {
    id: 'marketing.benefits-over-features',
    title: 'Benefits over features',
    prompt:
      'Lead with the outcome the customer gets, then name the feature that delivers it. Turn "256-bit encryption" into "your files stay private, protected by 256-bit encryption".',
    category: 'marketing',
  },
  {
    id: 'marketing.customer-language',
    title: 'Use customer language',
    prompt:
      'Use the words customers use to describe their problem, drawn from reviews, support tickets, or interviews, instead of internal product terminology, acronyms, or feature codenames. Define any unavoidable term on first use.',
    category: 'marketing',
  },
  {
    id: 'marketing.you-not-we',
    title: 'You, not we',
    prompt:
      "Write in second person about the reader's outcome ('you get', 'your team') rather than first person about the company ('we are proud to', 'our mission'). Count the uses of 'we' and 'you' and keep 'you' ahead.",
    category: 'marketing',
  },
  {
    id: 'marketing.specific-numbers',
    title: 'Specific numbers',
    prompt:
      'Use specific numbers instead of vague quantifiers: "saves 4 hours a week" beats "saves time", and "12,400 teams" beats "thousands of teams". If no real number exists, say what is true rather than inventing one.',
    category: 'marketing',
  },
  {
    id: 'marketing.no-hype-words',
    title: 'Strip buzzwords',
    prompt:
      'Strip empty intensifiers and buzzwords such as revolutionary, seamless, cutting-edge, best-in-class, game-changing, unlock, and supercharge. Replace each with a concrete detail or delete it.',
    category: 'marketing',
  },
  {
    id: 'marketing.substantiate-claims',
    title: 'Substantiate every claim',
    prompt:
      'Any comparative, superlative, or quantitative claim ("3x faster", "most trusted", "#1") must be backed by a named source or measurement in the copy, or be removed. Never invent statistics, awards, or customer counts.',
    category: 'marketing',
  },
  {
    id: 'marketing.compliance-safe-claims',
    title: 'Compliance-safe claims',
    prompt:
      'Avoid regulated language unless the user confirms it is substantiated: guarantees, "clinically proven", health or financial outcomes, "free" with hidden conditions, and endorsements. Flag any claim that would need legal review under advertising substantiation rules such as those of the FTC.',
    category: 'marketing',
  },
  {
    id: 'marketing.honest-urgency',
    title: 'Only honest urgency',
    prompt:
      'Use urgency only when it is real (an actual deadline, limited seats, a scheduled price change) and state the reason. Never fabricate scarcity, countdowns, or "only 3 left" claims.',
    category: 'marketing',
  },
  {
    id: 'marketing.one-idea-per-section',
    title: 'One idea per section',
    prompt:
      'Give each section, paragraph, or slide exactly one idea. If a sentence tries to sell two benefits, split it into two sentences.',
    category: 'marketing',
  },
  {
    id: 'marketing.scannable-copy',
    title: 'Write for skimming',
    prompt:
      'Write for skimming: paragraphs of one to three sentences, subheadings that carry the argument on their own, and bullets only for parallel items. Someone reading only the headings should get the whole pitch.',
    category: 'marketing',
  },
  {
    id: 'marketing.readability-level',
    title: 'Plain reading level',
    prompt:
      'Keep copy at roughly an eighth-grade reading level: short sentences, common words, one clause per sentence. If you would not say a sentence out loud to a customer, rewrite it.',
    category: 'marketing',
  },
  {
    id: 'marketing.restrained-punctuation',
    title: 'Restrained punctuation',
    prompt:
      'Avoid exclamation marks and emoji in body copy and let specificity carry the enthusiasm. Use at most one exclamation mark per piece, if any.',
    category: 'marketing',
  },
  {
    id: 'marketing.headline-specificity',
    title: 'Headline names the promise',
    prompt:
      'Make every headline tell the right reader they are in the right place by naming what they get or who it is for, preferably both. Reject headlines like "Welcome" or "The future of work".',
    category: 'marketing',
  },
  {
    id: 'marketing.headline-variants',
    title: 'Headline variants',
    prompt:
      'When asked for a headline, provide five to ten variants using different angles (outcome, pain, curiosity, social proof, specificity) and mark the one you recommend with a one-line reason.',
    category: 'marketing',
  },
  {
    id: 'marketing.tagline-options',
    title: 'Tagline options',
    prompt:
      'When asked for a tagline, offer eight to twelve options under eight words each, spanning descriptive, aspirational, and playful, and note which ones would still make sense with the company name removed.',
    category: 'marketing',
  },
  {
    id: 'marketing.single-clear-cta',
    title: 'One clear CTA',
    prompt:
      'Give every piece of copy exactly one primary call to action phrased as a specific verb plus outcome ("Start your free 14-day trial", not "Learn more"). Repeat it on long pages, but never compete with a second ask.',
    category: 'marketing',
  },
  {
    id: 'marketing.risk-reducers-near-cta',
    title: 'Risk reducers near CTA',
    prompt:
      'Place a concrete reassurance next to every call to action: trial length, cancel anytime, refund window, no credit card required, or time to first value. State only reassurances that are actually true.',
    category: 'marketing',
  },
  {
    id: 'marketing.social-proof-near-cta',
    title: 'Social proof near CTA',
    prompt:
      'Put social proof (a customer quote, logos, a count, a rating) directly next to each call to action rather than in its own section, since proof reduces friction at the moment of decision.',
    category: 'marketing',
  },
  {
    id: 'marketing.testimonial-selection',
    title: 'Choose testimonials carefully',
    prompt:
      'When using testimonials, prefer ones that name a specific result, a role or company, and an objection the customer had before buying. Never edit a quote to change its meaning and never fabricate one.',
    category: 'marketing',
  },
  {
    id: 'marketing.address-objections',
    title: 'Address top objections',
    prompt:
      'List the top three reasons the reader would not act (price, effort to switch, trust, timing) and answer each one in the copy, either inline or as a short FAQ near the end.',
    category: 'marketing',
  },
  {
    id: 'marketing.value-proposition',
    title: 'Value proposition template',
    prompt:
      'When asked for a value proposition, write it as: for [target customer] who [need], [product] is a [category] that [key benefit]; unlike [alternative], it [key differentiator]. Then compress it into one plain sentence.',
    category: 'marketing',
  },
  {
    id: 'marketing.pas-formula',
    title: 'Problem, agitate, solve',
    prompt:
      "For problem-aware audiences, structure copy as Problem-Agitate-Solve: name the problem in the reader's words, make the cost of leaving it unsolved concrete, then introduce the solution as the relief.",
    category: 'marketing',
  },
  {
    id: 'marketing.aida-structure',
    title: 'AIDA for cold audiences',
    prompt:
      'For cold audiences, structure copy as AIDA: Attention (a specific hook), Interest (a relevant detail), Desire (the outcome plus proof), Action (one call to action).',
    category: 'marketing',
  },
  {
    id: 'marketing.landing-page-sections',
    title: 'Landing page sections',
    prompt:
      'When drafting a landing page, use this order: headline with the specific promise, subheadline that handles the first objection, primary CTA, social proof, the problem, the solution with three to five benefits, how it works in three steps, FAQ or objections, and a final CTA with a risk reducer.',
    category: 'marketing',
  },
  {
    id: 'marketing.launch-announcement',
    title: 'Launch announcement structure',
    prompt:
      'Structure launch announcements as: what is new in one sentence, who it is for and the problem it solves, how it works in two or three sentences, availability and pricing, and a single call to action. Put the news first, never the company history.',
    category: 'marketing',
  },
  {
    id: 'marketing.customer-release-notes',
    title: 'Customer-facing release notes',
    prompt:
      'Write customer-facing release notes grouped as New, Improved, and Fixed, with each item leading with the benefit to the user in plain language and linking to docs for details. Leave out internal ticket numbers and implementation details.',
    category: 'marketing',
  },
  {
    id: 'marketing.feature-announcement-email',
    title: 'Feature announcement email',
    prompt:
      'Structure a feature announcement email as: a subject naming the benefit, a one-line summary, one example or screenshot description, why it matters to this reader, how to try it in one step, and a single link. Keep it under 150 words.',
    category: 'marketing',
  },
  {
    id: 'marketing.email-subject-lines',
    title: 'Email subject lines',
    prompt:
      'For email subject lines, write five options under 50 characters, each promising a specific benefit or piece of information, with no clickbait, no all caps, and no fake "Re:" or "Fwd:". Pair each with a matching preview text line.',
    category: 'marketing',
  },
  {
    id: 'marketing.case-study-structure',
    title: 'Case study structure',
    prompt:
      'Structure case studies as: the customer and context, the problem and its cost, why they chose the product, what they did, measurable results with numbers, and a quote. Lead with the headline result in the title.',
    category: 'marketing',
  },
  {
    id: 'marketing.product-description',
    title: 'Product description format',
    prompt:
      'When writing a product description, open with who it is for and the main outcome, list three to five concrete benefits each tied to a feature, put specs and compatibility in a separate scannable block, and end with the call to action.',
    category: 'marketing',
  },
  {
    id: 'marketing.pricing-page-copy',
    title: 'Pricing page copy',
    prompt:
      'On pricing pages, name each plan by who it is for, lead with the outcome of the plan rather than the feature count, show the price with its billing period clearly, and state what happens when a limit is reached.',
    category: 'marketing',
  },
  {
    id: 'marketing.hook-first-line',
    title: 'Hook in the first line',
    prompt:
      "In social posts and ads, make the first line stand alone as a hook that names the reader's problem or a surprising specific fact. Assume the rest is only read if the first line earns it.",
    category: 'marketing',
  },
  {
    id: 'marketing.adapt-per-channel',
    title: 'Adapt copy per channel',
    prompt:
      'Adapt social copy to each channel instead of cross-posting: a professional voice with a hook line first for LinkedIn, one idea under 280 characters for X, and a conversational plain-text version for community channels. Keep the core message and CTA the same.',
    category: 'marketing',
  },
  {
    id: 'marketing.short-and-long-form',
    title: 'Short and long versions',
    prompt:
      'Deliver copy in two lengths: a short version under 50 words for ads and social, and a long version for the page or email, with the same core message and call to action in both.',
    category: 'marketing',
  },
  {
    id: 'marketing.ab-variants',
    title: 'A/B variants isolate one change',
    prompt:
      'When writing A/B test variants, change exactly one variable between versions (headline angle, CTA wording, length, or proof element) and state the hypothesis each variant tests so the result is interpretable.',
    category: 'marketing',
  },
  {
    id: 'marketing.match-brand-voice',
    title: 'Match the brand voice',
    prompt:
      'Match the brand voice described or shown in examples: mirror sentence length, formality, humor level, and vocabulary. If no voice guide or samples are given, ask for two examples of existing copy before writing.',
    category: 'marketing',
  },
  {
    id: 'marketing.seo-natural-keywords',
    title: 'Natural keyword use',
    prompt:
      'When a target keyword is given, use it naturally in the title, the first paragraph, and one heading, and never stuff it. Write for the reader first; copy that answers the search intent in plain language outranks keyword repetition.',
    category: 'marketing',
  },
]
