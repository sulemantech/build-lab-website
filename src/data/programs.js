// Three age tracks, one creator journey — each follows the same
// Learn → Create → Celebrate loop, scaled to what that age group is ready for.
export const programs = [
  {
    id: 'ai-creator',
    levelLabel: 'Track 01 · Ages 9–11',
    name: 'AI Explorers',
    promise: 'Start creating with AI + programming.',
    description:
      'For young learners beginning their technology journey. Discover how computers work, learn programming fundamentals and use AI as a creative partner.',
    skills: ['Computational thinking', 'Programming fundamentals', 'AI literacy', 'Creative problem-solving', 'Prompting & AI collaboration'],
    buildExamples: 'Mini games · Websites · AI experiments · Interactive stories',
    learn: 'Discover AI and programming through simple, hands-on concepts.',
    create: 'Guided creative projects — mini games, websites and interactive stories.',
    celebrate: 'Show what they built to parents, teachers and classmates.',
    level: 'Beginner',
    color: 'creator',
    themeColor: 'coral',
  },
  {
    id: 'ai-builder',
    levelLabel: 'Track 02 · Ages 12–14',
    name: 'AI Builders',
    promise: 'Turn ideas into working digital products.',
    description:
      'Go beyond the basics. Develop stronger programming skills and learn how technologies work together to create useful applications.',
    skills: ['Python programming', 'Programming logic', 'APIs', 'AI integration', 'Debugging & product thinking'],
    buildExamples: 'Trackers · Study planners · AI assistants · Web apps',
    learn: 'Learn prompting, AI tools and real programming workflows.',
    create: 'Build useful, AI-powered projects and apps.',
    celebrate: 'Present and demo the project, and earn recognition for it.',
    level: 'Intermediate',
    color: 'builder',
    themeColor: 'blue',
  },
  {
    id: 'ai-inventor',
    levelLabel: 'Track 03 · Ages 15–16',
    name: 'AI Inventors',
    promise: "Build something that's truly your own.",
    description:
      'For experienced young creators ready to combine programming, AI, product design and problem-solving into original projects.',
    skills: ['Advanced programming', 'AI systems & data', 'Product design', 'Testing & iteration', 'Responsible AI & shipping'],
    buildExamples: 'AI systems · AI apps · Learning tools · Original products',
    learn: 'Learn APIs, Python, and how real AI systems are built and evaluated.',
    create: 'Build complete, original AI applications.',
    celebrate: 'Demo the work, build a portfolio, or enter a competition.',
    level: 'Advanced',
    color: 'inventor',
    themeColor: 'lime',
  },
]

export const getProgramByLevel = (level) => programs.find((p) => p.level === level)
