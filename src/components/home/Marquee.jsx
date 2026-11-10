import { Lotus } from '@/components/ui/Ornament'

const ITEMS = [
  'Complete Monthly Ration',
  'Cold Drinks & Ice Cream',
  'Home Delivery in Our Locality',
  'Prices Below MRP',
  'Order on WhatsApp',
  'Cash / UPI on Delivery',
  'Gifts, Toys & Stationery',
]

export default function Marquee() {
  // List is rendered twice so the -50% translate loops seamlessly.
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="mb-14 overflow-hidden border-y border-gold-400/50 bg-paper py-3.5" aria-label="Store highlights">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
        {loop.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-base italic text-brand-900 sm:text-lg"
            aria-hidden={i >= ITEMS.length}
          >
            {text}
            <Lotus className="h-3.5 w-5 text-gold-500" />
          </span>
        ))}
      </div>
    </div>
  )
}
