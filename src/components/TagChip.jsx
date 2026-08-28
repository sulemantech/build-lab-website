import { iconForTag } from '../utils/tagIcon.js'

export default function TagChip({ label }) {
  return (
    <span className="tag-chip">
      <span className="tag-chip-icon">{iconForTag(label)}</span>
      {label}
    </span>
  )
}
