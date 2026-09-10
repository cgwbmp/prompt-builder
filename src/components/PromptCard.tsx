import type { Prompt } from '../types'

interface PromptCardProps {
  prompt: Prompt
  selected: boolean
  onToggle: (id: string) => void
}

export function PromptCard({ prompt, selected, onToggle }: PromptCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onToggle(prompt.id)}
      className={[
        'glass group relative flex h-full w-full flex-col gap-2 rounded-xl p-4 text-left transition-all duration-150',
        selected
          ? 'neon-border -translate-y-0.5 bg-space-700/70 shadow-glow-cyan'
          : 'hover:-translate-y-0.5 hover:border-white/20 hover:bg-space-700/50',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-sm font-semibold leading-snug text-ink">{prompt.title}</h3>
        <span
          aria-hidden="true"
          className={[
            'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] transition-all duration-150',
            selected
              ? 'border-neon-cyan bg-neon-cyan text-space-950'
              : 'border-white/20 text-transparent group-hover:border-white/40',
          ].join(' ')}
        >
          ✓
        </span>
      </div>
      <p className="line-clamp-3 text-xs leading-relaxed text-ink-muted">{prompt.prompt}</p>
    </button>
  )
}
