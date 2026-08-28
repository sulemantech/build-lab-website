import { useEffect, useState } from 'react'

const PHRASES = ['skills', 'projects', 'portfolio', 'experience', 'career', 'future']
const STEP_MS = 2200

function prefersReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/**
 * The second line of the hero headline: "Build your " stays fixed while the
 * final word rotates through concrete outcomes, looping back to the start.
 * Each new word enters with a subtle upward slide + fade (no typewriter,
 * bounce, or spin). Falls back to a static "future" when the user prefers
 * reduced motion, per spec.
 */
export default function HeroHeadlineRotator() {
  const [reduced] = useState(prefersReducedMotion)
  const [index, setIndex] = useState(reduced ? PHRASES.length - 1 : 0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length)
    }, STEP_MS)
    return () => clearInterval(id)
  }, [reduced])

  const word = PHRASES[index]

  return (
    <span className="headline-rotate-row">
      Build your <span className="rotate-phrase" key={word}>{word}</span>.
    </span>
  )
}
