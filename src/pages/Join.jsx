import { useState } from 'react'
import { Link } from 'react-router-dom'
import { programs } from '../data/programs.js'

export default function Join() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section glow-bg">
      <div className="container">
        <div className="join-card">
          {submitted ? (
            <>
              <h1>You're on the list 🎉</h1>
              <p className="lead">
                Thanks for reaching out — a member of the Build Lab team will follow up with next steps and
                available cohort dates.
              </p>
              <Link to="/projects" className="btn btn-primary btn-block">Explore Projects While You Wait</Link>
            </>
          ) : (
            <>
              <h1>Join a Program</h1>
              <p className="lead">Tell us a bit about you and we'll match you with the right program and project.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="program">Program</label>
                  <select id="program" defaultValue="">
                    <option value="" disabled>Select a program</option>
                    {programs.map((p) => (
                      <option key={p.id} value={p.id}>{p.name} — {p.audience}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
