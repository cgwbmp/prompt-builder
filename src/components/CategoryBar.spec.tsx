import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { Category } from '../types'
import { ALL, FAVORITES, type CategoryFilter } from '../lib/filter'
import { CategoryBar } from './CategoryBar'

const categories: Category[] = [
  { id: 'role', label: 'Role / Persona', group: 'dev', description: 'Who the AI acts as.' },
  { id: 'testing', label: 'Testing', group: 'dev' },
  { id: 'color', label: 'Color', group: 'visual' },
  { id: 'tone', label: 'Communication Style', group: 'style' },
]

function renderBar(overrides: Partial<React.ComponentProps<typeof CategoryBar>> = {}) {
  const props = {
    categories,
    active: ALL as CategoryFilter,
    onChange: vi.fn(),
    selectedCounts: new Map<string, number>(),
    totalSelected: 0,
    favoriteCount: 0,
    ...overrides,
  }
  render(<CategoryBar {...props} />)
  return props
}

describe('CategoryBar rendering', () => {
  it('renders a chip for every category it is given', () => {
    renderBar()
    for (const c of categories) expect(screen.getByRole('button', { name: new RegExp(c.label) })).toBeInTheDocument()
  })

  it('renders the group heading for each group that has categories', () => {
    renderBar()
    expect(screen.getByRole('group', { name: 'Development' })).toBeInTheDocument()
  })

  it('omits a group entirely when no category belongs to it', () => {
    renderBar({ categories: categories.filter((c) => c.group === 'dev') })
    expect(screen.queryByRole('group', { name: 'Visual design' })).not.toBeInTheDocument()
  })

  it('renders no category groups when the categories list is empty', () => {
    renderBar({ categories: [] })
    expect(screen.getAllByRole('group')).toHaveLength(1)
  })

  it("uses the category description as the chip's title attribute", () => {
    renderBar()
    expect(screen.getByRole('button', { name: /Role \/ Persona/ })).toHaveAttribute('title', 'Who the AI acts as.')
  })
})

describe('CategoryBar active state', () => {
  it('marks the All chip pressed when the active filter is "all"', () => {
    renderBar({ active: ALL })
    expect(screen.getByRole('button', { name: /^All/ })).toHaveAttribute('aria-pressed', 'true')
  })

  it('marks the Favorites chip pressed when the active filter is "favorites"', () => {
    renderBar({ active: FAVORITES })
    expect(screen.getByRole('button', { name: /Favorites/ })).toHaveAttribute('aria-pressed', 'true')
  })

  it('marks the matching category chip pressed when a category is active', () => {
    renderBar({ active: 'testing' })
    expect(screen.getByRole('button', { name: /^Testing/ })).toHaveAttribute('aria-pressed', 'true')
  })

  it('leaves every other chip unpressed when one category is active', () => {
    renderBar({ active: 'testing' })
    expect(screen.getByRole('button', { name: /^Color/ })).toHaveAttribute('aria-pressed', 'false')
  })
})

describe('CategoryBar counts', () => {
  it('announces the selected count on a category chip that has selections', () => {
    renderBar({ selectedCounts: new Map([['role', 3]]) })
    expect(screen.getByRole('button', { name: /Role \/ Persona, 3 selected/ })).toBeInTheDocument()
  })

  it('announces no count on a category chip with zero selections', () => {
    renderBar({ selectedCounts: new Map([['role', 0]]) })
    expect(screen.getByRole('button', { name: 'Role / Persona' })).toBeInTheDocument()
  })

  it('announces the total selected count on the All chip', () => {
    renderBar({ totalSelected: 7 })
    expect(screen.getByRole('button', { name: /All, 7 selected/ })).toBeInTheDocument()
  })

  it('shows the favorite count in the Favorites chip label when there is at least one', () => {
    renderBar({ favoriteCount: 2 })
    expect(screen.getByRole('button', { name: /Favorites \(2\)/ })).toBeInTheDocument()
  })

  it('omits the parenthesised count from the Favorites chip when there are none', () => {
    renderBar({ favoriteCount: 0 })
    expect(screen.getByRole('button', { name: '★ Favorites' })).toBeInTheDocument()
  })

  it('never shows a selected-count dot on the Favorites chip', () => {
    renderBar({ favoriteCount: 5, totalSelected: 5 })
    const chip = screen.getByRole('button', { name: /Favorites/ })
    expect(within(chip).queryByText(/selected/)).not.toBeInTheDocument()
  })
})

describe('CategoryBar interaction', () => {
  it('calls onChange with "all" when the All chip is clicked', async () => {
    const { onChange } = renderBar({ active: FAVORITES })
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    expect(onChange).toHaveBeenCalledWith(ALL)
  })

  it('calls onChange with "favorites" when the Favorites chip is clicked', async () => {
    const { onChange } = renderBar()
    await userEvent.click(screen.getByRole('button', { name: /Favorites/ }))
    expect(onChange).toHaveBeenCalledWith(FAVORITES)
  })

  it('calls onChange with the category id when a category chip is clicked', async () => {
    const { onChange } = renderBar()
    await userEvent.click(screen.getByRole('button', { name: /^Color/ }))
    expect(onChange).toHaveBeenCalledWith('color')
  })

  it('still calls onChange when the already-active chip is clicked again', async () => {
    const { onChange } = renderBar({ active: 'color' })
    await userEvent.click(screen.getByRole('button', { name: /^Color/ }))
    expect(onChange).toHaveBeenCalledWith('color')
  })
})
