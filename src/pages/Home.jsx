import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/projects.js'
import { programs } from '../data/programs.js'
import '../styles/home-exact.css'

// The 4 featured project cards — copied verbatim from the reference
// (title/tag/copy/duration), each linked to its real project page.
const featured = [
  { slug: 'personal-portfolio', tag: 'Web · Beginner', title: 'Personal Portfolio', desc: 'Build a personal website to introduce yourself and showcase your work.', duration: '3 weeks', level: 'Beginner' },
  { slug: 'quiz-game', tag: 'Game · Beginner', title: 'Quiz Game', desc: 'Create an interactive quiz with questions, points and feedback.', duration: '3 weeks', level: 'Beginner' },
  { slug: 'habit-tracker', tag: 'App · Intermediate', title: 'Smart Tracker', desc: 'Build a useful tracker for progress, information or everyday tasks.', duration: '5 weeks', level: 'Intermediate' },
  { slug: 'ai-study-assistant', tag: 'AI · Intermediate', title: 'AI Study Assistant', desc: 'Create a tool that uses AI to help students learn and practise.', duration: '4 weeks', level: 'Intermediate' },
]

const programClass = ['creator', 'builder', 'inventor']

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
  const projectGridRef = useRef(null)

  // Pointer tilt for project cards — same behavior as the reference's own
  // script, scoped to this grid via event delegation.
  useEffect(() => {
    const grid = projectGridRef.current
    if (!grid) return
    const canTilt =
      window.matchMedia('(hover: hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canTilt) return

    const onMove = (e) => {
      const card = e.target.closest('.project')
      if (!card || !grid.contains(card)) return
      const r = card.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      card.style.transform = `perspective(900px) rotateX(${y * -2.2}deg) rotateY(${x * 2.2}deg) translateY(-7px)`
    }
    const onLeave = (e) => {
      const card = e.target.closest('.project')
      if (card) card.style.transform = ''
    }
    grid.addEventListener('pointermove', onMove)
    grid.addEventListener('pointerleave', onLeave, true)
    return () => {
      grid.removeEventListener('pointermove', onMove)
      grid.removeEventListener('pointerleave', onLeave, true)
    }
  }, [])

  return (
    <div className="home-exact">
      <div className="progress" aria-hidden="true" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="reveal">
            <div className="eyebrow">AI + Programming · Ages 9–15</div>
            <h1>Don't just learn.<br /><span>Build something real.</span></h1>
            <h3>Turn ideas into websites, games, apps and AI-powered projects.</h3>
            <p>AI Inventor Lab helps young creators learn programming and AI by building things that matter to them. Learn a skill, apply it to a project, test your ideas and build something you can actually show.</p>
            <div className="actions">
              <Link to="/programs" className="btn primary">Explore Programs →</Link>
              <Link to="/projects" className="btn outline">See What Kids Build</Link>
            </div>
            <div className="note">No prior coding experience required for AI Creator.</div>
          </div>

          <div className="mock reveal">
            <div className="mockbar" />
            <div className="screen">
              <div className="tiny">AI Inventor Lab · Project</div>
              <h2>AI Study Buddy</h2>
              <div className="code">
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
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="wrap stats-grid">
          <div className="stat"><strong>9–15</strong><span>Years</span></div>
          <div className="stat"><strong>3</strong><span>Build Levels</span></div>
          <div className="stat"><strong>4</strong><span>Core Steps</span></div>
          <div className="stat"><strong>1</strong><span>Creator Journey</span></div>
        </div>
      </div>

      {/* WHAT DO YOU WANT TO BUILD */}
      <section>
        <div className="wrap">
          <div className="head center reveal">
            <div className="label">Start with an idea</div>
            <h2>What do you want to build?</h2>
            <p>Your idea is the starting point. Build the skills to make it real.</p>
          </div>
          <div className="types">
            {categories.map((cat) => (
              <Link to={`/projects?category=${cat.id}`} key={cat.id} className="type reveal">
                <div className="ico">{cat.emoji}</div>
                <h3>{cat.label}</h3>
                <p>{cat.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="wrap">
          <div className="head reveal">
            <div className="label">Built around creation</div>
            <h2>See what you could build.</h2>
            <p>Don't just complete exercises. Create projects you can explain, improve and show.</p>
          </div>

          <div className="project-grid" ref={projectGridRef}>
            {featured.map((p) => (
              <Link to={`/projects/${p.slug}`} key={p.slug} className="project reveal">
                <div className="visual">
                  <div className="window">
                    <div className="window-head"><i /><i /><i /></div>
                    <div className="line" /><div className="line" /><div className="line short" />
                  </div>
                </div>
                <div className="body">
                  <div className="tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="meta"><span>{p.duration}</span><span>·</span><span>{p.level}</span></div>
                  <span className="project-link">Start building →</span>
                </div>
              </Link>
            ))}
          </div>

          <p className="carousel-note">Explore more projects as you progress through the creator journey.</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs" id="programs">
        <div className="wrap">
          <div className="head reveal">
            <div className="label">Three levels · One creator journey</div>
            <h2>Start where you are.<br />Build where you want to go.</h2>
            <p>Create → Build → Invent. Each level introduces new technology, deeper problem-solving and more ambitious projects.</p>
          </div>

          <div className="program-grid">
            {programs.map((prog, i) => (
              <article className={`program ${programClass[i] || ''} reveal`} key={prog.id}>
                <div className="level">{prog.levelLabel}</div>
                <h3>{prog.name}</h3>
                <div className="promise">{prog.promise}</div>
                <p>{prog.description}</p>
                <ul>
                  {prog.skills.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <div className="build"><strong>Build examples</strong>{prog.buildExamples}</div>
                <Link to="/programs">Explore {prog.name} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="wrap">
          <div className="head center reveal">
            <div className="label">Our approach</div>
            <h2>Learn. Build. Test. Ship.</h2>
            <p>Because the best way to learn technology is to use it.</p>
          </div>

          <div className="process">
            <div className="step reveal"><div className="stepnum">01 — LEARN</div><h3>Understand the skill.</h3><p>Learn the programming, AI and creative concepts needed to move your project forward.</p></div>
            <div className="step reveal"><div className="stepnum">02 — BUILD</div><h3>Put it into action.</h3><p>Use what you've learned to create something of your own.</p></div>
            <div className="step reveal"><div className="stepnum">03 — TEST</div><h3>Find it. Fix it. Improve it.</h3><p>Test projects, discover mistakes, debug code and make creations better.</p></div>
            <div className="step reveal"><div className="stepnum">04 — SHIP</div><h3>Finish it. Show it.</h3><p>Complete the project, explain your decisions and confidently present what you built.</p></div>
          </div>
        </div>
      </section>

      {/* WHY AI INVENTOR LAB */}
      <section className="dark">
        <div className="wrap split">
          <div className="head reveal">
            <div className="label">Why AI Inventor Lab?</div>
            <h2>Turn screen time into creation time.</h2>
            <p>Children already spend time with technology. AI Inventor Lab helps them use that time differently — to explore ideas, solve problems, learn new skills and create things of their own.</p>
          </div>
          <div className="panel reveal">
            {whyRows.map((r) => (
              <div className="row" key={r.n}>
                <div className="check">{r.n}</div>
                <div><strong>{r.title}</strong><span>{r.detail}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <div className="wrap">
          <div className="head center reveal">
            <div className="label">More than coding</div>
            <h2>Build skills that go beyond programming.</h2>
            <p>Technology is the tool. Thinking is the skill.</p>
          </div>
          <div className="skill-grid">
            {skills.map((s) => (
              <div className="skill reveal" key={s.title}>
                <div className="ico">{s.emoji}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI PHILOSOPHY */}
      <section className="dark">
        <div className="wrap split">
          <div className="head reveal">
            <div className="label">Our AI philosophy</div>
            <h2>AI is the assistant.<br />The child is the creator.</h2>
            <p>AI can help brainstorm ideas, explain concepts, suggest solutions and find bugs. But the child remains responsible for understanding, testing, improving and making decisions.</p>
          </div>
          <div className="panel reveal">
            {aiRows.map((r) => (
              <div className="row" key={r.title}>
                <div className="check">···</div>
                <div><strong>{r.title}</strong><span>{r.detail}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHIP DAY */}
      <section className="ship">
        <div className="wrap ship-grid">
          <div className="reveal">
            <div className="label" style={{ color: 'var(--lime)' }}>The finish line</div>
            <h2>Every cohort ends with Ship Day. 🚀</h2>
            <p>A day to stop learning and start showing. Children present what they built, explain their idea, demonstrate the project and share what they learned.</p>
            <div className="shipday-actions">
              <Link to="/join" className="btn">Join the Next Cohort →</Link>
            </div>
          </div>
          <div className="ship-list">
            {shipItems.map((item) => <div className="ship-item reveal" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="parents" id="parents">
        <div className="wrap parent-grid">
          <div className="reveal">
            <div className="label">For parents</div>
            <h2>More than a coding class.</h2>
            <p style={{ color: 'var(--muted)' }}>AI Inventor Lab gives children a structured way to explore AI and programming while developing skills they can use far beyond the classroom.</p>
            <div className="parent-points">
              {parentPoints.map((p) => <div className="point" key={p}>{p}</div>)}
            </div>
          </div>

          <div className="quote reveal">
            <div style={{ fontSize: 44, color: '#4a3a88' }}>"</div>
            <p>A certificate shows that a course was completed. A project shows what a child can create.</p>
            <small style={{ color: 'var(--muted)' }}>— The AI Inventor Lab philosophy</small>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <div className="head center reveal">
            <div className="label">Questions?</div>
            <h2>Questions parents ask.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="reveal" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final" id="register">
        <div className="wrap reveal">
          <div className="label">Your idea is waiting</div>
          <h2>What will your child build?</h2>
          <p>Give your child the opportunity to move from consuming technology to creating with it.</p>
          <div className="actions" style={{ justifyContent: 'center' }}>
            <Link to="/join" className="btn primary">Register Now →</Link>
            <Link to="/programs" className="btn outline">Choose a Program</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
