import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useUrlSet } from './useUrlSet'

const PARAM = 'p'

function setUrl(search: string) {
  window.history.replaceState(null, '', `/prompt-builder/${search}`)
}

beforeEach(() => {
  setUrl('')
})

afterEach(() => {
  vi.restoreAllMocks()
})

const param = () => new URLSearchParams(window.location.search).get(PARAM)

describe('useUrlSet initial read', () => {
  it('starts empty when the param is absent from the URL', () => {
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual([])
  })

  it('reads a single id from the param', () => {
    setUrl('?p=role.alpha')
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual(['role.alpha'])
  })

  it('splits a comma-joined param into separate ids', () => {
    setUrl('?p=a,b,c')
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual(['a', 'b', 'c'])
  })

  it('reads ids from a percent-encoded comma separator', () => {
    setUrl('?p=a%2Cb')
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual(['a', 'b'])
  })

  it('starts empty when the param is present but empty', () => {
    setUrl('?p=')
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual([])
  })

  it('drops empty segments produced by stray commas', () => {
    setUrl('?p=a,,b,')
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual(['a', 'b'])
  })

  it('drops ids that isValid rejects, so hand-edited links do not break', () => {
    setUrl('?p=real,bogus')
    const { result } = renderHook(() => useUrlSet(PARAM, (id) => id === 'real'))
    expect([...result.current.set]).toEqual(['real'])
  })

  it('deduplicates repeated ids in the param', () => {
    setUrl('?p=a,a,b')
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual(['a', 'b'])
  })

  it('reads only the named param and ignores others', () => {
    setUrl('?other=x&p=a')
    const { result } = renderHook(() => useUrlSet(PARAM))
    expect([...result.current.set]).toEqual(['a'])
  })
})

describe('useUrlSet toggle', () => {
  it('adds an id that is not in the set', () => {
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.toggle('a'))
    expect([...result.current.set]).toEqual(['a'])
  })

  it('removes an id that is already in the set', () => {
    setUrl('?p=a,b')
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.toggle('a'))
    expect([...result.current.set]).toEqual(['b'])
  })

  it('keeps a stable toggle identity across re-renders', () => {
    const { result, rerender } = renderHook(() => useUrlSet(PARAM))
    const first = result.current.toggle
    rerender()
    expect(result.current.toggle).toBe(first)
  })
})

describe('useUrlSet URL writing', () => {
  it('writes the selected ids into the param', () => {
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.toggle('a'))
    expect(param()).toBe('a')
  })

  it('joins several ids with a literal comma rather than %2C', () => {
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => {
      result.current.toggle('a')
      result.current.toggle('b')
    })
    expect(window.location.search).toBe('?p=a,b')
  })

  it('removes the param entirely when the selection becomes empty', () => {
    setUrl('?p=a')
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.clear())
    expect(window.location.search).toBe('')
  })

  it('preserves unrelated search params when writing', () => {
    setUrl('?other=x')
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.toggle('a'))
    expect(new URLSearchParams(window.location.search).get('other')).toBe('x')
  })

  it('preserves unrelated search params when the param is deleted', () => {
    setUrl('?other=x&p=a')
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.clear())
    expect(window.location.search).toBe('?other=x')
  })

  it('uses replaceState so selecting does not add history entries', () => {
    const push = vi.spyOn(window.history, 'pushState')
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.toggle('a'))
    expect(push).not.toHaveBeenCalled()
  })

  it('empties the set when clear is called', () => {
    setUrl('?p=a,b')
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.clear())
    expect([...result.current.set]).toEqual([])
  })

  it('keeps working in memory when replaceState throws', () => {
    vi.spyOn(window.history, 'replaceState').mockImplementation(() => {
      throw new DOMException('SecurityError')
    })
    const { result } = renderHook(() => useUrlSet(PARAM))
    act(() => result.current.toggle('a'))
    expect([...result.current.set]).toEqual(['a'])
  })

  it('writes to the new param when the param prop changes', () => {
    const { result, rerender } = renderHook(({ name }) => useUrlSet(name), { initialProps: { name: PARAM } })
    act(() => result.current.toggle('a'))
    rerender({ name: 'q' })
    expect(new URLSearchParams(window.location.search).get('q')).toBe('a')
  })
})
