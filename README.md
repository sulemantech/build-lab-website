# AI Inventors Lab — by MetaFront

Learn → Create → Celebrate

A React + Vite marketing site for **AI Inventors Lab**, MetaFront's hands-on AI + programming initiative for young creators aged 9–16. Visitors are guided by category ("What do you want to build?") into a catalog of real projects rather than a traditional course list.

## Stack

- React 18 + Vite
- React Router for client-side routing
- Plain CSS with design tokens (`src/styles/global.css`) — no UI framework
- `framer-motion` for the homepage's scroll-linked hero animation
- Content lives in `src/data/*.js` (projects, programs, showcase) so copy can be edited without touching components

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, "What do you want to build?", featured projects, programs, How It Works, "Why AI Inventors Lab", skills, AI philosophy, Ship Day, for parents, FAQ, final CTA |
| `/projects` | Filterable project catalog (category, level — supports `?category=`, `?level=` query params) |
| `/projects/:slug` | Project detail — build flow, weekly journey, what you'll ship, sidebar with program details |
| `/programs` | AI Creator (ages 9–10) → AI Builder (11–12) → AI Inventor (13–16) |
| `/how-it-works` | Learn → Create → Celebrate, Ship Day |
| `/showcase` | Student projects (problem → product) + Builder Profile concept |
| `/for-parents` | Trust-building section for parents |
| `/about` | MetaFront ↔ AI Inventors Lab relationship, mentorship |
| `/join` | Registration form |

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

Sub-route refreshes on Vercel are handled by `vercel.json` (rewrites every path to `index.html` so React Router can take over client-side).

## Editing content

- **Projects**: `src/data/projects.js` — add a project by appending to the `projects` array; it will automatically appear in the catalog, filters, and get a detail page at `/projects/<slug>`.
- **Programs**: `src/data/programs.js`
- **Showcase**: `src/data/showcase.js`
- **Design tokens** (colors, spacing, type): top of `src/styles/global.css` under `:root`.
- **Home page**: `src/pages/Home.jsx` + `src/styles/home-exact.css` — the home page is styled in its own isolated stylesheet (scoped under `.home-exact`) so it can't drift from or be affected by the rest of the site's shared design system.
