import { useCartStore } from '@/store/useCartStore'
import { useUIStore } from '@/store/useUIStore'
import { rupee, discountPercent } from '@/utils/format'

const isUrl = (s) => typeof s === 'string' && (s.startsWith('http') || s.startsWith('/'))

export default function ProductCard({ product, index = 0 }) {
  const qty = useCartStore((s) => s.items[product.id]?.qty ?? 0)
  const add = useCartStore((s) => s.add)
  const decrease = useCartStore((s) => s.decrease)
  const showToast = useUIStore((s) => s.showToast)
  const off = discountPercent(product.price, product.mrp)

  const handleAdd = () => {
    add(product)
    if (qty === 0) showToast(`${product.name} added to cart ✅`)
  }

  return (
    <article
      className="group relative flex animate-fadeUp flex-col rounded-3xl bg-white p-3 ring-1 ring-gold-300/50 transition hover:-translate-y-1 hover:shadow-soft hover:ring-gold-400 sm:p-4"
      style={{ animationDelay: `${Math.min(index, 10) * 40}ms` }}
    >
      {off > 0 && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-terra-500 px-2 py-0.5 text-[11px] font-bold text-white">
          {off}% OFF
        </span>
      )}
      {product.tag && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
          {product.tag}
        </span>
      )}

      <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-paper to-cream">
        {isUrl(product.image) ? (
          <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        ) : (
          <span className="text-6xl transition duration-300 group-hover:scale-110 sm:text-7xl">{product.image}</span>
        )}
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug sm:text-base">{product.name}</h3>
        <p className="mt-0.5 text-xs text-ink/50">{product.unit}</p>

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold text-brand-900">{rupee(product.price)}</p>
            {off > 0 && <p className="text-xs text-ink/40 line-through">{rupee(product.mrp)}</p>}
          </div>

          {qty === 0 ? (
            <button onClick={handleAdd} className="btn rounded-xl border-2 border-brand-700 px-4 py-1.5 text-brand-800 hover:bg-brand-700 hover:text-cream">
              ADD
            </button>
          ) : (
            <div className="flex items-center overflow-hidden rounded-xl bg-brand-600 text-white">
              <button onClick={() => decrease(product.id)} className="px-2.5 py-1.5 font-bold hover:bg-brand-700" aria-label="Decrease quantity">
                −
              </button>
              <span className="min-w-6 text-center text-sm font-bold">{qty}</span>
              <button onClick={() => add(product)} className="px-2.5 py-1.5 font-bold hover:bg-brand-700" aria-label="Increase quantity">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}