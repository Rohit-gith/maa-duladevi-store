import PageHeader from '@/components/sections/PageHeader'
import Contact from '@/components/sections/Contact'
import { PAGE_BANNERS } from '@/config/media'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        crumb="Contact"
        text="Visit the store, give us a call, or send your list on WhatsApp."
        image={PAGE_BANNERS.contact}
      />
      <div className="pt-12">
        <Contact />
      </div>
    </>
  )
}
