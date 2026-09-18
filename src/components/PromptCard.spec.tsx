import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { Prompt } from '../types'
import { PromptCard } from './PromptCard'

const HOVER_DELAY_MS = 350

const prompt: Prompt = {
  id: 'role.alpha',
  title: 'Alpha Lead',
  prompt: 'Act as a lead engineer and prioritise correctness.',
  category: 'role',
}

function renderCard(overrides: Partial<React.ComponentProps<typeof PromptCard>> = {}) {
  const props = {
    prompt,
    selected: false,
    favorite: false,
    onToggle: vi.fn(),
    onToggleFavorite: vi.fn(),
    ...overrides,
  }
  const view = render(<PromptCard {...props} />)
  return { ...view, props }
}

/** jsdom reports 0 for every layout metric; fake a truncated preview inside a laid-out card. */
function fakeTruncation({ cardTop = 100, cardBottom = 200, innerHeight = 800 } = {}) {
  const preview = screen.getByText(prompt.prompt)
  vi.spyOn(preview, 'scrollHeight', 'get').mockReturnValue(200)
  vi.spyOn(preview, 'clientHeight', 'get').mockReturnValue(48)
  const card = preview.closest('div')!
  vi.spyOn(card, 'getBoundingClientRect').mockReturnValue({
    left: 10,
    top: cardTop,
    bottom: cardBottom,
    width: 300,
  } as DOMRect)
  vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(innerHeight)
}

function fakeNoTruncation() {
  const preview = screen.getByText(prompt.prompt)
  vi.spyOn(preview, 'scrollHeight', 'get').mockReturnValue(48)
  vi.spyOn(preview, 'clientHeight', 'get').mockReturnValue(48)
}

const cardRoot = () => screen.getByText(prompt.title).closest('div.glass')!

function hoverPastDelay() {
  fireEvent.mouseEnter(cardRoot())
  act(() => void vi.advanceTimersByTime(HOVER_DELAY_MS))
}

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('PromptCard rendering', () => {
  it('renders the prompt title as a heading', () => {
    renderCard()
    expect(screen.getByRole('heading', { name: 'Alpha Lead' })).toBeInTheDocument()
  })

  it('renders the prompt body as the card preview', () => {
    renderCard()
    expect(screen.getByText(prompt.prompt)).toBeInTheDocument()
  })

  it('reports itself unpressed when it is not selected', () => {
    renderCard({ selected: false })
    expect(screen.getByRole('button', { name: /Alpha Lead/ })).toHaveAttribute('aria-pressed', 'false')
  })

  it('reports itself pressed when it is selected', () => {
    renderCard({ selected: true })
    expect(screen.getByRole('button', { name: /Alpha Lead/ })).toHaveAttribute('aria-pressed', 'true')
  })

  it('labels the star button "Add to favorites" when the prompt is not favorited', () => {
    renderCard({ favorite: false })
    expect(screen.getByRole('button', { name: 'Add to favorites' })).toBeInTheDocument()
  })

  it('labels the star button "Remove from favorites" when the prompt is favorited', () => {
    renderCard({ favorite: true })
    expect(screen.getByRole('button', { name: 'Remove from favorites' })).toBeInTheDocument()
  })
})

describe('PromptCard interaction', () => {
  it('calls onToggle with the prompt id when the card is clicked', () => {
    const { props } = renderCard()
    fireEvent.click(screen.getByRole('button', { name: /Alpha Lead/ }))
    expect(props.onToggle).toHaveBeenCalledWith('role.alpha')
  })

  it('calls onToggleFavorite with the prompt id when the star is clicked', () => {
    const { props } = renderCard()
    fireEvent.click(screen.getByRole('button', { name: 'Add to favorites' }))
    expect(props.onToggleFavorite).toHaveBeenCalledWith('role.alpha')
  })

  it('does not call onToggle when the star is clicked', () => {
    const { props } = renderCard()
    fireEvent.click(screen.getByRole('button', { name: 'Add to favorites' }))
    expect(props.onToggle).not.toHaveBeenCalled()
  })
})

