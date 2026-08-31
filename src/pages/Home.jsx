import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { categories } from '../data/projects.js'
import { programs } from '../data/programs.js'
import '../styles/home-exact.css'

// Hero panel — its pieces stagger in together once scrolled into view,
// animated purely via opacity/transform (no layout properties) so it
// never triggers reflow.
const panelVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const panelItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.75, 0.2, 1] } },
}

// The 4 featured project cards — copied verbatim from the reference
// (title/tag/copy/duration), each linked to its real project page.
const featured = [
  { slug: 'personal-portfolio', tag: 'Web · Beginner', title: 'Personal Portfolio', desc: 'Build a personal website to introduce yourself and showcase your work.', duration: '3 weeks', level: 'Beginner' },
  { slug: 'quiz-game', tag: 'Game · Beginner', title: 'Quiz Game', desc: 'Create an interactive quiz with questions, points and feedback.', duration: '3 weeks', level: 'Beginner' },
  { slug: 'habit-tracker', tag: 'App · Intermediate', title: 'Smart Tracker', desc: 'Build a useful tracker for progress, information or everyday tasks.', duration: '5 weeks', level: 'Intermediate' },
  { slug: 'ai-study-assistant', tag: 'AI · Intermediate', title: 'AI Study Assistant', desc: 'Create a tool that uses AI to help students learn and practise.', duration: '4 weeks', level: 'Intermediate' },
]

const programClass = ['creator', 'builder', 'inventor']

const stats = [
  { value: '9–16', label: 'Years' },
  { value: '3', label: 'Build Levels' },
  { value: '3', label: 'Core Steps' },
  { value: '1', label: 'Creator Journey' },
]

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
  { q: 'What age is AI Inventors Lab for?', a: "AI Inventors Lab's current programs are designed for children aged 9–16." },
  { q: 'Does my child need previous programming experience?', a: 'No. AI Creator (ages 9–10) is designed as the beginner starting point. Children with previous experience can be guided toward the appropriate level.' },
  { q: 'Will my child actually write code?', a: 'Yes. Children learn programming through projects and progressively take more responsibility for the code they create.' },
  { q: 'How is AI used in the course?', a: 'AI is used as a learning and creative assistant. Children learn how to ask useful questions, understand responses, evaluate output and use AI responsibly.' },
  { q: 'What will my child build?', a: 'Projects vary by level and may include websites, games, trackers, study tools, AI assistants, applications and original digital products.' },
  { q: 'What happens at the end?', a: 'Every cohort concludes with Ship Day, where children present and demonstrate a project they have built.' },
]

const codeLines = [
  [{ b: true, t: 'learn' }, { t: ' = "how AI works"' }],
  [{ b: true, t: 'project' }, { t: ' = create_with_ai(learn)' }],
  [{ b: true, t: 'celebrate' }, { t: '(project)' }],
]
const codeTotalLen = codeLines.reduce((sum, line) => sum + line.reduce((s, tok) => s + tok.t.length, 0), 0)

