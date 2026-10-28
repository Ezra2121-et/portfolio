# Maintainer guide: publishing a writing post

This guide is for the portfolio owner and trusted maintainers with repository write access. The website is read-only for visitors. There is no public writing form, and visitors cannot publish posts directly to the live site.

## Publish a post

1. Sign in to the GitHub account that has write access to this repository.
2. Open \`src/pages/writing/\` and create a new Markdown file with a short, lowercase filename, for example \`what-i-learned-from-a-network-outage.md\`.
3. Copy the template below and write your post.
4. Commit your changes to the configured deployment branch. Vercel will publish the post after a successful deployment.

The Writing archive and homepage discover Markdown posts automatically, so you do not need to update a separate index.

## Template

\`\`\`md
---
layout: ../../layouts/WritingPost.astro
title: "A clear title that says what I learned"
date: 2026-10-28
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

Describe the steps you actually tried. Include commands or code blocks when useful.

## What happened

Record what you observed. Separate facts from guesses.

## What I learned

What makes more sense now? What would you try next time?
\`\`\`

## Categories

Use one of these values: \`linux\`, \`networking\`, \`security\`, or \`reflection\`. Use lowercase tags.

Before publishing, check the title, date, and description; remove passwords, API tokens, private logs, and other people's identifying information.

## How posts appear

Files in \`src/pages/writing/*.md\` become article pages. The Writing archive and homepage read their frontmatter and sort posts by date. Each article uses \`src/layouts/WritingPost.astro\`.
