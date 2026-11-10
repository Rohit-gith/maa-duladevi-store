import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SHOP } from '@/config/shop'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: {}, // { [productId]: { product, qty } }

      add: (product) =>
        set((state) => {
          const existing = state.items[product.id]
          return {
            items: {
              ...state.items,
              [product.id]: { product, qty: existing ? existing.qty + 1 : 1 },
            },
          }
        }),

      decrease: (id) =>
        set((state) => {
          const existing = state.items[id]
          if (!existing) return state
          const items = { ...state.items }
          if (existing.qty <= 1) delete items[id]
          else items[id] = { ...existing, qty: existing.qty - 1 }
          return { items }
        }),

      remove: (id) =>
        set((state) => {
          const items = { ...state.items }
          delete items[id]
          return { items }
        }),

      clear: () => set({ items: {} }),

      qtyOf: (id) => get().items[id]?.qty ?? 0,
    }),
    { name: 'apna-bazaar-cart' }
  )
)

// Derived values (selectors)
export const selectCount = (s) =>
  Object.values(s.items).reduce((sum, i) => sum + i.qty, 0)

export const selectSubtotal = (s) =>
  Object.values(s.items).reduce((sum, i) => sum + i.qty * i.product.price, 0)

export const selectSavings = (s) =>
  Object.values(s.items).reduce(
    (sum, i) => sum + i.qty * Math.max(0, i.product.mrp - i.product.price),
    0
  )

export const getDelivery = (subtotal) =>
  subtotal === 0 || subtotal >= SHOP.freeDeliveryAbove ? 0 : SHOP.deliveryCharge
