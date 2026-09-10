import { useCallback, useMemo, useState } from 'react'
import { CATEGORIES, PROMPTS, PROMPT_BY_ID } from './data'
import { buildOutput } from './lib/join'
import { ALL, FAVORITES, filterPrompts, type CategoryFilter } from './lib/filter'
import { usePersistedSet } from './lib/usePersistedSet'
import { Logo } from './components/Logo'
import { SearchInput } from './components/SearchInput'
import { CategoryBar } from './components/CategoryBar'
import { PromptGrid } from './components/PromptGrid'
import { OutputPanel } from './components/OutputPanel'

const isKnownPrompt = (id: string) => PROMPT_BY_ID.has(id)

export default function App() {
  const { set: selected, toggle, clear } = usePersistedSet('prompt-builder:selected', isKnownPrompt)
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(ALL)
  const [query, setQuery] = useState('')
  const [custom, setCustom] = useState('')
  const [flare, setFlare] = useState(false)
  const { set: favorites, toggle: toggleFavorite } = usePersistedSet('prompt-builder:favorites', isKnownPrompt)

  const visible = useMemo(
    () => filterPrompts(PROMPTS, activeCategory, query, favorites),
    [activeCategory, query, favorites],
  )
  const output = useMemo(() => buildOutput(PROMPTS, CATEGORIES, selected, custom), [selected, custom])

  const selectedCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const p of PROMPTS) {
      if (selected.has(p.id)) counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
    }
    return counts
  }, [selected])

  const onCopied = useCallback(() => {
    setFlare(true)
    window.setTimeout(() => setFlare(false), 400)
  }, [])

  return (
    <>
      <div className="space-bg" aria-hidden="true">
        <div className="stars" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className={`mb-6 flex items-center gap-3 ${flare ? 'flare' : ''}`}>
          <Logo size={36} />
          <div>
            <h1 className="font-heading text-2xl font-bold leading-none">
              <span className="text-gradient">Prompt Builder</span>
            </h1>
            <p className="mt-1 text-xs text-ink-muted">Pick building blocks. Get an AI-ready prompt.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <main className="flex flex-col gap-4">
            <SearchInput value={query} onChange={setQuery} />
            <CategoryBar
              categories={CATEGORIES}
              active={activeCategory}
              onChange={setActiveCategory}
              selectedCounts={selectedCounts}
              totalSelected={selected.size}
              favoriteCount={favorites.size}
            />
            <PromptGrid
              prompts={visible}
              selected={selected}
              favorites={favorites}
              onToggle={toggle}
              onToggleFavorite={toggleFavorite}
              emptyMessage={
                activeCategory === FAVORITES && favorites.size === 0
                  ? 'No favorites yet. Hover a card and click the star to save it.'
                  : undefined
              }
            />
          </main>

          <OutputPanel
            output={output}
            custom={custom}
            onCustomChange={setCustom}
            selectedCount={selected.size}
            onClear={clear}
            onCopied={onCopied}
          />
        </div>
      </div>
    </>
  )
}
