import { useEffect, useState } from 'react'

const WORDS = ['Learn', 'Build', 'Ship']
const STEP_MS = 1500

function prefersReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/**
 * Animated hero tagline: cycles emphasis through Learn → Build → Ship,
 * looping back to Learn. Arrows stay static; only the words scale/bold/recolor.
 * Falls back to plain, unanimated text when the user prefers reduced motion.
 */
export default function HeroTagline() {
  const [reduced] = useState(prefersReducedMotion)
  const [active, setActive] = useState(reduced ? -1 : 0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % WORDS.length)
    }, STEP_MS)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <p className="hero-flow">
      {WORDS.flatMap((word, i) => {
        const wordEl = (
          <span className={`flow-word${i === active ? ' is-active' : ''}`} key={word}>
            {word}
          </span>
        )
        if (i === WORDS.length - 1) return [wordEl]
        return [wordEl, <span className="arrow" key={`${word}-arrow`}>→</span>]
      })}
    </p>
  )
}
