import { Link } from 'react-router-dom'
import { categoryLabel } from '../data/projects.js'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" style={{ '--cat-color': `var(--cat-${project.category})` }}>
      <div className="project-cover">
        <span className="cover-ribbon">
          <span className="cover-ribbon-mark" />
        </span>
        <span className="cover-badge">{project.level}</span>
        <span className="cover-emoji">{project.emoji}</span>
        <span className="cover-label">{categoryLabel(project.category)}</span>
      </div>
      <div className="project-card-body">
        <div className="project-provider">
          <span className="provider-mark" /> Build Lab
        </div>
        <h3>{project.title}</h3>
        <p className="desc">{project.tagline}</p>
        <div className="project-rating">
          <span className="star" aria-hidden="true">★</span> {project.level} · {project.duration}
        </div>
        <Link to={`/projects/${project.slug}`} className="btn-ghost">
          View Project
        </Link>
      </div>
    </article>
  )
}
