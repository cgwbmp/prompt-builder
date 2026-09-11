import type { Prompt } from '../types'

export const ux: Prompt[] = [
  {
    id: 'ux.progressive-disclosure',
    title: 'Progressive disclosure',
    prompt:
      'Show only what most users need for the common path and put rare or advanced options behind an explicit "Advanced" or "Show more" control. Never hide a step of the primary path behind disclosure.',
    category: 'ux',
  },
  {
    id: 'ux.single-column-forms',
    title: 'Single-column forms',
    prompt:
      'Lay out forms in one column with labels directly above their fields so the eye moves straight down. Only place short, tightly related fields (city and postal code) side by side, and size inputs to the expected length of the answer.',
    category: 'ux',
  },
  {
    id: 'ux.visible-labels',
    title: 'Visible labels, hint placeholders',
    prompt:
      'Give every field a persistent visible label. Use placeholder text only for a format example, never as the label, because it disappears on input and cannot be checked afterwards.',
    category: 'ux',
  },
  {
    id: 'ux.validate-on-blur',
    title: 'Inline validation on blur',
    prompt:
      'Validate a field when the user leaves it, not on every keystroke, and check empty required fields only on submit. Show the message right below the field and clear it as soon as the input becomes valid.',
    category: 'ux',
  },
  {
    id: 'ux.error-messages-say-how-to-fix',
    title: 'Errors say how to fix',
    prompt:
      'Write error messages that state what is wrong and exactly what to do ("Enter a date after today", "Passwords need at least 12 characters"), next to the field in plain language. Never show "Invalid input", a bare error code, or a generic banner alone. On submit, list all errors at the top with links to each field.',
    category: 'ux',
  },
  {
    id: 'ux.preserve-input-on-error',
    title: 'Never clear input on error',
    prompt:
      'Keep every value the user entered when a submission fails, a page reloads, or a session expires; move focus to the first invalid field and let the user fix only that.',
    category: 'ux',
  },
  {
    id: 'ux.smart-defaults',
    title: 'Smart defaults',
    prompt:
      'Prefill fields with the most likely value: country and phone prefix from the locale, today for dates, the most common option selected, and previously used choices remembered. Make the default safe to accept without reading when possible.',
    category: 'ux',
  },
  {
    id: 'ux.mark-optional-not-required',
    title: 'Mark optional, not required',
    prompt:
      'Make every field required by default and label the exceptions with "(optional)" instead of marking required fields with asterisks. If a field is optional, first ask whether it is needed at all and remove it if not.',
    category: 'ux',
  },
  {
    id: 'ux.right-control-for-choice',
    title: 'Right control for the choice',
    prompt:
      'Use radio buttons for two to five mutually exclusive options, a select for longer lists, checkboxes for multiple selection, and a toggle only for an on/off setting that takes effect immediately. Do not use a dropdown for two options or a toggle that needs a Save button.',
    category: 'ux',
  },
  {
    id: 'ux.empty-states-teach',
    title: 'Empty states that teach',
    prompt:
      'Write empty states that explain what will appear here, why it is empty right now, and offer the primary action to fill it (a Create button, an import, or sample data). Never show a bare "No items" or an empty table.',
    category: 'ux',
  },
  {
    id: 'ux.loading-thresholds',
    title: 'Loading state thresholds',
    prompt:
      'Show nothing for waits under about 300 ms, a skeleton that matches the final layout for waits up to a few seconds, and a progress indicator with an explanation for anything longer. Reserve the final space so content does not shift when it arrives.',
    category: 'ux',
  },
  {
    id: 'ux.error-states-recover',
    title: 'Error states offer recovery',
    prompt:
      'Give every error state a way forward: Retry, Go back, or contact support with a reference id and the time. Distinguish problems the user can fix from problems on our side, and keep the rest of the page usable when only one section failed.',
    category: 'ux',
  },
  {
    id: 'ux.undo-over-confirm',
    title: 'Undo instead of confirm',
    prompt:
      'For reversible actions such as archive, move, or delete-to-trash, act immediately and offer Undo for several seconds (toast, soft delete) rather than interrupting with a confirmation dialog. Reserve confirmations for irreversible or high-impact actions.',
    category: 'ux',
  },
  {
    id: 'ux.destructive-confirmation-design',
    title: 'Destructive confirmations',
    prompt:
      'Make every confirmation for an irreversible action name the object and the consequence ("Delete project Acme and its 34 files? This cannot be undone."), use the specific verb on the button (Delete, not OK or Yes), make Cancel the default, and for the most severe actions require typing the name.',
    category: 'ux',
  },
  {
    id: 'ux.consistent-terminology',
    title: 'One word per product concept',
    prompt:
      'Use one word for each concept across the whole product, its emails, and its errors: do not mix remove, delete, and trash, or workspace, team, and organization. Keep a short glossary and check new copy against it.',
    category: 'ux',
  },
  {
    id: 'ux.plain-microcopy',
    title: 'Plain-language microcopy',
    prompt:
      'Write microcopy in plain language, active voice, second person, and short sentences. No jargon, no internal system names, no blame ("You entered an invalid email") and no humor in error or billing flows.',
    category: 'ux',
  },
  {
    id: 'ux.imperative-copy',
    title: 'Imperative UI copy',
    prompt:
      'Write instructions, empty states, and calls to action in the imperative mood addressed to the user ("Add your first project", "Choose a plan"), not as descriptions or suggestions ("You can add a project", "Projects can be added here"). Keep one instruction per sentence and lead with the verb.',
    category: 'ux',
  },
  {
    id: 'ux.button-labels-are-verbs',
    title: 'Button labels are verbs',
    prompt:
      'Label buttons with the verb and object of the action ("Save changes", "Send invite", "Delete file"), so the choice is clear without reading the surrounding text. Never label a button OK, Yes, No, or Submit alone.',
    category: 'ux',
  },
  {
    id: 'ux.no-silent-disabled-submit',
    title: 'Do not disable submit silently',
    prompt:
      'Do not disable the submit button while a form is incomplete; let the user press it and show which fields need attention. Disable only while a request is in flight, and then show a spinner and a label like "Saving..." so the state is explained.',
    category: 'ux',
  },
  {
    id: 'ux.visible-system-status',
    title: 'Visible system status',
    prompt:
      'Show the state of the system whenever it matters: progress for operations over one second, "Step 2 of 4" in flows, "Saved 2 minutes ago" for documents, and a pending or offline indicator when changes have not synced.',
    category: 'ux',
  },
  {
    id: 'ux.match-mental-model',
    title: 'Match the user mental model',
    prompt:
      'Organize screens, options, and names around how users think about the task, not around the database schema or internal team structure. Use the vocabulary users use in support tickets and interviews.',
    category: 'ux',
  },
  {
    id: 'ux.recognition-over-recall',
    title: 'Recognition over recall',
    prompt:
      'Show options instead of asking users to remember them: recently used items, suggestions, visible menus, and examples of the expected format. Never require typing an id, a code, or an exact name that the system could offer as a choice.',
    category: 'ux',
  },
  {
    id: 'ux.forgiving-inputs',
    title: 'Forgiving inputs',
    prompt:
      'Accept any input a human would understand and normalize it: spaces or dashes in card numbers and phone numbers, mixed-case emails, pasted dates in several formats, trailing whitespace. Reject only what is truly ambiguous, and format the value on blur.',
    category: 'ux',
  },
  {
    id: 'ux.search-behavior',
    title: 'Search with suggestions',
    prompt:
      'Offer suggestions after two characters, tolerate typos, show recent searches, and keep the query in the box on the results page. On zero results, say so plainly and offer alternatives: a spelling correction, broader filters, or popular items. Never show a blank page.',
    category: 'ux',
  },
  {
    id: 'ux.filters-as-chips',
    title: 'Applied filters stay visible',
    prompt:
      'Show applied filters as removable chips above the results with a Clear all control and the result count, and reflect filters in the URL so the view can be shared and survives reload.',
    category: 'ux',
  },
  {
    id: 'ux.minimal-skippable-onboarding',
    title: 'Minimal, skippable onboarding',
    prompt:
      'Ask only for what is needed to deliver the first useful result, make every onboarding step skippable, show progress, and defer profile completion and tours until the moment they become relevant. Get users to their own data or work within the first minute.',
    category: 'ux',
  },
  {
    id: 'ux.defaults-over-settings',
    title: 'Defaults over settings',
    prompt:
      'Prefer choosing a good default to adding a setting. Add a preference only when users demonstrably split and both choices are valid, and never use a setting to avoid making a design decision.',
    category: 'ux',
  },
  {
    id: 'ux.feedback-within-100ms',
    title: 'Feedback within 100 ms',
    prompt:
      'Acknowledge every tap or click within 100 ms with a pressed state, an optimistic update, or an immediate visual change, even if the underlying operation takes longer. Roll back visibly with an explanation if the operation fails.',
    category: 'ux',
  },
  {
    id: 'ux.avoid-modals',
    title: 'Avoid modals for non-blocking tasks',
    prompt:
      'Do not use modal dialogs for tasks that do not require an immediate decision; use inline editing, a side panel, or a dedicated page instead. When a modal is warranted, show one at a time, never stack them, and close on Escape and outside click only when no data would be lost.',
    category: 'ux',
  },
  {
    id: 'ux.discoverable-shortcuts',
    title: 'Discoverable keyboard shortcuts',
    prompt:
      'Show keyboard shortcuts in tooltips and menu items, provide a cheat sheet on the ? key, and follow platform conventions (Cmd or Ctrl+S saves, Escape closes, Enter confirms, Cmd or Ctrl+K opens the command palette). Never make a shortcut the only way to do something.',
    category: 'ux',
  },
  {
    id: 'ux.breadcrumbs-and-back',
    title: 'Breadcrumbs and reliable back',
    prompt:
      'Show breadcrumbs for hierarchies deeper than two levels and make the browser Back button return to the previous view with its filters, scroll position, and selection intact. Never trap users, open a loop, or break Back with in-app state changes.',
    category: 'ux',
  },
  {
    id: 'ux.autosave-and-drafts',
    title: 'Autosave and drafts',
    prompt:
      'Autosave long forms and editors as drafts, show a "Saved" or "Saving" indicator, restore the draft when the user returns, and warn before leaving a page with unsaved changes. Do not lose work on navigation, tab close, or session timeout.',
    category: 'ux',
  },
  {
    id: 'ux.pagination-vs-infinite-scroll',
    title: 'Pagination vs infinite scroll',
    prompt:
      'Use pagination or a Load more button for goal-driven lists where users compare items, return to a position, or need to reach the footer. Use infinite scroll only for open-ended browsing feeds, and always preserve position on Back.',
    category: 'ux',
  },
  {
    id: 'ux.data-table-conventions',
    title: 'Data table conventions',
    prompt:
      'Build data tables with a sticky header, right-aligned numbers, a visible sort indicator on the active column, row count, bulk actions that appear when rows are selected, a primary action on hover or in a fixed column, and defined empty, loading, and error rows.',
    category: 'ux',
  },
  {
    id: 'ux.settings-organization',
    title: 'Settings grouped by frequency',
    prompt:
      'Group settings by task with the most frequently changed ones first, offer in-context controls instead of sending users to a settings page where possible, and apply changes either immediately or with an explicit Save for the whole page, never a mix of both.',
    category: 'ux',
  },
  {
    id: 'ux.multi-step-flows',
    title: 'One thing per step',
    prompt:
      'Break long tasks into steps that each ask one thing, show a progress indicator with named steps, allow going back without losing answers, and end with a review page before the final submit, following the GOV.UK one-thing-per-page pattern.',
    category: 'ux',
  },
  {
    id: 'ux.success-confirmation',
    title: 'Confirm completion clearly',
    prompt:
      'After a transaction completes, show a confirmation page or message that states what happened, gives a reference number, explains what happens next and when, and offers the most likely next action. Send the same information by email when the action has consequences.',
    category: 'ux',
  },
  {
    id: 'ux.spacing-prevents-mistaps',
    title: 'Space out risky targets',
    prompt:
      'Keep at least 8 px between adjacent tappable controls and never place a destructive action directly next to a frequent one; put Delete at the far end of a row, in an overflow menu, or behind a swipe with confirmation.',
    category: 'ux',
  },
  {
    id: 'ux.notification-restraint',
    title: 'Notification restraint',
    prompt:
      'Notify only about things that need action or that the user asked to be told about, batch low-priority events into a digest, never notify users about their own actions, and give per-category controls with a one-tap way to mute.',
    category: 'ux',
  },
  {
    id: 'ux.no-dark-patterns',
    title: 'No dark patterns',
    prompt:
      'Do not use confirmshaming, pre-checked marketing consent, fake urgency or scarcity, hidden costs, or cancellation flows that are harder than sign-up. Make unsubscribe, downgrade, and delete-account as easy to find and complete as their opposites.',
    category: 'ux',
  },
]
