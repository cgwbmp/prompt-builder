import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { emitMediaQueryChange, mediaQueryState, mediaSubscribe } from '../test/setup'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
  it('returns false when the query does not match on first render', () => {
    mediaQueryState.matches = false
    const { result } = renderHook(() => useMediaQuery('(min-width: 64rem)'))
    expect(result.current).toBe(false)
  })

  it('returns true when the query already matches on first render', () => {
    mediaQueryState.matches = true
    const { result } = renderHook(() => useMediaQuery('(min-width: 64rem)'))
    expect(result.current).toBe(true)
  })

  it('re-renders with the new value when the media query fires a change event', () => {
    mediaQueryState.matches = false
    const { result } = renderHook(() => useMediaQuery('(min-width: 64rem)'))
    act(() => emitMediaQueryChange(true))
    expect(result.current).toBe(true)
  })

  it('re-renders back to false when the media query stops matching', () => {
    mediaQueryState.matches = true
    const { result } = renderHook(() => useMediaQuery('(min-width: 64rem)'))
    act(() => emitMediaQueryChange(false))
    expect(result.current).toBe(false)
  })

  it('passes the query string through to matchMedia', () => {
    renderHook(() => useMediaQuery('(prefers-reduced-motion: reduce)'))
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)')
  })

  it('stops responding to change events after unmount', () => {
    mediaQueryState.matches = false
    const { result, unmount } = renderHook(() => useMediaQuery('(min-width: 64rem)'))
    unmount()
    act(() => emitMediaQueryChange(true))
    expect(result.current).toBe(false)
  })

  it('re-subscribes to the new query when the query prop changes', () => {
    const { rerender } = renderHook(({ q }) => useMediaQuery(q), { initialProps: { q: '(min-width: 10px)' } })
    mediaSubscribe.mockClear()
    rerender({ q: '(min-width: 20px)' })
    expect(mediaSubscribe).toHaveBeenCalledWith('(min-width: 20px)')
  })

  it('does not re-subscribe when the query prop is unchanged', () => {
    const { rerender } = renderHook(({ q }) => useMediaQuery(q), { initialProps: { q: '(min-width: 10px)' } })
    mediaSubscribe.mockClear()
    rerender({ q: '(min-width: 10px)' })
    expect(mediaSubscribe).not.toHaveBeenCalled()
  })
})
