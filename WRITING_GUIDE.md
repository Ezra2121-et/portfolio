# Maintainer guide: publishing a portfolio note

This workflow is for the repository owner and trusted maintainers with write access. Visitors can read the public blog, but there is no public submission or publishing form. Only authorised maintainers can change the website's content.

## Owner-only publishing workflow

1. Sign in to the GitHub account that has write access to this repository, then open `src/pages/writing/`.
2. Choose **Add file → Create new file**. Do not give repository write access to people who should not be able to publish.
3. Name it with a short, lowercase URL slug, for example `what-i-learned-from-a-network-outage.md`.
4. Paste the template below and write your note in Markdown.
5. Commit the file to `main`. Vercel should deploy it automatically.

3. Commit your article to the configured deployment branch. Vercel publishes the update after a successful deployment.

## Copy-and-paste template

```md
---
layout: ../../layouts/WritingPost.astro
title: "A clear title that says what I learned"
date: 2026-10-27
description: "One sentence that tells readers what this note covers."
category: networking
tags:
  - networking
  - learning
  - troubleshooting
---

## The question

What were you trying to understand or fix?

## What I did

Describe the steps you actually tried. Include commands or code in fenced blocks when useful.

## What happened

Record the evidence you observed. Separate what you know from what you suspect.

## What I learned

What makes more sense now? What would you try next time?
```

## Categories

Use one of these category values so the archive filters work:

- `linux`
- `networking`
- `security`
- `reflection`

Use lowercase tags. Aim for a useful short note rather than a long essay. Do not include passwords, API tokens, private logs, or identifying information from other people or organizations.

## Writing checklist

- Is the title specific?
- Does the description fit in one sentence?
- Are the date and category set?
- Did I separate observed facts from assumptions?
- Have I removed secrets and private information?
- Does the note explain one useful thing someone else could learn?

## How it works

Files inside the writing pages folder automatically become article pages. The Writing archive and homepage discover them with Astro's Markdown imports, sort them by date, and display their frontmatter. Each article uses the shared WritingPost layout.
