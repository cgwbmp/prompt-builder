import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Logo } from './Logo'

const svgOf = (container: HTMLElement) => container.querySelector('svg')!

describe('Logo', () => {
  it('renders at 32px in both dimensions by default', () => {
    const { container } = render(<Logo />)
    expect(svgOf(container)).toHaveAttribute('width', '32')
  })

  it('renders at the size it is given', () => {
    const { container } = render(<Logo size={64} />)
    expect(svgOf(container)).toHaveAttribute('height', '64')
  })

  it('applies the className it is given', () => {
    const { container } = render(<Logo className="spin" />)
    expect(svgOf(container)).toHaveClass('spin')
  })

  it('is hidden from assistive technology because it is decorative', () => {
    const { container } = render(<Logo />)
    expect(svgOf(container)).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the flame path that the parent flare animation targets', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('.flame')).toBeInTheDocument()
  })
})
