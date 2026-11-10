import { Link } from 'react-router-dom'
import { SHOP } from '@/config/shop'
import { STATS, VALUES } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function About() {
  const years = new Date().getFullYear() - SHOP.foundedYear

  return (
    <section id="about" className="container-x scroll-mt-24 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-soft sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />
            {/* Storefront illustration */}
            <div className="relative mx-auto max-w-sm">
              <div className="flex h-10 overflow-hidden rounded-t-2xl">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className={`flex-1 ${i % 2 ? 'bg-white' : 'bg-accent-500'}`} />
                ))}
              </div>
              <div className="rounded-b-2xl bg-cream p-5 text-ink">
                <p className="text-center font-display text-xl font-extrabold text-brand-800">{SHOP.name}</p>
                <p className="text-center text-[11px] uppercase tracking-[0.25em] text-ink/50">{SHOP.tagline}</p>
                <div className="mt-4 grid grid-cols-4 gap-2 text-2xl">
                  {['🍚', '🥛', '🌾', '🍪', '🧴', '🎁', '🫘', '🥤'].map((e) => (
                    <span key={e} className="grid aspect-square place-items-center rounded-xl bg-white shadow-sm">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mt-8 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15">
                  <p className="font-display text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -right-3 rounded-2xl bg-accent-500 px-5 py-4 text-ink shadow-xl sm:-right-6">
            <p className="font-display text-3xl font-extrabold leading-none">{years}+</p>
            <p className="text-xs font-semibold">Years of trust</p>
          </div>
        </div>

        {/* Story */}
        <div>
          <SectionHeading eyebrow="About Us" title="More than a store, a part of the neighbourhood." />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/65">
            <p>
              Founded in {SHOP.foundedYear}, {SHOP.name} began as a small family-run grocery store with a simple belief:
              every household deserves fresh, quality products at fair prices, served with a smile.
            </p>
            <p>
              Today we are a complete grocery and variety store, stocking over 500 products from rice, dal, atta,
              dairy and staples to cleaning supplies, kitchenware, stationery, festive items and gifts. Whether you walk
              in, call us, or order online, you get the same personal care that has kept families coming back for over a
              decade.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-black/5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">{v.icon}</span>
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-0.5 text-sm text-ink/60">{v.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/journey" className="btn-primary">
              Read Our Journey →
            </Link>
            <Link to="/contact" className="btn-ghost">
              Visit the Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}