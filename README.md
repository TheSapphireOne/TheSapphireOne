# domi.lu

Personal website built with modern web technologies.

## Tech Stack

- **Astro** - Static site generator
- **Markdown** - Content management
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```
/
├── public/          # Static assets (images, CNAME, etc.)
├── src/
│   ├── layouts/     # Astro layouts
│   ├── pages/       # Site pages
│   ├── components/  # Reusable components
│   └── content/     # Markdown content
├── astro.config.mjs # Astro configuration
└── package.json
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

## License

MIT
