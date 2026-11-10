import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SHOP } from '@/config/shop'
import { HERO_SLIDES, HERO_VIDEO } from '@/config/media'
import { CATEGORIES, PRODUCTS } from '@/data/products'
import { useUIStore } from '@/store/useUIStore'
import { useCartStore } from '@/store/useCartStore'
import { rupee, discountPercent } from '@/utils/format'
import { isOpenNow } from '@/utils/whatsapp'
import WhatsAppIcon from '@/components/whatsapp/WhatsAppIcon'

const SLIDE_MS = 6000
const QUICK_SEARCHES = ['Rice', 'Atta', 'Toor Dal', 'Mustard Oil', 'Cold Drink']
const YEARS = new Date().getFullYear() - SHOP.foundedYear

const SHORTCUTS = CATEGORIES.filter((c) => c.id !== 'all').map((c) => ({
  ...c,
  count: PRODUCTS.filter((p) => p.category === c.id).length,
}))

// "Today's deals": everyday ration items, tagged best sellers first, then biggest discount
const DEAL_CATEGORIES = ['staples', 'dal', 'spices', 'fruits-veg', 'dairy']
const DEALS = [...PRODUCTS]
  .filter((p) => p.mrp > p.price && DEAL_CATEGORIES.includes(p.category))
  .sort((a, b) => !!b.tag - !!a.tag || discountPercent(b.price, b.mrp) - discountPercent(a.price, a.mrp))
  .slice(0, 4)

const isUrl = (s) => typeof s === 'string' && (s.startsWith('http') || s.startsWith('/'))

