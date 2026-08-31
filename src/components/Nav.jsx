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

  // Lock body scroll while the dropdown menu is open.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  // Auto-close if the viewport is resized (or rotated) past the mobile
  // breakpoint — otherwise it stays stuck open under the desktop nav.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1001px)')
    const onChange = (e) => { if (e.matches) close() }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Compact the bar once past the very top, and hide it on scroll-down /
  // reveal it on scroll-up. Suspended while the dropdown is open (body
  // scroll is locked then, and the dropdown is anchored to the header —
  // it should stay put while you're using it, not slide away mid-read).
  useEffect(() => {
    if (open) return
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      const scrollingDown = y > lastY
      setHidden(scrollingDown && y > 160)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={close}>
            <span className="mark">AI</span>
            <span className="brand-text">
              Inventors Lab
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
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* A compact dropdown anchored right below the header (not a
            full-screen takeover) — expands/collapses its real height via
            the grid-rows trick, so it never needs a guessed max-height. */}
        <div className={`nav-dropdown ${open ? 'open' : ''}`}>
          <div className="nav-dropdown-inner">
            <nav>
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={close}>{l.label}</Link>
              ))}
            </nav>
            <Link to="/join" onClick={close} className="btn btn-primary btn-block mobile-cta">Register Now →</Link>
          </div>
        </div>
      </header>

      {/* Dims the rest of the page while the dropdown is open — without
          it, whatever CTA happens to sit just below the dropdown (e.g.
          the hero's own buttons) reads as a second, competing button
          right underneath the menu's own "Register Now". Rendered as a
          sibling of <header>, not inside it, since .nav carries a
          `transform` (hide-on-scroll) that would otherwise hijack this
          element's `position: fixed` containing block. */}
      <div className={`nav-backdrop ${open ? 'open' : ''}`} onClick={close} aria-hidden="true" />
    </>
  )
}
