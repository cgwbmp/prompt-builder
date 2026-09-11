import type { Prompt } from '../types'

export const motion: Prompt[] = [
  {
    id: 'motion.duration-150-300',
    title: 'UI durations 150-300ms',
    prompt:
      'Keep all interface transitions between 150ms and 300ms: 150ms for small elements like toggles and menus, 200-250ms for panels and dialogs, 300ms only for large surfaces such as full-screen sheets. Nothing in the UI may animate longer than 400ms except deliberate onboarding or brand moments.',
    category: 'motion',
  },
  {
    id: 'motion.hover-100ms',
    title: 'Hover changes in 100ms',
    prompt:
      'Transition hover states (background, border, color, shadow) in 100-150ms with ease-out, and return to the resting state in the same duration. Hover feedback that takes longer than 150ms feels laggy.',
    category: 'motion',
  },
  {
    id: 'motion.ease-out-in',
    title: 'Ease-out entering, ease-in exiting',
    prompt:
      'Use an ease-out curve (cubic-bezier(0, 0, 0.2, 1)) for elements entering or expanding and a faster ease-in (cubic-bezier(0.4, 0, 1, 1)) for elements exiting or collapsing, with exits at roughly 70% of the enter duration. Never use the default CSS ease or ease-in-out for enter and exit.',
    category: 'motion',
  },
  {
    id: 'motion.no-linear',
    title: 'No linear easing',
    prompt:
      'Never use linear easing for movement, scaling, or fading of UI elements; linear is only acceptable for continuous indicators such as progress bars, marquees, and spinner rotation.',
    category: 'motion',
  },
  {
    id: 'motion.no-bounce-pro',
    title: 'No bounce in professional tools',
    prompt:
      'Do not use bounce, elastic, or overshoot easing anywhere in productivity, admin, or data tools. Every element should settle exactly at its final position on a single deceleration curve.',
    category: 'motion',
  },
  {
    id: 'motion.spring-playful',
    title: 'Springs for playful products',
    prompt:
      'In consumer or playful products, use spring physics for drag, toggle, and card interactions with moderate stiffness and enough damping that overshoot stays under 5% and settles within 400ms. Springs must retarget from the current position when interrupted rather than restarting.',
    category: 'motion',
  },
  {
    id: 'motion.reduced-motion',
    title: 'Respect reduced motion',
    prompt:
      'When prefers-reduced-motion is set, replace all movement, scaling, and parallax with instant state changes or a plain opacity crossfade of 100ms or less, and stop autoplaying or looping animations. The state change must still be visible; do not remove feedback entirely.',
    category: 'motion',
  },
  {
    id: 'motion.transform-opacity-only',
    title: 'Animate transform and opacity only',
    prompt:
      'Animate only transform and opacity, never width, height, top, left, margin, or padding. If a layout change must appear animated, measure the before and after sizes and animate a transform between them; the only exception is a measured-height disclosure or accordion transition.',
    category: 'motion',
  },
  {
    id: 'motion.no-layout-shift',
    title: 'No layout-shifting animation',
    prompt:
      'Animations must never push surrounding content around: reserve space for elements before they appear, animate overlays above the layout instead of inside it, and never animate the size of an element that other content depends on. Zero cumulative layout shift from motion.',
    category: 'motion',
  },
  {
    id: 'motion.skeletons-over-spinners',
    title: 'Skeletons over spinners',
    prompt:
      'Show skeleton placeholders that match the shape and count of the incoming content instead of spinners for any page or panel load. Use a single slow shimmer sweep of 1.5-2s across all skeletons in sync; never show more than one spinner on a screen.',
    category: 'motion',
  },
  {
    id: 'motion.optimistic-ui',
    title: 'Optimistic updates',
    prompt:
      'Apply user actions such as toggling, liking, reordering, and deleting to the interface immediately, then reconcile with the server response. On failure, animate the element back to its previous state over 200ms and show an inline error; never block the interaction on a spinner.',
    category: 'motion',
  },
  {
    id: 'motion.staggered-entry',
    title: 'Staggered list entry',
    prompt:
      'When a list or grid first appears, fade and slide items in from 8px below with a 30-50ms stagger between items and a 200ms duration each, capping the stagger after the first 8-10 items so long lists do not take seconds to settle. Do not stagger on subsequent re-renders or pagination.',
    category: 'motion',
  },
  {
    id: 'motion.hover-lift',
    title: 'Hover lift on cards',
    prompt:
      'On clickable cards, respond to hover with a 2px upward translate and one step up in shadow over 150ms ease-out. Do not scale cards on hover, and do not apply lift to cards that are not interactive.',
    category: 'motion',
  },
  {
    id: 'motion.focus-ring-instant',
    title: 'Instant visible focus ring',
    prompt:
      'Show a 2px focus ring with a 2px offset on every focusable element via :focus-visible, appearing instantly with no transition. Never remove or fade the focus ring, and keep the ring outside the element so it does not shift the layout.',
    category: 'motion',
  },
  {
    id: 'motion.pressed-scale',
    title: 'Pressed state scale 0.98',
    prompt:
      'On press (:active), scale buttons and interactive cards to 0.98 over 100ms with no delay, then release back over 150ms ease-out. Icon buttons may scale to 0.95; never scale below 0.95 or add rotation.',
    category: 'motion',
  },
  {
    id: 'motion.page-transitions-subtle',
    title: 'Subtle page transitions',
    prompt:
      'Transition between routes with a 150-200ms opacity fade and at most a 4-8px vertical slide of the incoming content; no full-screen slides, flips, or zooms. Keep the shell (navigation, header, sidebar) completely static during route changes.',
    category: 'motion',
  },
  {
    id: 'motion.toast-enter-exit',
    title: 'Toast enter and exit',
    prompt:
      'Slide toasts in from their edge of the screen by 16px with a fade over 250ms ease-out, hold for 4-6 seconds (longer if they contain an action), and exit with a 150ms fade. Pause the timer on hover, stack new toasts by shifting older ones with a transform, and never let a toast steal focus.',
    category: 'motion',
  },
  {
    id: 'motion.modal-fade-scale',
    title: 'Modal fade and scale from 0.96',
    prompt:
      'Open modals by fading the backdrop over 200ms while the dialog fades in and scales from 0.96 to 1 with ease-out; close with a 150ms fade and scale back to 0.96 with ease-in. Do not slide dialogs in from off-screen on desktop.',
    category: 'motion',
  },
  {
    id: 'motion.drawer-slide',
    title: 'Drawer and sheet slide',
    prompt:
      'Slide side drawers and bottom sheets in from their edge with a translate over 250-300ms ease-out and out over 200ms ease-in, with the backdrop fading on the same timing. If the sheet is draggable, follow the finger 1:1 and dismiss when released past 30% of its height or with sufficient velocity.',
    category: 'motion',
  },
  {
    id: 'motion.accordion-height',
    title: 'Accordion expand and collapse',
    prompt:
      'Animate accordion and disclosure content over 200ms ease-out using a grid-template-rows 0fr to 1fr transition or a measured height, fading the content in during the second half. Rotate the chevron 180 degrees on the same duration and collapse slightly faster than expand.',
    category: 'motion',
  },
  {
    id: 'motion.tooltip-delay',
    title: 'Tooltip delay 300ms',
    prompt:
      'Show tooltips after a 300-500ms hover delay with a 100ms fade, hide them immediately on mouse leave, and skip the delay when the pointer moves directly between adjacent tooltip triggers. Tooltips must also appear on keyboard focus with the same timing.',
    category: 'motion',
  },
  {
    id: 'motion.loading-after-300ms',
    title: 'Loading indicator after 300ms',
    prompt:
      'Do not show any loading indicator for operations that finish within 300ms; after that threshold fade one in over 100ms and keep it visible for at least 500ms once shown so it does not flicker. Delay skeletons and spinners the same way.',
    category: 'motion',
  },
  {
    id: 'motion.pending-disable',
    title: 'Pending state on submit',
    prompt:
      'While a submit or save request is in flight, put the triggering button into a pending state (disabled, label preserved, small inline spinner or progress) and prevent duplicate submissions. Keep the form editable unless the request mutates it, and restore the button on completion or error.',
    category: 'motion',
  },
  {
    id: 'motion.spinner-rules',
    title: 'Spinner rules',
    prompt:
      'When a spinner is unavoidable, use a single indeterminate ring of 16-24px rotating once per 800ms to 1s with linear easing, placed inline where the result will appear. Never center a full-page spinner over content that is still usable, and never show two spinners at once.',
    category: 'motion',
  },
  {
    id: 'motion.progress-for-long-tasks',
    title: 'Determinate progress over 2s',
    prompt:
      'For operations expected to exceed 2 seconds (uploads, exports, imports), show a determinate progress bar animating smoothly to each new value over 200ms with linear easing and a percentage or step label. Switch to indeterminate only when progress is truly unknowable.',
    category: 'motion',
  },
  {
    id: 'motion.scroll-driven-restraint',
    title: 'Scroll-driven restraint',
    prompt:
      'Limit scroll-triggered animation to a single fade-in of 8-16px upward translate over 300ms per section, triggered once when 20% of the section is visible, and never replayed on scroll up. Content must be readable without any scroll animation firing.',
    category: 'motion',
  },
  {
    id: 'motion.parallax-restraint',
    title: 'Parallax restraint',
    prompt:
      'Avoid parallax in product UI entirely; on marketing pages limit it to background media moving at 0.8-0.9x scroll speed with no horizontal movement, disabled on touch devices and under reduced motion. Foreground text never parallaxes.',
    category: 'motion',
  },
  {
    id: 'motion.success-microinteraction',
    title: 'Success check morph',
    prompt:
      'On successful completion of an action, morph the pending indicator into a checkmark over 300ms (draw the stroke with a stroke-dashoffset animation) and hold it for 1-1.5 seconds before returning to the resting label. Use this once per action; do not celebrate routine saves with confetti or large animations.',
    category: 'motion',
  },
  {
    id: 'motion.error-shake-restraint',
    title: 'Error feedback without shaking',
    prompt:
      'Signal validation errors by fading in the error message and border change over 150ms; do not shake, bounce, or flash inputs. If a shake is required by the product, limit it to a 4px horizontal translate, two cycles, 300ms total.',
    category: 'motion',
  },
  {
    id: 'motion.no-autoplay',
    title: 'No autoplaying motion',
    prompt:
      'Do not autoplay video, carousels, or looping decorative animations; any continuous motion must be user-initiated and pausable with a visible control. Ambient background animation, if used, must pause when not in view and under reduced motion.',
    category: 'motion',
  },
  {
    id: 'motion.interruptible-animations',
    title: 'Interruptible, retargeting motion',
    prompt:
      'Every animation that a user can retrigger (hover, toggle, open and close, drag) must be interruptible and continue from its current value toward the new target, using CSS transitions or springs rather than keyframes that restart from zero. Rapid toggling should never queue or stack animations.',
    category: 'motion',
  },
  {
    id: 'motion.menu-dropdown-motion',
    title: 'Menu and dropdown motion',
    prompt:
      'Open menus, dropdowns, and popovers with a 150ms fade combined with a 4px translate from the trigger side and a scale from 0.98, with the transform origin at the anchor point; close in 100ms with fade only. Nested submenus open without additional delay.',
    category: 'motion',
  },
  {
    id: 'motion.toggle-and-checkbox',
    title: 'Toggle and checkbox motion',
    prompt:
      'Animate switch thumbs sliding over 150ms ease-out with the track color transitioning on the same timing, and draw checkbox checkmarks in over 100ms. Radio and checkbox state changes must complete within 150ms so rapid form filling never waits on animation.',
    category: 'motion',
  },
  {
    id: 'motion.motion-tokens',
    title: 'Motion tokens, not ad hoc values',
    prompt:
      'Define motion as a small token set (duration-fast 100ms, duration-base 200ms, duration-slow 300ms; ease-out, ease-in, ease-standard curves) and use only those tokens across the interface. Any component needing a value outside the set must justify it in a comment.',
    category: 'motion',
  },
  {
    id: 'motion.exit-faster-than-enter',
    title: 'Exits faster than entrances',
    prompt:
      'Make dismissals faster than appearances: when the user closes, cancels, or navigates away, the outgoing element leaves in 100-150ms, while arriving elements may take 200-250ms. Users are waiting on what comes next, not on what is leaving.',
    category: 'motion',
  },
]
