import { useMemo } from 'react'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import { useUIStore } from '@/store/useUIStore'
import { discountPercent } from '@/utils/format'
import ProductCard from '@/components/shop/ProductCard'

const SORTS = [
  { id: 'popular', label: 'Most Popular' },
  { id: 'low', label: 'Price: Low to High' },
  { id: 'high', label: 'Price: High to Low' },
  { id: 'discount', label: 'Biggest Discount' },
]

export default function ProductGrid() {
  const search = useUIStore((s) => s.search)
  const category = useUIStore((s) => s.category)
  const sort = useUIStore((s) => s.sort)
  const setSort = useUIStore((s) => s.setSort)
  const setSearch = useUIStore((s) => s.setSearch)
  const setCategory = useUIStore((s) => s.setCategory)

  const list = useMemo(() => {
    const q = search.trim().toLowerCase()
    let res = PRODUCTS.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q))
    )
    if (sort === 'low') res = [...res].sort((a, b) => a.price - b.price)
    if (sort === 'high') res = [...res].sort((a, b) => b.price - a.price)
    if (sort === 'discount')
      res = [...res].sort((a, b) => discountPercent(b.price, b.mrp) - discountPercent(a.price, a.mrp))
    return res
  }, [search, category, sort])

  const catName = CATEGORIES.find((c) => c.id === category)?.name

  return (
    <div className="mt-8">
      <div className="mb-6 flex flex-col gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/5 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="input border-transparent bg-cream pl-11"
            aria-label="Search products"
          />
        </div>
        <p className="px-1 text-sm text-ink/60 sm:px-3">
          <span className="font-semibold text-ink">{list.length}</span> products
          {category !== 'all' && <> in <span className="font-semibold text-brand-700">{catName}</span></>}
        </p>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="input w-full bg-cream sm:w-auto" aria-label="Sort products">
          {SORTS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {list.length === 0 ? (
        <div className="rounded-3xl bg-white py-16 text-center ring-1 ring-black/5">
          <p className="text-5xl">🔎</p>
          <p className="mt-3 font-semibold">No products found</p>
          <p className="mt-1 text-sm text-ink/60">Try a different search, or message us on WhatsApp and we will arrange it for you.</p>
          <button
            onClick={() => {
              setSearch('')
              setCategory('all')
            }}
            className="btn-ghost mt-5"
          >
            View all products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}