import { useState } from 'react'
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

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <span className="dot" />
            AI INVENTOR LAB
          </span>
          <span className="brand-sub">by MetaFront</span>
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/join" className="btn btn-primary btn-sm desktop-only">
            Register Now
          </Link>
          <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link to="/join" onClick={() => setOpen(false)} style={{ paddingTop: 16 }}>
          <span className="btn btn-primary btn-block">Register Now</span>
        </Link>
      </div>
    </header>
  )
}
