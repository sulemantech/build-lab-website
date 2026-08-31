import { Link } from 'react-router-dom'

export default function HowItWorks() {
  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">The process</p>
            <h2>How AI Inventors Lab works</h2>
            <p>Three steps. No 10-step curriculum, no passive video lectures — just learn, create, and celebrate.</p>
          </div>

          <div className="steps-row">
            <div className="step-block">
              <span className="step-num">01</span>
              <h3>Learn</h3>
              <p>Learn an AI concept or programming skill through short, engaging lessons guided by people who build software and AI products for a living.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-block">
              <span className="step-num">02</span>
              <h3>Create</h3>
              <p>Apply what you learned by making a real project — not a toy exercise — with guidance from experienced mentors at every step.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-block">
              <span className="step-num">03</span>
              <h3>Celebrate</h3>
              <p>Complete your project, earn badges and recognition for your work, and celebrate it on Ship Day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The difference</p>
            <h2>This isn't a course. It's a build process.</h2>
          </div>
          <div className="programs-vs">
            <div className="vs-card old">
              <span className="vs-label">Traditional education</span>
              <div className="vs-flow">
                <span>Course</span> <span className="arrow">→</span> <span>Lessons</span> <span className="arrow">→</span> <span>Certificate</span>
              </div>
            </div>
            <div className="vs-card new">
              <span className="vs-label">AI Inventors Lab</span>
              <div className="vs-flow">
                <span>Learn</span> <span className="arrow">→</span> <span>Create</span> <span className="arrow">→</span> <span>Celebrate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shipday dark-band section section--tight section--border-top">
        <div className="container">
          <div className="shipday-inner">
            <div>
              <p className="eyebrow"><span className="rocket">🚀</span> Ship Day</p>
              <h2>Every cohort ends with Ship Day.</h2>
              <p className="lead">
                Parents, friends, mentors, and potentially companies attend. Every student demonstrates a real,
                working product they built — not a slideshow.
              </p>
              <Link to="/join" className="btn btn-primary">Register Now</Link>
            </div>
            <div className="shipday-quotes">
              <p className="shipday-quote">"Here's the problem I wanted to solve."</p>
              <p className="shipday-quote">"Here's what I designed."</p>
              <p className="shipday-quote">"Here's what I built."</p>
              <p className="shipday-quote">"And here's the product."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to start building?</h2>
            <p>Pick a project that excites you and join a program that fits your pace.</p>
            <div className="hero-actions" style={{ marginBottom: 0 }}>
              <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
              <Link to="/join" className="btn btn-secondary">Register Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
