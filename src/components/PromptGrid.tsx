import type { Prompt } from '../types'
import { PromptCard } from './PromptCard'

interface PromptGridProps {
  prompts: readonly Prompt[]
  selected: ReadonlySet<string>
  onToggle: (id: string) => void
}

export function PromptGrid({ prompts, selected, onToggle }: PromptGridProps) {
  if (prompts.length === 0) {
    return (
      <div className="glass rounded-xl p-8 text-center text-sm text-ink-muted">
        No prompts match. Try another search or category.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {prompts.map((p) => (
        <PromptCard key={p.id} prompt={p} selected={selected.has(p.id)} onToggle={onToggle} />
      ))}
    </div>
  )
}
