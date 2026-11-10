import { SHOP } from '@/config/shop'
import SectionHeading from '@/components/ui/SectionHeading'

const STEPS = [
  {
    icon: '📝',
    title: 'Send your list',
    text: 'Add items to the cart here, or simply send your list on WhatsApp. A photo of a handwritten list works too!',
    tint: 'bg-accent-400',
  },
  {
    icon: '🧺',
    title: 'We pack it fresh',
    text: 'We confirm prices on WhatsApp and pack your order with the freshest stock from our shelves.',
    tint: 'bg-terra-400',
  },
  {
    icon: '🛵',
    title: 'Delivered in your locality',
    text: `We deliver to homes in ${SHOP.deliveryArea}. Pay by cash or UPI on delivery. Free delivery above ₹${SHOP.freeDeliveryAbove}.`,
    tint: 'bg-brand-400',
  },
]

export default function HowToOrder() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #f6c445 1.5px, transparent 2px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <SectionHeading
          center
          light
          eyebrow="How to Order"
          title="Groceries at your door in 3 easy steps"
          text={`No app to download. Order online or on WhatsApp. Home delivery is available in ${SHOP.deliveryArea}.`}
        />

        <ol className="relative mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-8">
          {/* Dashed connector line (desktop) */}
          <span
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-white/25 md:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative flex items-start gap-5 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10 md:block md:bg-transparent md:p-0 md:text-center md:ring-0"
            >
              <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white text-3xl shadow-xl md:mx-auto md:h-20 md:w-20 md:rounded-3xl md:text-4xl">
                {s.icon}
                <span
                  className={`absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full ${s.tint} font-display text-sm font-extrabold text-ink ring-4 ring-brand-900`}
                >
                  {i + 1}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold md:mt-6 md:text-xl">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70 md:mx-auto md:mt-2 md:max-w-xs">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${SHOP.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn bg-[#25D366] px-7 py-3.5 text-base text-white hover:bg-[#1ebe5a]"
          >
            Order on WhatsApp
          </a>
          <span className="text-sm text-white/60">
            or call <span className="font-semibold text-white">{SHOP.phone}</span>
          </span>
        </div>
      </div>
    </section>
  )
}
