import PageHeader from '@/components/sections/PageHeader'
import About from '@/components/sections/About'
import Owner from '@/components/sections/Owner'
import Testimonials from '@/components/sections/Testimonials'
import { PAGE_BANNERS } from '@/config/media'
import { SHOP } from '@/config/shop'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`The story of ${SHOP.name}`}
        crumb="About Us"
        text={`A family-run neighbourhood store serving ${SHOP.city} since ${SHOP.foundedYear}.`}
        image={PAGE_BANNERS.about}
      />
      <About />
      <div className="bg-white">
        <Owner />
      </div>
      <Testimonials />
    </>
  )
}
