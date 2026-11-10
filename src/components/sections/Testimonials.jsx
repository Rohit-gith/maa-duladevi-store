import { REVIEWS } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        center
        eyebrow="Testimonials"
        title="Trusted by families across the city"
        text="Don't just take our word for it. Here is what our regular customers have to say."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="relative flex flex-col rounded-3xl bg-white p-7 ring-1 ring-black/5 transition hover:shadow-soft">
            <span className="absolute right-6 top-4 font-display text-6xl leading-none text-brand-100" aria-hidden="true">
              “
            </span>
            <p className="text-accent-500">
              {'★'.repeat(r.stars)}
              <span className="text-black/15">{'★'.repeat(5 - r.stars)}</span>
            </p>
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">{r.text}</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-bold text-white">
                {r.name[0]}
              </span>
              <span className="leading-tight">
                <span className="block font-semibold">{r.name}</span>
                <span className="text-xs text-ink/50">{r.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}