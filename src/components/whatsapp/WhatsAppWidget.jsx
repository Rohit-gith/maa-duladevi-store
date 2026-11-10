import { useEffect, useState } from 'react'
import { SHOP } from '@/config/shop'
import { useUIStore } from '@/store/useUIStore'
import { isOpenNow, openWa } from '@/utils/whatsapp'
import WhatsAppIcon from '@/components/whatsapp/WhatsAppIcon'

const QUICK_REPLIES = [
  { label: '🛒 Send my grocery list', text: 'Namaste! I would like to order groceries. My list:\n1. ' },
  { label: '💰 Check the price of an item', text: 'Namaste! Please tell me the price of: ' },
  { label: '🚚 Do you deliver to my area?', text: 'Namaste! Do you deliver to my area? My address is: ' },
  { label: '🕖 Is the store open now?', text: 'Namaste! Is the store open now?' },
]

const time = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

export default function WhatsAppWidget() {
  const open = useUIStore((s) => s.waOpen)
  const toggle = useUIStore((s) => s.toggleWhatsApp)
  const close = useUIStore((s) => s.closeWhatsApp)
  const [msg, setMsg] = useState('')
  const openNow = isOpenNow()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const send = (text) => {
    openWa(text)
    setMsg('')
    close()
  }

  return (
    <>
      {/* Floating button (computers & tablets; phones use the bottom bar) */}
      <button
        onClick={toggle}
        className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 md:flex"
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
      >
        {!open && (
          <span className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-brand-900 opacity-0 shadow-luxe ring-1 ring-gold-300 transition group-hover:opacity-100">
            Chat with us
          </span>
        )}
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-whatsapp-500 text-white shadow-luxe ring-4 ring-gold-300/70 transition group-hover:scale-105">
          {!open && <span className="absolute inset-0 animate-pulseRing rounded-full bg-whatsapp-500" aria-hidden="true" />}
          {open ? <span className="relative text-2xl">✕</span> : <WhatsAppIcon className="relative h-8 w-8" />}
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop on phones */}
          <div className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-[2px] md:hidden" onClick={close} aria-hidden="true" />

          <div
            role="dialog"
            aria-label="Chat with us on WhatsApp"
            className="fixed inset-x-0 bottom-0 z-[60] animate-slideUp overflow-hidden rounded-t-[1.75rem] bg-cream shadow-luxe ring-1 ring-gold-300 md:inset-x-auto md:bottom-28 md:right-6 md:w-[23rem] md:rounded-[1.75rem]"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-whatsapp-900 to-brand-950 px-5 pb-5 pt-4 text-cream">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-cream/30 md:hidden" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="relative shrink-0">
                  <img src="/images/brand/logo-icon.webp" alt="" className="h-12 w-12 rounded-full bg-cream object-contain p-0.5 ring-2 ring-gold-300" />
                  <span
                    className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full ring-2 ring-whatsapp-900 ${openNow ? 'bg-whatsapp-500' : 'bg-gold-400'}`}
                  />
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="font-display text-[17px] font-semibold leading-tight">{SHOP.name}</p>
                  <p className="text-xs text-cream/70">
                    {openNow ? 'Open now · usually replies in minutes' : `Closed now · we reply from ${SHOP.openHour} AM`}
                  </p>
                </div>
                <button onClick={close} className="grid h-9 w-9 place-items-center rounded-full text-cream/80 hover:bg-cream/10" aria-label="Close">
                  ✕
                </button>
              </div>
            </div>

            {/* Chat body */}
            <div
              className="space-y-3 px-4 py-5"
              style={{
                backgroundColor: '#efe6d6',
                backgroundImage: 'radial-gradient(rgba(196,154,60,0.18) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
              }}
            >
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-ink shadow-sm">
                <p>Namaste! 🙏</p>
                <p className="mt-1">
                  Welcome to <b>{SHOP.name}</b>. Send us your list or ask anything, we are happy to help.
                </p>
                <p className="mt-1 text-right text-[10px] text-ink/40">{time()}</p>
              </div>

              <div className="flex flex-col items-end gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => send(q.text)}
                    className="rounded-full bg-white px-4 py-2 text-left text-sm font-medium text-whatsapp-900 shadow-sm ring-1 ring-whatsapp-500/30 transition hover:bg-whatsapp-500 hover:text-white"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(msg.trim() || 'Namaste!')
              }}
              className="flex items-center gap-2 border-t border-gold-300/50 bg-cream p-3 pb-safe"
            >
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type your message..."
                className="min-w-0 flex-1 rounded-full bg-white px-4 py-3 text-[15px] outline-none ring-1 ring-gold-300/60 focus:ring-2 focus:ring-whatsapp-500"
                aria-label="Your message"
              />
              <button type="submit" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-whatsapp-500 text-white hover:bg-whatsapp-600" aria-label="Send on WhatsApp">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M3.4 20.4 21 12 3.4 3.6l-.02 6.5L15 12 3.38 13.9Z" />
                </svg>
              </button>
            </form>
            <p className="bg-cream px-4 pb-3 text-center text-[11px] text-ink/45 md:pb-3">
              Opens WhatsApp · {SHOP.phone}
            </p>
          </div>
        </>
      )}
    </>
  )
}
