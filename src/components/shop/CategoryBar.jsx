import { CATEGORIES } from '@/data/products'
import { useUIStore } from '@/store/useUIStore'

export default function CategoryBar() {
  const category = useUIStore((s) => s.category)
  const setCategory = useUIStore((s) => s.setCategory)

  return (
    <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {CATEGORIES.map((c) => {
        const active = c.id === category
        return (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`group flex min-w-[104px] shrink-0 flex-col items-center gap-2 rounded-2xl p-3 transition ${
              active ? 'bg-brand-600 text-white shadow-soft' : 'bg-white ring-1 ring-black/5 hover:-translate-y-0.5 hover:shadow-md'
            }`}
          >
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-3xl transition group-hover:scale-110 ${
                active ? 'from-white/20 to-white/10' : c.color
              }`}
            >
              {c.emoji}
            </span>
            <span className="whitespace-nowrap text-xs font-semibold">{c.name}</span>
          </button>
        )
      })}
    </div>
  )
}
