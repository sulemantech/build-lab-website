import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="section section--tight glow-bg">
        <div className="container about-body">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>About Build Lab</p>
          <h2 style={{ marginBottom: 24 }}>Built by MetaFront.</h2>
          <p>
            MetaFront is a software and AI company building digital products for real-world businesses. Build Lab
            was created from the same philosophy: the best way to learn technology is to use it to build something
            real.
          </p>
          <p>
            We don't believe in courses that end in a certificate and nothing else. We believe in a process — idea,
            learning, project, product — that ends with something you can point to and say, "I built this."
          </p>

          <div className="brand-chain">
            <div className="brand-chain-item meta">
              <h3>MetaFront</h3>
              <p className="tagline">Software • AI • Products</p>
            </div>
            <div className="brand-chain-arrow">↓</div>
            <div className="brand-chain-item buildlab">
              <h3>Build Lab</h3>
              <p className="tagline">Learn → Build → Ship</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Mentorship</p>
            <h2>Learn from people who build.</h2>
            <p>Build Lab is powered by practitioners working on real software, AI, and digital products — not career instructors.</p>
          </div>
          <div className="mentor-grid">
            <div className="mentor-card">
              <span className="role-tag">MetaFront Team</span>
              <h3>Software Engineering • AI • Architecture • Product Development</h3>
              <p>The engineers and AI practitioners behind Build Lab's projects and technical curriculum.</p>
            </div>
            <div className="mentor-card">
              <span className="role-tag">Design Partner</span>
              <h3>UI/UX • Design • Creativity • Product Design</h3>
              <p>The design perspective that shapes how every project looks, feels, and functions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border-top">
        <div className="container">
          <div className="cta-band">
            <h2>What will you build?</h2>
            <p>Explore the projects, pick one that excites you, and start building this week.</p>
            <div className="hero-actions" style={{ marginBottom: 0 }}>
              <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
              <Link to="/join" className="btn btn-secondary">Join a Program</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
