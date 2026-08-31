import { Link } from 'react-router-dom'
import { programs } from '../data/programs.js'

export default function Programs() {
  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container">
          <div className="section-head programs-head">
            <p className="eyebrow">Three age tracks · One creator journey</p>
            <h2>Start where you are.<br />Build where you want to go.</h2>
            <p>
              Learn → Create → Celebrate. Every track follows the same loop, scaled to what that age group is
              ready for — for young creators aged 9–16.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--border-top dark-band">
        <div className="container">
          <div className="program-grid">
            {programs.map((p) => (
              <article className="program-card" key={p.id}>
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
            <p className="eyebrow">The same loop, at every age</p>
            <h2>Learn. Create. Celebrate.</h2>
          </div>
          <div className="track-table">
            <div className="track-table-row track-table-head">
              <span>Track</span>
              <span>Learn</span>
              <span>Create</span>
              <span>Celebrate</span>
            </div>
            {programs.map((p) => (
              <div className="track-table-row" key={p.id}>
                <span className="track-table-name">
                  <strong>{p.name}</strong>
                  <small>{p.levelLabel.split('· ')[1]}</small>
                </span>
                <span data-label="Learn">{p.learn}</span>
                <span data-label="Create">{p.create}</span>
                <span data-label="Celebrate">{p.celebrate}</span>
              </div>
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
              <span className="vs-label">AI Inventors Lab</span>
              <div className="vs-flow">
                <span>Learn</span> <span className="arrow">→</span> <span>Create</span> <span className="arrow">→</span> <span>Celebrate</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-40">
            <Link to="/projects" className="btn btn-primary">See Projects in Each Track</Link>
          </div>
        </div>
      </section>
    </>
  )
}
