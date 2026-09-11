import type { Prompt } from '../types'

interface PromptCardProps {
  prompt: Prompt
  selected: boolean
  favorite: boolean
  onToggle: (id: string) => void
  onToggleFavorite: (id: string) => void
}

export function PromptCard({ prompt, selected, favorite, onToggle, onToggleFavorite }: PromptCardProps) {
  return (
    <div
      className={[
        'glass group relative flex h-full flex-col rounded-xl transition-all duration-150',
        selected
          ? 'neon-border -translate-y-0.5 bg-space-700/70 shadow-glow-cyan'
          : 'hover:-translate-y-0.5 hover:border-white/20 hover:bg-space-700/50',
      ].join(' ')}
    >
      <button
        type="button"
        aria-pressed={selected}
        onClick={() => onToggle(prompt.id)}
        className="flex h-full w-full flex-col gap-2 rounded-xl p-4 pr-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-sm font-semibold leading-snug text-ink">{prompt.title}</h3>
          {/* <span
            aria-hidden="true"
            className={[
              'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] transition-all duration-150',
              selected
                ? 'border-neon-cyan bg-neon-cyan text-space-950'
                : 'border-white/20 text-transparent group-hover:border-white/40',
            ].join(' ')}
          >
            ✓
          </span> */}
        </div>
        <p className="line-clamp-3 text-xs leading-relaxed text-ink-muted">{prompt.prompt}</p>
      </button>

      <button
        type="button"
        aria-pressed={favorite}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        title={favorite ? 'Remove from favorites' : 'Add to favorites'}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFavorite(prompt.id)
        }}
        className={[
          'absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-neon-magenta/60',
          favorite
            ? 'text-neon-magenta drop-shadow-[0_0_6px_rgba(255,43,214,0.7)]'
            : 'text-ink-muted/50 opacity-0 hover:text-neon-magenta group-hover:opacity-100 focus-visible:opacity-100',
        ].join(' ')}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2.5l2.95 6.1 6.7.9-4.9 4.7 1.2 6.7L12 17.7l-5.95 3.2 1.2-6.7-4.9-4.7 6.7-.9z" />
        </svg>
      </button>
    </div>
  )
}
