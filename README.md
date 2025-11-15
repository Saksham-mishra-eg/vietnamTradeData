# VietnamTradeData — Next.js Starter (Header & Footer)

Phase 1 scaffold: Next.js 14 app router + Tailwind + MUI with a professional header and footer.

Setup
1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm run dev
```

What I added
- Next.js app router scaffold (`/app/layout.tsx`, `/app/page.tsx`)
- `components/Header` (Header + MobileMenu)
- `components/Footer`
- Tailwind + custom theme colors
- Material UI theme provider
- TypeScript config and ESLint


## Production helpers and notes

- Sitemap & robots: dynamic routes live at `app/sitemap.xml/route.ts` and `app/robots.txt/route.ts`.
	- The underlying configuration generators were moved to `lib/sitemap.ts` and `lib/robots.ts` so the route handlers can import them safely without colliding with app route filenames.
	- `lib/sitemap.ts` computes `lastModified` timestamps by reading each page's file mtime (falls back to now if not found).

- FAQ centralization: FAQ content used by components and JSON-LD is in `components/Shared/faqs.ts`.
	- Use the exported `dataFaqs`, `pricingFaqs`, and `contactFaqs` arrays to keep a single source of truth.
	- Pages (server components) generate FAQ JSON-LD by mapping those arrays into Schema.org `FAQPage` structures.

Useful scripts

- Run the bundle analyzer (shows package chunks and sizes):

```powershell
npm run analyze
```

- Optimize images (converts images in `public/images` to responsive WebP variants and writes to `public/images/optimized`):

```powershell
npm run image-optimize
```

If you want me to add a CI step that runs the image optimizer or to commit optimized images, tell me which sizes/variants you'd prefer.
