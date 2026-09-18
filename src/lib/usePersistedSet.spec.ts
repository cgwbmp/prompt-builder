import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { usePersistedSet } from './usePersistedSet'

const KEY = 'prompt-builder:favorites'

beforeEach(() => {
  window.localStorage.clear()
})

afterEach(() => {
  vi.restoreAllMocks()
})

const stored = () => JSON.parse(window.localStorage.getItem(KEY) ?? 'null')

describe('usePersistedSet initial load', () => {
  it('starts empty when the key is absent from storage', () => {
    const { result } = renderHook(() => usePersistedSet(KEY))
    expect([...result.current.set]).toEqual([])
  })

  it('restores the ids previously written under the key', () => {
    window.localStorage.setItem(KEY, JSON.stringify(['a', 'b']))
    const { result } = renderHook(() => usePersistedSet(KEY))
    expect([...result.current.set]).toEqual(['a', 'b'])
  })

  it('starts empty when the stored value is not valid JSON', () => {
    window.localStorage.setItem(KEY, '{not json')
    const { result } = renderHook(() => usePersistedSet(KEY))
    expect([...result.current.set]).toEqual([])
  })

  it('starts empty when the stored JSON is not an array', () => {
    window.localStorage.setItem(KEY, JSON.stringify({ a: 1 }))
    const { result } = renderHook(() => usePersistedSet(KEY))
    expect([...result.current.set]).toEqual([])
  })

  it('starts empty when the stored value is an empty string', () => {
    window.localStorage.setItem(KEY, '')
    const { result } = renderHook(() => usePersistedSet(KEY))
    expect([...result.current.set]).toEqual([])
  })

  it('drops stored entries that are not strings', () => {
    window.localStorage.setItem(KEY, JSON.stringify(['a', 42, null, { id: 'b' }, 'c']))
    const { result } = renderHook(() => usePersistedSet(KEY))
    expect([...result.current.set]).toEqual(['a', 'c'])
  })

  it('drops stored ids that isValid rejects', () => {
    window.localStorage.setItem(KEY, JSON.stringify(['keep', 'stale']))
    const { result } = renderHook(() => usePersistedSet(KEY, (id) => id === 'keep'))
    expect([...result.current.set]).toEqual(['keep'])
  })

  it('starts empty when reading from storage throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('denied')
    })
    const { result } = renderHook(() => usePersistedSet(KEY))
    expect([...result.current.set]).toEqual([])
  })
})

describe('usePersistedSet toggle', () => {
  it('adds an id that is not in the set', () => {
    const { result } = renderHook(() => usePersistedSet(KEY))
    act(() => result.current.toggle('a'))
    expect([...result.current.set]).toEqual(['a'])
  })

  it('removes an id that is already in the set', () => {
    window.localStorage.setItem(KEY, JSON.stringify(['a', 'b']))
    const { result } = renderHook(() => usePersistedSet(KEY))
    act(() => result.current.toggle('a'))
    expect([...result.current.set]).toEqual(['b'])
  })

  it('does not apply isValid to newly toggled ids', () => {
    const { result } = renderHook(() => usePersistedSet(KEY, () => false))
    act(() => result.current.toggle('anything'))
    expect([...result.current.set]).toEqual(['anything'])
  })

  it('keeps a stable toggle identity across re-renders', () => {
    const { result, rerender } = renderHook(() => usePersistedSet(KEY))
    const first = result.current.toggle
    rerender()
    expect(result.current.toggle).toBe(first)
  })
})

describe('usePersistedSet persistence', () => {
  it('writes the set to storage after a toggle', () => {
    const { result } = renderHook(() => usePersistedSet(KEY))
    act(() => result.current.toggle('a'))
    expect(stored()).toEqual(['a'])
  })

  it('writes an empty array to storage after clear', () => {
    window.localStorage.setItem(KEY, JSON.stringify(['a']))
    const { result } = renderHook(() => usePersistedSet(KEY))
    act(() => result.current.clear())
    expect(stored()).toEqual([])
  })

  it('empties the set when clear is called', () => {
    window.localStorage.setItem(KEY, JSON.stringify(['a', 'b']))
    const { result } = renderHook(() => usePersistedSet(KEY))
    act(() => result.current.clear())
    expect([...result.current.set]).toEqual([])
  })

  it('keeps working in memory when writing to storage throws', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('QuotaExceededError')
    })
    const { result } = renderHook(() => usePersistedSet(KEY))
    act(() => result.current.toggle('a'))
    expect([...result.current.set]).toEqual(['a'])
  })

  it('writes to the new key when the key prop changes', () => {
    const { result, rerender } = renderHook(({ k }) => usePersistedSet(k), { initialProps: { k: KEY } })
    act(() => result.current.toggle('a'))
    rerender({ k: 'other-key' })
    expect(JSON.parse(window.localStorage.getItem('other-key') ?? 'null')).toEqual(['a'])
  })
})
