# BezLiny Cleaning Cooperation — Website

Professional single-page website for **BezLiny Cleaning Cooperation**, a drone cleaning company based in Warsaw, Poland.

## Features

- 🌐 Bilingual (Polish / English) with live toggle
- 📱 Fully responsive (mobile-first)
- 🎨 Modern dark/blue tech aesthetic with glass morphism effects
- ⚡ CSS-only scroll animations + JS Intersection Observer
- 📊 Animated counter stats section
- 📝 Contact form with client-side validation
- 🔍 SEO-optimised (meta tags, Open Graph, JSON-LD structured data)
- 🗺️ Sitemap & robots.txt included

## Project Structure

```
bezliny-website/
├── index.html          # Main single-page site
├── css/
│   └── style.css       # All styles (custom properties, responsive)
├── js/
│   └── main.js         # Interactivity (menu, i18n, counters, form)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Local Development

Just open `index.html` in a browser — no build step required.

```bash
# Or use any local server, e.g.:
npx serve .
# python
python -m http.server 8000
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `bezliny-website`).
2. Go to **Settings → Pages**.
3. Under **Source**, select the branch (e.g. `main`) and folder (`/ (root)`).
4. Click **Save**. Your site will be live at `https://<user>.github.io/bezliny-website/`.

### Custom Domain

1. In **Settings → Pages → Custom domain**, enter `bezliny.pl`.
2. Add a `CNAME` file to the repo root containing `bezliny.pl`.
3. Configure DNS:
   - `A` records pointing to GitHub Pages IPs (`185.199.108-111.153`).
   - `CNAME` record: `www` → `<user>.github.io`.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Other** (static site).
4. Output Directory: `.` (root).
5. Click **Deploy**.

### Custom Domain on Vercel

1. In Vercel dashboard → **Settings → Domains**, add `bezliny.pl`.
2. Update DNS `A` / `CNAME` records as instructed by Vercel.

## Customisation

| What                | Where                          |
|---------------------|--------------------------------|
| Brand colours       | `css/style.css` → `:root`     |
| All text content    | `js/main.js` → `translations` |
| Company info        | `index.html` + JSON-LD block  |
| Services list       | `index.html` → `#services`    |
| Testimonials        | `index.html` → `#testimonials`|

## Contact

- **Email:** cooperatebezliny@gmail.com
- **Phone:** +48 579 366 868
- **Address:** Cybernetyki 7G lok. 99, 02-677 Warszawa
- **NIP:** 5214130837

---

© 2025 BezLiny Cleaning Cooperation
