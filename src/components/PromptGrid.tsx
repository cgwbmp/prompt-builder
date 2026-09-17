import { useEffect, useRef, useState } from 'react'
import type { Prompt } from '../types'
import { PromptCard } from './PromptCard'

/** Cards rendered up front, and added each time the sentinel scrolls into view. */
const PAGE_SIZE = 60
/** Start loading the next page before the sentinel is actually on screen. */
const PREFETCH_MARGIN = '600px'

interface PromptGridProps {
  prompts: readonly Prompt[]
  selected: ReadonlySet<string>
  favorites: ReadonlySet<string>
  onToggle: (id: string) => void
  onToggleFavorite: (id: string) => void
  emptyMessage?: string
}

export function PromptGrid({
  prompts,
  selected,
  favorites,
  onToggle,
  onToggleFavorite,
  emptyMessage = 'No prompts match. Try another search or category.',
}: PromptGridProps) {
  // "All" is ~1900 prompts; mounting them at once means ~1900 backdrop-filter
  // layers. Reveal a page at a time instead, and reset when the list changes.
  const [renderedFor, setRenderedFor] = useState(prompts)
  const [limit, setLimit] = useState(PAGE_SIZE)
  if (renderedFor !== prompts) {
    setRenderedFor(prompts)
    setLimit(PAGE_SIZE)
  }

  const sentinelRef = useRef<HTMLDivElement>(null)
  const hasMore = limit < prompts.length

  useEffect(() => {
    const node = sentinelRef.current
    if (!node) return
    // Re-created on every `limit` change: a fresh observer reports the current
    // intersection immediately, so a viewport taller than one page keeps filling.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLimit((n) => n + PAGE_SIZE)
      },
      { rootMargin: PREFETCH_MARGIN },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [limit, prompts])

  if (prompts.length === 0) {
    return <div className="glass rounded-xl p-8 text-center text-sm text-ink-muted">{emptyMessage}</div>
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {prompts.slice(0, limit).map((p) => (
          <PromptCard
            key={p.id}
            prompt={p}
            selected={selected.has(p.id)}
            favorite={favorites.has(p.id)}
            onToggle={onToggle}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
      {hasMore && <div ref={sentinelRef} aria-hidden="true" className="h-px" />}
      <p aria-live="polite" className="sr-only">
        {`Showing ${Math.min(limit, prompts.length)} of ${prompts.length} prompts`}
      </p>
    </>
  )
}
