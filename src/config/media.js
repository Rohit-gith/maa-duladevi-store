// 👉 Every photo used on the website, in one place.
// Files live in public/images/<folder>/ as .webp:
//   brand/       logo, logo icon, favicon
//   hero/        home page slideshow
//   categories/  category photos (hero tiles, offer banners)
//   banners/     top banner of inner pages
//   store/       photos of the shop
//   owner/       owner's photo (see OWNER.photo in config/shop.js)
// To use your own photo: drop the .jpg/.jpeg/.png in the right folder. It is converted to .webp automatically
// (original deleted) on `npm run dev` / `npm run build` / `npm run images`. Then use the .webp name here.

const img = (path) => `/images/${path}.webp`

// Brand
export const LOGO = img('brand/logo')
export const LOGO_ICON = img('brand/logo-icon')

// Optional hero background video. Put a file at public/videos/hero.mp4 and set:
//   export const HERO_VIDEO = '/videos/hero.mp4'
// Leave it empty ('') to show the photo slideshow below instead.
export const HERO_VIDEO = ''

// Full-screen background slideshow of the home hero (used when HERO_VIDEO is empty)
export const HERO_SLIDES = [
  { src: img('hero/onions-garlic'), caption: 'Onions & garlic, sorted fresh every morning' },
  { src: img('categories/staples'), caption: 'Whole spices & masalas, packed fresh' },
  { src: img('store/store-aisle'), caption: '500+ products under one roof' },
  { src: img('hero/ginger-garlic'), caption: 'Ginger, garlic & green chillies daily' },
  { src: img('banners/journey'), caption: 'Neatly stocked aisles, easy to shop' },
]

// Category photos (hero side arches, offer banners)
export const HERO_TILES = {
  dairy: img('categories/dairy'),
  staples: img('categories/staples'),
  snacks: img('categories/snacks'),
  variety: img('categories/variety'),
}

// Banner photo at the top of each inner page
export const PAGE_BANNERS = {
  shop: img('banners/shop'),
  offers: img('banners/offers'),
  about: img('store/store-aisle'),
  journey: img('banners/journey'),
  contact: img('hero/onions-garlic'),
}

// Store photo shown next to the owner
export const STORE_PHOTO = img('store/store-aisle')
