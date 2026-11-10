import { SHOP } from '@/config/shop'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.mapQuery)}&z=15&output=embed`
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP.mapQuery)}`

  const details = [
    { icon: '📍', label: 'Address', value: SHOP.address },
    { icon: '🕖', label: 'Store Hours', value: SHOP.hours },
    { icon: '📞', label: 'Phone', value: SHOP.phone, href: `tel:${SHOP.phone.replace(/\s/g, '')}` },
    { icon: '✉️', label: 'Email', value: SHOP.email, href: `mailto:${SHOP.email}` },
  ]

  return (
    <section id="contact" className="container-x scroll-mt-24 pb-20">
      <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5 lg:grid lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <SectionHeading
            eyebrow="Contact Us"
            title="Visit us or order from home"
            text="Drop by the store, give us a call, or send your list on WhatsApp. We are always happy to help."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {details.map((d) => (
              <li key={d.label} className="rounded-2xl bg-cream p-4">
                <span className="text-xl">{d.icon}</span>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink/45">{d.label}</p>
                {d.href ? (
                  <a href={d.href} className="mt-1 block text-sm font-medium hover:text-brand-700">
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium">{d.value}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${SHOP.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn bg-[#25D366] text-white hover:bg-[#1ebe5a]"
            >
              Chat on WhatsApp
            </a>
            <a href={mapLink} target="_blank" rel="noreferrer" className="btn-ghost">
              Get Directions
            </a>
          </div>
        </div>
        <div className="min-h-[320px] bg-brand-50">
          <iframe
            title={`${SHOP.name} location`}
            src={mapSrc}
            className="h-full min-h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}