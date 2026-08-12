# Ignite Laser Engraving — Mobile App

Installable progressive web app for [Ignite Laser Engraving](https://www.ignitelaserengraving.com): browse the shop, request quotes, book a consult, and contact the shop from a phone-first interface.

## Features

- Mobile app shell with bottom navigation (Home, Shop, Quote, Book, Contact)
- Shop catalog synced from the live Squarespace store with search, filters, and save-for-later
- Quote request form that opens email to `michael.shain@ignitelaserengraving.com` and keeps recent requests on-device
- Calendly booking for in-person / phone consults
- Open-now status, hours, click-to-call, email, maps, Etsy, Instagram, and Facebook
- Pricing announcement banner and Our Story page
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

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a reverse proxy in front of the Squarespace site).

## Notes

- Product catalog is sourced from the live Squarespace shop and stored in `src/data/products.json`.
- Quotes are stored in `localStorage` and submitted via `mailto:` so no backend is required for v1.
- Appointments use the live Calendly page: `https://calendly.com/michael-shain-ignitelaserengraving`.
