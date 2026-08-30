import { useMemo } from 'react'

const COLORS = ['#ff6658', '#d9ff3f', '#8b5cf6', '#6f9adf', '#c98a1c']

// Lightweight, dependency-free confetti burst — plain divs + a CSS fall
// animation, no canvas/library. Plays once and leaves no lingering DOM
// cost since the pieces are unmounted by the parent after ~2s.
export default function Confetti({ count = 26 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        spin: 200 + Math.random() * 240,
        color: COLORS[i % COLORS.length],
      })),
    [count]
  )

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            '--spin': `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  )
}
