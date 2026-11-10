import { Link } from 'react-router-dom'
import { SHOP } from '@/config/shop'
import { CATEGORIES } from '@/data/products'
import { useUIStore } from '@/store/useUIStore'

export default function Footer() {
  const setCategory = useUIStore((s) => s.setCategory)

  return (
    <footer className="bg-brand-950 pb-10 pt-14 text-cream/65">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="inline-block rounded-2xl bg-cream px-4 py-3">
            <img src="/images/brand/logo.webp" alt={SHOP.name} width="1200" height="487" loading="lazy" className="h-16 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Your neighbourhood store for fresh groceries, daily essentials and variety products since {SHOP.foundedYear}.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Shop</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
              <li key={c.id}>
                <Link to="/shop" onClick={() => setCategory(c.id)} className="transition hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="transition hover:text-white">About Us</Link></li>
            <li><Link to="/journey" className="transition hover:text-white">Our Journey</Link></li>
            <li><Link to="/offers" className="transition hover:text-white">Offers</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>📍 {SHOP.address}</li>
            <li>
              📞 <a href={`tel:${SHOP.phone.replace(/\s/g, '')}`} className="hover:text-white">{SHOP.phone}</a>
            </li>
            <li>
              ✉️ <a href={`mailto:${SHOP.email}`} className="hover:text-white">{SHOP.email}</a>
            </li>
            <li>🕖 {SHOP.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} {SHOP.name}. All rights reserved.</p>
        <p>Fresh • Affordable • Trusted</p>
      </div>
    </footer>
  )
}