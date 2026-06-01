# frontend-namanpuja

The public website for [namanpuja.com](https://namanpuja.com) — book authentic Vedic pujas at home or online.

## Tech stack

- **Next.js 14** (App Router, RSC, ISR) + **TypeScript**
- **Tailwind CSS** — saffron / white brand theme
- **Framer Motion** — animations & transitions
- **lucide-react** — icons

## The core flow

The site implements the **Choose Country → Choose City → All Pujas** journey:

```
/                       Home (hero + flow selector + featured pujas + temples)
/city/[slug]            All pujas available in a city
/locations/[slug]       SEO landing page for a puja × city (the main content page)
/pujas/[slug]           Puja overview
/temples/[slug]         Temple page
/book                   Booking form (home-visit or online e-puja)
/sitemap.xml, /robots.txt
```

Each `/locations/[slug]` page renders the full SEO content (intro, benefits,
rituals, samagri, FAQs, service areas, internal links) and emits JSON-LD
(`Service`, `FAQPage`, `BreadcrumbList`) — modelled on the reference content brief.

## Getting started

```bash
cp .env.example .env.local     # point NEXT_PUBLIC_API_URL at the backend
npm install
npm run dev                    # http://localhost:3000
```

> The site fetches content from **backend-namanpuja**. Start the backend (and seed
> the database) first, or pages will render with empty states. API calls fail
> gracefully so the site still builds and renders without a running backend.

## Project structure

```
src/
├── app/                # routes (App Router)
├── components/         # Navbar, Footer, Hero, FlowSelector, PujaCard, BookingForm, …
└── lib/                # api client + shared types
```

## Build

```bash
npm run build && npm start
```
