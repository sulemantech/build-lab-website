// Three levels, one creator journey.
export const programs = [
  {
    id: 'ai-creator',
    levelLabel: 'Level 01 · Ages 9–10',
    name: 'AI Creator',
    promise: 'Start creating with AI + programming.',
    description:
      'For young learners beginning their technology journey. Discover how computers work, learn programming fundamentals and use AI as a creative partner.',
    skills: ['Computational thinking', 'Programming fundamentals', 'AI literacy', 'Creative problem-solving', 'Prompting & AI collaboration'],
    buildExamples: 'Mini games · Websites · AI experiments · Interactive stories',
    level: 'Beginner',
    color: 'creator',
    themeColor: 'coral',
  },
  {
    id: 'ai-builder',
    levelLabel: 'Level 02 · Ages 11–12',
    name: 'AI Builder',
    promise: 'Turn ideas into working digital products.',
    description:
      'Go beyond the basics. Develop stronger programming skills and learn how technologies work together to create useful applications.',
    skills: ['Python programming', 'Programming logic', 'APIs', 'AI integration', 'Debugging & product thinking'],
    buildExamples: 'Trackers · Study planners · AI assistants · Web apps',
    level: 'Intermediate',
    color: 'builder',
    themeColor: 'blue',
  },
  {
    id: 'ai-inventor',
    levelLabel: 'Level 03 · Ages 13–15',
    name: 'AI Inventor',
    promise: "Build something that's truly your own.",
    description:
      'For experienced young creators ready to combine programming, AI, product design and problem-solving into original projects.',
    skills: ['Advanced programming', 'AI systems & data', 'Product design', 'Testing & iteration', 'Responsible AI & shipping'],
    buildExamples: 'AI systems · AI apps · Learning tools · Original products',
    level: 'Advanced',
    color: 'inventor',
    themeColor: 'lime',
  },
]

export const getProgramByLevel = (level) => programs.find((p) => p.level === level)
