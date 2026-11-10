import { JOURNEY } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />

      <div className="container-x relative">
        <SectionHeading
          center
          light
          eyebrow="Our Journey"
          title="From a single counter to your favourite store."
          text="Every milestone has been shaped by the families we serve. Here is how our story has grown over the years."
        />

        <ol className="relative mx-auto mt-16 max-w-5xl">
          {/* Center line */}
          <span className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand-400 via-white/20 to-accent-500 md:left-1/2" aria-hidden="true" />

          {JOURNEY.map((m, i) => {
            const right = i % 2 === 1
            return (
              <li key={m.year} className="relative mb-10 pl-16 last:mb-0 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
                {/* Dot */}
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-lg ring-4 ring-ink md:left-1/2 md:-translate-x-1/2">
                  {m.icon}
                </span>

                <div className={`${right ? 'md:col-start-2' : 'md:text-right'}`}>
                  <div className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/[0.09]">
                    <span className="font-display text-sm font-bold tracking-wider text-accent-400">{m.year}</span>
                    <h3 className="mt-1 text-xl font-bold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{m.text}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}