import { iconForTag } from '../utils/tagIcon.js'

const TOOLS = [
  'Canva', 'Adobe Illustrator', 'Premiere Pro', 'Google Docs', 'Figma',
  'Python', 'React', 'JavaScript', 'AI', 'LangGraph', 'GitHub', 'Database',
]

export default function ToolsTicker() {
  return (
    <div className="tools-ticker">
      <div className="tools-ticker-track">
        {[...TOOLS, ...TOOLS].map((tool, i) => (
          <span className="tools-ticker-chip" key={`${tool}-${i}`}>
            <span className="icon">{iconForTag(tool)}</span> {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
