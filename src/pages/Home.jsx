import { Link } from 'react-router-dom'
import { categories, featuredProjects } from '../data/projects.js'
import { showcase } from '../data/showcase.js'
import ProjectCard from '../components/ProjectCard.jsx'
import Carousel from '../components/Carousel.jsx'
import TagChip from '../components/TagChip.jsx'
import ToolsTicker from '../components/ToolsTicker.jsx'
import HeroTagline from '../components/HeroTagline.jsx'

const stats = [
  { num: '3', lbl: 'Age tracks — 10 to university' },
  { num: '12', lbl: 'Guided build projects' },
  { num: '3', lbl: 'Steps: Learn → Build → Ship' },
  { num: '1', lbl: 'Ship Day every cohort' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-band dark-band">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="hero-pill">
                <span className="mark" /> A hands-on learning initiative by MetaFront
              </span>
              <h1>
                Don't just learn. <span className="accent">Build.</span>
              </h1>
              <HeroTagline />
              <p className="sub">
                Hands-on programs where kids, teenagers, and university students turn ideas into real digital
                products — through mentorship, guided projects, and shipped work.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
                <Link to="/join" className="btn btn-secondary">Join a Program</Link>
              </div>
            </div>

            <div className="hero-carousel-wrap">
              <Carousel
                ariaLabel="Featured projects"
                items={featuredProjects}
                theme="dark"
                autoPlayMs={4500}
                renderItem={(p) => (
                  <Link to={`/projects/${p.slug}`} className="hero-project-card" style={{ '--cat-color': `var(--cat-${p.category})` }}>
                    <div className="project-cover project-cover--lg">
                      <span className="cover-emoji">{p.emoji}</span>
                      <span className="cover-badge">{p.level} · {p.duration}</span>
                    </div>
                    <div className="card-body">
                      <h4>{p.title}</h4>
                      <p>{p.tagline}</p>
                      <div className="project-tags">
                        {p.tags.slice(0, 3).map((t) => <TagChip label={t} key={t} />)}
                      </div>
                    </div>
                  </Link>
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="container">
        <div className="stats-strip">
          {stats.map((s) => (
            <div className="stat-item" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS TICKER */}
      <div className="tools-ticker-section">
        <p className="tools-ticker-label">Real tools you'll actually use</p>
        <ToolsTicker />
      </div>

      {/* WHAT DO YOU WANT TO BUILD */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Start here</p>
            <h2>What do you want to build?</h2>
            <p>Pick a direction. We'll teach you everything you need to make it real.</p>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link
                to={`/projects?category=${cat.id}`}
                key={cat.id}
                className="category-card"
                style={{ '--cat-color': `var(--cat-${cat.id})` }}
              >
                <span className="cat-icon-tile"><span className="emoji">{cat.emoji}</span></span>
                <h3>{cat.label}</h3>
                <p>{cat.blurb}</p>
                <span className="cat-link">Explore {cat.label} projects →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Explore Projects</p>
            <h2>Pick something you want to build.</h2>
            <p>We'll teach you what you need to make it happen — no prerequisites, just curiosity.</p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/projects" className="btn btn-secondary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--border-top">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">The process</p>
            <h2>How Build Lab works</h2>
            <p>No 10-step programs. Just three things, done properly.</p>
          </div>
          <div className="steps-row">
            <div className="step-block">
              <span className="step-num">01</span>
              <h3>Learn</h3>
              <p>Learn the skills you need through live, hands-on sessions — not passive video lectures.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-block">
              <span className="step-num">02</span>
              <h3>Build</h3>
              <p>Work on a real project with guidance from mentors who build software and AI products for a living.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-block">
              <span className="step-num">03</span>
              <h3>Ship</h3>
              <p>Deploy your project, put it in your portfolio, and present it on Ship Day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR KIDS */}
      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="split-section">
            <div className="split-copy">
              <p className="eyebrow">For Young Creators</p>
              <h2>Turn screen time into creation time.</h2>
              <p className="lead">
                Instead of simply consuming technology, kids learn to create with it — and finish with something
                they built themselves.
              </p>
              <ul>
                <li>Build games</li>
                <li>Create websites</li>
                <li>Design apps</li>
                <li>Experiment with AI</li>
                <li>Build creative projects</li>
              </ul>
              <div>
                <Link to="/projects?audience=kids" className="btn btn-primary">Explore Young Creator Projects</Link>
              </div>
            </div>
            <div className="split-visual">
              <div className="visual-chip-grid">
                <div className="visual-chip">🎮 Games</div>
                <div className="visual-chip">🌐 Websites</div>
                <div className="visual-chip">📱 Apps</div>
                <div className="visual-chip">🤖 AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR UNIVERSITY STUDENTS */}
      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="split-section reverse">
            <div className="split-copy">
              <p className="eyebrow">For University Students</p>
              <h2>Turn knowledge into something you can show.</h2>
              <p className="lead">
                University students often learn technologies but struggle to demonstrate practical experience.
                Build Lab gives them a project they can actually put in their portfolio.
              </p>
              <div className="split-highlight">Project + GitHub + Live Demo + Experience</div>
              <div>
                <Link to="/projects?audience=university" className="btn btn-primary">Explore Student Projects</Link>
              </div>
            </div>
            <div className="split-visual">
              <div className="visual-chip-grid">
                <div className="visual-chip">📦 Project</div>
                <div className="visual-chip">💻 GitHub</div>
                <div className="visual-chip">🔗 Live Demo</div>
                <div className="visual-chip">🎤 Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section className="section section--border-top">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Mentorship</p>
            <h2>Learn from people who build.</h2>
            <p>Build Lab is powered by practitioners working on real software, AI, and digital products.</p>
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
          <p className="mentor-statement">
            You don't just <span className="dim">learn technology.</span><br />
            You learn how technology is actually used to <span className="bright">build products.</span>
          </p>
        </div>
      </section>

      {/* SHOWCASE CAROUSEL */}
      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Real work, real students</p>
            <h2>Built at Build Lab</h2>
            <p>Every project starts with a problem and ends with a real, working product.</p>
          </div>
          <Carousel
            ariaLabel="Student showcase stories"
            items={showcase}
            autoPlayMs={5500}
            renderItem={(s) => (
              <div className="story-slide" style={{ '--cat-color': `var(--cat-${s.category})` }}>
                <div className="story-visual">
                  <span className="emoji">{s.emoji}</span>
                  <span className="builder-tag">Built by {s.builder} · {s.meta}</span>
                </div>
                <div className="story-content">
                  <h3>{s.name}</h3>
                  <div className="showcase-line">
                    <span className="label">Problem</span>
                    <p>{s.problem}</p>
                  </div>
                  <div className="showcase-line">
                    <span className="label">Product</span>
                    <p>{s.product}</p>
                  </div>
                  <div className="project-tags">
                    {s.tags.map((t) => <TagChip label={t} key={t} />)}
                  </div>
                </div>
              </div>
            )}
          />
          <div className="text-center mt-40">
            <Link to="/showcase" className="btn btn-secondary">See the Full Showcase</Link>
          </div>
        </div>
      </section>

      {/* SHIP DAY */}
      <section className="shipday dark-band section section--tight">
        <div className="container">
          <div className="shipday-inner">
            <div>
              <p className="eyebrow"><span className="rocket">🚀</span> Ship Day</p>
              <h2>Every cohort ends with Ship Day.</h2>
              <p className="lead">
                Students demonstrate what they built to parents, friends, mentors, and potentially companies. It's
                not a graduation ceremony — it's a product demo.
              </p>
              <Link to="/how-it-works" className="btn btn-primary">See How It Works</Link>
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

      {/* METAFRONT CREDIBILITY */}
      <section className="section section--border-top">
        <div className="container about-body">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Built by MetaFront</p>
          <h2 style={{ marginBottom: 20 }}>Built by people who actually build software and AI products.</h2>
          <p>
            MetaFront is a software and AI company building digital products for real-world businesses. Build Lab
            was created from the same philosophy: the best way to learn technology is to use it to build something
            real.
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

      {/* FINAL CTA */}
      <section className="section section--tight section--border-top">
        <div className="container">
          <div className="cta-band">
            <h2>What will you build?</h2>
            <p>Explore the projects, pick one that excites you, and start building this week.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
              <Link to="/join" className="btn btn-secondary">Join a Program</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
