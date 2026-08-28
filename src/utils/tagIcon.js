// Small glyph shown before a tag/skill chip across the site.
// Deliberately emoji-only — no third-party logos are reproduced.
const ICONS = {
  // Design tools
  Canva: '🖼️',
  Illustrator: '✒️',
  'Adobe Illustrator': '✒️',
  'Vector Art': '🔺',
  Typography: '🔤',
  Branding: '🏷️',
  'Social Media': '📣',
  Layout: '📐',
  'Google Docs': '📄',
  Formatting: '📝',
  Resumes: '🧾',
  'Business Docs': '💼',
  'Premiere Pro': '🎬',
  'Video Editing': '🎞️',
  Storytelling: '🎙️',
  'Sound & Color': '🎚️',
  Figma: '🖊️',
  'UI/UX': '🎨',
  Prototyping: '🧩',
  Creativity: '✨',

  // Web / mobile
  Web: '🌐',
  Mobile: '📱',
  'HTML/CSS': '🧱',
  JavaScript: '🟨',
  'Responsive Design': '📐',
  Deployment: '🚀',
  React: '⚛️',
  Database: '🗄️',
  Charts: '📊',
  APIs: '🔌',
  Payments: '💳',

  // AI
  AI: '🤖',
  Python: '🐍',
  RAG: '🔍',
  'AI Agents': '🕹️',
  LangGraph: '🧠',
  'Vector DB': '🗂️',
  Chatbot: '💬',
  GitHub: '🐙',

  // Games / logic
  Logic: '🧮',
  'Game Design': '🎮',

  // Program focus tags
  Design: '🎨',
  Games: '🎮',
  Product: '🚀',
  Agents: '🕹️',
}

export const iconForTag = (tag) => ICONS[tag] || '•'
