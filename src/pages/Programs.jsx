import { Link } from 'react-router-dom'
import { programs } from '../data/programs.js'
import TagChip from '../components/TagChip.jsx'

export default function Programs() {
  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Programs</p>
            <h2>Structure to support what you build.</h2>
            <p>
              Programs are the learning structure. Projects are what you actually build. Every program is built
              around real projects, mentored by people who build products for a living.
            </p>
          </div>

          <div className="programs-vs">
            <div className="vs-card old">
              <span className="vs-label">Traditional education</span>
              <div className="vs-flow">
                <span>Course</span> <span className="arrow">→</span> <span>Lessons</span> <span className="arrow">→</span> <span>Certificate</span>
              </div>
            </div>
            <div className="vs-card new">
              <span className="vs-label">Build Lab</span>
              <div className="vs-flow">
                <span>Idea</span> <span className="arrow">→</span> <span>Learning</span> <span className="arrow">→</span> <span>Project</span> <span className="arrow">→</span> <span>Product</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="program-grid">
            {programs.map((p) => (
              <div className="program-card" key={p.id} style={{ '--prog-color': `var(--${p.color})` }}>
                <span className="audience-badge">{p.audience}</span>
                <h3>{p.name}</h3>
                <span className="duration">{p.duration}</span>
                <p className="desc">{p.description}</p>
                <div className="program-focus">
                  {p.focus.map((f) => <TagChip label={f} key={f} />)}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-40">
            <Link to="/projects" className="btn btn-primary">See Projects in Each Program</Link>
          </div>
        </div>
      </section>
    </>
  )
}
