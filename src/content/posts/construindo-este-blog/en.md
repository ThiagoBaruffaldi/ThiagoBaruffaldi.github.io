---
title: "Building this Minimalist Blog from Scratch with Astro, i18n & GitHub Pages"
date: 2026-08-26
threads: ["projetos", "aprendizado"]
summary: "A deep dive into how this blog was designed, architected, and built without a backend, featuring thread validation and seamless i18n."
---

This blog was engineered around a core principle: **frictionless Markdown authoring, instant local previews, and pure static delivery.**

## Architectural Choices

1. **Static Astro 4**: Pure static compilation (`output: 'static'`) optimized for free hosting on **GitHub Pages**.
2. **Co-located Content Model**: Each post lives in its own folder containing `banner.jpg`, `pt.md`, and `en.md`. Media assets are shared across languages without image duplication.
3. **Build-time Validation**: The build process verifies that the `threads` metadata in front matter remains strictly identical between Portuguese and English versions.

## UI Feature Highlights

- **Thread Sidebar**: Dynamic post filtering with automatic post counts and mobile collapsible drawer menu.
- **Client Search**: A build-time generated `search-index.json` enables instantaneous client-side text filtering across titles, summaries, and post bodies.
- **Theme Toggle**: Full Dark/Light theme support with `localStorage` state persistence and OS preference detection.
- **Language Switcher**: Smooth switching between PT and EN while maintaining active post context and injecting proper `hreflang` SEO tags.
