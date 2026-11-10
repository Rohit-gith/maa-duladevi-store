import { Link } from 'react-router-dom'
import { SHOP } from '@/config/shop'
import { HERO_SLIDES } from '@/config/media'

// Big "order now" banner shown above the footer on every page
export default function OrderCTA() {
  return (
    <section className="container-x pb-16 pt-4">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-terra-600 px-6 py-12 text-white shadow-soft sm:px-12 sm:py-14">
        <img
          src={HERO_SLIDES[0]?.src}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 mix-blend-multiply"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-terra-700 via-terra-600/90 to-terra-500/60" />
        <span
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-accent-400/30"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="font-hand text-3xl leading-none text-accent-400">need your ration today?</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Send your list on WhatsApp, we will handle the rest.
            </h2>
            <p className="mt-3 text-white/80">
              Home delivery in {SHOP.deliveryArea} · Free above ₹{SHOP.freeDeliveryAbove} · Cash or UPI on delivery
            </p>
          </div>
          <div className="grid w-full shrink-0 gap-3 sm:flex sm:w-auto sm:flex-wrap">
            <a
              href={`https://wa.me/${SHOP.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn bg-white px-7 py-3.5 text-base text-ink hover:bg-cream"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#25D366] text-xs text-white">✆</span>
              WhatsApp Us
            </a>
            <Link to="/shop" className="btn px-7 py-3.5 text-base text-white ring-1 ring-white/50 hover:bg-white/10">
              Browse Shop →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
