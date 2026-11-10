import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import BestSellers from '@/components/home/BestSellers'
import HowToOrder from '@/components/home/HowToOrder'
import Owner from '@/components/sections/Owner'
import OfferBanner from '@/components/sections/OfferBanner'
import Testimonials from '@/components/sections/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <BestSellers />
      <HowToOrder />
      <Owner />
      <OfferBanner />
      <Testimonials />
    </>
  )
}
