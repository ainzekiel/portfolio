# Arnel D. Dalogdog — Personal CV & Portfolio

A responsive personal CV website for Arnel D. Dalogdog, a fourth-year Information Technology student at Davao del Norte State College and aspiring data analyst / web developer. This project expands an earlier course portfolio into a professional foundation for internship, employment, and freelance opportunities.

**Student:** Arnel D. Dalogdog  
**Program:** Bachelor of Science in Information Technology  
**GitHub repository:** [ainzekiel/portfolio](https://github.com/ainzekiel/portfolio)  
**Live Vercel website:** [arnel's personal CV](https://portfolio-steel-gamma-bha7dn5z4m.vercel.app/)

## Features

- Personal introduction, career objective, basic information, and contact links.
- Education timeline, technical and professional skills, and certification previews.
- Eight academic projects, including CampusBorrow and Timpla Campus Café.
- Filterable project cards and 42 screenshots across accessible modal galleries.
- Thumbnail selection, arrow-key navigation, Escape dismissal, and focus restoration.
- Responsive desktop, tablet, and mobile layouts with a collapsible navigation menu.
- Subtle motion, reduced-motion support, keyboard focus indicators, and a skip link.
- GitHub, LinkedIn, Facebook, and Instagram profile links.

## Technologies

React 18, JavaScript/JSX, Vite 5, Tailwind CSS 3, Framer Motion 11, HTML, and CSS. Git and GitHub track development; Vercel hosts the production site.

This CV is a static frontend. Supabase and PostgreSQL appear in the showcased projects' descriptions, but the CV itself does not connect to those services. No API keys, environment variables, backend server, or database are required.

## Run locally

Install Node.js 22 LTS and npm, then run:

```powershell
git clone https://github.com/ainzekiel/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open the URL printed by Vite. Local development uses `/`; XAMPP is not required to run this React application.

## Build and preview

```powershell
npm run build
npm run preview
```

The production files are generated in `dist/`. Open the preview URL printed in the terminal to test the build before publishing.

For the existing GitHub Pages deployment:

```powershell
npm run build:github
```

The GitHub Pages workflow uses this separate build mode with `/portfolio/` as its asset base. Vercel and normal local builds use `/`. Image URLs follow `import.meta.env.BASE_URL`, so the same source supports both destinations.

## Project structure

```text
public/images/            Profile photo, project screenshots, and credentials
src/components/           Navigation, CV sections, galleries, and footer
src/data/projects.js      Project descriptions, categories, technologies, images, URLs
src/App.jsx               Section composition and reduced-motion configuration
src/index.css             Shared styles and responsive gallery layouts
src/main.jsx              React entry point
docs/checkpoint-3-qa.md    Local QA results, coverage, and limitations
docs/vercel-deployment.md Deployment and submission walkthrough
vite.config.js            Root and GitHub Pages build modes
vercel.json               Vercel build settings
.github/workflows/        Existing GitHub Pages deployment workflow
```

## How it works

`App.jsx` assembles the CV sections. `Projects.jsx` filters the data from `src/data/projects.js` using React state and opens a native HTML dialog for the selected project. The gallery stores its current screenshot index in state. Native modal behavior keeps keyboard interaction inside the dialog; cleanup restores page scrolling and focus to the opening control.

CSS media queries change the card and gallery columns for smaller screens. Framer Motion adds reveal effects, while the user's reduced-motion preference disables initial reveals. The contact buttons open the visitor's email or telephone application; there is no contact-form backend.

## Deployment

Follow [the Vercel deployment walkthrough](docs/vercel-deployment.md). Import this GitHub repository with these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Root directory | Repository root (`./`) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main`, after merging the CV refresh |
| Environment variables | None |

The Vercel configuration is included in `vercel.json`. Navigation uses section anchors rather than client-side URL routes, so no SPA catch-all rewrite is needed.

## Development history and validation

The original portfolio history is retained. The refresh is developed on `feature/cv-refresh` in meaningful checkpoints:

1. Complete personal CV content and navigation.
2. Add featured projects and responsive galleries.
3. Fix accessibility and verify responsive layouts.
4. Prepare documentation and deployment configuration.

Use a merge commit when merging the refresh pull request to retain those individual commits. See [checkpoint 3 QA](docs/checkpoint-3-qa.md) for the viewport tests, all 42 screenshot checks, keyboard checks, and testing limitations. Recheck the public Vercel deployment before submission.

## Content and acknowledgments

The site reuses and extends my earlier course portfolio. Project descriptions and screenshots represent academic work, including collaborative projects; their repository links identify the corresponding code. The interface uses Google Fonts (IBM Plex Sans, Space Grotesk, and JetBrains Mono), with local fallback fonts.

AI assistance was used for implementation, documentation, and review. The component structure and interaction flow above provide a starting point for explaining the submitted code.

## Submission

- Vercel live URL: https://portfolio-steel-gamma-bha7dn5z4m.vercel.app/
- GitHub repository: https://github.com/ainzekiel/portfolio

Verify both links in a signed-out/private browser window. The site should open without requiring the evaluator to sign in.
