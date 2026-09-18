import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

/** Mutable across tests: set before render to pick the matched branch. */
export const mediaQueryState = { matches: false }

/** jsdom ships no matchMedia. Minimal store-shaped stub with real listeners. */
const mediaListeners = new Set<() => void>()

/** Records every addEventListener call so tests can assert re-subscription. */
export const mediaSubscribe = vi.fn()

export function emitMediaQueryChange(matches: boolean) {
  mediaQueryState.matches = matches
  for (const listener of [...mediaListeners]) listener()
}

vi.stubGlobal(
  'matchMedia',
  vi.fn((query: string) => ({
    media: query,
    get matches() {
      return mediaQueryState.matches
    },
    addEventListener: (_: string, listener: () => void) => {
      mediaSubscribe(query)
      mediaListeners.add(listener)
    },
    removeEventListener: (_: string, listener: () => void) => void mediaListeners.delete(listener),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
    onchange: null,
  })),
)

/** jsdom ships no IntersectionObserver. Records instances so tests can fire them. */
export const intersectionObservers: {
  callback: IntersectionObserverCallback
  observed: Element[]
  disconnected: boolean
  rootMargin: string
}[] = []

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin: string
  readonly scrollMargin: string = '0px'
  readonly thresholds: readonly number[] = []
  #record: (typeof intersectionObservers)[number]

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.rootMargin = options?.rootMargin ?? '0px'
    this.#record = { callback, observed: [], disconnected: false, rootMargin: this.rootMargin }
    intersectionObservers.push(this.#record)
  }
  observe(target: Element) {
    this.#record.observed.push(target)
  }
  unobserve() {}
  disconnect() {
    this.#record.disconnected = true
  }
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

/** jsdom throws "not implemented" for scrollTo. */
vi.stubGlobal('scrollTo', vi.fn())

afterEach(() => {
  cleanup()
  mediaListeners.clear()
  intersectionObservers.length = 0
  mediaQueryState.matches = false
  vi.clearAllMocks()
})
