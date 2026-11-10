import { SHOP } from '@/config/shop'

// Opens WhatsApp (app on phones, WhatsApp Web on computers) with a ready-made message
export const waLink = (text = '') =>
  `https://wa.me/${SHOP.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const openWa = (text) => window.open(waLink(text), '_blank', 'noopener')

// Is the store open right now? (uses the device's local time)
export const isOpenNow = (d = new Date()) => {
  const h = d.getHours() + d.getMinutes() / 60
  return h >= SHOP.openHour && h < SHOP.closeHour
}
