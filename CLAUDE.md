# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for domi.lu built with Astro static site generator, Tailwind CSS, and deployed via GitHub Pages.

## Project Goals

- Create a website to represent me as a person and my work in a professional way
- Projects are mostly Mobile Apps
- The website should be desktop and mobile compatible and readable
- Every element should be representable in dark and light mode

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Architecture

### Static Site Configuration
- **Site URL**: Configured as `https://domi.lu` in `astro.config.mjs`
- **Output**: Pure static HTML (no SSR)
- **Deployment**: Automated via GitHub Actions on push to `master` branch

### Directory Structure
- `src/pages/` - File-based routing (index.astro → /)
- `src/layouts/` - Reusable layout components (BaseLayout.astro)
- `src/components/` - Reusable UI components
- `src/content/` - Markdown content files
- `public/` - Static assets copied directly to build output

### Critical Public Assets
The `public/` directory contains assets that must be preserved:
- `CNAME` - Custom domain configuration (domi.lu, www.domi.lu)
- `.well-known/assetlinks.json` - Android App Links for two apps (gambly, kompendium)
- `img/` - All site images including favicon

**Important**: When modifying the build process, ensure these files are copied to `dist/` during build.

### Deployment Pipeline
GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Triggers on push to `master` or manual dispatch
2. Builds with `npm run build` (outputs to `dist/`)
3. Uploads `dist/` as artifact
4. Deploys to GitHub Pages

The workflow uses Node 20 and requires GitHub Pages to be enabled with "GitHub Actions" as the deployment source.

### Layout Pattern
All pages should use `BaseLayout.astro` which provides:
- Standard HTML structure with meta tags
- Favicon reference to `/img/icon_domilu.ico`
- Configurable title and description props

### Styling
Tailwind CSS is integrated via `@astrojs/tailwind`. Classes can be used directly in `.astro` components without additional setup.

## Design System

### Border Radius
All UI elements should have rounded corners with a radius of **5 mm** (approximate CSS equivalent: `rounded-[20px]` in Tailwind or `border-radius: 20px` in plain CSS; adjust per screen density as needed).

### Typography
- **Primary font**: SN Pro — loaded from Google Fonts: https://fonts.google.com/specimen/SN+Pro
- Apply via `@import` in global CSS or via `<link>` in `BaseLayout.astro`

### Color Palette
| Role                 | Hex       |
|----------------------|-----------|
| Primary              | `#006FBA` |
| Secondary            | `#001F4E` |
| Primary background   | `#FFFFFF` |
| Secondary background | `#DFF3FD` |
| Highlight            | `#00A4E4` |

These should be registered as Tailwind CSS custom colors in `tailwind.config.mjs` (or equivalent) so they can be used as utility classes throughout the project.

### Dark Mode
All color choices must have a corresponding dark-mode variant. In practice:
- Swap primary/secondary backgrounds
- Keep primary and highlight colors; adjust contrast as needed
