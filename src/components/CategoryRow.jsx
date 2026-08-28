import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

/**
 * "What do you want to build?" category tiles as a horizontally-scrollable
 * row with a peek of the next card, dot pagination, and arrow buttons —
 * same interaction pattern as ProjectRow, applied to the category grid.
 */
export default function CategoryRow({ categories }) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const computeActive = () => {
      const first = cardRefs.current[0]
      if (!first) return
      const style = getComputedStyle(track)
      const gap = parseFloat(style.columnGap || style.gap || '0') || 0
      const step = first.getBoundingClientRect().width + gap
      if (step <= 0) return
      const idx = Math.round(track.scrollLeft / step)
      setActive(Math.max(0, Math.min(categories.length - 1, idx)))
    }

    computeActive()
    let raf = null
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(computeActive)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', computeActive)
    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', computeActive)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [categories])

  const scrollToIndex = useCallback((i) => {
    const clamped = Math.max(0, Math.min(categories.length - 1, i))
    cardRefs.current[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }, [categories.length])

  return (
    <div className="project-row-wrap">
      <div className="project-row" ref={trackRef}>
        {categories.map((cat, i) => (
          <div
            className="project-row-item category-row-item"
            key={cat.id}
            ref={(el) => { cardRefs.current[i] = el }}
          >
            <Link
              to={`/projects?category=${cat.id}`}
              className="category-card"
              style={{ '--cat-color': `var(--cat-${cat.id})` }}
            >
              <span className="cat-icon-tile"><span className="emoji">{cat.emoji}</span></span>
              <h3>{cat.label}</h3>
              <p>{cat.blurb}</p>
              <span className="cat-link">Explore {cat.label} projects →</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => scrollToIndex(active - 1)} aria-label="Previous category" type="button">‹</button>
        <div className="carousel-dots">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              className={`carousel-dot ${i === active ? 'active' : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${cat.label}`}
              aria-current={i === active}
              type="button"
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={() => scrollToIndex(active + 1)} aria-label="Next category" type="button">›</button>
      </div>
    </div>
  )
}
