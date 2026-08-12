# Ignite Laser Engraving — Mobile App

Installable progressive web app for [Ignite Laser Engraving](https://www.ignitelaserengraving.com): browse the shop, request quotes, read the story, and contact the shop from a phone-first interface.

## Features

- Mobile app shell with bottom navigation
- Home, Shop, Product detail, Quote request, Our Story, and Contact
- Quote form that opens the customer’s email app pre-filled to `michael.shain@ignitelaserengraving.com` and keeps a local copy of recent requests
- Click-to-call, email, maps, and Etsy shortcuts
- PWA install support (Add to Home Screen) with offline caching for the app shell and product images

## Develop

```bash
cd ignite-mobile
npm install
npm run dev
```

Open the local URL (default `http://localhost:5173`) on a phone or in a mobile viewport.

## Build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or Squarespace code injection / reverse proxy).

## Notes

- Product catalog is sourced from the live Squarespace shop and stored in `src/data/products.json`.
- Quotes are stored in `localStorage` on the device and submitted via `mailto:` so no backend is required for the first release.
