# Nopa Agro Processing — website

Corporate website for Nopa Agro Processing S.C. Built with Next.js (App Router) and Tailwind CSS v4, and exported as a fully static site.

See [SITEMAP.md](SITEMAP.md) for the page structure.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
```

The `out/` folder can be hosted anywhere static files are served, such as cPanel, Netlify, Vercel, Cloudflare Pages or S3.

## Where things live

| What | File |
| --- | --- |
| Company details, products, navigation | `lib/site.ts` |
| Colours, fonts, utilities | `app/globals.css` |
| Header / footer | `components/Header.tsx`, `components/Footer.tsx` |
| Product packaging illustrations | `components/ProductArt.tsx` |
| Quote form (opens an email to info@nopaagri.com) | `components/QuoteForm.tsx` |

**Adding a product:** add an entry to `products` in `lib/site.ts`. The product page, menus, footer, sitemap and quote form pick it up automatically. Pick an existing `art` style, or add a new one in `ProductArt.tsx`.

**Brand colours:** brand green `#538135` (from the company letterhead), forest `#1b3320`, paper `#f6f3ea`, maize accent `#d9a637`.

## Preview tip

Sections fade in on scroll. Add `?static` to any URL to show everything at once, for example when taking full-page screenshots.
