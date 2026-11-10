import { Link } from 'react-router-dom'
import { BEST_SELLER_IDS, PRODUCTS } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

const PICKS = BEST_SELLER_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean)

export default function BestSellers() {
  return (
    <section className="container-x pb-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Customer Favourites" title="Best sellers this week" />
        <Link to="/shop" className="btn-ghost">
          View all products →
        </Link>
      </div>
      {/* Phones show the first 6 items to keep the page short */}
      <div className="mt-8 grid grid-cols-2 gap-3 max-sm:[&>*:nth-child(n+7)]:hidden sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {PICKS.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  )
}
