import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { CATEGORY_BY_ID, PROMPTS } from './data'
import { mediaQueryState } from './test/setup'

const FLARE_MS = 400
const FIRST = PROMPTS[0]
const SECOND = PROMPTS.find((p) => p.category !== FIRST.category)!

function setUrl(search: string) {
  window.history.replaceState(null, '', `/prompt-builder/${search}`)
}

const selectionParam = () => new URLSearchParams(window.location.search).get('p')
const outputField = () => screen.getByLabelText('Joined prompt output') as HTMLTextAreaElement
const card = (title: string) =>
  screen.getByRole('button', { name: new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) })

beforeEach(() => {
  setUrl('')
  window.localStorage.clear()
  // Desktop: the output panel is always open, so output is assertable.
  mediaQueryState.matches = true
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: vi.fn(() => Promise.resolve()) },
    configurable: true,
    writable: true,
  })
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('App initial state', () => {
  it('opens on the Favorites filter', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Favorites/ })).toHaveAttribute('aria-pressed', 'true')
  })

  it('prompts the user to star a card when there are no favorites yet', () => {
    render(<App />)
    expect(screen.getByText('No favorites yet. Hover a card and click the star to save it.')).toBeInTheDocument()
  })

  it('starts with an empty output when the URL carries no selection', () => {
    render(<App />)
    expect(outputField()).toHaveValue('')
  })

  it('restores the selection from the URL on load', () => {
    setUrl(`?p=${FIRST.id}`)
    render(<App />)
    expect(outputField().value).toContain(FIRST.prompt.trim())
  })

  it('ignores ids in the URL that are not in the catalog', () => {
    setUrl('?p=not.a-real-prompt')
    render(<App />)
    expect(screen.getByText('0 selected')).toBeInTheDocument()
  })

  it('restores favorites from localStorage on load', () => {
    window.localStorage.setItem('prompt-builder:favorites', JSON.stringify([FIRST.id]))
    render(<App />)
    expect(screen.getByRole('heading', { level: 3, name: FIRST.title })).toBeInTheDocument()
  })

  it('drops favorites in localStorage that are no longer in the catalog', () => {
    window.localStorage.setItem('prompt-builder:favorites', JSON.stringify(['gone.prompt']))
    render(<App />)
    expect(screen.getByText('No favorites yet. Hover a card and click the star to save it.')).toBeInTheDocument()
  })
})

describe('App filtering', () => {
  it('shows prompts from every category on the All filter', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    expect(screen.getByRole('heading', { level: 3, name: FIRST.title })).toBeInTheDocument()
  })

  it('shows only the chosen category when a category chip is clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    await userEvent.click(screen.getByRole('button', { name: new RegExp(`^${SECOND.category}`, 'i') }))
    expect(screen.queryByRole('heading', { level: 3, name: FIRST.title })).not.toBeInTheDocument()
  })

  it('narrows the grid to prompts matching the search query', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: FIRST.title } })
    expect(screen.getByRole('heading', { level: 3, name: FIRST.title })).toBeInTheDocument()
  })

  it('shows the generic empty message when a search matches nothing', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'zzz-no-such-prompt-zzz' } })
    expect(screen.getByText('No prompts match. Try another search or category.')).toBeInTheDocument()
  })
})

describe('App selection', () => {
  it('adds the prompt text to the output when a card is selected', async () => {
    setUrl('')
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    await userEvent.click(card(FIRST.title))
    expect(outputField().value).toContain(FIRST.prompt.trim())
  })

  it('writes the selection into the URL so it can be shared', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    await userEvent.click(card(FIRST.title))
    expect(selectionParam()).toBe(FIRST.id)
  })

  it('removes the prompt from the output when a selected card is clicked again', async () => {
    setUrl(`?p=${FIRST.id}`)
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    await userEvent.click(card(FIRST.title))
    expect(outputField()).toHaveValue('')
  })

  it('reports how many prompts are selected', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    await userEvent.click(card(FIRST.title))
    expect(screen.getByText('1 selected')).toBeInTheDocument()
  })

  it("shows a per-category selected count on the chip of the selected prompt's category", () => {
    setUrl(`?p=${FIRST.id}`)
    render(<App />)
    const label = CATEGORY_BY_ID.get(FIRST.category)!.label
    expect(screen.getByRole('button', { name: `${label}, 1 selected` })).toBeInTheDocument()
  })

  it('leaves other category chips without a selected count', () => {
    setUrl(`?p=${FIRST.id}`)
    render(<App />)
    const label = CATEGORY_BY_ID.get(SECOND.category)!.label
    expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
  })

  it('empties the output when Clear all is clicked', async () => {
    setUrl(`?p=${FIRST.id}`)
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Clear all' }))
    expect(outputField()).toHaveValue('')
  })

  it('removes the selection param from the URL when Clear all is clicked', async () => {
    setUrl(`?p=${FIRST.id}`)
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Clear all' }))
    expect(selectionParam()).toBeNull()
  })
})

