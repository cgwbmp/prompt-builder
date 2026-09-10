import { useCallback, useEffect, useState } from 'react'

function load(key: string, isValid: (id: string) => boolean): Set<string> {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return new Set()
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return new Set()
    return new Set(parsed.filter((x): x is string => typeof x === 'string' && isValid(x)))
  } catch {
    return new Set()
  }
}

function save(key: string, ids: ReadonlySet<string>) {
  try {
    window.localStorage.setItem(key, JSON.stringify([...ids]))
  } catch {
    // Storage unavailable (private mode, quota). State just won't persist.
  }
}

/**
 * A Set<string> mirrored to localStorage under `key`.
 * `isValid` drops stale ids on load (e.g. prompts removed from the catalog).
 */
export function usePersistedSet(key: string, isValid: (id: string) => boolean = () => true) {
  const [set, setSet] = useState<ReadonlySet<string>>(() => load(key, isValid))

  useEffect(() => {
    save(key, set)
  }, [key, set])

  const toggle = useCallback((id: string) => {
    setSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const clear = useCallback(() => setSet(new Set()), [])

  return { set, toggle, clear }
}
