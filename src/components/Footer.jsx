import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer dark-band">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand">
              <span className="mark">AI</span>
              <span className="brand-text">INVENTORS LAB</span>
            </span>
            <p>
              AI + Programming for young creators. Learn AI, create with AI, and celebrate what you make.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h5>Programs</h5>
              <ul>
                <li><Link to="/programs">AI Explorers</Link></li>
                <li><Link to="/programs">AI Builders</Link></li>
                <li><Link to="/programs">AI Inventors</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/for-parents">For Parents</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Get Started</h5>
              <ul>
                <li><Link to="/join">Register Now</Link></li>
                <li><a href="mailto:hello@ailab.dev">Email Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AI Inventors Lab by MetaFront. All rights reserved.</p>
          <p className="footer-powered">Learn. Create. Celebrate.</p>
        </div>
      </div>
      <div className="footer-accent-bar" />
    </footer>
  )
}
