import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SHOP } from '@/config/shop'
import { useUIStore } from '@/store/useUIStore'
import { useCartStore, selectCount } from '@/store/useCartStore'
import { isOpenNow } from '@/utils/whatsapp'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/offers', label: 'Offers' },
  { to: '/about', label: 'About Us' },
  { to: '/journey', label: 'Our Journey' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const openCart = useUIStore((s) => s.openCart)
  const count = useCartStore(selectCount)
  const { pathname } = useLocation()
  const openNow = isOpenNow()

  // Close the mobile menu whenever the page changes
  useEffect(() => setMenuOpen(false), [pathname])

  // Share the header height as a CSS variable so sticky bars can sit right below it
  const headerRef = useRef(null)
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const update = () => document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b border-gold-300/50 transition-all ${
        scrolled ? 'bg-cream/90 shadow-[0_8px_30px_-16px_rgba(26,34,16,0.4)] backdrop-blur-md' : 'bg-cream'
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-brand-950 text-gold-200">
        <div className="container-x flex items-center justify-between gap-4 py-2 text-xs">
          <span className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${openNow ? 'bg-whatsapp-500' : 'bg-terra-400'}`} />
            <span>
              {openNow ? 'Open now' : 'Closed now'} · {SHOP.hoursShort}
              <span className="hidden sm:inline"> · Home delivery in {SHOP.deliveryArea}</span>
            </span>
          </span>
          <a href={`tel:${SHOP.phone.replace(/\s/g, '')}`} className="font-medium tracking-wide hover:text-cream">
            {SHOP.phone}
          </a>
        </div>
      </div>

      <nav className="container-x flex items-center gap-4 py-2.5">
        <Link to="/" className="flex shrink-0 items-center" aria-label={`${SHOP.name} home`}>
          <img src="/images/brand/logo.webp" alt={SHOP.name} width="1200" height="487" className="h-12 w-auto sm:h-16" />
        </Link>

        <ul className="mx-auto hidden items-center gap-7 text-[15px] lg:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative py-2 transition after:absolute after:inset-x-0 after:-bottom-0.5 after:mx-auto after:h-[2px] after:rounded-full after:bg-gold-500 after:transition-all ${
                    isActive
                      ? 'font-semibold text-brand-900 after:w-full'
                      : 'text-ink/65 after:w-0 hover:text-brand-900 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button onClick={openCart} className="btn-primary relative hidden px-5 md:inline-flex" aria-label="Open cart">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L20.5 8H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="20.5" r="1.3" />
              <circle cx="17" cy="20.5" r="1.3" />
            </svg>
            Cart
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold-400 px-1 text-[11px] font-bold text-brand-950 ring-2 ring-cream">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-brand-900 ring-1 ring-gold-300 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="container-x animate-fadeUp space-y-1 border-t border-gold-300/50 bg-cream py-3 lg:hidden">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-3 py-3 font-display text-lg ${
                    isActive ? 'bg-paper text-brand-900' : 'text-ink/80 hover:bg-paper'
                  }`
                }
              >
                {l.label}
                <span className="text-gold-500">›</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
