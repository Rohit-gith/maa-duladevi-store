import PageHeader from '@/components/sections/PageHeader'
import Journey from '@/components/sections/Journey'
import { PAGE_BANNERS } from '@/config/media'

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        title="Our journey"
        text="From a single counter to your favourite neighbourhood store."
        image={PAGE_BANNERS.journey}
      />
      <div className="pt-12">
        <Journey />
      </div>
    </>
  )
}
