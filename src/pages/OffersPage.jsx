import PageHeader from '@/components/sections/PageHeader'
import OfferBanner from '@/components/sections/OfferBanner'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { PAGE_BANNERS } from '@/config/media'
import { PRODUCTS } from '@/data/products'
import { discountPercent } from '@/utils/format'

const TOP_DEALS = [...PRODUCTS]
  .sort((a, b) => discountPercent(b.price, b.mrp) - discountPercent(a.price, a.mrp))
  .slice(0, 10)

export default function OffersPage() {
  return (
    <>
      <PageHeader
        title="Offers & savings"
        crumb="Offers"
        text="Everyday prices below MRP, plus special deals on pantry staples, gifts and home essentials."
        image={PAGE_BANNERS.offers}
      />
      <div className="pt-12">
        <OfferBanner />
      </div>
      <section className="container-x py-16">
        <SectionHeading eyebrow="Top Deals" title="Biggest discounts right now" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {TOP_DEALS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
