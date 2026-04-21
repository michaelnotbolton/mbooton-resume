# mbooton-resume

A React + TypeScript + Vite portfolio site designed to feel like a polished SaaS landing page for a business-oriented technologist. The UI uses Fluent UI as the structural design system, then layers in custom motion, glassy surfaces, and circuit-inspired decoration for personality.

## Stack

- React 19 + TypeScript
- Vite
- Fluent UI (`@fluentui/react-components`)
- Vitest + React Testing Library
- Playwright + `playwright-bdd`
- GitHub Actions + GitHub Pages

## Scripts

- `npm run dev` starts the local development server
- `npm run lint` runs ESLint
- `npm run test:unit` runs Vitest
- `npm run test:bdd` generates and runs the Gherkin scenarios
- `npm run build` creates the GitHub Pages production bundle
- `npm run verify` runs lint, tests, and build in sequence

## Local Setup

```bash
npm install
npx playwright install chromium
npm run dev
```

## Content Editing Guide

The content is intentionally separated from the presentation components:

- `src/content/profile.ts` controls hero copy and top-level positioning
- `src/content/impactHighlights.ts` controls the value-prop cards
- `src/content/projects.ts` controls the selected-work cards
- `src/content/experience.ts` controls the timeline content
- `src/content/contactLinks.ts` controls footer/contact links

This first version uses polished placeholders where LinkedIn-driven details are still missing. Replace the LinkedIn URL, email address, and timeline copy before publishing the final public version.

## Deployment

Production builds use the `/mbooton-resume/` base path so the site can deploy cleanly to GitHub Pages. The included workflows provide:

- `CI` for lint, unit tests, BDD tests, and build validation
- `Deploy` for publishing the `dist/` artifact to GitHub Pages from `main`
