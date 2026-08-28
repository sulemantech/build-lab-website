import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="announcement-bar">
      <p>
        🚀 <strong>Next cohort forms in October.</strong> Pick a project and reserve your seat.{' '}
        <Link to="/join">Join a Program →</Link>
      </p>
      <button aria-label="Close announcement" onClick={() => setOpen(false)}>
        ✕
      </button>
    </div>
  )
}