function renderTypedCode(revealed) {
  let used = 0
  return codeLines.map((line, li) => (
    <span className="code-line" key={li}>
      {line.map((tok, ti) => {
        const remaining = Math.max(0, revealed - used)
        const take = Math.min(tok.t.length, remaining)
        used += tok.t.length
        const text = tok.t.slice(0, take)
        return tok.b ? <b key={ti}>{text}</b> : <span key={ti}>{text}</span>
      })}
    </span>
  ))
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Animated stat — counts up from 0 once it scrolls into view.
function Stat({ value, label }) {
  const ref = useRef(null)
  const reduced = useRef(prefersReducedMotion())
  const [display, setDisplay] = useState(() => (reduced.current ? value : value.replace(/\d+/g, '0')))

  useEffect(() => {
    if (reduced.current) return
    const el = ref.current
    const nums = value.match(/\d+/g)?.map(Number) ?? []
    if (!el || !nums.length) return
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const duration = 900
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          let i = 0
          setDisplay(value.replace(/\d+/g, () => Math.round(nums[i++] * eased)))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <div className="stat" ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  )
}

// FAQ row — smooth grid-rows expand/collapse instead of native <details>'s
// instant snap.
function FaqItem({ q, a, stagger }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item reveal ${open ? 'open' : ''}`} style={{ '--stagger': stagger }}>
      <button type="button" className="faq-summary" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {q}
        <span className="faq-plus">+</span>
      </button>
      <div className="faq-body">
        <div className="faq-body-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const projectGridRef = useRef(null)
  const processRef = useRef(null)
  const heroRef = useRef(null)
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? codeTotalLen : 0))

  // Scroll-scrubbed headline: binds Y-translation to how far the viewer
  // has scrolled through the hero itself (not the whole page), with a
  // subtle scrub factor — a small shift, not a dramatic parallax throw.
  // useTransform outputs a motion value consumed via style={{ y }}, so
  // React never re-renders on scroll and the browser only ever touches
  // `transform` — no layout property is read or written per frame.
  const reduceMotion = useReducedMotion()
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const headlineY = useTransform(heroProgress, [0, 1], [0, reduceMotion ? 0 : -50])
  // Background layer moves at a fraction of the headline's speed — the
  // lag between the two is what reads as parallax depth.
  const bgY = useTransform(heroProgress, [0, 1], [0, reduceMotion ? 0 : -16])

  // Draws the connecting line across the 4 process steps once the section
  // scrolls into view, instead of it just sitting there statically.
  useEffect(() => {
    const el = processRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('in-view')
        io.disconnect()
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Types out the code snippet once on mount.
  useEffect(() => {
    if (typed >= codeTotalLen) return
    const id = setInterval(() => {
      setTyped((n) => {
        const next = n + 2
        if (next >= codeTotalLen) clearInterval(id)
        return Math.min(codeTotalLen, next)
      })
    }, 20)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <section className="hero" ref={heroRef}>
        <motion.div className="hero-bg" style={{ y: bgY }} aria-hidden="true">
          <div className="hero-ring hero-ring--a" />
          <div className="hero-ring hero-ring--b" />
          <div className="hero-orbit" />
        </motion.div>
        <div className="wrap hero-grid">
          <div className="reveal">
            <div className="eyebrow">AI + Programming · Ages 9–16</div>
            <motion.h1 style={{ y: headlineY }}>Don't just learn.<br /><span>Build something real.</span></motion.h1>
            <h3>Turn ideas into websites, games, apps and AI-powered projects.</h3>
            <p>AI Inventors Lab helps young creators learn programming and AI by building things that matter to them. Learn AI, create with AI, and celebrate what you make.</p>
            <div className="actions">
              <Link to="/programs" className="btn primary">Enter the Lab →</Link>
              <Link to="/projects" className="btn outline">Start Exploring</Link>
            </div>
            <div className="note">No prior coding experience required for AI Creator.</div>
          </div>

          <motion.div
            className="mock"
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="mockbar" variants={panelItemVariants} />
            <div className="screen">
              <motion.div className="tiny" variants={panelItemVariants}>AI Inventors Lab · Project</motion.div>
              <motion.h2 variants={panelItemVariants}>AI Study Buddy</motion.h2>
              <motion.div className="code" variants={panelItemVariants}>
                {renderTypedCode(typed)}
                {typed >= codeTotalLen && <span className="cursor" />}
              </motion.div>
              <motion.div className="idea-flow idea-flow--3" variants={panelItemVariants}>
                <div className="idea-step"><strong>🧠</strong>LEARN</div>
                <div className="idea-step"><strong>🛠️</strong>CREATE</div>
                <div className="idea-step"><strong>🏆</strong>CELEBRATE</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="wrap stats-grid">
          {stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
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
            {categories.map((cat, i) => (
              <Link to={`/projects?category=${cat.id}`} key={cat.id} className="type reveal" style={{ '--stagger': i }}>
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
            {featured.map((p, i) => (
              <Link to={`/projects/${p.slug}`} key={p.slug} className="project reveal" style={{ '--stagger': i }}>
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
            <p>Creator → Builder → Inventor. Each level introduces new technology, deeper problem-solving and more ambitious projects.</p>
          </div>

          <div className="program-grid">
            {programs.map((prog, i) => (
              <article className={`program ${programClass[i] || ''} reveal`} key={prog.id} style={{ '--stagger': i }}>
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
          <p className="carousel-note">🔓 Every level unlocks harder challenges, new tools and bigger builds.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="wrap">
          <div className="head center reveal">
            <div className="label">Our approach</div>
            <h2>Learn. Create. Celebrate.</h2>
            <p>Because the best way to learn technology is to use it.</p>
          </div>

          <div className="process process--3" ref={processRef}>
            <div className="step reveal" style={{ '--stagger': 0 }}><div className="stepnum">01 — LEARN</div><h3>Understand the skill.</h3><p>Learn an AI concept or programming skill through short, engaging lessons.</p></div>
            <div className="step reveal" style={{ '--stagger': 1 }}><div className="stepnum">02 — CREATE</div><h3>Build it for real.</h3><p>Apply what you learned by making a real AI project — a website, game, app or AI tool you made yourself.</p></div>
            <div className="step reveal" style={{ '--stagger': 2 }}><div className="stepnum">03 — CELEBRATE</div><h3>Get recognized for it.</h3><p>Finish your project, earn badges and recognition for what you built, and celebrate it on Ship Day.</p></div>
          </div>
        </div>
      </section>

      {/* WHY AI INVENTORS LAB */}
      <section className="dark">
        <div className="wrap split">
          <div className="head reveal">
            <div className="label">Why AI Inventors Lab?</div>
            <h2>Turn screen time into creation time.</h2>
            <p>Children already spend time with technology. AI Inventors Lab helps them use that time differently — to explore ideas, solve problems, learn new skills and create things of their own.</p>
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
            {skills.map((s, i) => (
              <div className="skill reveal" key={s.title} style={{ '--stagger': i }}>
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
            {shipItems.map((item, i) => <div className="ship-item reveal" key={item} style={{ '--stagger': i }}>{item}</div>)}
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="parents" id="parents">
        <div className="wrap parent-grid">
          <div className="reveal">
            <div className="label">For parents</div>
            <h2>More than a coding class.</h2>
            <p style={{ color: 'var(--muted)' }}>AI Inventors Lab gives children a structured way to explore AI and programming while developing skills they can use far beyond the classroom.</p>
            <div className="parent-points">
              {parentPoints.map((p) => <div className="point" key={p}>{p}</div>)}
            </div>
          </div>

          <div className="quote reveal">
            <div style={{ fontSize: 44, color: '#4a3a88' }}>"</div>
            <p>A certificate shows that a course was completed. A project shows what a child can create.</p>
            <small style={{ color: 'var(--muted)' }}>— The AI Inventors Lab philosophy</small>
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
            {faqs.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} stagger={i} />)}
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
            <Link to="/programs" className="btn outline">Build Something</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
