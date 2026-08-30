import { Link } from 'react-router-dom'
import { categories, getProjectBySlug } from '../data/projects.js'
import { programs } from '../data/programs.js'
import ProjectCard from '../components/ProjectCard.jsx'

const stats = [
  { num: '9–15', lbl: 'Years' },
  { num: '3', lbl: 'Build Levels' },
  { num: '4', lbl: 'Core Steps' },
  { num: '1', lbl: 'Creator Journey' },
]

const homeProjects = ['personal-portfolio', 'quiz-game', 'habit-tracker', 'ai-study-assistant']
  .map(getProjectBySlug)
  .filter(Boolean)

const whyRows = [
  { n: '01', title: 'Think', detail: 'Break problems into manageable steps.' },
  { n: '02', title: 'Create', detail: 'Turn an idea into a digital project.' },
  { n: '03', title: 'Build', detail: 'Use code and AI to make it work.' },
  { n: '04', title: 'Solve', detail: 'Debug, test and improve.' },
]

const aiRows = [
  { title: 'Ask AI', detail: 'Learn how to ask useful questions.' },
  { title: 'Understand AI', detail: 'Know what the output means.' },
  { title: 'Question AI', detail: "Don't assume every answer is correct." },
  { title: 'Test AI', detail: 'Check, debug and improve the result.' },
]

const skills = [
  { emoji: '🧠', title: 'Think', desc: 'Problem-solving and computational thinking to break big problems into smaller steps.' },
  { emoji: '🤖', title: 'Work with AI', desc: 'AI literacy, prompting, evaluation and responsible AI use.' },
  { emoji: '💻', title: 'Build', desc: 'Programming and digital creation through websites, games, apps and AI projects.' },
  { emoji: '🚀', title: 'Ship', desc: "Testing, communication and presentation — finish projects and show what you can do." },
]

const shipItems = [
  '01 · My idea',
  '02 · What I built',
  '03 · How AI helped',
  '04 · What went wrong',
  '05 · How I fixed it',
  "06 · What I'll build next",
]

const parentPoints = [
  'Programming and AI skills',
  'Problem-solving and computational thinking',
  'Creativity and project ownership',
  'Debugging and critical thinking',
  'Communication and presentation',
  'A portfolio of projects they actually built',
]

