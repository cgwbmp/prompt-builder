import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { Prompt } from '../types'
import { intersectionObservers } from '../test/setup'
import { PromptGrid } from './PromptGrid'

const PAGE_SIZE = 60

function makePrompts(count: number, prefix = 'role'): Prompt[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}.p${i}`,
    title: `Prompt ${i}`,
    prompt: `Body ${i}`,
    category: prefix,
  }))
}

function renderGrid(overrides: Partial<React.ComponentProps<typeof PromptGrid>> = {}) {
  const props = {
    prompts: makePrompts(3),
    selected: new Set<string>(),
    favorites: new Set<string>(),
    onToggle: vi.fn(),
    onToggleFavorite: vi.fn(),
    ...overrides,
  }
  const view = render(<PromptGrid {...props} />)
  return { ...view, props }
}

/** Fires the most recently created observer as if its sentinel scrolled into view. */
function scrollSentinelIntoView() {
  const observer = intersectionObservers.at(-1)
  if (!observer) throw new Error('no IntersectionObserver was created')
  act(() => observer.callback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver))
}

describe('PromptGrid rendering', () => {
  it('renders a card for every prompt when the list is shorter than one page', () => {
    renderGrid({ prompts: makePrompts(3) })
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })

  it('shows the default empty message when there are no prompts', () => {
    renderGrid({ prompts: [] })
    expect(screen.getByText('No prompts match. Try another search or category.')).toBeInTheDocument()
  })

  it('shows a custom empty message when one is given', () => {
    renderGrid({ prompts: [], emptyMessage: 'No favorites yet.' })
    expect(screen.getByText('No favorites yet.')).toBeInTheDocument()
  })

  it('marks a card selected when its id is in the selected set', () => {
    renderGrid({ prompts: makePrompts(2), selected: new Set(['role.p1']) })
    expect(screen.getByRole('button', { name: /Prompt 1/ })).toHaveAttribute('aria-pressed', 'true')
  })

  it('marks a card favorited when its id is in the favorites set', () => {
    renderGrid({ prompts: makePrompts(1), favorites: new Set(['role.p0']) })
    expect(screen.getByRole('button', { name: 'Remove from favorites' })).toBeInTheDocument()
  })
})

describe('PromptGrid pagination', () => {
  it(`renders only the first ${PAGE_SIZE} cards when the list is longer than a page`, () => {
    renderGrid({ prompts: makePrompts(150) })
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PAGE_SIZE)
  })

  it('announces how many of the total prompts are showing', () => {
    renderGrid({ prompts: makePrompts(150) })
    expect(screen.getByText(`Showing ${PAGE_SIZE} of 150 prompts`)).toBeInTheDocument()
  })

  it('renders one more page when the sentinel scrolls into view', () => {
    renderGrid({ prompts: makePrompts(150) })
    scrollSentinelIntoView()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PAGE_SIZE * 2)
  })

  it('caps the announced count at the total when the last page is partial', () => {
    renderGrid({ prompts: makePrompts(70) })
    scrollSentinelIntoView()
    expect(screen.getByText('Showing 70 of 70 prompts')).toBeInTheDocument()
  })

  it('renders no sentinel once every prompt is on screen', () => {
    renderGrid({ prompts: makePrompts(70) })
    const before = intersectionObservers.length
    scrollSentinelIntoView()
    expect(intersectionObservers.length).toBe(before)
  })

  it('does not grow the page when the sentinel reports it is not intersecting', () => {
    renderGrid({ prompts: makePrompts(150) })
    const observer = intersectionObservers.at(-1)!
    act(() => observer.callback([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver))
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PAGE_SIZE)
  })

  it('observes the sentinel with a 600px prefetch margin so the next page loads before it is visible', () => {
    renderGrid({ prompts: makePrompts(150) })
    expect(intersectionObservers.at(-1)!.rootMargin).toBe('600px')
  })

  it('observes exactly one sentinel element', () => {
    renderGrid({ prompts: makePrompts(150) })
    expect(intersectionObservers.at(-1)!.observed).toHaveLength(1)
  })

  it('disconnects the previous observer when the page grows', () => {
    renderGrid({ prompts: makePrompts(200) })
    const first = intersectionObservers.at(-1)!
    scrollSentinelIntoView()
    expect(first.disconnected).toBe(true)
  })

  it('resets to the first page when the prompts prop changes identity', () => {
    const { rerender, props } = renderGrid({ prompts: makePrompts(150) })
    scrollSentinelIntoView()
    rerender(<PromptGrid {...props} prompts={makePrompts(150, 'tone')} />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PAGE_SIZE)
  })

  it('keeps the current page when the same prompts array is re-rendered', () => {
    const prompts = makePrompts(150)
    const { rerender, props } = renderGrid({ prompts })
    scrollSentinelIntoView()
    rerender(<PromptGrid {...props} prompts={prompts} />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PAGE_SIZE * 2)
  })

  it('renders every prompt after enough pages have been revealed', () => {
    renderGrid({ prompts: makePrompts(130) })
    scrollSentinelIntoView()
    scrollSentinelIntoView()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(130)
  })

  it('disconnects the observer on unmount', () => {
    const { unmount } = renderGrid({ prompts: makePrompts(150) })
    const observer = intersectionObservers.at(-1)!
    unmount()
    expect(observer.disconnected).toBe(true)
  })

  it('creates no observer when the list fits in one page', () => {
    renderGrid({ prompts: makePrompts(10) })
    expect(intersectionObservers).toHaveLength(0)
  })
})
