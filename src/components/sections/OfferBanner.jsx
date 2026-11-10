import { useNavigate } from 'react-router-dom'
import { HERO_TILES } from '@/config/media'
import { useUIStore } from '@/store/useUIStore'

const OFFERS = [
  {
    badge: 'Monthly Savings',
    title: 'Pantry Stock-Up Sale',
    text: 'Save up to 20% on atta, rice, dal, cooking oil and spices.',
    highlight: '20%',
    cat: 'staples',
    img: HERO_TILES.staples,
    bg: 'bg-terra-500',
    fade: 'from-terra-500 via-terra-500/85',
    button: 'bg-accent-400 text-ink hover:bg-accent-500',
  },
  {
    badge: 'Variety Corner',
    title: 'Gifts & Home Essentials',
    text: 'Kitchenware, stationery, festive décor and toys at special prices.',
    highlight: '25%',
    cat: 'variety',
    img: HERO_TILES.variety,
    bg: 'bg-brand-800',
    fade: 'from-brand-800 via-brand-800/85',
    button: 'bg-white text-ink hover:bg-cream',
  },
]

export default function OfferBanner() {
  const setCategory = useUIStore((s) => s.setCategory)
  const setSearch = useUIStore((s) => s.setSearch)
  const navigate = useNavigate()

  const go = (cat) => {
    setSearch('')
    setCategory(cat)
    navigate('/shop')
  }

  return (
    <section id="offers" className="container-x scroll-mt-24 pb-4">
      <div className="grid gap-5 md:grid-cols-2">
        {OFFERS.map((o) => (
          <div key={o.title} className={`group relative isolate overflow-hidden rounded-3xl ${o.bg} text-white shadow-soft`}>
            <img
              src={o.img}
              alt=""
              loading="lazy"
              className="absolute inset-y-0 right-0 -z-10 h-full w-3/5 object-cover transition duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 -z-10 bg-gradient-to-r ${o.fade} to-transparent`} />

            <div className="relative max-w-[68%] p-7 sm:p-9">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">{o.badge}</span>
              <p className="mt-4 font-display leading-none">
                <span className="text-sm font-semibold uppercase">Up to </span>
                <span className="text-5xl font-extrabold text-accent-400">{o.highlight}</span>
                <span className="text-sm font-semibold uppercase"> off</span>
              </p>
              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">{o.title}</h3>
              <p className="mt-2 text-sm text-white/85">{o.text}</p>
              <button onClick={() => go(o.cat)} className={`btn mt-6 ${o.button}`}>
                Shop the Offer →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
