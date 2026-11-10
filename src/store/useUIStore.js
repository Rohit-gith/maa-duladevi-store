import { create } from 'zustand'

export const useUIStore = create((set) => ({
  search: '',
  category: 'all',
  sort: 'popular',
  cartOpen: false,
  waOpen: false,
  toast: null,

  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  setSort: (sort) => set({ sort }),
  openCart: () => set({ cartOpen: true, waOpen: false }),
  closeCart: () => set({ cartOpen: false }),
  openWhatsApp: () => set({ waOpen: true, cartOpen: false }),
  closeWhatsApp: () => set({ waOpen: false }),
  toggleWhatsApp: () => set((s) => ({ waOpen: !s.waOpen, cartOpen: false })),

  showToast: (message) => {
    const id = Date.now()
    set({ toast: { id, message } })
    setTimeout(() => {
      set((s) => (s.toast?.id === id ? { toast: null } : s))
    }, 1800)
  },
}))
