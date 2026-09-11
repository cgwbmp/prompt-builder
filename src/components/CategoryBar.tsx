import type { Category } from '../types'
import { CATEGORY_GROUPS } from '../data/categories'
import { ALL, FAVORITES, type CategoryFilter } from '../lib/filter'

interface CategoryBarProps {
  categories: readonly Category[]
  active: CategoryFilter
  onChange: (next: CategoryFilter) => void
  /** Number of selected prompts per category id. */
  selectedCounts: ReadonlyMap<string, number>
  totalSelected: number
  favoriteCount: number
}

export function CategoryBar({
  categories,
  active,
  onChange,
  selectedCounts,
  totalSelected,
  favoriteCount,
}: CategoryBarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Quick filters">
        <Chip label="All" active={active === ALL} count={totalSelected} onClick={() => onChange(ALL)} />
        <Chip
          label={`★ Favorites${favoriteCount > 0 ? ` (${favoriteCount})` : ''}`}
          title="Prompts you starred"
          active={active === FAVORITES}
          count={0}
          accent="magenta"
          onClick={() => onChange(FAVORITES)}
        />
      </div>

      {CATEGORY_GROUPS.map((group) => {
        const inGroup = categories.filter((c) => c.group === group.id)
        if (inGroup.length === 0) return null
        return (
          <div key={group.id} className="flex flex-col gap-1.5">
            <div className="text-[10px] font-medium text-ink-muted uppercase">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={group.label}>
              {inGroup.map((c) => (
                <Chip
                  key={c.id}
                  label={c.label}
                  title={c.description}
                  active={active === c.id}
                  count={selectedCounts.get(c.id) ?? 0}
                  onClick={() => onChange(c.id)}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

interface ChipProps {
  label: string
  title?: string
  active: boolean
  count: number
  accent?: 'cyan' | 'magenta'
  onClick: () => void
}

function Chip({ label, title, active, count, accent = 'cyan', onClick }: ChipProps) {
  const activeClass =
    accent === 'magenta'
      ? 'border-neon-magenta bg-neon-magenta/10 text-neon-magenta shadow-glow-magenta'
      : 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-glow-cyan'

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      title={title}
      onClick={onClick}
      className={[
        'relative inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150',
        active ? activeClass : 'border-white/10 bg-white/3 text-pink-100 hover:border-white/25 hover:text-ink',
      ].join(' ')}
    >
      {label}
      {count > 0 && (
        <span className="absolute top-[-1px] right-[-1px] w-2 h-2 rounded-full bg-neon-magenta/90 text-xs leading-4 text-neon-magenta"><span className='sr-only'>{count}</span></span>
      )}
    </button>
  )
}
