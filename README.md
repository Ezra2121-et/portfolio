# Yosef Getnet — Portfolio

A fast, static-first personal portfolio built with Astro and plain CSS. It presents my work across IT support, networking, cybersecurity and practical software projects.

## Featured work

- **EthioNet Pulse** — a functional local network-monitoring prototype for connectivity checks, outage history, diagnostics and reliability reporting.
- **AMECO Visitor Management System** — a role-based full-stack application developed during my internship at Amhara Media Corporation, where I led a 9-member team.
- **AI-Based Career Guide** — a Computer Science capstone prototype for career exploration, skill-gap analysis, resume workflows, learning paths and AI-assisted interview practice.

Project pages link to their public source repositories. Prototype and internship work is labelled clearly; the portfolio does not present local projects as hosted production services.

## Features

- Responsive multi-page portfolio with project case studies and technical notes.
- Dark/light theme toggle with the preference saved in the browser.
- Live project push dates fetched from GitHub’s public repository API when the homepage loads. If GitHub is unavailable or rate-limited, the portfolio keeps its project links and fallback dates.
- Profile photo and downloadable CV stored under `public/`.

## Technology

- Astro
- TypeScript for content data
- HTML and plain CSS
- GitHub public REST API for project push timestamps
- Vercel static output

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/Ezra2121-et/portfolio.git
cd portfolio
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Update content

- `src/data/site.ts` — biography, contact links, featured projects, experience, training, technical stack and current focus.
- `src/pages/` — homepage and project/about/writing pages.
- `src/styles/global.css` — visual styling.
- `public/jossy.webp` — profile photo used on the homepage.
- `public/resume.pdf` — downloadable CV.

## Deployment

The Astro configuration targets static output for Vercel and uses `https://jossy.dev` as the canonical site URL. Connect this repository to Vercel to build and deploy commits from the chosen branch.
