import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import OrderCTA from '@/components/layout/OrderCTA'
import CartDrawer from '@/components/shop/CartDrawer'
import WhatsAppWidget from '@/components/whatsapp/WhatsAppWidget'
import MobileNav from '@/components/layout/MobileNav'
import Toast from '@/components/ui/Toast'

export default function Layout() {
  const { pathname } = useLocation()

  // Start every new page from the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    // Bottom padding on phones keeps content clear of the bottom bar
    <div className="min-h-screen pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <OrderCTA />
      <Footer />
      <CartDrawer />
      <WhatsAppWidget />
      <MobileNav />
      <Toast />
    </div>
  )
}
