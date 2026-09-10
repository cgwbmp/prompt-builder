import type { Category } from '../types'
import { ALL, type CategoryFilter } from '../lib/filter'

interface CategoryBarProps {
  categories: readonly Category[]
  active: CategoryFilter
  onChange: (next: CategoryFilter) => void
  /** Number of selected prompts per category id. */
  selectedCounts: ReadonlyMap<string, number>
  totalSelected: number
}

export function CategoryBar({ categories, active, onChange, selectedCounts, totalSelected }: CategoryBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categories">
      <Chip
        label="All"
        active={active === ALL}
        count={totalSelected}
        onClick={() => onChange(ALL)}
      />
      {categories.map((c) => (
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
  )
}

interface ChipProps {
  label: string
  title?: string
  active: boolean
  count: number
  onClick: () => void
}

function Chip({ label, title, active, count, onClick }: ChipProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      title={title}
      onClick={onClick}
      className={[
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150',
        active
          ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-glow-cyan'
          : 'border-white/10 bg-white/[0.03] text-ink-muted hover:border-white/25 hover:text-ink',
      ].join(' ')}
    >
      {label}
      {count > 0 && (
        <span className="rounded-full bg-neon-magenta/20 px-1.5 text-[10px] leading-4 text-neon-magenta">
          {count}
        </span>
      )}
    </button>
  )
}
