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
│   └── images/         # put client photos here
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
| Photos | `index.html` → each `<img>` `src`, `data-full`, and `alt` |
| Map link | `index.html` → search `google.com/maps` |
| Search visibility | `index.html` → **delete** `<meta name="robots" content="noindex">` for real clients |

## Image credits
Photos from [Unsplash](https://unsplash.com), used under the free [Unsplash License](https://unsplash.com/license),
loaded directly from Unsplash's image CDN:
- About: https://unsplash.com/photos/person-making-latte-art-nzyzAUsbV0M
- Gallery 1: https://unsplash.com/photos/white-round-table-with-chairs-yjQDnOhGE34
- Gallery 2: https://unsplash.com/photos/white-ceramic-mug-on-brown-wooden-table-gXtvTOs4tzg
- Gallery 3: https://unsplash.com/photos/brown-bread-on-black-metal-rack-C6q6Yf-ECmE
- Gallery 4: https://unsplash.com/photos/portafilters-with-coffee-beans-and-grounds-69ilqMz0p1s
- Gallery 5: https://unsplash.com/photos/iced-coffee-in-plastic-cup-HRfnyL6AO-A
- Gallery 6: https://unsplash.com/photos/people-work-on-laptops-in-a-cozy-coffee-shop-pqltPFdZaUw
- Share preview: https://unsplash.com/photos/people-inside-cafe-qE1jxYXiwOA

For real clients, use the client's own photos and store them in `assets/images/`.

## Deploy
Hosted on Netlify (free plan), connected to this GitHub repository.
Every `git push` to `main` redeploys automatically.

---
*Tala Coffee is fictional. Address, phone, and email are placeholders.*
