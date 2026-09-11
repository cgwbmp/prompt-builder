import { useEffect, useState } from 'react'

interface OutputPanelProps {
  output: string
  custom: string
  onCustomChange: (value: string) => void
  selectedCount: number
  onClear: () => void
  /** Called when a copy succeeds (used for the rocket flare). */
  onCopied?: () => void
}

export function OutputPanel({ output, custom, onCustomChange, selectedCount, onClear, onCopied }: OutputPanelProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = window.setTimeout(() => setCopied(false), 1500)
    return () => window.clearTimeout(t)
  }, [copied])

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

  return (
    <aside className="glass-dark flex flex-col gap-4 rounded-2xl !border-t-2 !border-t-neon-cyan/70 p-4 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
      <header className="flex items-center justify-between">
        <h2 className="font-heading text-base font-semibold text-neon-cyan text-glow">Your prompt</h2>
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span>
            {selectedCount} selected
          </span>
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
        <span className="text-xs font-medium text-ink-muted">AI-ready output</span>
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
    </aside>
  )
}
