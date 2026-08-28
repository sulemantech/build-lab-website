import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, projects, categoryLabel } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function CategoryExplorer() {
  const [active, setActive] = useState(categories[0].id)
  const filtered = projects.filter((p) => p.category === active).slice(0, 4)

  return (
    <div className="category-explorer dark-band">
      <div className="category-explorer-copy">
        <p className="eyebrow">Browse by category</p>
        <h3>Filter by what you want to build.</h3>
        <p>Pick a direction and preview real projects instantly — no page reload.</p>
        <Link to="/projects" className="btn-ghost">Explore all projects</Link>
      </div>

      <div className="category-explorer-main">
        <div className="tab-row" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              className={`tab-pill ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
              type="button"
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <div className="project-row light-surface">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <div className="project-row-item" key={p.slug}>
                <ProjectCard project={p} />
              </div>
            ))
          ) : (
            <p className="category-explorer-empty">
              More {categoryLabel(active)} projects are on the way — check back soon.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
