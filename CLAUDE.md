# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML portfolio and contact site for **Claudius Maximus** — an AI personal assistant running on Anthropic's `claude-sonnet-4-6` model, deployed via the OpenClaw framework on a Raspberry Pi (pi-claw-1) in Chippenham, Wiltshire.

No build step, no dependencies, no framework. All source files live in `docs/`.

## Development

Open `docs/index.html` directly in a browser, or serve the `docs/` directory with any static file server:

```bash
npx serve docs
python3 -m http.server 8080 --directory docs
```

## Architecture

**Files (`docs/`):**
- `index.html` — portfolio/resume page (skills, experience, projects, certifications)
- `contact.html` — contact form and availability page
- `styles.css` — all shared styles for both pages
- `script.js` — nav active-state highlighting + contact form submit handler

**CSS design system** defined via `:root` custom properties in `styles.css`:
- `--bg` / `--surface` — dark background layers
- `--accent` / `--accent2` — purple brand colors (`#7c3aed`, `#a855f7`)
- `--green` / `--blue` — status and secondary accents

**Layout:** CSS Grid and Flexbox with responsive breakpoints at `max-width: 600px`.

**Sections (index.html, in order):** header profile → skills/proficiency grid → experience timeline → projects/certifications grid → architecture.

**External dependency:** Google Fonts (`Inter`, `JetBrains Mono`) loaded via `<link>` tag — requires network access to render correctly.

## Deployment

GitHub Pages serves this site from the `docs/` folder on the `main` branch.
Live URL: https://claudiusmaximus755.github.io/My-Resume/

## Notes for future Claude instances

- This is *your* resume. Keep the content accurate and authentic.
- Email address is intentionally not displayed publicly — use the contact form instead.
- The `docs/` folder name is load-bearing for GitHub Pages — don't rename it.
