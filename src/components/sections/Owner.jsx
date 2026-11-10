import { OWNER, SHOP } from '@/config/shop'
import Ornament from '@/components/ui/Ornament'
import WhatsAppIcon from '@/components/whatsapp/WhatsAppIcon'
import { waLink } from '@/utils/whatsapp'

const initials = OWNER.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .slice(0, 2)

export default function Owner() {
  const years = new Date().getFullYear() - SHOP.foundedYear
  const callName = OWNER.nickname || OWNER.name.split(' ')[0]

  return (
    <section id="owner" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* ── Portrait in a gold temple arch ── */}
        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-md">
          {/* Soft offset arch behind */}
          <div className="absolute -left-3 -top-3 h-full w-full rounded-arch border border-gold-400/60 sm:-left-5 sm:-top-5" aria-hidden="true" />

          <div className="relative rounded-arch bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 p-[3px] shadow-luxe">
            <div className="rounded-arch bg-cream p-[6px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-arch bg-brand-950">
                {OWNER.photo ? (
                  <img src={OWNER.photo} alt={`${OWNER.name}, ${OWNER.role} of ${SHOP.name}`} className="h-full w-full object-cover" />
                ) : (
                  <div
                    className="grid h-full w-full place-items-center"
                    style={{ background: 'radial-gradient(70% 60% at 50% 35%, rgba(216,180,98,0.25), transparent 70%), #1a2210' }}
                  >
                    <div className="text-center">
                      <img src="/images/brand/logo-icon.webp" alt="" className="mx-auto h-28 w-28 object-contain opacity-90" />
                      <p className="mt-4 font-display text-6xl font-semibold text-gold-300">{initials}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name plate overlapping the arch */}
          <div className="relative mx-auto -mt-10 w-[88%] rounded-2xl bg-cream px-5 py-4 text-center shadow-luxe ring-1 ring-gold-400">
            <p className="font-display text-2xl font-semibold leading-tight text-brand-900">{OWNER.name}</p>
            {OWNER.nickname && <p className="font-hand text-2xl leading-tight text-terra-500">“{OWNER.nickname}”</p>}
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-600">{OWNER.role}</p>
          </div>

          {/* Years medallion */}
          <div className="absolute -right-1 top-10 grid h-24 w-24 place-items-center rounded-full bg-brand-950 text-center shadow-luxe ring-2 ring-gold-400 sm:-right-6 sm:h-28 sm:w-28">
            <p className="px-2 leading-none">
              <span className="block font-display text-3xl font-semibold text-gold-300">{years}+</span>
              <span className="mt-1 block text-[9px] font-semibold uppercase leading-tight tracking-wide text-cream/70 sm:text-[10px]">
                Years
                <br />
                of trust
              </span>
            </p>
          </div>

        </div>

        {/* ── Story ── */}
        <div>
          <div className="flex flex-col items-start gap-2">
            <Ornament />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-600">Meet the Owner</span>
          </div>
          <h2 className="mt-3 text-[2rem] font-semibold leading-[1.1] text-brand-900 sm:text-[2.6rem]">
            The person behind <em className="font-medium text-terra-500">every fair price.</em>
          </h2>

          <blockquote className="relative mt-8 rounded-2xl bg-paper px-6 py-6 ring-1 ring-gold-300/60 sm:px-8">
            <span className="absolute -top-6 left-5 font-display text-7xl leading-none text-gold-400" aria-hidden="true">
              “
            </span>
            <p className="font-display text-xl italic leading-relaxed text-brand-900 sm:text-2xl">{OWNER.quote}</p>
            <footer className="mt-3 text-sm font-semibold text-gold-600">
              — {OWNER.name}
              {OWNER.nickname ? ` (${OWNER.nickname})` : ''}
            </footer>
          </blockquote>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/65">
            {OWNER.bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-3 divide-x divide-gold-300/60 rounded-2xl bg-white ring-1 ring-gold-300/60">
            {OWNER.highlights.map((h) => (
              <div key={h.label} className="px-3 py-4 text-center sm:px-4">
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-2xl font-semibold text-brand-900 sm:text-3xl">{h.value}</dd>
                <dd className="mt-0.5 text-[11px] text-ink/55 sm:text-xs">{h.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <a href={`tel:${SHOP.phone.replace(/\s/g, '')}`} className="btn-primary px-6 py-3">
              📞 Call {callName}
            </a>
            <a href={waLink(`Namaste ${callName}! `)} target="_blank" rel="noreferrer" className="btn-whatsapp px-6 py-3">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp {callName}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