const faqs = [
  { q: 'What age is AI Inventor Lab for?', a: "AI Inventor Lab's current programs are designed for children aged 9–15." },
  { q: 'Does my child need previous programming experience?', a: 'No. AI Creator is designed as the beginner starting point. Children with previous experience can be guided toward the appropriate level.' },
  { q: 'Will my child actually write code?', a: 'Yes. Children learn programming through projects and progressively take more responsibility for the code they create.' },
  { q: 'How is AI used in the course?', a: 'AI is used as a learning and creative assistant. Children learn how to ask useful questions, understand responses, evaluate output and use AI responsibly.' },
  { q: 'What will my child build?', a: 'Projects vary by level and may include websites, games, trackers, study tools, AI assistants, applications and original digital products.' },
  { q: 'What happens at the end?', a: 'Every cohort concludes with Ship Day, where children present and demonstrate a project they have built.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-band dark-band">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI + Programming · Ages 9–15</p>
              <h1>
                Don't just learn.
                <br />
                <span className="accent">Build something real.</span>
              </h1>
              <h3>Turn ideas into websites, games, apps and AI-powered projects.</h3>
              <p className="sub">
                AI Inventor Lab helps young creators learn programming and AI by building things that matter to
                them. Learn a skill, apply it to a project, test your ideas and build something you can actually
                show.
              </p>
              <div className="hero-actions">
                <Link to="/programs" className="btn btn-primary">Explore Programs →</Link>
                <Link to="/projects" className="btn btn-secondary">See What Kids Build</Link>
              </div>
              <p className="hero-note">No prior coding experience required for AI Creator.</p>
            </div>

            <div className="hero-mock">
              <div className="hero-mock-bar"><span /><span /><span /></div>
              <div className="hero-mock-screen">
                <p className="hero-mock-tiny">AI Inventor Lab · Project</p>
                <h2>AI Study Buddy</h2>
                <div className="hero-mock-code">
                  <b>idea</b> = "help students revise"<br />
                  <b>plan</b> = build_with_ai(idea)<br />
                  <b>test</b>(plan)<br />
                  <b>ship</b>(improve(plan))<span className="cursor" />
                </div>
                <div className="idea-flow">
                  <div className="idea-step"><strong>💡</strong>IDEA</div>
                  <div className="idea-step"><strong>⚙</strong>BUILD</div>
                  <div className="idea-step"><strong>🧪</strong>TEST</div>
                  <div className="idea-step"><strong>🚀</strong>SHIP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        {stats.map((s) => (
          <div className="stat-item" key={s.lbl}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* WHAT DO YOU WANT TO BUILD */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Start with an idea</p>
            <h2>What do you want to build?</h2>
            <p>Your idea is the starting point. Build the skills to make it real.</p>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link
                to={`/projects?category=${cat.id}`}
                key={cat.id}
                className="category-card"
              >
                <span className="cat-icon-tile"><span className="emoji">{cat.emoji}</span></span>
                <h3>{cat.label}</h3>
                <p>{cat.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Built around creation</p>
            <h2>See what you could build.</h2>
            <p>Don't just complete exercises. Create projects you can explain, improve and show.</p>
          </div>
          <div className="project-grid">
            {homeProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/projects" className="btn btn-secondary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section section--border-top dark-band">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Three levels · One creator journey</p>
            <h2>Start where you are.<br />Build where you want to go.</h2>
            <p>Create → Build → Invent. Each level introduces new technology, deeper problem-solving and more ambitious projects.</p>
          </div>
          <div className="program-grid">
            {programs.map((prog) => (
              <article className="program-card" key={prog.id}>
                <span className="level-label">{prog.levelLabel}</span>
                <h3>{prog.name}</h3>
                <div className="promise">{prog.promise}</div>
                <p className="desc">{prog.description}</p>
                <ul className="program-focus">
                  {prog.skills.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <div className="program-build">
                  <strong>Build examples</strong>
                  {prog.buildExamples}
                </div>
                <Link to="/programs" className="cta-link">Explore {prog.name} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--border-top">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Our approach</p>
            <h2>Learn. Build. Test. Ship.</h2>
            <p>Because the best way to learn technology is to use it.</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="stepnum">01 — LEARN</span>
              <h3>Understand the skill.</h3>
              <p>Learn the programming, AI and creative concepts needed to move your project forward.</p>
            </div>
            <div className="process-step">
              <span className="stepnum">02 — BUILD</span>
              <h3>Put it into action.</h3>
              <p>Use what you've learned to create something of your own.</p>
            </div>
            <div className="process-step">
              <span className="stepnum">03 — TEST</span>
              <h3>Find it. Fix it. Improve it.</h3>
              <p>Test projects, discover mistakes, debug code and make creations better.</p>
            </div>
            <div className="process-step">
              <span className="stepnum">04 — SHIP</span>
              <h3>Finish it. Show it.</h3>
              <p>Complete the project, explain your decisions and confidently present what you built.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AI INVENTOR LAB */}
      <section className="section section--border-top dark-band">
        <div className="container">
          <div className="split-section">
            <div className="split-copy">
              <p className="eyebrow">Why AI Inventor Lab?</p>
              <h2>Turn screen time into creation time.</h2>
              <p className="lead">
                Children already spend time with technology. AI Inventor Lab helps them use that time differently
                — to explore ideas, solve problems, learn new skills and create things of their own.
              </p>
            </div>
            <div className="split-visual panel-visual">
              <div className="panel-rows">
                {whyRows.map((r) => (
                  <div className="panel-row" key={r.n}>
                    <span className="panel-check">{r.n}</span>
                    <div><strong>{r.title}</strong><span>{r.detail}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>More than coding</p>
            <h2>Build skills that go beyond programming.</h2>
            <p>Technology is the tool. Thinking is the skill.</p>
          </div>
          <div className="skill-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <span className="cat-icon-tile"><span className="emoji">{s.emoji}</span></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI PHILOSOPHY */}
      <section className="section section--border-top dark-band">
        <div className="container">
          <div className="split-section">
            <div className="split-copy">
              <p className="eyebrow">Our AI philosophy</p>
              <h2>AI is the assistant.<br />The child is the creator.</h2>
              <p className="lead">
                AI can help brainstorm ideas, explain concepts, suggest solutions and find bugs. But the child
                remains responsible for understanding, testing, improving and making decisions.
              </p>
            </div>
            <div className="split-visual panel-visual">
              <div className="panel-rows">
                {aiRows.map((r) => (
                  <div className="panel-row" key={r.title}>
                    <span className="panel-check">···</span>
                    <div><strong>{r.title}</strong><span>{r.detail}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHIP DAY */}
      <section className="section section--border-top shipday-coral">
        <div className="container">
          <div className="shipday-inner">
            <div>
              <p className="eyebrow">The finish line</p>
              <h2>Every cohort ends with Ship Day. 🚀</h2>
              <p className="lead">
                A day to stop learning and start showing. Children present what they built, explain their idea,
                demonstrate the project and share what they learned.
              </p>
              <Link to="/join" className="btn btn-primary">Join the Next Cohort →</Link>
            </div>
            <div className="ship-list">
              {shipItems.map((item) => <div className="ship-item" key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="section section--border-top">
        <div className="container">
          <div className="parent-grid">
            <div>
              <p className="eyebrow">For parents</p>
              <h2>More than a coding class.</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                AI Inventor Lab gives children a structured way to explore AI and programming while developing
                skills they can use far beyond the classroom.
              </p>
              <div className="parent-points">
                {parentPoints.map((p) => <div className="parent-point" key={p}>{p}</div>)}
              </div>
            </div>
            <div className="quote-card">
              <div className="mark">"</div>
              <p>A certificate shows that a course was completed. A project shows what a child can create.</p>
              <small>— The AI Inventor Lab philosophy</small>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--border-top section--alt">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Questions?</p>
            <h2>Questions parents ask.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section dark-band text-center">
        <div className="container">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Your idea is waiting</p>
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 70px)', lineHeight: 0.95, letterSpacing: '-0.06em', margin: '8px 0 14px' }}>What will your child build?</h2>
          <p style={{ color: '#bdb8ca', maxWidth: 580, margin: '0 auto 28px' }}>
            Give your child the opportunity to move from consuming technology to creating with it.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/join" className="btn btn-primary">Register Now →</Link>
            <Link to="/programs" className="btn btn-secondary">Choose a Program</Link>
          </div>
        </div>
      </section>
    </>
  )
}
