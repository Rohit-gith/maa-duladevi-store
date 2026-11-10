// Small lotus between two gold hairlines (taken from the logo) — the site's signature divider
export function Lotus({ className = 'h-4 w-6' }) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 2c4 5 5.5 11 3.6 18.5-.8 3-2 5.5-3.6 7.5-1.6-2-2.8-4.5-3.6-7.5C18.5 13 20 7 24 2Z" />
      <path d="M8 10c6 .8 10.8 4.2 13.4 10.4.9 2.2 1.4 4.6 1.6 7.6-3-.4-5.6-1.3-7.8-2.8C9.6 21.4 7.4 16.3 8 10Z" opacity=".85" />
      <path d="M40 10c.6 6.3-1.6 11.4-7.2 15.2-2.2 1.5-4.8 2.4-7.8 2.8.2-3 .7-5.4 1.6-7.6C29.2 14.2 34 10.8 40 10Z" opacity=".85" />
      <path d="M1 20c5.2-.6 9.6.8 13.2 4.2 1.4 1.3 2.6 2.8 3.6 4.6-3.4.5-6.4.2-9-1C5.2 26.2 2.6 23.6 1 20Z" opacity=".6" />
      <path d="M47 20c-1.6 3.6-4.2 6.2-7.8 7.8-2.6 1.2-5.6 1.5-9 1 1-1.8 2.2-3.3 3.6-4.6C37.4 20.8 41.8 19.4 47 20Z" opacity=".6" />
    </svg>
  )
}

export default function Ornament({ light = false, className = '' }) {
  const line = light ? 'from-transparent to-gold-300/70' : 'from-transparent to-gold-500/70'
  return (
    <span className={`inline-flex items-center gap-3 ${light ? 'text-gold-300' : 'text-gold-500'} ${className}`} aria-hidden="true">
      <span className={`h-px w-10 bg-gradient-to-r ${line}`} />
      <Lotus />
      <span className={`h-px w-10 bg-gradient-to-l ${line}`} />
    </span>
  )
}
