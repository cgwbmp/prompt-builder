import { useCallback, useEffect, useState } from 'react'

const SEPARATOR = ','

function read(param: string, isValid: (id: string) => boolean): Set<string> {
  try {
    const raw = new URLSearchParams(window.location.search).get(param)
    if (!raw) return new Set()
    return new Set(raw.split(SEPARATOR).filter((id) => id !== '' && isValid(id)))
  } catch {
    return new Set()
  }
}

function write(param: string, ids: ReadonlySet<string>) {
  try {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    if (ids.size > 0) params.set(param, [...ids].join(SEPARATOR))
    else params.delete(param)
    // URLSearchParams percent-encodes the separator; keep the link readable.
    url.search = params.toString().replace(/%2C/g, SEPARATOR)
    window.history.replaceState(window.history.state, '', url)
  } catch {
    // History API unavailable. State still works, it just isn't shareable.
  }
}

/**
 * A Set<string> mirrored to a comma-joined URL search param, so the current
 * selection is always a shareable link.
 *
 * The URL is the only source of truth: nothing is persisted elsewhere, and
 * `isValid` drops ids that are not in the catalog (stale or hand-edited links).
 * Updates use `replaceState`, so selecting does not add history entries.
 */
export function useUrlSet(param: string, isValid: (id: string) => boolean = () => true) {
  const [set, setSet] = useState<ReadonlySet<string>>(() => read(param, isValid))

  useEffect(() => {
    write(param, set)
  }, [param, set])

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
