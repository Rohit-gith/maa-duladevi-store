// 👉 Add or edit products here. Prices are sample values: update them to your shop's prices.
// `image` can be an emoji, an image URL, or a file in the public folder (e.g. '/images/atta.webp').

export const CATEGORIES = [
  { id: 'all', name: 'All Products', emoji: '🛍️', color: 'from-brand-100 to-brand-200' },
  { id: 'staples', name: 'Rice, Atta & Flours', emoji: '🍚', color: 'from-amber-100 to-yellow-200' },
  { id: 'dal', name: 'Dals & Pulses', emoji: '🫘', color: 'from-orange-100 to-amber-200' },
  { id: 'spices', name: 'Oil, Spices & Salt', emoji: '🌶️', color: 'from-red-100 to-orange-200' },
  { id: 'fruits-veg', name: 'Potato, Onion, Garlic & Ginger', emoji: '🧅', color: 'from-amber-100 to-orange-200' },
  { id: 'dairy', name: 'Dairy & Bakery', emoji: '🥛', color: 'from-sky-100 to-blue-200' },
  { id: 'drinks', name: 'Cold Drinks & Ice Cream', emoji: '🥤', color: 'from-cyan-100 to-sky-200' },
  { id: 'snacks', name: 'Snacks, Tea & Biscuits', emoji: '🍪', color: 'from-orange-100 to-rose-200' },
  { id: 'household', name: 'Household & Personal Care', emoji: '🧴', color: 'from-violet-100 to-purple-200' },
  { id: 'variety', name: 'Variety Store', emoji: '🎁', color: 'from-pink-100 to-fuchsia-200' },
]

