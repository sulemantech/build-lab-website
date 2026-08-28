import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark">
              <span className="dot" />
              BUILD LAB
            </span>
            <p>
              Learn → Build → Ship. A hands-on learning initiative by MetaFront, helping students turn ideas into
              real digital products.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h5>Explore</h5>
              <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/showcase">Showcase</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Build Lab</h5>
              <ul>
                <li><Link to="/for-parents">For Parents</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/join">Join a Program</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Get in touch</h5>
              <ul>
                <li><a href="mailto:hello@buildlab.dev">hello@buildlab.dev</a></li>
                <li><a href="https://metafront.dev" target="_blank" rel="noreferrer">metafront.dev</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Build Lab. All rights reserved.</p>
          <p className="footer-powered">
            Powered by <strong>MetaFront</strong> — Software • AI • Products
          </p>
        </div>
      </div>
    </footer>
  )
}