describe('PromptCard tooltip', () => {
  it('shows no tooltip before the hover delay has elapsed', () => {
    renderCard()
    fakeTruncation()
    fireEvent.mouseEnter(cardRoot())
    act(() => void vi.advanceTimersByTime(HOVER_DELAY_MS - 1))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('shows the tooltip once the hover delay has elapsed', () => {
    renderCard()
    fakeTruncation()
    hoverPastDelay()
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('shows the full prompt text in the tooltip', () => {
    renderCard()
    fakeTruncation()
    hoverPastDelay()
    expect(screen.getByRole('tooltip')).toHaveTextContent(prompt.prompt)
  })

  it('never shows a tooltip when the preview is not truncated', () => {
    renderCard()
    fakeNoTruncation()
    hoverPastDelay()
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('describes the card button by the tooltip while it is open', () => {
    renderCard()
    fakeTruncation()
    hoverPastDelay()
    const tip = screen.getByRole('tooltip')
    expect(screen.getByRole('button', { name: /Alpha Lead/ })).toHaveAttribute('aria-describedby', tip.id)
  })

  it('positions the tooltip below the card when there is room underneath', () => {
    renderCard()
    fakeTruncation({ cardTop: 100, cardBottom: 200, innerHeight: 900 })
    hoverPastDelay()
    expect(screen.getByRole('tooltip')).toHaveStyle({ top: '200px' })
  })

  it('positions the tooltip above the card when there is not enough room below', () => {
    renderCard()
    fakeTruncation({ cardTop: 600, cardBottom: 700, innerHeight: 800 })
    hoverPastDelay()
    expect(screen.getByRole('tooltip')).toHaveStyle({ top: '600px' })
  })

  it('keeps the tooltip below the card when space above is even tighter', () => {
    renderCard()
    fakeTruncation({ cardTop: 20, cardBottom: 120, innerHeight: 200 })
    hoverPastDelay()
    expect(screen.getByRole('tooltip')).toHaveStyle({ top: '120px' })
  })

  it('matches the tooltip width to the card width', () => {
    renderCard()
    fakeTruncation()
    hoverPastDelay()
    expect(screen.getByRole('tooltip')).toHaveStyle({ width: '300px' })
  })

  it('hides the tooltip when the pointer leaves the card', () => {
    renderCard()
    fakeTruncation()
    hoverPastDelay()
    fireEvent.mouseLeave(cardRoot())
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('cancels a pending tooltip when the pointer leaves before the delay elapses', () => {
    renderCard()
    fakeTruncation()
    fireEvent.mouseEnter(cardRoot())
    fireEvent.mouseLeave(cardRoot())
    act(() => void vi.advanceTimersByTime(HOVER_DELAY_MS))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('shows the tooltip immediately on keyboard focus, without the hover delay', () => {
    renderCard()
    fakeTruncation()
    fireEvent.focus(screen.getByRole('button', { name: /Alpha Lead/ }))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('hides the tooltip when the card button loses focus', () => {
    renderCard()
    fakeTruncation()
    fireEvent.focus(screen.getByRole('button', { name: /Alpha Lead/ }))
    fireEvent.blur(screen.getByRole('button', { name: /Alpha Lead/ }))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('hides the tooltip when the page scrolls', () => {
    renderCard()
    fakeTruncation()
    hoverPastDelay()
    act(() => void fireEvent.scroll(window))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('hides the tooltip when the window resizes', () => {
    renderCard()
    fakeTruncation()
    hoverPastDelay()
    act(() => void fireEvent.resize(window))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('hides the tooltip when a selected card is clicked to deselect it', () => {
    renderCard({ selected: true })
    fakeTruncation()
    hoverPastDelay()
    fireEvent.click(screen.getByRole('button', { name: /Alpha Lead/ }))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('leaves the tooltip open when an unselected card is clicked to select it', () => {
    renderCard({ selected: false })
    fakeTruncation()
    hoverPastDelay()
    fireEvent.click(screen.getByRole('button', { name: /Alpha Lead/ }))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('does not open a tooltip after unmount when the hover timer was still pending', () => {
    const { unmount } = renderCard()
    fakeTruncation()
    fireEvent.mouseEnter(cardRoot())
    unmount()
    act(() => void vi.advanceTimersByTime(HOVER_DELAY_MS))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })
})
