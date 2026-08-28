import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Generic accessible carousel. One slide visible at a time, with
 * prev/next arrows and dot pagination in a floating pill control bar.
 * Autoplay pauses on hover/focus and respects prefers-reduced-motion.
 */
export default function Carousel({ items, renderItem, ariaLabel, autoPlayMs = 6000, className = '', theme = 'light' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const trackRef = useRef(null)
  const count = items.length

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!autoPlayMs || paused || count <= 1) return
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs)
    return () => clearInterval(id)
  }, [autoPlayMs, paused, count])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return (
    <div
      className={`carousel carousel--${theme} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className="carousel-viewport">
        <div className="carousel-track" ref={trackRef} style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <div className="carousel-slide" key={i} aria-hidden={i !== index}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="carousel-controls">
          <button className="carousel-arrow" onClick={prev} aria-label="Previous slide" type="button">
            ‹
          </button>
          <div className="carousel-dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                type="button"
              />
            ))}
          </div>
          <button className="carousel-arrow" onClick={next} aria-label="Next slide" type="button">
            ›
          </button>
        </div>
      )}
    </div>
  )
}
