import { Link } from 'react-router-dom'
import { programs } from '../data/programs.js'
import { projects } from '../data/projects.js'

/**
 * "Trending searches"-style layout, reoriented around programs/age-tracks
 * rather than categories (which our grid, featured row, and tabbed filter
 * already cover) — each column is tinted to its program's color and lists
 * a few real projects that program's students would build.
 */
export default function ProgramColumns() {
  return (
    <div className="program-columns">
      {programs.map((prog) => {
        const matches = projects.filter((p) => p.audiences.includes(prog.audienceId)).slice(0, 3)
        return (
          <div className="program-column" key={prog.id} style={{ '--prog-color': `var(--${prog.color})` }}>
            <Link to={`/projects?audience=${prog.audienceId}`} className="program-column-head">
              {prog.name} <span aria-hidden="true">→</span>
            </Link>
            <div className="program-column-panel">
              {matches.map((p) => (
                <Link to={`/projects/${p.slug}`} key={p.slug} className="mini-card">
                  <span className="mini-card-icon" style={{ '--cat-color': `var(--cat-${p.category})` }}>
                    {p.emoji}
                  </span>
                  <span className="mini-card-text">
                    <span className="mini-card-title">{p.title}</span>
                    <span className="mini-card-meta">
                      <span className="star" aria-hidden="true">★</span> {p.level} · {p.duration}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
