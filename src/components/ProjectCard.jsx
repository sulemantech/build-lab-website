import { Link } from 'react-router-dom'
import { categoryLabel } from '../data/projects.js'

export default function ProjectCard({ project }) {
  const levelClass = `badge-level-${project.level.toLowerCase()}`
  return (
    <article className="project-card" style={{ '--cat-color': `var(--cat-${project.category})` }}>
      <div className="project-card-top">
        <span className="project-emoji">{project.emoji}</span>
        <span className={`badge ${levelClass}`}>{project.level}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="desc">{project.tagline}</p>
      <div className="project-meta">
        <span><span className="cat-dot" /> {categoryLabel(project.category)}</span>
        <span>{project.duration}</span>
      </div>
      <div className="project-tags">
        {project.tags.map((t) => (
          <span className="tag-chip" key={t}>{t}</span>
        ))}
      </div>
      <Link to={`/projects/${project.slug}`} className="btn-ghost">
        View Project
      </Link>
    </article>
  )
}
