# Pristine Jets Landing Site

Marketing / lead generation landing site for **Pristine Jets** built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint + Prettier

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

| Script | Purpose |
| ------ | ------- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server (after build) |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript diagnostics |
| `npm run format` | Prettier format all files |

## Structure

```
src/
  app/           # App Router entry (layout, page)
  components/    # Reusable UI sections (Hero, Features, CTA, Footer)
tailwind.config.ts
postcss.config.js
```

## Tailwind

Configuration lives in `tailwind.config.ts`. Global styles & custom layers in `src/app/globals.css`.

> Note: Newer Tailwind versions separate the PostCSS plugin into `@tailwindcss/postcss`. Our `postcss.config.js` uses:
> ```js
> module.exports = { plugins: { '@tailwindcss/postcss': {}, autoprefixer: {} } };
> ```
> If you upgrade Tailwind and encounter a build error referencing direct `tailwindcss` plugin usage, ensure this dependency is installed: `npm i -D @tailwindcss/postcss`.

## Next Steps / Roadmap (suggested)

- Connect CTA form to backend / CRM (HubSpot, Salesforce, etc.)
- Add analytics (Plausible / GA4)
- Add fleet gallery & aircraft detail modal
- Implement dark mode toggle
- Accessibility & performance pass (Lighthouse)

## Deployment

You can deploy easily to Vercel (recommended). Ensure the Node version in `package.json` engines is supported.

## License

Private / All rights reserved (adjust if you decide to open source).

---
Generated scaffold. Replace placeholder content (logos, copy) before production.
