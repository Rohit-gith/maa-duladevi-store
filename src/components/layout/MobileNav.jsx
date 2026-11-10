import { NavLink } from 'react-router-dom'
import { SHOP } from '@/config/shop'
import { useUIStore } from '@/store/useUIStore'
import { useCartStore, selectCount } from '@/store/useCartStore'
import WhatsAppIcon from '@/components/whatsapp/WhatsAppIcon'

const icon = 'h-6 w-6'
const Home = () => (
  <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" strokeLinejoin="round" />
  </svg>
)
const Shop = () => (
  <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M4 7h16l-1.2 12.1a2 2 0 0 1-2 1.9H7.2a2 2 0 0 1-2-1.9z" strokeLinejoin="round" />
    <path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10" strokeLinecap="round" />
  </svg>
)
const Bag = () => (
  <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L20.5 8H6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="20.5" r="1.3" />
    <circle cx="17" cy="20.5" r="1.3" />
  </svg>
)
const Phone = () => (
  <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" strokeLinejoin="round" />
  </svg>
)

const item = 'flex flex-1 flex-col items-center gap-0.5 pt-2 pb-1.5 text-[10.5px] font-medium'
const tone = ({ isActive }) => `${item} ${isActive ? 'text-brand-800' : 'text-ink/50'}`

// App-style bottom bar for phones
export default function MobileNav() {
  const openCart = useUIStore((s) => s.openCart)
  const toggleWhatsApp = useUIStore((s) => s.toggleWhatsApp)
  const count = useCartStore(selectCount)

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-300/60 bg-cream/95 shadow-[0_-8px_30px_-12px_rgba(26,34,16,0.35)] backdrop-blur-md pb-safe md:hidden"
      aria-label="Quick menu"
    >
      <div className="flex items-end">
        <NavLink to="/" end className={tone}>
          <Home />
          Home
        </NavLink>
        <NavLink to="/shop" className={tone}>
          <Shop />
          Shop
        </NavLink>

        <button onClick={toggleWhatsApp} className={`${item} text-whatsapp-700`} aria-label="Chat on WhatsApp">
          <span className="-mt-7 grid h-14 w-14 place-items-center rounded-full bg-whatsapp-500 text-white shadow-luxe ring-4 ring-cream">
            <WhatsAppIcon className="h-7 w-7" />
          </span>
          WhatsApp
        </button>

        <button onClick={openCart} className={`${item} relative text-ink/50`} aria-label="Open cart">
          <span className="relative">
            <Bag />
            {count > 0 && (
              <span className="absolute -right-2.5 -top-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-terra-500 px-1 text-[10px] font-bold text-white ring-2 ring-cream">
                {count}
              </span>
            )}
          </span>
          Cart
        </button>
        <a href={`tel:${SHOP.phone.replace(/\s/g, '')}`} className={`${item} text-ink/50`}>
          <Phone />
          Call
        </a>
      </div>
    </nav>
  )
}