describe('App favorites', () => {
  it('shows a starred prompt under the Favorites filter', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    const first = screen.getAllByRole('button', { name: 'Add to favorites' })[0]
    await userEvent.click(first)
    await userEvent.click(screen.getByRole('button', { name: /Favorites/ }))
    expect(screen.queryByText('No favorites yet. Hover a card and click the star to save it.')).not.toBeInTheDocument()
  })

  it('persists a starred prompt to localStorage', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    await userEvent.click(screen.getAllByRole('button', { name: 'Add to favorites' })[0])
    expect(JSON.parse(window.localStorage.getItem('prompt-builder:favorites')!)).toHaveLength(1)
  })

  it('shows the favorite count on the Favorites chip', async () => {
    window.localStorage.setItem('prompt-builder:favorites', JSON.stringify([FIRST.id, SECOND.id]))
    render(<App />)
    expect(screen.getByRole('button', { name: /Favorites \(2\)/ })).toBeInTheDocument()
  })

  it('does not select a prompt when its star is clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /^All/ }))
    await userEvent.click(screen.getAllByRole('button', { name: 'Add to favorites' })[0])
    expect(screen.getByText('0 selected')).toBeInTheDocument()
  })
})

describe('App custom task', () => {
  it('appends the custom text to the output under a Task header', () => {
    render(<App />)
    fireEvent.change(screen.getByPlaceholderText('Describe what you actually want done…'), {
      target: { value: 'Ship the login page.' },
    })
    expect(outputField()).toHaveValue('## Task\n\nShip the login page.')
  })

  it('leaves the output empty when the custom text is whitespace only', () => {
    render(<App />)
    fireEvent.change(screen.getByPlaceholderText('Describe what you actually want done…'), {
      target: { value: '   ' },
    })
    expect(outputField()).toHaveValue('')
  })
})

describe('App copy flare', () => {
  it('adds the flare class to the header after a successful copy', async () => {
    vi.useFakeTimers()
    const { container } = render(<App />)
    fireEvent.change(screen.getByPlaceholderText('Describe what you actually want done…'), {
      target: { value: 'Do it.' },
    })
    await act(async () => void fireEvent.click(screen.getByRole('button', { name: 'Copy to clipboard' })))
    expect(container.querySelector('header')).toHaveClass('flare')
  })

  it(`removes the flare class ${FLARE_MS}ms after a copy`, async () => {
    vi.useFakeTimers()
    const { container } = render(<App />)
    fireEvent.change(screen.getByPlaceholderText('Describe what you actually want done…'), {
      target: { value: 'Do it.' },
    })
    await act(async () => void fireEvent.click(screen.getByRole('button', { name: 'Copy to clipboard' })))
    act(() => void vi.advanceTimersByTime(FLARE_MS))
    expect(container.querySelector('header')).not.toHaveClass('flare')
  })
})

describe('App scroll-to-top button', () => {
  it('scrolls the page smoothly to the top when clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Go to top' }))
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('is hidden while the mobile sheet is expanded', async () => {
    mediaQueryState.matches = false
    const { container } = render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /Your prompt/ }))
    const toTop = screen.getByRole('button', { name: 'Go to top' })
    expect(within(container).getByRole('button', { name: 'Go to top' }).parentElement).toHaveClass('hidden')
    expect(toTop).toBeInTheDocument()
  })
})
