import { Link } from 'react-router-dom'
import { programs } from '../data/programs.js'

export default function Programs() {
  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Three levels · One creator journey</p>
            <h2>Start where you are.<br />Build where you want to go.</h2>
            <p>
              Create → Build → Invent. Each level introduces new technology, deeper problem-solving and more
              ambitious projects — for young creators aged 9–15.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--border-top dark-band">
        <div className="container">
          <div className="program-grid">
            {programs.map((p) => (
              <article className="program-card" key={p.id} style={{ '--prog-color': `var(--${p.themeColor})` }}>
                <span className="level-label">{p.levelLabel}</span>
                <h3>{p.name}</h3>
                <div className="promise">{p.promise}</div>
                <p className="desc">{p.description}</p>
                <ul className="program-focus">
                  {p.skills.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <div className="program-build">
                  <strong>Build examples</strong>
                  {p.buildExamples}
                </div>
                <Link to={`/projects?level=${p.level}`} className="cta-link">Explore {p.name} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The difference</p>
            <h2>This isn't a course. It's a build process.</h2>
          </div>
          <div className="programs-vs">
            <div className="vs-card old">
              <span className="vs-label">Traditional education</span>
              <div className="vs-flow">
                <span>Course</span> <span className="arrow">→</span> <span>Lessons</span> <span className="arrow">→</span> <span>Certificate</span>
              </div>
            </div>
            <div className="vs-card new">
              <span className="vs-label">AI Inventor Lab</span>
              <div className="vs-flow">
                <span>Idea</span> <span className="arrow">→</span> <span>Learn</span> <span className="arrow">→</span> <span>Build</span> <span className="arrow">→</span> <span>Ship</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-40">
            <Link to="/projects" className="btn btn-primary">See Projects in Each Level</Link>
          </div>
        </div>
      </section>
    </>
  )
}
