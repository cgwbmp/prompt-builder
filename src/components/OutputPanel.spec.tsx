import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { emitMediaQueryChange, mediaQueryState } from '../test/setup'
import { OutputPanel } from './OutputPanel'

const COPIED_RESET_MS = 1500

let writeText: ReturnType<typeof vi.fn>

function mockClipboard(impl: () => Promise<void>) {
  writeText = vi.fn(impl)
  Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true, writable: true })
}

function renderPanel(overrides: Partial<React.ComponentProps<typeof OutputPanel>> = {}) {
  const props = {
    output: '## Role / Persona\n\nBe an engineer.',
    custom: '',
    onCustomChange: vi.fn(),
    selectedCount: 1,
    onClear: vi.fn(),
    onCopied: vi.fn(),
    expanded: false,
    onExpandedChange: vi.fn(),
    ...overrides,
  }
  const view = render(<OutputPanel {...props} />)
  return { ...view, props }
}

const desktop = () => {
  mediaQueryState.matches = true
}

const copyButton = () => screen.getByRole('button', { name: /Copy to clipboard|Copied/ })

beforeEach(() => {
  mockClipboard(() => Promise.resolve())
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  document.body.style.overflow = ''
})

describe('OutputPanel desktop layout', () => {
  it('renders the heading as a static header rather than a toggle on desktop', () => {
    desktop()
    renderPanel()
    expect(screen.queryByRole('button', { name: /Your prompt/ })).not.toBeInTheDocument()
  })

  it('shows the panel body on desktop even when expanded is false', () => {
    desktop()
    renderPanel({ expanded: false })
    expect(screen.getByLabelText('Joined prompt output')).toBeInTheDocument()
  })

  it('shows the selected count in the header', () => {
    desktop()
    renderPanel({ selectedCount: 4 })
    expect(screen.getByText('4 selected')).toBeInTheDocument()
  })

  it('shows a Clear all button when at least one prompt is selected', () => {
    desktop()
    renderPanel({ selectedCount: 1 })
    expect(screen.getByRole('button', { name: 'Clear all' })).toBeInTheDocument()
  })

  it('hides the Clear all button when nothing is selected', () => {
    desktop()
    renderPanel({ selectedCount: 0 })
    expect(screen.queryByRole('button', { name: 'Clear all' })).not.toBeInTheDocument()
  })

  it('calls onClear when Clear all is clicked', () => {
    desktop()
    const { props } = renderPanel({ selectedCount: 2 })
    fireEvent.click(screen.getByRole('button', { name: 'Clear all' }))
    expect(props.onClear).toHaveBeenCalledTimes(1)
  })

  it('switches to the sheet header when the viewport stops matching desktop', () => {
    desktop()
    renderPanel()
    act(() => emitMediaQueryChange(false))
    expect(screen.getByRole('button', { name: /Your prompt/ })).toBeInTheDocument()
  })
})

