import { Link } from 'react-router-dom'

const INTENTS = [
  { icon: '🚀', label: 'Build my first project', to: '/projects', color: 'coral' },
  { icon: '🤖', label: 'Explore AI projects', to: '/projects?category=ai', color: 'cat-ai' },
  { icon: '🎓', label: 'Build my portfolio', to: '/projects?audience=university', color: 'purple' },
  { icon: '👪', label: "I'm a parent", to: '/for-parents', color: 'lime' },
]

export default function IntentBanner() {
  return (
    <div className="intent-banner">
      <h3>What brings you to Build Lab today?</h3>
      <div className="intent-options">
        {INTENTS.map((intent) => (
          <Link to={intent.to} className="intent-pill" key={intent.label} style={{ '--intent-color': `var(--${intent.color})` }}>
            <span className="intent-pill-icon">{intent.icon}</span>
            {intent.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
