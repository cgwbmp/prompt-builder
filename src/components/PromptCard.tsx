import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Prompt } from '../types'

interface PromptCardProps {
  prompt: Prompt
  selected: boolean
  favorite: boolean
  onToggle: (id: string) => void
  onToggleFavorite: (id: string) => void
}

interface TipPosition {
  left: number
  top: number
  width: number
  above: boolean
}

const HOVER_DELAY_MS = 350
const TIP_GAP_PX = 8
const TIP_MAX_HEIGHT_PX = 260

export function PromptCard({ prompt, selected, favorite, onToggle, onToggleFavorite }: PromptCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const timerRef = useRef<number | undefined>(undefined)
  const [tip, setTip] = useState<TipPosition | null>(null)
  const tipId = useId()

  function showTip() {
    const text = textRef.current
    const card = cardRef.current
    if (!text || !card) return
    // Only when the preview is actually truncated.
    if (text.scrollHeight <= text.clientHeight + 1) return
    const r = card.getBoundingClientRect()
    const spaceBelow = window.innerHeight - r.bottom
    const above = spaceBelow < TIP_MAX_HEIGHT_PX + TIP_GAP_PX && r.top > spaceBelow
    setTip({ left: r.left, top: above ? r.top : r.bottom, width: r.width, above })
  }

  function hideTip() {
    window.clearTimeout(timerRef.current)
    setTip(null)
  }

  function onMouseEnter() {
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(showTip, HOVER_DELAY_MS)
  }

  useEffect(() => {
    if (!tip) return
    const close = () => setTip(null)
    window.addEventListener('scroll', close, true)
    window.addEventListener('resize', close)
    return () => {
      window.removeEventListener('scroll', close, true)
      window.removeEventListener('resize', close)
    }
  }, [tip])

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={hideTip}
      className={[
        'glass group relative flex h-full flex-col rounded-xl transition-all duration-150',
        selected
          ? 'neon-border -translate-y-0.5 bg-space-700/70 shadow-glow-cyan'
          : 'hover:-translate-y-0.5 hover:border-white/20 hover:bg-space-700/50',
      ].join(' ')}
    >
      <button
        type="button"
        aria-pressed={selected}
        aria-describedby={tip ? tipId : undefined}
        onClick={() => {
          onToggle(prompt.id)
          if (selected) hideTip()
        }}
        onFocus={showTip}
        onBlur={hideTip}
        className="flex h-full w-full flex-col gap-2 rounded-xl p-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60"
      >
        <div className="flex items-start justify-between gap-3 pr-5">
          <h3 className="font-heading text-sm font-semibold leading-snug text-ink">{prompt.title}</h3>
        </div>
        <p ref={textRef} className="line-clamp-3 font-mono text-xs leading-relaxed text-ink-muted">
          {prompt.prompt}
        </p>
      </button>

      <button
        type="button"
        aria-pressed={favorite}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        title={favorite ? 'Remove from favorites' : 'Add to favorites'}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFavorite(prompt.id)
        }}
        className={[
          'absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-neon-magenta/60',
          favorite
            ? 'text-neon-magenta drop-shadow-[0_0_6px_rgba(255,43,214,0.7)]'
            : 'text-ink-muted/50 opacity-0 hover:text-neon-magenta group-hover:opacity-100 focus-visible:opacity-100',
        ].join(' ')}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2.5l2.95 6.1 6.7.9-4.9 4.7 1.2 6.7L12 17.7l-5.95 3.2 1.2-6.7-4.9-4.7 6.7-.9z" />
        </svg>
      </button>

      {tip &&
        createPortal(
          <>
            <div
              className={`tooltip-scrim ${tip.above ? 'tooltip-scrim--above' : 'tooltip-scrim--below'}`}
              aria-hidden="true"
              style={
                tip.above
                  ? { top: 0, bottom: window.innerHeight - (tip.top - TIP_GAP_PX) }
                  : { top: tip.top + TIP_GAP_PX, bottom: 0 }
              }
            />
            <div
              id={tipId}
              role="tooltip"
              className="glass-dark tooltip pointer-events-none fixed z-50 rounded-xl p-4 font-mono text-xs leading-relaxed text-ink shadow-glow-cyan"
              style={{
                left: tip.left,
                top: tip.top,
                width: tip.width,
                transform: tip.above ? `translateY(calc(-100% - ${TIP_GAP_PX}px))` : `translateY(${TIP_GAP_PX}px)`,
              }}
            >
              <div style={{ maxHeight: TIP_MAX_HEIGHT_PX - 24, overflow: 'hidden' }}>{prompt.prompt}</div>
            </div>
          </>,
          document.body,
        )}
    </div>
  )
}
