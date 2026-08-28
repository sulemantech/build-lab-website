# Build Lab — by MetaFront

Learn → Build → Ship

A React + Vite marketing site for **Build Lab**, MetaFront's hands-on learning initiative for kids, teenagers, and university students. Visitors are guided by category ("What do you want to build?") into a catalog of real, mentored projects rather than a traditional course list.

## Stack

- React 18 + Vite
- React Router for client-side routing
- Plain CSS with design tokens (`src/styles/global.css`) — no UI framework
- Content lives in `src/data/*.js` (projects, programs, showcase) so copy can be edited without touching components

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, "What do you want to build?", featured projects, How It Works, For Kids / For University, mentorship, showcase preview, Ship Day, MetaFront credibility, final CTA |
| `/projects` | Filterable project catalog (category, level, audience — supports `?category=`, `?level=`, `?audience=` query params) |
| `/projects/:slug` | Project detail — build flow, weekly journey, what you'll ship, sidebar with program details |
| `/programs` | Young Creators, Digital Builders, University Builders, AI Builders |
| `/how-it-works` | Learn → Build → Ship, Ship Day |
| `/showcase` | Student projects (problem → product) + Builder Profile concept |
| `/for-parents` | Trust-building section for parents |
| `/about` | MetaFront ↔ Build Lab relationship, mentorship |
| `/join` | Program interest form |

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing content

- **Projects**: `src/data/projects.js` — add a project by appending to the `projects` array; it will automatically appear in the catalog, filters, and get a detail page at `/projects/<slug>`.
- **Programs**: `src/data/programs.js`
- **Showcase**: `src/data/showcase.js`
- **Design tokens** (colors, spacing, type): top of `src/styles/global.css` under `:root`.
