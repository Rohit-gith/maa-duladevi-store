import Ornament from '@/components/ui/Ornament'

// Premium section heading: lotus ornament, small-caps eyebrow, serif title
export default function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <div className={`flex flex-col gap-2 ${center ? 'items-center' : 'items-start'}`}>
        <Ornament light={light} />
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${light ? 'text-gold-300' : 'text-gold-600'}`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-3 text-[2rem] font-semibold leading-[1.1] sm:text-[2.6rem] ${light ? 'text-cream' : 'text-brand-900'}`}
      >
        {title}
      </h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-cream/70' : 'text-ink/60'}`}>{text}</p>}
    </div>
  )
}
