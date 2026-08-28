import { Link } from 'react-router-dom'
import { showcase } from '../data/showcase.js'
import Carousel from '../components/Carousel.jsx'

export default function Showcase() {
  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Real work, real students</p>
            <h2>Built at Build Lab</h2>
            <p>Every project starts with a problem and ends with a real, working product — student, problem, product, demo.</p>
          </div>

          <Carousel
            ariaLabel="Student showcase stories"
            items={showcase}
            autoPlayMs={5500}
            renderItem={(s) => (
              <div className="story-slide">
                <div className="story-visual">
                  <span className="emoji">{s.emoji}</span>
                  <span className="builder-tag">Built by {s.builder} · {s.meta}</span>
                </div>
                <div className="story-content">
                  <h3>{s.name}</h3>
                  <div className="showcase-line">
                    <span className="label">Problem</span>
                    <p>{s.problem}</p>
                  </div>
                  <div className="showcase-line">
                    <span className="label">Product</span>
                    <p>{s.product}</p>
                  </div>
                  <div className="project-tags">
                    {s.tags.map((t) => <span className="tag-chip" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </section>

      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Every story</p>
            <h2>All builds, at a glance.</h2>
          </div>
          <div className="showcase-grid">
            {showcase.map((s) => (
              <div className="showcase-card" key={s.name}>
                <div className="showcase-card-head">
                  <div className="emoji">{s.emoji}</div>
                  <h3>{s.name}</h3>
                  <p className="builder">Built by {s.builder} · {s.meta}</p>
                </div>
                <div className="showcase-card-body">
                  <div className="showcase-line">
                    <span className="label">Problem</span>
                    <p>{s.problem}</p>
                  </div>
                  <div className="showcase-line">
                    <span className="label">Product</span>
                    <p>{s.product}</p>
                  </div>
                  <div className="project-tags">
                    {s.tags.map((t) => <span className="tag-chip" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">The Builder Profile</p>
            <h2>Every student gets a profile.</h2>
            <p>Not just a certificate — a digital record of what they can actually do.</p>
          </div>
          <div className="profile-card">
            <div className="profile-head">
              <div className="profile-avatar">AK</div>
              <div>
                <h4>Ahmed Khan</h4>
                <span>Build Lab Student</span>
              </div>
            </div>
            <div className="profile-section">
              <span className="label">Projects</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>AI Study Assistant · Personal Portfolio · Chatbot</p>
            </div>
            <div className="profile-section">
              <span className="label">Skills</span>
              <div className="project-tags">
                {['Python', 'AI', 'React', 'Figma'].map((s) => <span className="tag-chip" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="profile-stats">
              <div className="profile-stat"><div className="num">3</div><div className="lbl">Projects shipped</div></div>
              <div className="profile-stat"><div className="num">3</div><div className="lbl">Live demos</div></div>
              <div className="profile-stat"><div className="num">✓</div><div className="lbl">GitHub linked</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="cta-band">
            <h2>Want your project featured here?</h2>
            <p>Pick a project, join a program, and start building your own showcase piece.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
              <Link to="/join" className="btn btn-secondary">Join a Program</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
