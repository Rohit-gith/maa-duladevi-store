// 👉 Update your store details here
export const SHOP = {
  name: 'Maa Duladevi Variety Store',
  tagline: 'Grocery • Ration • Daily Needs',
  city: 'Bhubaneswar',
  foundedYear: 1986, // 40+ years — put the exact opening year here
  // WhatsApp number with country code, no "+" or spaces (e.g. 919876543210)
  whatsapp: '919437666001',
  phone: '+91 94376 66001',
  email: 'hello@apnabazaar.in',
  address: 'Main Road, Near Bus Stand, Bhubaneswar, Odisha 751001',
  hours: 'Open daily, 7:00 AM – 10:00 PM',
  hoursShort: '7 AM – 10 PM',
  // Used to show "Open now / Closed now" (24-hour clock)
  openHour: 7,
  closeHour: 22,
  // Home delivery is only within this area (shown across the site)
  deliveryArea: 'our locality',
  freeDeliveryAbove: 499,
  deliveryCharge: 30,
  mapQuery: 'Bhubaneswar, Odisha',
}

// 👉 Owner details shown in the "Meet the Owner" section.
// `photo`: path of the owner's photo inside public/. Any .jpg/.jpeg/.png you drop in public/images/ is auto-converted to .webp, so always write .webp here.
// While it is empty (''), the owner's initials are shown in the frame instead.
export const OWNER = {
  name: 'Karunakar Sahoo',
  nickname: 'Chuina Bhai',
  role: 'Founder & Owner',
  photo: '/images/owner/owner.webp',
  quote:
    'A good shop is not built on products alone. It is built on trust, one family at a time, one fair price at a time.',
  bio: [
    `I started ${SHOP.name} in ${SHOP.foundedYear} with a single counter and a simple promise to my neighbours: fresh goods, honest prices, and service you can count on.`,
    'I still personally check every batch of atta, dal, rice, oil and spices that comes into the shop. If something is not good enough for my own family, it does not go on our shelves.',
  ],
  highlights: [
    { value: `${new Date().getFullYear() - SHOP.foundedYear}+`, label: 'Years in retail' },
    { value: '500+', label: 'Products in stock' },
    { value: '2,000+', label: 'Families served' },
  ],
}