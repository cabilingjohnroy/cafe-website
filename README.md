# Tala Coffee: Café Website (Portfolio Demo)

A one-page, mobile-first website for a **fictional** café in Mandaluyong.
Built as a portfolio sample for a ₱7,500 Starter Business Website package.

**Live demo:** https://cafe-website-q2ij.netlify.app

## Features
- Responsive layout (phone, tablet, desktop)
- Sticky navigation with an accessible mobile menu
- Live "Open now / Closed" status in Philippine time
- Featured menu with prices
- Photo gallery with a lightbox (built-in `<dialog>`, no libraries)
- Contact links (call, email), Google Maps link, social links
- Basic SEO: title, meta description, social share tags
- Accessibility: skip link, keyboard focus styles, alt text, reduced-motion support
- No frameworks, no build step, no paid APIs

## Tech
HTML5, CSS3, vanilla JavaScript. Fonts from Google Fonts (free).

## Project structure
```
cafe-website/
├── index.html          # all page content
├── css/style.css       # all styling (colors/fonts at the top in :root)
├── js/script.js        # menu toggle, open-now status, lightbox
├── assets/
│   ├── favicon.svg
│   └── images/         # about.jpg, gallery-1..6.jpg, hero-share.jpg
├── README.md
└── .gitignore
```

## Run locally
1. Open the folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.

## Customizing for a client
| What | Where |
|---|---|
| Colors and fonts | `css/style.css` → `:root` variables |
| Text, menu, prices | `index.html` |
| Opening hours (status badge) | `js/script.js` → `HOURS` |
| Photos | replace files in `assets/images/` (keep names, or update `src` and `alt`) |
| Map link | `index.html` → search `google.com/maps` |
| Search visibility | `index.html` → **delete** `<meta name="robots" content="noindex">` for real clients |

## Image credits
Placeholder images are generated abstract art. Replace them with photos you have the rights to use
(for example Unsplash or Pexels; check each site's license) or the client's own photos.

## Deploy
Hosted on Netlify (free plan), connected to this GitHub repository.
Every `git push` to `main` redeploys automatically.

---
*Tala Coffee is fictional. Address, phone, and email are placeholders.*
