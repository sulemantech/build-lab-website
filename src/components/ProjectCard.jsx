import { Link } from 'react-router-dom'
import { categoryLabel } from '../data/projects.js'
import TagChip from './TagChip.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" style={{ '--cat-color': `var(--cat-${project.category})` }}>
      <div className="project-cover">
        <span className="cover-emoji">{project.emoji}</span>
        <span className="cover-badge">{project.level}</span>
      </div>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p className="desc">{project.tagline}</p>
        <div className="project-meta">
          <span><span className="cat-dot" /> {categoryLabel(project.category)}</span>
          <span>{project.duration}</span>
        </div>
        <div className="project-tags">
          {project.tags.map((t) => (
            <TagChip label={t} key={t} />
          ))}
        </div>
        <Link to={`/projects/${project.slug}`} className="btn-ghost">
          View Project
        </Link>
      </div>
    </article>
  )
}
