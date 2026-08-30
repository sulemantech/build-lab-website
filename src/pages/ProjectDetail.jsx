import { Link, useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug, projects, categoryLabel } from '../data/projects.js'
import TagChip from '../components/TagChip.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/projects" replace />

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3)
  const levelClass = `badge-level-${project.level.toLowerCase()}`

  return (
    <>
      <section className="pd-hero glow-bg" style={{ '--cat-color': `var(--cat-${project.category})` }}>
        <div className="container">
          <p className="pd-breadcrumb">
            <Link to="/projects">Projects</Link> / {project.title}
          </p>
          <div className="pd-hero-top">
            <span className="pd-icon-tile"><span className="emoji">{project.emoji}</span></span>
            <div>
              <h1>{project.title}</h1>
              <p className="tagline">{project.tagline}</p>
            </div>
          </div>
          <div className="pd-meta-row">
            <span className={`badge ${levelClass}`}>{project.level}</span>
            <span className="badge">{project.duration}</span>
            <span className="badge"><span className="cat-dot" style={{ background: `var(--cat-${project.category})` }} /> {project.category}</span>
          </div>
          <div className="pd-actions">
            <Link to="/join" className="btn btn-primary">Register Now</Link>
            <Link to="/projects" className="btn btn-secondary">Browse More Projects</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pd-grid">
            <div>
              <p className="pd-section-title">What you'll build</p>
              <div className="flow-diagram">
                {project.build.map((step, i) => (
                  <div key={step}>
                    <div className="flow-step">
                      <span className="flow-index">{i + 1}</span>
                      {step}
                    </div>
                    {i < project.build.length - 1 && <div className="flow-arrow-down">↓</div>}
                  </div>
                ))}
              </div>

              <p className="pd-section-title">Your journey</p>
              <div className="journey-list">
                {project.journey.map((j) => (
                  <div className="journey-item" key={j.week}>
                    <div className="journey-week">Week {j.week}</div>
                    <div>
                      <h4>{j.title}</h4>
                      <p>{j.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="pd-section-title">What you'll ship</p>
              <ul className="ship-list">
                {project.ship.map((s) => (
                  <li key={s}><span className="check">✓</span> {s}</li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="pd-sidebar-card">
                <h4>Program details</h4>
                <div className="pd-sidebar-row"><span className="k">Level</span><span className="v">{project.level}</span></div>
                <div className="pd-sidebar-row"><span className="k">Duration</span><span className="v">{project.duration}</span></div>
                <div className="pd-sidebar-row"><span className="k">Category</span><span className="v">{categoryLabel(project.category)}</span></div>
                <div className="pd-sidebar-row"><span className="k">Format</span><span className="v">Live + Mentored</span></div>

                <h4 style={{ marginTop: 24 }}>What you'll learn</h4>
                <div className="project-tags" style={{ marginBottom: 24 }}>
                  {project.learn.map((l) => <TagChip label={l} key={l} />)}
                </div>

                <Link to="/join" className="btn btn-primary btn-block">Register Now</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--border-top section--tight">
          <div className="container">
            <p className="pd-section-title">Related projects</p>
            <div className="related-strip">
              {related.map((r) => (
                <Link to={`/projects/${r.slug}`} className="related-card" key={r.slug} style={{ '--cat-color': `var(--cat-${r.category})` }}>
                  <span className="related-card-icon">{r.emoji}</span>
                  <h4>{r.title}</h4>
                  <span>{r.level} · {r.duration}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
