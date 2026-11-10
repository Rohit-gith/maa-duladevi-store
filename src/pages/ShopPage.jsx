import PageHeader from '@/components/sections/PageHeader'
import CategoryBar from '@/components/shop/CategoryBar'
import ProductGrid from '@/components/shop/ProductGrid'
import { PAGE_BANNERS } from '@/config/media'

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Shop everything your home needs"
        crumb="Shop"
        text="Fresh groceries, pantry staples, household care and variety products, all at honest prices."
        image={PAGE_BANNERS.shop}
      />
      <section id="shop" className="container-x pb-12 pt-6 sm:pt-10">
        {/* Categories stay pinned under the navbar while scrolling the products */}
        <div className="sticky top-[var(--header-h,6.5rem)] z-30 -mx-4 bg-cream/95 px-4 pt-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <CategoryBar />
        </div>
        <ProductGrid />
      </section>
    </>
  )
}
