interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search prompts…"
        aria-label="Search prompts"
        className="glass w-full rounded-full py-2 pl-3 pr-3 font-mono text-xs text-ink placeholder:text-ink-muted outline-none transition focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/40"
      />
      {/* <svg
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg> */}
      {/* {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-1.5 text-ink-muted transition hover:text-neon-cyan"
        >
          ×
        </button>
      )} */}
    </div>
  )
}
