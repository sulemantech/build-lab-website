import { useEffect, useRef, useState, useCallback } from 'react'
import ProjectCard from './ProjectCard.jsx'

/**
 * Horizontally-scrollable row of course cards with a peek of the next card,
 * native touch/trackpad scrolling (CSS scroll-snap — no animation library),
 * dot pagination, and arrow buttons for desktop.
 */
export default function ProjectRow({ projects }) {
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Active card = whichever one the row is currently snapped to, derived
    // from scroll position rather than intersection ratios — multiple cards
    // can simultaneously satisfy a visibility threshold (e.g. on first
    // render), which makes "last entry wins" logic pick an arbitrary card.
    const computeActive = () => {
      const first = cardRefs.current[0]
      if (!first) return
      const style = getComputedStyle(track)
      const gap = parseFloat(style.columnGap || style.gap || '0') || 0
      const step = first.getBoundingClientRect().width + gap
      if (step <= 0) return
      const idx = Math.round(track.scrollLeft / step)
      setActive(Math.max(0, Math.min(projects.length - 1, idx)))
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
  }, [projects])

  const scrollToIndex = useCallback((i) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, i))
    cardRefs.current[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }, [projects.length])

  return (
    <div className="project-row-wrap">
      <div className="project-row" ref={trackRef}>
        {projects.map((p, i) => (
          <div
            className="project-row-item"
            key={p.slug}
            ref={(el) => { cardRefs.current[i] = el }}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-arrow"
          onClick={() => scrollToIndex(active - 1)}
          aria-label="Previous project"
          type="button"
        >
          ‹
        </button>
        <div className="carousel-dots">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              className={`carousel-dot ${i === active ? 'active' : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${p.title}`}
              aria-current={i === active}
              type="button"
            />
          ))}
        </div>
        <button
          className="carousel-arrow"
          onClick={() => scrollToIndex(active + 1)}
          aria-label="Next project"
          type="button"
        >
          ›
        </button>
      </div>
    </div>
  )
}