export const PRODUCTS = [
  // Rice, Atta & Flours
  { id: 13, name: 'Whole Wheat Atta', unit: '5 kg', price: 245, mrp: 290, category: 'staples', image: '🌾', tag: 'Best Seller' },
  { id: 14, name: 'Basmati Rice', unit: '1 kg', price: 120, mrp: 150, category: 'staples', image: '🍚' },
  { id: 40, name: 'Boiled Rice', unit: '5 kg', price: 260, mrp: 300, category: 'staples', image: '🍚', tag: 'Daily' },
  { id: 41, name: 'Arwa (Raw) Rice', unit: '5 kg', price: 240, mrp: 280, category: 'staples', image: '🍚' },
  { id: 42, name: 'Sona Masoori Rice', unit: '5 kg', price: 330, mrp: 380, category: 'staples', image: '🍚' },
  { id: 43, name: 'Maida', unit: '1 kg', price: 45, mrp: 52, category: 'staples', image: '🌾' },
  { id: 44, name: 'Suji (Rava)', unit: '500 g', price: 30, mrp: 36, category: 'staples', image: '🌾' },
  { id: 45, name: 'Besan', unit: '500 g', price: 55, mrp: 65, category: 'staples', image: '🌾' },
  { id: 46, name: 'Poha (Chuda)', unit: '500 g', price: 35, mrp: 42, category: 'staples', image: '🍚' },
  { id: 17, name: 'Sugar', unit: '1 kg', price: 46, mrp: 50, category: 'staples', image: '🧂' },

  // Dals & Pulses
  { id: 15, name: 'Toor (Arhar) Dal', unit: '1 kg', price: 155, mrp: 180, category: 'dal', image: '🫘', tag: 'Best Seller' },
  { id: 50, name: 'Moong Dal', unit: '1 kg', price: 130, mrp: 150, category: 'dal', image: '🫘' },
  { id: 51, name: 'Masoor Dal', unit: '1 kg', price: 105, mrp: 120, category: 'dal', image: '🫘' },
  { id: 52, name: 'Chana Dal', unit: '1 kg', price: 95, mrp: 110, category: 'dal', image: '🫘' },
  { id: 53, name: 'Urad Dal', unit: '1 kg', price: 140, mrp: 160, category: 'dal', image: '🫘' },
  { id: 54, name: 'Rajma', unit: '500 g', price: 85, mrp: 100, category: 'dal', image: '🫘' },
  { id: 55, name: 'Kabuli Chana', unit: '500 g', price: 80, mrp: 95, category: 'dal', image: '🫘' },

  // Oil, Spices & Salt
  { id: 16, name: 'Mustard Oil', unit: '1 L', price: 165, mrp: 190, category: 'spices', image: '🫙', tag: 'Daily' },
  { id: 60, name: 'Refined Sunflower Oil', unit: '1 L', price: 150, mrp: 175, category: 'spices', image: '🫙' },
  { id: 61, name: 'Pure Ghee', unit: '500 ml', price: 320, mrp: 360, category: 'spices', image: '🧈' },
  { id: 18, name: 'Turmeric Powder', unit: '200 g', price: 52, mrp: 65, category: 'spices', image: '🟡' },
  { id: 62, name: 'Red Chilli Powder', unit: '200 g', price: 60, mrp: 72, category: 'spices', image: '🌶️' },
  { id: 63, name: 'Coriander Powder', unit: '200 g', price: 45, mrp: 55, category: 'spices', image: '🌿' },
  { id: 64, name: 'Cumin (Jeera)', unit: '100 g', price: 55, mrp: 65, category: 'spices', image: '🌰' },
  { id: 65, name: 'Garam Masala', unit: '100 g', price: 70, mrp: 85, category: 'spices', image: '🫙' },
  { id: 66, name: 'Iodised Salt', unit: '1 kg', price: 25, mrp: 28, category: 'spices', image: '🧂' },

  // Potato, Onion, Garlic & Ginger (the only vegetables we stock)
  { id: 3, name: 'Potatoes', unit: '1 kg', price: 30, mrp: 35, category: 'fruits-veg', image: '🥔', tag: 'Daily' },
  { id: 2, name: 'Onions', unit: '1 kg', price: 35, mrp: 45, category: 'fruits-veg', image: '🧅', tag: 'Daily' },
  { id: 35, name: 'Garlic', unit: '250 g', price: 50, mrp: 60, category: 'fruits-veg', image: '🧄' },
  { id: 36, name: 'Ginger', unit: '250 g', price: 40, mrp: 50, category: 'fruits-veg', image: '🫚' },

  // Dairy & Bakery
  { id: 7, name: 'Toned Milk', unit: '1 L', price: 56, mrp: 58, category: 'dairy', image: '🥛', tag: 'Daily' },
  { id: 8, name: 'Fresh Paneer', unit: '200 g', price: 90, mrp: 100, category: 'dairy', image: '🧀' },
  { id: 9, name: 'Curd', unit: '400 g', price: 45, mrp: 50, category: 'dairy', image: '🥣' },
  { id: 10, name: 'Brown Bread', unit: '400 g', price: 45, mrp: 50, category: 'dairy', image: '🍞' },
  { id: 11, name: 'Eggs', unit: '12 pcs', price: 84, mrp: 96, category: 'dairy', image: '🥚' },
  { id: 12, name: 'Salted Butter', unit: '100 g', price: 58, mrp: 60, category: 'dairy', image: '🧈' },

  // Cold Drinks & Ice Cream
  { id: 22, name: 'Cola Soft Drink', unit: '2 L', price: 95, mrp: 100, category: 'drinks', image: '🥤', tag: 'Chilled' },
  { id: 70, name: 'Lemon Soft Drink', unit: '750 ml', price: 40, mrp: 45, category: 'drinks', image: '🥤' },
  { id: 71, name: 'Mango Drink', unit: '1.2 L', price: 70, mrp: 80, category: 'drinks', image: '🥭' },
  { id: 72, name: 'Packaged Drinking Water', unit: '1 L', price: 20, mrp: 20, category: 'drinks', image: '💧' },
  { id: 73, name: 'Vanilla Ice Cream', unit: '700 ml', price: 140, mrp: 160, category: 'drinks', image: '🍨', tag: 'Kids Favourite' },
  { id: 74, name: 'Chocolate Ice Cream', unit: '700 ml', price: 160, mrp: 180, category: 'drinks', image: '🍨' },
  { id: 75, name: 'Ice Cream Cone', unit: '1 pc', price: 35, mrp: 40, category: 'drinks', image: '🍦' },
  { id: 76, name: 'Kulfi', unit: '1 pc', price: 25, mrp: 30, category: 'drinks', image: '🍡' },

  // Snacks, Tea & Biscuits
  { id: 19, name: 'Namkeen Mixture', unit: '400 g', price: 95, mrp: 110, category: 'snacks', image: '🥨' },
  { id: 20, name: 'Biscuits Family Pack', unit: '600 g', price: 80, mrp: 90, category: 'snacks', image: '🍪' },
  { id: 21, name: 'Chocolate Bar', unit: '1 pc', price: 40, mrp: 45, category: 'snacks', image: '🍫' },
  { id: 80, name: 'Potato Chips', unit: '90 g', price: 20, mrp: 20, category: 'snacks', image: '🥔' },
  { id: 23, name: 'Premium Tea Leaves', unit: '500 g', price: 210, mrp: 250, category: 'snacks', image: '🍵' },
  { id: 81, name: 'Instant Coffee', unit: '50 g', price: 160, mrp: 180, category: 'snacks', image: '☕' },
  { id: 24, name: 'Instant Noodles', unit: 'Pack of 4', price: 56, mrp: 60, category: 'snacks', image: '🍜' },

  // Household & Personal Care
  { id: 25, name: 'Detergent Powder', unit: '1 kg', price: 120, mrp: 140, category: 'household', image: '🧺' },
  { id: 26, name: 'Dishwash Bar', unit: 'Pack of 3', price: 45, mrp: 50, category: 'household', image: '🧼' },
  { id: 27, name: 'Floor Cleaner', unit: '1 L', price: 99, mrp: 120, category: 'household', image: '🧴' },
  { id: 28, name: 'Toilet Tissue', unit: '4 rolls', price: 110, mrp: 130, category: 'household', image: '🧻' },
  { id: 85, name: 'Bath Soap', unit: 'Pack of 4', price: 140, mrp: 160, category: 'household', image: '🧼' },
  { id: 86, name: 'Toothpaste', unit: '150 g', price: 95, mrp: 105, category: 'household', image: '🪥' },
  { id: 87, name: 'Shampoo', unit: '180 ml', price: 130, mrp: 150, category: 'household', image: '🧴' },

  // Variety Store
  { id: 29, name: 'Steel Lunch Box', unit: '3 containers', price: 299, mrp: 399, category: 'variety', image: '🍱', tag: 'Offer' },
  { id: 30, name: 'Gift Wrapping Set', unit: '1 set', price: 79, mrp: 99, category: 'variety', image: '🎁' },
  { id: 31, name: 'School Notebooks', unit: 'Pack of 6', price: 150, mrp: 180, category: 'variety', image: '📒' },
  { id: 32, name: 'Plastic Bucket', unit: '20 L', price: 189, mrp: 240, category: 'variety', image: '🪣' },
  { id: 33, name: 'Clay Diya Set', unit: '12 pcs', price: 60, mrp: 80, category: 'variety', image: '🪔', tag: 'Festive' },
  { id: 34, name: 'Kids Toy Car', unit: '1 pc', price: 199, mrp: 299, category: 'variety', image: '🚗' },
]

// 👉 Products shown in "Best sellers this week" on the home page (by id, in this order)
export const BEST_SELLER_IDS = [13, 40, 15, 16, 7, 3, 2, 50, 22, 73]
