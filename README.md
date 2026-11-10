# Maa Duladevi Variety Store: Website

Website for **Maa Duladevi Variety Store**, a family-run grocery, ration and variety store in Bhubaneswar.
Customers can browse products, add them to a cart and send the order on **WhatsApp**.

**Tech:** React 18 · Vite 5 · Tailwind CSS 3 · React Router 6 · Zustand (state)

---

## Run the project

```bash
npm install        # first time only
npm run dev        # start locally → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

To open it on a phone (same Wi-Fi): `npm run dev -- --host` and open the `Network:` URL shown in the terminal.

---

## Folder structure

```
apna-bazaar/
├── index.html              Page title, favicon, fonts
├── vite.config.js          Vite + the "@" import alias (@ = src/)
├── jsconfig.json           Lets VS Code understand "@/..." imports (Ctrl+Click works)
├── tailwind.config.js      Colours, fonts, animations (design theme)
├── public/
│   └── images/             All photos (.webp)
│       ├── brand/          logo.webp, logo-icon.webp, favicon.webp
│       ├── hero/           Home page slideshow photos
│       ├── categories/     Category photos (dairy, staples, snacks, variety)
│       ├── banners/        Top banner of inner pages
│       ├── store/          Photos of the shop
│       └── owner/          Owner's photo goes here
└── src/
    ├── main.jsx            App entry point (router setup)
    ├── App.jsx             All page routes ( /, /shop, /offers, /about, /journey, /contact )
    ├── index.css           Global styles + reusable button classes
    │
    ├── config/             ⭐ Shop settings: edit these first
    │   ├── shop.js         Name, phone, WhatsApp, address, timings, delivery, owner details
    │   └── media.js        Paths of every photo used on the site
    │
    ├── data/               ⭐ Content: products and text
    │   ├── products.js     Categories, products, prices, best sellers
    │   └── content.js      Stats, values, journey timeline, customer reviews
    │
    ├── pages/              One file per URL (each page is built from components)
    │   ├── HomePage.jsx    /
    │   ├── ShopPage.jsx    /shop
    │   ├── OffersPage.jsx  /offers
    │   ├── AboutPage.jsx   /about
    │   ├── JourneyPage.jsx /journey
    │   ├── ContactPage.jsx /contact
    │   └── NotFoundPage.jsx  any wrong URL
    │
    ├── components/
    │   ├── layout/         Shown on EVERY page
    │   │   ├── Layout.jsx      Wraps every page (navbar + page + footer + overlays)
    │   │   ├── Navbar.jsx      Top bar, logo, menu, cart button
    │   │   ├── Footer.jsx      Bottom footer
    │   │   ├── MobileNav.jsx   Phone-only bottom bar (Home, Shop, WhatsApp, Cart, Call)
    │   │   └── OrderCTA.jsx    "Send your list on WhatsApp" banner above the footer
    │   ├── home/           Only used on the home page
    │   │   ├── Hero.jsx        Top section (arch gallery, search, categories)
    │   │   ├── Marquee.jsx     Scrolling highlights strip
    │   │   ├── BestSellers.jsx
    │   │   └── HowToOrder.jsx
    │   ├── sections/       Page sections reused on several pages
    │   │   ├── PageHeader.jsx  Photo banner at the top of inner pages
    │   │   ├── About.jsx, Owner.jsx, Journey.jsx, Contact.jsx
    │   │   ├── OfferBanner.jsx, Testimonials.jsx
    │   ├── shop/           Products and cart
    │   │   ├── ProductCard.jsx, ProductGrid.jsx, CategoryBar.jsx
    │   │   └── CartDrawer.jsx  Cart + checkout → sends the order on WhatsApp
    │   ├── whatsapp/       WhatsAppWidget.jsx (chat window), WhatsAppIcon.jsx
    │   └── ui/             Small reusable pieces: SectionHeading, Ornament (lotus), Toast
    │
    ├── store/              App state (Zustand)
    │   ├── useCartStore.js Cart items (saved in the browser)
    │   └── useUIStore.js   Search, category, cart / WhatsApp open, toast
    │
    └── utils/              Helper functions
        ├── format.js       ₹ price formatting, discount %
        └── whatsapp.js     WhatsApp link builder, "open now" check
```

**Imports** use the `@` alias for `src/`, so every path tells you where the file lives:

```js
import Navbar from '@/components/layout/Navbar'
import { SHOP } from '@/config/shop'
```

---

## Common changes

| What to change | File |
|---|---|
| Shop name, phone, WhatsApp number, address, timings, delivery area | `src/config/shop.js` |
| Owner name, photo, quote, story | `src/config/shop.js` → `OWNER` |
| Products, prices, categories, best sellers | `src/data/products.js` |
| Reviews, journey timeline, About-page values | `src/data/content.js` |
| Any photo | Put a `.webp` in `public/images/<folder>/`, then update `src/config/media.js` |
| Colours and fonts | `tailwind.config.js` |
| Add a new page | Create it in `src/pages/`, add a `<Route>` in `src/App.jsx`, add a link in `components/layout/Navbar.jsx` |

**Product photo:** put it in `public/images/` and set `image: '/images/products/atta.webp'` on the product. An emoji also works.

**Photos must be `.webp`** (smaller and faster than JPG/PNG).

---

## Deploy

Run `npm run build` and upload the `dist/` folder to Netlify, Vercel or any static host.
Because the site has multiple pages (`/shop`, `/about` …), the host must send every URL to `index.html`:
- **Netlify:** add a file `public/_redirects` with the line `/*  /index.html  200`
- **Vercel:** works out of the box for Vite projects
