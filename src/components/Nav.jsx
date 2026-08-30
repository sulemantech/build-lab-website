import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/programs', label: 'Programs' },
  { to: '/projects', label: 'Projects' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/showcase', label: 'Showcase' },
  { to: '/for-parents', label: 'For Parents' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const close = () => setOpen(false)

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  // Compact the bar once past the very top, and hide it on scroll-down /
  // reveal it on scroll-up — gives content more room while scrolling
  // through a page, without losing quick access back to nav.
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      if (!open) {
        const scrollingDown = y > lastY
        setHidden(scrollingDown && y > 160)
      }
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="mark">A</span>
          <span className="brand-text">
            AI INVENTOR LAB
            <small>by MetaFront</small>
          </span>
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/join" className="btn btn-primary desktop-only">Register Now →</Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <nav>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={close}>{l.label}</Link>
          ))}
        </nav>
        <Link to="/join" onClick={close} className="btn btn-primary btn-block mobile-cta">Register Now →</Link>
      </div>
    </header>
  )
}
