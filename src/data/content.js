// 👉 Website text content: edit stats, story, journey milestones and reviews here.

import { SHOP } from '@/config/shop'

export const STATS = [
  { value: `${new Date().getFullYear() - SHOP.foundedYear}+`, label: 'Years serving' },
  { value: '500+', label: 'Products in stock' },
  { value: '2,000+', label: 'Happy families' },
  { value: '4.8★', label: 'Customer rating' },
]

export const VALUES = [
  { icon: '🍚', title: 'Complete Ration', text: 'Rice, dal, atta, oil, spices, dairy, cold drinks and household items, all from trusted brands and suppliers.' },
  { icon: '🏷️', title: 'Honest Pricing', text: 'Everyday prices below MRP, with no hidden charges and transparent billing.' },
  { icon: '🤝', title: 'Community Rooted', text: 'A family-run store that knows its customers by name, not by order number.' },
]

export const JOURNEY = [
  {
    year: String(SHOP.foundedYear),
    title: 'Where It All Began',
    text: 'Opened as a small family-run grocery store with a single counter and a promise of fair prices.',
    icon: '🏪',
  },
  {
    year: '2015',
    title: 'Expanded to Variety',
    text: 'Added kitchenware, stationery, gifts and toys, becoming a one-stop shop for every household need.',
    icon: '🎁',
  },
  {
    year: '2018',
    title: 'Home Delivery Launched',
    text: 'Started home delivery within our locality so neighbourhood families could shop without leaving home.',
    icon: '🚚',
  },
  {
    year: '2020',
    title: 'Standing With Our Community',
    text: 'Kept shelves stocked and delivered essentials safely to hundreds of homes through difficult times.',
    icon: '❤️',
  },
  {
    year: '2023',
    title: 'WhatsApp Ordering',
    text: 'Introduced quick ordering on WhatsApp, now used by over 2,000 regular customers.',
    icon: '💬',
  },
  {
    year: '2026',
    title: 'Now Online',
    text: 'Launched our online store, making it easier than ever to browse, order and save.',
    icon: '🌐',
  },
]

export const REVIEWS = [
  {
    name: 'Priya Sharma',
    role: 'Customer since 2016',
    text: 'Atta, dal and spices are always good quality and the prices are fair. My go-to store for the monthly groceries.',
    stars: 5,
  },
  {
    name: 'Amit Patnaik',
    role: 'Customer since 2019',
    text: 'Ordering on WhatsApp is incredibly convenient. I send my list and they deliver it right to my home in the colony.',
    stars: 5,
  },
  {
    name: 'Sunita Das',
    role: 'Customer since 2014',
    text: 'Beyond groceries, I find school supplies and gifts here too. Friendly staff and genuinely fair prices.',
    stars: 5,
  },
]