import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { projects, categories, audiences } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

const levels = ['Beginner', 'Intermediate', 'Advanced']

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [level, setLevel] = useState(searchParams.get('level') || 'all')
  const [audience, setAudience] = useState(searchParams.get('audience') || 'all')

  useEffect(() => {
    setCategory(searchParams.get('category') || 'all')
    setLevel(searchParams.get('level') || 'all')
    setAudience(searchParams.get('audience') || 'all')
  }, [searchParams])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'all') next.delete(key)
    else next.set(key, value)
    setSearchParams(next)
  }

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (level !== 'all' && p.level !== level) return false
      if (audience !== 'all' && !p.audiences.includes(audience)) return false
      return true
    })
  }, [category, level, audience])

  const activeAudience = audiences.find((a) => a.id === audience)

  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Explore Projects</p>
            <h2>{activeAudience ? activeAudience.label : 'Pick something you want to build.'}</h2>
            <p>
              {activeAudience
                ? `Projects designed for ${activeAudience.ageRange.toLowerCase()}.`
                : "We'll teach you what you need to make it happen. No prerequisites — just pick a direction."}
            </p>
          </div>

          <div className="filter-bar">
            <button className={`filter-pill ${category === 'all' ? 'active' : ''}`} onClick={() => updateParam('category', 'all')}>
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                className={`filter-pill ${category === c.id ? 'active' : ''}`}
                onClick={() => updateParam('category', c.id)}
              >
                {c.emoji} {c.label}
              </button>
            ))}
          </div>

          <div className="filter-bar">
            <button className={`filter-pill ${level === 'all' ? 'active' : ''}`} onClick={() => updateParam('level', 'all')}>
              All levels
            </button>
            {levels.map((l) => (
              <button key={l} className={`filter-pill ${level === l ? 'active' : ''}`} onClick={() => updateParam('level', l)}>
                {l}
              </button>
            ))}
            {audience !== 'all' && (
              <button className="filter-pill active" onClick={() => updateParam('audience', 'all')}>
                {activeAudience?.label} ✕
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="project-grid">
              {filtered.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-secondary)', padding: '40px 0' }}>
              No projects match those filters yet — try a different combination.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
