// Creator → Builder → Inventor: three levels of capability. Each one still
// runs on the same Learn → Create → Celebrate loop, scaled to what that
// level is ready for — the level describes what a learner can do, the loop
// describes what they actually do at every level.
export const programs = [
  {
    id: 'ai-creator',
    levelLabel: 'Level 01 · Ages 9–10',
    name: 'AI Creator',
    promise: 'Discover AI. Learn to create.',
    description:
      'For young learners beginning their technology journey. Discover how computers work, learn programming fundamentals and use AI as a creative partner.',
    skills: ['Creative problem-solving', 'Coding fundamentals', 'AI basics', 'Logical thinking', 'Prompting & AI collaboration'],
    buildExamples: 'Mini games · Websites · AI experiments · Interactive stories',
    learn: 'Discover what AI is and pick up coding fundamentals.',
    create: 'Guided creative projects — mini games, websites and interactive stories.',
    celebrate: 'Show what they built to parents, teachers and classmates.',
    level: 'Beginner',
    color: 'creator',
    themeColor: 'coral',
  },
  {
    id: 'ai-builder',
    levelLabel: 'Level 02 · Ages 11–12',
    name: 'AI Builder',
    promise: 'Turn ideas into working digital projects.',
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
    levelLabel: 'Level 03 · Ages 13–16',
    name: 'AI Inventor',
    promise: "Build something that's truly your own.",
    description:
      'For experienced young creators ready to combine programming, AI, product design and problem-solving into original projects.',
    skills: ['Advanced programming', 'AI systems & data', 'Product design', 'Testing & iteration', 'Responsible AI'],
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