describe('OutputPanel bottom sheet', () => {
  it('renders the heading as a toggle button below the lg breakpoint', () => {
    renderPanel()
    expect(screen.getByRole('button', { name: /Your prompt/ })).toBeInTheDocument()
  })

  it('hides the panel body while the sheet is collapsed', () => {
    renderPanel({ expanded: false })
    expect(screen.queryByLabelText('Joined prompt output')).not.toBeInTheDocument()
  })

  it('shows the panel body once the sheet is expanded', () => {
    renderPanel({ expanded: true })
    expect(screen.getByLabelText('Joined prompt output')).toBeInTheDocument()
  })

  it('reports the collapsed state through aria-expanded', () => {
    renderPanel({ expanded: false })
    expect(screen.getByRole('button', { name: /Your prompt/ })).toHaveAttribute('aria-expanded', 'false')
  })

  it('asks to expand when the collapsed header is clicked', () => {
    const { props } = renderPanel({ expanded: false })
    fireEvent.click(screen.getByRole('button', { name: /Your prompt/ }))
    expect(props.onExpandedChange).toHaveBeenCalledWith(true)
  })

  it('asks to collapse when the expanded header is clicked', () => {
    const { props } = renderPanel({ expanded: true })
    fireEvent.click(screen.getByRole('button', { name: /Your prompt/ }))
    expect(props.onExpandedChange).toHaveBeenCalledWith(false)
  })

  it('shows a Clear all button inside the expanded sheet body', () => {
    renderPanel({ expanded: true, selectedCount: 3 })
    expect(screen.getByRole('button', { name: 'Clear all' })).toBeInTheDocument()
  })

  it('hides the in-body Clear all button when nothing is selected', () => {
    renderPanel({ expanded: true, selectedCount: 0 })
    expect(screen.queryByRole('button', { name: 'Clear all' })).not.toBeInTheDocument()
  })

  it('locks page scrolling while the sheet is expanded', () => {
    renderPanel({ expanded: true })
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('leaves page scrolling alone while the sheet is collapsed', () => {
    renderPanel({ expanded: false })
    expect(document.body.style.overflow).toBe('')
  })

  it('restores the previous body overflow when the sheet collapses', () => {
    document.body.style.overflow = 'scroll'
    const { rerender, props } = renderPanel({ expanded: true })
    rerender(<OutputPanel {...props} expanded={false} />)
    expect(document.body.style.overflow).toBe('scroll')
  })

  it('never locks page scrolling on desktop', () => {
    desktop()
    renderPanel({ expanded: true })
    expect(document.body.style.overflow).toBe('')
  })

  it('asks to collapse when Escape is pressed while the sheet is expanded', () => {
    const { props } = renderPanel({ expanded: true })
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(props.onExpandedChange).toHaveBeenCalledWith(false)
  })

  it('ignores keys other than Escape while the sheet is expanded', () => {
    const { props } = renderPanel({ expanded: true })
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(props.onExpandedChange).not.toHaveBeenCalled()
  })

  it('ignores Escape while the sheet is collapsed', () => {
    const { props } = renderPanel({ expanded: false })
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(props.onExpandedChange).not.toHaveBeenCalled()
  })

  it('ignores Escape on desktop, where the panel cannot be collapsed', () => {
    desktop()
    const { props } = renderPanel({ expanded: true })
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(props.onExpandedChange).not.toHaveBeenCalled()
  })

  it('stops listening for Escape after unmount', () => {
    const { props, unmount } = renderPanel({ expanded: true })
    unmount()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(props.onExpandedChange).not.toHaveBeenCalled()
  })
})

describe('OutputPanel custom task field', () => {
  it('shows the custom text it is given', () => {
    desktop()
    renderPanel({ custom: 'Ship the login page.' })
    expect(screen.getByPlaceholderText('Describe what you actually want done…')).toHaveValue('Ship the login page.')
  })

  it('calls onCustomChange with the new value when the field is edited', () => {
    desktop()
    const { props } = renderPanel({ custom: '' })
    fireEvent.change(screen.getByPlaceholderText('Describe what you actually want done…'), {
      target: { value: 'Fix the bug.' },
    })
    expect(props.onCustomChange).toHaveBeenCalledWith('Fix the bug.')
  })
})

describe('OutputPanel output field', () => {
  it('shows the joined output', () => {
    desktop()
    renderPanel({ output: '## Testing\n\nWrite tests first.' })
    expect(screen.getByLabelText('Joined prompt output')).toHaveValue('## Testing\n\nWrite tests first.')
  })

  it('renders the output field read-only so the text cannot be edited', () => {
    desktop()
    renderPanel()
    expect(screen.getByLabelText('Joined prompt output')).toHaveAttribute('readonly')
  })

  it('shows a placeholder instead of text when the output is empty', () => {
    desktop()
    renderPanel({ output: '' })
    expect(screen.getByPlaceholderText('Select prompts on the left to build your output…')).toBeInTheDocument()
  })
})

describe('OutputPanel copy', () => {
  it('disables the copy button when there is no output to copy', () => {
    desktop()
    renderPanel({ output: '' })
    expect(copyButton()).toBeDisabled()
  })

  it('enables the copy button when there is output', () => {
    desktop()
    renderPanel({ output: 'text' })
    expect(copyButton()).toBeEnabled()
  })

  it('writes the output to the clipboard when copy is clicked', async () => {
    desktop()
    renderPanel({ output: 'the prompt' })
    await act(async () => void fireEvent.click(copyButton()))
    expect(writeText).toHaveBeenCalledWith('the prompt')
  })

  it('confirms the copy by relabelling the button', async () => {
    desktop()
    renderPanel()
    await act(async () => void fireEvent.click(copyButton()))
    expect(copyButton()).toHaveTextContent('Copied ✓')
  })

  it('calls onCopied after a successful copy', async () => {
    desktop()
    const { props } = renderPanel()
    await act(async () => void fireEvent.click(copyButton()))
    expect(props.onCopied).toHaveBeenCalledTimes(1)
  })

  it('copies without error when no onCopied handler is given', async () => {
    desktop()
    renderPanel({ onCopied: undefined })
    await act(async () => void fireEvent.click(copyButton()))
    expect(copyButton()).toHaveTextContent('Copied ✓')
  })

  it(`reverts the button label ${COPIED_RESET_MS}ms after a copy`, async () => {
    desktop()
    vi.useFakeTimers()
    renderPanel()
    await act(async () => void fireEvent.click(copyButton()))
    act(() => void vi.advanceTimersByTime(COPIED_RESET_MS))
    expect(copyButton()).toHaveTextContent('Copy to clipboard')
  })

  it('still shows the confirmation just before the reset timer fires', async () => {
    desktop()
    vi.useFakeTimers()
    renderPanel()
    await act(async () => void fireEvent.click(copyButton()))
    act(() => void vi.advanceTimersByTime(COPIED_RESET_MS - 1))
    expect(copyButton()).toHaveTextContent('Copied ✓')
  })

  it('selects the output text as a fallback when the clipboard write is rejected', async () => {
    desktop()
    mockClipboard(() => Promise.reject(new Error('not allowed')))
    renderPanel()
    const output = screen.getByLabelText('Joined prompt output') as HTMLTextAreaElement
    const select = vi.spyOn(output, 'select')
    await act(async () => void fireEvent.click(copyButton()))
    expect(select).toHaveBeenCalledTimes(1)
  })

  it('does not claim a copy succeeded when the clipboard write is rejected', async () => {
    desktop()
    mockClipboard(() => Promise.reject(new Error('not allowed')))
    const { props } = renderPanel()
    await act(async () => void fireEvent.click(copyButton()))
    expect(props.onCopied).not.toHaveBeenCalled()
  })

  it('does not touch the clipboard when the output is empty', async () => {
    desktop()
    renderPanel({ output: '' })
    await act(async () => void fireEvent.click(copyButton()))
    expect(writeText).not.toHaveBeenCalled()
  })
})