function DealRow({ p, compact = false }) {
  const qty = useCartStore((s) => s.items[p.id]?.qty ?? 0)
  const add = useCartStore((s) => s.add)
  const showToast = useUIStore((s) => s.showToast)
  const off = discountPercent(p.price, p.mrp)

  const onAdd = () => {
    add(p)
    if (qty === 0) showToast(`${p.name} added to cart ✅`)
  }

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white/95 p-2.5 pl-3 text-ink shadow-soft ring-1 ring-white/60 ${
        compact ? 'w-[17rem] shrink-0 snap-start' : ''
      }`}
    >
      <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-paper to-gold-200/70 text-3xl">
        {isUrl(p.image) ? <img src={p.image} alt="" className="h-full w-full rounded-xl object-cover" /> : p.image}
        <span className="absolute -left-1.5 -top-1.5 rounded-full bg-terra-500 px-1.5 py-0.5 text-[9px] font-bold leading-none text-white shadow">
          {off}% OFF
        </span>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold leading-tight">{p.name}</span>
        <span className="mt-0.5 block text-[11px] text-ink/50">{p.unit}</span>
        <span className="mt-1 flex items-baseline gap-1.5 whitespace-nowrap">
          <span className="font-display text-base font-semibold text-brand-800">{rupee(p.price)}</span>
          <span className="text-[11px] text-ink/40 line-through">{rupee(p.mrp)}</span>
          <span className="text-[11px] font-semibold text-brand-600">Save {rupee(p.mrp - p.price)}</span>
        </span>
      </span>
      <button
        onClick={onAdd}
        className={`grid h-9 shrink-0 place-items-center rounded-full px-3 text-xs font-bold transition active:scale-95 ${
          qty ? 'bg-brand-700 text-cream' : 'bg-brand-50 text-brand-800 ring-1 ring-brand-700/30 hover:bg-brand-700 hover:text-cream'
        }`}
        aria-label={`Add ${p.name} to cart`}
      >
        {qty ? `✓ ${qty}` : 'ADD'}
      </button>
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()
  const search = useUIStore((s) => s.search)
  const setSearch = useUIStore((s) => s.setSearch)
  const setCategory = useUIStore((s) => s.setCategory)
  const openWhatsApp = useUIStore((s) => s.openWhatsApp)
  const [active, setActive] = useState(0)
  const open = isOpenNow()

  useEffect(() => {
    if (HERO_VIDEO) return
    const t = setTimeout(() => setActive((a) => (a + 1) % HERO_SLIDES.length), SLIDE_MS)
    return () => clearTimeout(t)
  }, [active])

  const onSubmit = (e) => {
    e.preventDefault()
    setCategory('all')
    navigate('/shop')
  }

  const quickSearch = (q) => {
    setSearch(q)
    setCategory('all')
    navigate('/shop')
  }

  const openCategory = (cat) => {
    setSearch('')
    setCategory(cat)
    navigate('/shop')
  }

  return (
    <section id="home" className="relative isolate overflow-hidden bg-brand-950 text-cream">
      {/* ── Full-bleed photo slideshow ── */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {HERO_VIDEO ? (
          <video className="h-full w-full object-cover" src={HERO_VIDEO} poster={HERO_SLIDES[0]?.src} autoPlay muted loop playsInline />
        ) : (
          HERO_SLIDES.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt=""
              fetchpriority={i === 0 ? 'high' : 'low'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                i === active ? 'animate-kenburns opacity-100 motion-reduce:animate-none' : 'opacity-0'
              }`}
            />
          ))
        )}
      </div>
      {/* Readability overlays: strong behind the text, lighter on the photo side */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/80 via-brand-950/75 to-brand-950/95 lg:bg-gradient-to-r lg:from-brand-950 lg:via-brand-950/80 lg:to-brand-950/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(50% 60% at 0% 100%, rgba(200,90,52,0.28), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-x grid items-center gap-10 pb-10 pt-10 sm:pt-14 lg:min-h-[min(calc(100svh-var(--header-h,8rem)-7rem),46rem)] lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:py-16 xl:gap-20">
        {/* ── Left: copy ── */}
        <div className="min-w-0 animate-fadeUp">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-black/30 py-1.5 pl-2 pr-4 text-xs font-medium text-cream/90 ring-1 ring-white/15 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              {open && <span className="absolute inset-0 animate-pulseRing rounded-full bg-whatsapp-500" />}
              <span className={`relative h-2.5 w-2.5 rounded-full ${open ? 'bg-whatsapp-500' : 'bg-terra-400'}`} />
            </span>
            <span className="truncate">
              {open ? 'Open now' : 'Closed now'} · {SHOP.hoursShort}
              <span className="text-gold-300"> · </span>
              {YEARS}+ years of trust
            </span>
          </div>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:text-6xl xl:text-7xl">
            Fresh ration,
            <br />
            <span className="relative inline-block">
              <em className="bg-gradient-to-r from-gold-200 via-accent-400 to-gold-300 bg-clip-text pr-2 font-medium text-transparent">
                honest prices.
              </em>
              <svg
                className="absolute -bottom-1.5 left-0 h-3 w-[95%] text-accent-400/80"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 9c40-6 90-8 196-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Rice, dal, atta, oil, spices, dairy and every daily need, under one roof. Trusted by {SHOP.city} families for{' '}
            {YEARS}+ years, delivered to your door in {SHOP.deliveryArea}.
          </p>

          {/* Search */}
          <form
            onSubmit={onSubmit}
            className="mt-8 flex max-w-xl items-center gap-2 rounded-full bg-white p-1.5 pl-5 text-ink shadow-luxe ring-4 ring-white/10 transition focus-within:ring-gold-300/50"
          >
            <svg className="h-5 w-5 shrink-0 text-gold-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search rice, dal, oil..."
              className="min-w-0 flex-1 bg-transparent py-3 text-[15px] outline-none placeholder:text-ink/40"
              aria-label="Search products"
            />
            <button type="submit" className="btn-primary px-5 sm:px-8">
              Search
            </button>
          </form>
          <div className="no-scrollbar -mx-4 mt-3 flex items-center gap-2 overflow-x-auto px-4 text-xs sm:mx-0 sm:flex-wrap sm:px-0">
            <span className="shrink-0 text-cream/55">Popular:</span>
            {QUICK_SEARCHES.map((q) => (
              <button
                key={q}
                onClick={() => quickSearch(q)}
                className="shrink-0 rounded-full bg-white/10 px-3 py-1.5 font-medium text-cream/90 ring-1 ring-white/15 backdrop-blur transition hover:bg-gold-300 hover:text-brand-950"
              >
                {q}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:flex sm:flex-wrap sm:items-center">
            <Link to="/shop" className="btn-gold px-8 py-3.5 text-base">
              Shop Now <span aria-hidden="true">→</span>
            </Link>
            <button
              onClick={openWhatsApp}
              className="btn bg-whatsapp-500 px-6 py-3.5 text-base text-white shadow-lg shadow-whatsapp-500/25 hover:bg-whatsapp-600"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order on WhatsApp
            </button>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {['🧕🏽', '👨🏽', '👵🏽', '👩🏽'].map((e) => (
                  <span key={e} className="grid h-8 w-8 place-items-center rounded-full bg-cream text-base ring-2 ring-brand-950">
                    {e}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-cream">
                  <span className="text-accent-400">★★★★★</span> 4.8
                </p>
                <p className="text-xs text-cream/60">2,000+ happy families</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-white/15 sm:block" aria-hidden="true" />
            <p className="flex items-center gap-2 text-cream/80">
              <span className="text-lg" aria-hidden="true">🛵</span>
              Free delivery above {rupee(SHOP.freeDeliveryAbove)}
            </p>
          </div>
        </div>

        {/* ── Right: today's deals (glass panel on large screens) ── */}
        <div className="min-w-0 animate-fadeUp [animation-delay:150ms]">
          <div className="lg:rounded-[2rem] lg:bg-white/10 lg:p-5 lg:shadow-luxe lg:ring-1 lg:ring-white/20 lg:backdrop-blur-xl">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300">Today&apos;s deals</p>
                <p className="mt-1 font-display text-xl font-semibold text-cream sm:text-2xl">Up to 25% below MRP</p>
              </div>
              <Link to="/offers" className="shrink-0 text-xs font-semibold text-gold-200 hover:text-white">
                All offers →
              </Link>
            </div>

            {/* Mobile / tablet: swipeable cards */}
            <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 lg:hidden">
              {DEALS.map((p) => (
                <DealRow key={p.id} p={p} compact />
              ))}
            </div>
            {/* Desktop: stacked list */}
            <div className="hidden space-y-2.5 lg:block">
              {DEALS.map((p) => (
                <DealRow key={p.id} p={p} />
              ))}
            </div>

            <Link
              to="/offers"
              className="mt-4 hidden items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-terra-500 to-terra-600 px-5 py-4 text-white shadow-soft transition hover:brightness-110 lg:flex"
            >
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/80">This week only</span>
                <span className="font-display text-lg font-semibold">Pantry stock-up sale</span>
              </span>
              <span className="font-display text-3xl font-semibold text-accent-400">25%</span>
            </Link>
          </div>

          {/* Slide caption + progress */}
          {!HERO_VIDEO && (
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="min-w-0 truncate text-xs italic text-cream/70">📍 {HERO_SLIDES[active].caption}</p>
              <div className="flex shrink-0 gap-1.5">
                {HERO_SLIDES.map((s, i) => (
                  <button
                    key={s.src}
                    onClick={() => setActive(i)}
                    className="relative h-1.5 w-7 overflow-hidden rounded-full bg-white/25"
                    aria-label={`Show photo ${i + 1}`}
                  >
                    {i === active && (
                      <span
                        key={active}
                        className="absolute inset-y-0 left-0 animate-progress rounded-full bg-gold-300 motion-reduce:w-full motion-reduce:animate-none"
                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Category strip ── */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container-x py-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300">Shop by category</p>
            <Link to="/shop" className="text-xs font-medium text-cream/60 hover:text-gold-200">
              View all →
            </Link>
          </div>
          <div className="no-scrollbar -mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            {SHORTCUTS.map((c) => (
              <button
                key={c.id}
                onClick={() => openCategory(c.id)}
                className="group flex shrink-0 items-center gap-3 rounded-2xl bg-white/[0.06] py-2 pl-2 pr-4 text-left ring-1 ring-white/10 transition hover:bg-gold-300/15 hover:ring-gold-300/60"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-2xl transition group-hover:scale-105">
                  {c.emoji}
                </span>
                <span className="min-w-0">
                  <span className="block whitespace-nowrap text-[13px] font-medium leading-tight text-cream/90 group-hover:text-gold-200">
                    {c.name}
                  </span>
                  <span className="text-[11px] text-cream/45">{c.count} items</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
