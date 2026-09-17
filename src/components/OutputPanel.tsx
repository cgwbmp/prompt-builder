import { useEffect, useState } from 'react'
import { useMediaQuery } from '../lib/useMediaQuery'

/** Matches the `lg:` breakpoint, where the panel is a sidebar instead of a sheet. */
const DESKTOP_QUERY = '(min-width: 64rem)'

interface OutputPanelProps {
  output: string
  custom: string
  onCustomChange: (value: string) => void
  selectedCount: number
  onClear: () => void
  /** Called when a copy succeeds (used for the rocket flare). */
  onCopied?: () => void
  /** Bottom-sheet state below `lg`. Ignored on desktop, where the panel is always open. */
  expanded: boolean
  onExpandedChange: (next: boolean) => void
}

export function OutputPanel({
  output,
  custom,
  onCustomChange,
  selectedCount,
  onClear,
  onCopied,
  expanded,
  onExpandedChange,
}: OutputPanelProps) {
  const [copied, setCopied] = useState(false)
  // Below `lg` the panel is a bottom sheet: only its header shows until opened.
  const isDesktop = useMediaQuery(DESKTOP_QUERY)
  const open = isDesktop || expanded

  useEffect(() => {
    if (!copied) return
    const t = window.setTimeout(() => setCopied(false), 1500)
    return () => window.clearTimeout(t)
  }, [copied])

  // While the sheet covers the screen, the page behind it must not scroll.
  useEffect(() => {
    if (isDesktop || !expanded) return
    const { body } = document
    const previous = body.style.overflow
    body.style.overflow = 'hidden'
    return () => {
      body.style.overflow = previous
    }
  }, [isDesktop, expanded])

  useEffect(() => {
    if (isDesktop || !expanded) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onExpandedChange(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isDesktop, expanded, onExpandedChange])

  async function copy() {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      onCopied?.()
    } catch {
      // Clipboard API unavailable (insecure context / permissions). Fall back to selecting the text.
      const el = document.getElementById('output-text') as HTMLTextAreaElement | null
      el?.focus()
      el?.select()
    }
  }

  const empty = output.length === 0
  const countLabel = `${selectedCount} selected`

  return (
    <aside
      id="output-panel"
      className={[
        'glass-dark z-30 flex flex-col gap-4 !border-t-2 !border-t-neon-cyan/70 p-4',
        'fixed overflow-y-auto overscroll-contain lg:overflow-visible inset-x-0 bottom-0 rounded-t-2xl pb-[max(1rem,env(safe-area-inset-bottom))]',
        expanded ? 'h-[96dvh]' : '',
        'lg:sticky lg:inset-x-auto lg:top-6 lg:bottom-auto lg:h-[calc(100vh-3rem)] lg:rounded-2xl lg:pb-4',
      ].join(' ')}
    >
      {isDesktop ? (
        <header className="flex items-center justify-between">
          <h2 className="font-heading text-base font-semibold text-neon-cyan text-glow">Your prompt</h2>
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <span>{countLabel}</span>
            {selectedCount > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="rounded-md px-2 py-0.5 transition hover:bg-white/5 hover:text-neon-magenta"
              >
                Clear all
              </button>
            )}
          </div>
        </header>
      ) : (
        <button
          type="button"
          onClick={() => onExpandedChange(!expanded)}
          aria-expanded={expanded}
          aria-controls="output-panel-body"
          className="flex items-center justify-between gap-3 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60"
        >
          <h2 className="font-heading text-base font-semibold text-neon-cyan text-glow">Your prompt</h2>
          <span className="flex items-center gap-2 text-xs text-ink-muted">
            {countLabel}
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform duration-200 ${expanded ? '' : 'rotate-180'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 15l6-6 6 6" />
            </svg>
            <span className="sr-only">{expanded ? 'Collapse prompt panel' : 'Expand prompt panel'}</span>
          </span>
        </button>
      )}

      {open && (
        <div
          id="output-panel-body"
          className="flex lg:min-h-0 flex-1 flex-col gap-4"
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink-muted">Your task (optional)</span>
            <textarea
              value={custom}
              onChange={(e) => onCustomChange(e.target.value)}
              rows={3}
              placeholder="Describe what you actually want done…"
              className="glass w-full resize-y rounded-xl px-3 py-2 font-mono text-xs text-ink placeholder:text-ink-muted outline-none transition focus:border-neon-magenta/60 focus:ring-2 focus:ring-neon-magenta/30"
            />
          </label>

          <div className="flex min-h-0 flex-1 flex-col gap-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-ink-muted">AI-ready output</span>
              {!isDesktop && selectedCount > 0 && (
                <button
                  type="button"
                  onClick={onClear}
                  className="rounded-md px-2 py-0.5 text-xs text-ink-muted transition hover:bg-white/5 hover:text-neon-magenta"
                >
                  Clear all
                </button>
              )}
            </div>
            <textarea
              id="output-text"
              readOnly
              value={output}
              placeholder="Select prompts on the left to build your output…"
              aria-label="Joined prompt output"
              spellCheck={false}
              className="glass !border-neon-magenta/40 min-h-56 w-full flex-1 resize-y rounded-xl px-3 py-2 font-mono text-xs leading-relaxed text-ink placeholder:text-ink-muted outline-none lg:min-h-0 lg:resize-none"
            />
          </div>

          <button
            type="button"
            onClick={copy}
            disabled={empty}
            className={[
              'rounded-xl px-4 py-2.5 font-heading text-sm font-semibold transition-all duration-200',
              copied
                ? 'bg-neon-lime text-space-950 shadow-glow-lime'
                : empty
                  ? 'cursor-not-allowed bg-white/5 text-ink-muted'
                  : 'bg-gradient-to-r from-neon-cyan to-neon-violet text-space-950 hover:shadow-glow-cyan hover:brightness-110',
            ].join(' ')}
          >
            {copied ? 'Copied ✓' : 'Copy to clipboard'}
          </button>
        </div>
      )}
    </aside>
  )
}
