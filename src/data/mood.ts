import type { Prompt } from '../types'

export const mood: Prompt[] = [
  {
    id: 'mood.calm',
    title: 'Calm and serene',
    prompt:
      'Make the design feel calm: generous spacing, low visual contrast between surfaces, soft rounded shapes, few competing elements per screen, and slow gentle transitions. Use quiet, reassuring microcopy and avoid badges, counters, or anything that nags.',
    category: 'mood',
  },
  {
    id: 'mood.focused',
    title: 'Focused and distraction-free',
    prompt:
      'Design for deep focus: a single primary task per screen, secondary actions visually muted and grouped away from the main work area, and no promotional, social, or decorative elements competing for attention. Keep copy terse and put the main content in the center of attention.',
    category: 'mood',
  },
  {
    id: 'mood.playful',
    title: 'Playful and fun',
    prompt:
      'Give the design a playful mood: bouncy rounded shapes, expressive illustrations or mascots, surprising micro-details in empty states, and casual friendly microcopy with light humor. Celebrate small wins visually, but keep the core task flows clear.',
    category: 'mood',
  },
  {
    id: 'mood.premium-luxury',
    title: 'Premium and exclusive',
    prompt:
      'Convey premium exclusivity: lots of breathing room, restrained low-saturation surfaces, refined thin details, large high-quality imagery, and very few elements per screen. Microcopy should be short, precise, and unhurried, with no exclamation marks or sales urgency.',
    category: 'mood',
  },
  {
    id: 'mood.trustworthy-banking',
    title: 'Trustworthy and secure',
    prompt:
      'Make the design feel trustworthy like a serious financial product: stable symmetrical layouts, conservative shapes, clear labels on every field, visible security and status indicators, and no surprising or flashy elements. Use plain factual copy that explains what happens next before any irreversible action.',
    category: 'mood',
  },
  {
    id: 'mood.energetic',
    title: 'Energetic and dynamic',
    prompt:
      'Create an energetic mood: high contrast between elements, bold oversized headings, diagonal or off-axis accents, dense punchy imagery, and quick snappy interactions. Use short action-oriented copy in the imperative and keep the primary call to action visually dominant.',
    category: 'mood',
  },
  {
    id: 'mood.technical-pro-tool',
    title: 'Technical pro tool',
    prompt:
      'Make the product feel like a serious tool for professionals: compact controls, information-dense panels, precise numeric readouts, keyboard shortcut hints, and minimal decoration. Copy should be literal and exact, using domain terms rather than friendly paraphrases.',
    category: 'mood',
  },
  {
    id: 'mood.friendly-consumer',
    title: 'Friendly consumer app',
    prompt:
      'Aim for a friendly consumer feel: warm rounded shapes, approachable illustrations of people, comfortable touch-sized targets, and conversational microcopy that says "you" and "we". Reduce jargon to zero and present one clear next step at a time.',
    category: 'mood',
  },
  {
    id: 'mood.serious-enterprise',
    title: 'Serious enterprise',
    prompt:
      'Set a serious enterprise tone: neutral restrained surfaces, standard predictable component patterns, structured tables and forms, no illustrations or mascots, and formal concise copy. Consistency and predictability matter more than personality.',
    category: 'mood',
  },
  {
    id: 'mood.cozy',
    title: 'Cozy and warm',
    prompt:
      'Make the design feel cozy: soft warm-toned surfaces, gentle rounded corners, tactile textures such as paper or fabric in backgrounds, hand-drawn or organic illustration, and warm personal microcopy. Everything should feel comfortable and low-pressure.',
    category: 'mood',
  },
  {
    id: 'mood.futuristic',
    title: 'Futuristic',
    prompt:
      'Give the design a futuristic feel: sleek dark or very light surfaces, thin glowing edges, abstract 3D or particle imagery, technical readout details, and smooth precise motion. Copy should be crisp and confident, referencing capability rather than emotion.',
    category: 'mood',
  },
  {
    id: 'mood.nostalgic',
    title: 'Nostalgic retro',
    prompt:
      'Evoke nostalgia: borrow visual cues from a specific past era (choose one, such as 1980s computing, 1990s web, or 1970s print), including period-appropriate textures, grain, and interface metaphors, and use copy with a knowing, warm tone. Keep interaction patterns modern underneath the retro surface.',
    category: 'mood',
  },
  {
    id: 'mood.urgent',
    title: 'Urgent and time-critical',
    prompt:
      'Design for urgency: the most critical information is largest and highest on screen, strong contrast on alerts, countdowns or live status prominently placed, and secondary content pushed aside. Use direct, unambiguous copy that states the action and consequence in one line.',
    category: 'mood',
  },
  {
    id: 'mood.quiet-invisible',
    title: 'Quiet, invisible UI',
    prompt:
      'Make the design nearly invisible: chrome fades to the minimum, controls appear only when needed, content fills the screen, and there is no branding beyond a small mark. Copy is reduced to essential labels only; the user should notice the content, not the product.',
    category: 'mood',
  },
  {
    id: 'mood.confident',
    title: 'Confident and assertive',
    prompt:
      'Project confidence: big decisive headlines, strong grid alignment, one dominant call to action per screen, high contrast, and no hedging in copy. State things as facts, avoid question marks and qualifiers in headings, and give buttons plain verb labels.',
    category: 'mood',
  },
  {
    id: 'mood.beginner-approachable',
    title: 'Approachable for beginners',
    prompt:
      'Design for first-time users: one concept per screen, large clearly labeled controls, progressive disclosure that hides advanced options by default, inline explanations next to unfamiliar terms, and encouraging copy that never blames the user. Provide obvious defaults so nothing must be decided up front.',
    category: 'mood',
  },
  {
    id: 'mood.expert-dense',
    title: 'Expert power user',
    prompt:
      'Design for experts: dense layouts showing many values at once, small but legible type in tables, everything reachable in one or two clicks, persistent filters and shortcuts visible, and abbreviations where the domain uses them. Skip onboarding hints and explanatory copy.',
    category: 'mood',
  },
  {
    id: 'mood.editorial-authority',
    title: 'Editorial authority',
    prompt:
      'Give the design the authority of a respected publication: strong typographic hierarchy, long-form reading comfort, bylines and dates displayed prominently, restrained imagery, and measured, well-edited copy without marketing language. Structure content like articles rather than feature cards.',
    category: 'mood',
  },
  {
    id: 'mood.celebratory',
    title: 'Celebratory',
    prompt:
      'Create a celebratory feel for success moments: confetti or burst effects, large congratulatory headings, expressive illustration, and warm affirming copy that names what the user achieved. Keep it to completion and milestone screens only so it stays meaningful.',
    category: 'mood',
  },
  {
    id: 'mood.safe-medical',
    title: 'Safe and clinical',
    prompt:
      'Make the design feel safe and clinical: clean uncluttered surfaces, high legibility, clear separation between informational and action areas, prominent confirmation before anything consequential, and calm precise copy that avoids alarming words. Show sources or verification cues where data appears.',
    category: 'mood',
  },
  {
    id: 'mood.eco-natural',
    title: 'Eco and natural',
    prompt:
      'Convey an eco-friendly natural mood: organic rounded shapes, leaf and landscape imagery or subtle natural textures, earthy low-saturation surfaces, generous breathing room, and grounded honest copy without hype. Avoid glossy or artificial-looking effects.',
    category: 'mood',
  },
  {
    id: 'mood.bold-startup',
    title: 'Bold startup',
    prompt:
      'Give it a bold startup energy: oversized headline statements, one vivid accent used fearlessly, large product screenshots, big rounded buttons, and punchy short copy with a clear point of view. Feel ambitious and fast-moving rather than corporate.',
    category: 'mood',
  },
  {
    id: 'mood.understated',
    title: 'Understated and modest',
    prompt:
      'Keep the mood understated: small type sizes for non-essential text, low-contrast secondary elements, subtle rather than bold accents, no hero imagery, and modest factual copy. Let quality show through details rather than through anything loud.',
    category: 'mood',
  },
  {
    id: 'mood.whimsical',
    title: 'Whimsical and quirky',
    prompt:
      'Add whimsy: unexpected details in corners and empty states, hand-drawn or slightly imperfect illustrations, playful copy with wordplay, unusual but readable shapes, and small delightful surprises on interaction. Keep whimsy out of error messages and critical flows.',
    category: 'mood',
  },
  {
    id: 'mood.cinematic',
    title: 'Cinematic and immersive',
    prompt:
      'Create a cinematic mood: full-bleed widescreen imagery or video, dark letterboxed surroundings, dramatic contrast, sparse overlaid text, and slow deliberate reveals as the user scrolls. Copy is minimal and evocative, like a title card.',
    category: 'mood',
  },
  {
    id: 'mood.creative-studio',
    title: 'Creative studio',
    prompt:
      'Make it feel like the work of a creative studio: unconventional composition, large portfolio imagery, expressive oversized headings, asymmetric spacing, and confident opinionated copy. Break standard patterns intentionally while keeping navigation obvious.',
    category: 'mood',
  },
  {
    id: 'mood.warm-human',
    title: 'Warm and human',
    prompt:
      'Make the design feel human: photography of real people rather than abstract graphics, soft shapes, comfortable spacing, first-person and second-person copy, and moments of empathy in error and empty states. Avoid anything that reads as automated or corporate.',
    category: 'mood',
  },
  {
    id: 'mood.crisp-utilitarian',
    title: 'Crisp utilitarian',
    prompt:
      'Set a crisp utilitarian mood: nothing exists on screen that is not required to complete the task, including no branding surface, no marketing sections, and no onboarding decoration. Standard controls, clear labels, tight but not cramped spacing, and copy that is purely instructional.',
    category: 'mood',
  },
  {
    id: 'mood.forgiving-gentle',
    title: 'Forgiving and gentle',
    prompt:
      'Make the product feel forgiving: undo is always visible after an action, destructive options are visually de-emphasized, validation appears softly inline rather than as loud alerts, and error copy explains how to fix things without blame. Nothing should feel punishing.',
    category: 'mood',
  },
  {
    id: 'mood.institutional',
    title: 'Institutional and official',
    prompt:
      'Convey institutional authority as in a government, university, or standards body: formal symmetrical structure, restrained surfaces, clear document-like sections, prominent official identifiers, and neutral formal copy. Prioritize clarity and accessibility over any stylistic flair.',
    category: 'mood',
  },
  {
    id: 'mood.youthful',
    title: 'Youthful and trendy',
    prompt:
      'Aim at a young trend-aware audience: bold expressive shapes, stickers and emoji-like graphics, layered collage compositions, high-saturation accents, and casual slang-friendly copy in short bursts. Feel current and social rather than polished and corporate.',
    category: 'mood',
  },
  {
    id: 'mood.moody-dramatic',
    title: 'Moody and dramatic',
    prompt:
      'Set a moody dramatic atmosphere: predominantly dark surfaces, strong directional lighting in imagery, deep shadows, sparse elements with high contrast, and sparse evocative copy. Let tension and negative space carry the feeling instead of bright decoration.',
    category: 'mood',
  },
]
