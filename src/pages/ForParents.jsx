import { Link } from 'react-router-dom'

const trustItems = [
  { icon: '✋', title: 'Hands-on learning', body: 'Not hours of passive video. Every session moves toward building something real.' },
  { icon: '🧩', title: 'Real projects', body: 'Something they can actually create — not a worksheet or a quiz.' },
  { icon: '🧭', title: 'Mentorship', body: 'Guidance throughout the project from people who build products professionally.' },
  { icon: '🛠️', title: 'Digital skills', body: 'Design, technology, problem-solving, and AI — the skills that matter now.' },
  { icon: '💬', title: 'Confidence', body: 'The ability to explain and present what they\'ve built, in their own words.' },
  { icon: '📁', title: 'Portfolio', body: 'A real record of their work — projects, code, and live demos they can point to.' },
]

export default function ForParents() {
  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">For Parents</p>
            <h2>What does my child actually get?</h2>
            <p>A straightforward answer, not marketing language.</p>
          </div>
          <div className="trust-grid">
            {trustItems.map((t) => (
              <div className="trust-card" key={t.title}>
                <div className="icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="split-section">
            <div className="split-copy">
              <p className="eyebrow">Turn screen time into creation time</p>
              <h2>They finish with something they built themselves.</h2>
              <p className="lead">
                Instead of consuming technology passively, your child learns to create with it — a website, an app,
                a game, or an AI project they can show off proudly.
              </p>
              <Link to="/projects?audience=kids" className="btn btn-primary">Explore Young Creator Projects</Link>
            </div>
            <div className="split-visual">
              <div className="visual-chip-grid">
                <div className="visual-chip">🎮 Games</div>
                <div className="visual-chip">🌐 Websites</div>
                <div className="visual-chip">📱 Apps</div>
                <div className="visual-chip">🤖 AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="cta-band">
            <h2>See it for yourself on Ship Day.</h2>
            <p>Every cohort ends with a live demo where your child presents what they built.</p>
            <div className="hero-actions" style={{ marginBottom: 0 }}>
              <Link to="/join" className="btn btn-primary">Join a Program</Link>
              <Link to="/how-it-works" className="btn btn-secondary">See How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
