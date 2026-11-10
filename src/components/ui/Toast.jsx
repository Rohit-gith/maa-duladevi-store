import { useUIStore } from '@/store/useUIStore'

export default function Toast() {
  const toast = useUIStore((s) => s.toast)
  if (!toast) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 top-24 z-[60] flex justify-center px-4">
      <div key={toast.id} className="animate-fadeUp rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-2xl">
        {toast.message}
      </div>
    </div>
  )
}
