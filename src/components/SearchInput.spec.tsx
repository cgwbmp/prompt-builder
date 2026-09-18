import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('renders a search box labelled "Search prompts"', () => {
    render(<SearchInput value="" onChange={vi.fn()} />)
    expect(screen.getByRole('searchbox', { name: 'Search prompts' })).toBeInTheDocument()
  })

  it('shows the value it is given', () => {
    render(<SearchInput value="typescript" onChange={vi.fn()} />)
    expect(screen.getByRole('searchbox')).toHaveValue('typescript')
  })

  it('calls onChange with the full new value for each typed character', async () => {
    const onChange = vi.fn()
    render(<SearchInput value="" onChange={onChange} />)
    await userEvent.type(screen.getByRole('searchbox'), 'ab')
    expect(onChange).toHaveBeenNthCalledWith(1, 'a')
  })

  it('calls onChange with an empty string when the field is cleared', async () => {
    const onChange = vi.fn()
    render(<SearchInput value="abc" onChange={onChange} />)
    await userEvent.clear(screen.getByRole('searchbox'))
    expect(onChange).toHaveBeenCalledWith('')
  })
})
