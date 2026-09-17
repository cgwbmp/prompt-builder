interface LogoProps {
  size?: number
  className?: string
}

/** Geometric neon rocket. `.flame` is animated by the parent's `.flare` class. */
export function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ filter: 'drop-shadow(0 0 6px rgba(0,240,255,0.55))' }}
    >
      <defs>
        <linearGradient id="flame-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff2bd6" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* flame */}
      <path
        className="flame"
        d="M26 44 L32 62 L38 44 Z"
        fill="url(#flame-grad)"
        style={{ transformOrigin: '32px 44px' }}
      />
      {/* body */}
      <path
        d="M32 4 C40 12 44 22 44 34 L44 44 L20 44 L20 34 C20 22 24 12 32 4 Z"
        stroke="#00f0ff"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="rgba(0,240,255,0.06)"
      />
      {/* fins */}
      <path
        d="M20 34 L10 46 L20 44 Z"
        stroke="#00f0ff"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="rgba(0,240,255,0.06)"
      />
      <path
        d="M44 34 L54 46 L44 44 Z"
        stroke="#00f0ff"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="rgba(0,240,255,0.06)"
      />
      {/* window */}
      <circle cx="32" cy="26" r="5" stroke="#ff2bd6" strokeWidth="2.5" fill="rgba(255,43,214,0.15)" />
    </svg>
  )
}
