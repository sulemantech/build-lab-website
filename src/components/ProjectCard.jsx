import { Link } from 'react-router-dom'
import { categoryLabel } from '../data/projects.js'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
      style={{ '--cat-color': `var(--cat-${project.category})` }}
    >
      <div className="project-visual">
        <div className="project-window">
          <div className="window-head"><i /><i /><i /></div>
          <div className="line" />
          <div className="line" />
          <div className="line short" />
        </div>
      </div>
      <div className="project-card-body">
        <div className="project-tag">{categoryLabel(project.category)} · {project.level}</div>
        <h3>{project.title}</h3>
        <p className="desc">{project.tagline}</p>
        <div className="meta">
          <span>{project.duration}</span>
          <span>·</span>
          <span>{project.level}</span>
        </div>
        <span className="project-link">Start building →</span>
      </div>
    </Link>
  )
}
