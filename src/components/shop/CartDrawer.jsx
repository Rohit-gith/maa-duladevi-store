import { useEffect, useState } from 'react'
import { SHOP } from '@/config/shop'
import { useUIStore } from '@/store/useUIStore'
import { useCartStore, selectSubtotal, selectSavings, getDelivery } from '@/store/useCartStore'
import { rupee } from '@/utils/format'

export default function CartDrawer() {
  const open = useUIStore((s) => s.cartOpen)
  const close = useUIStore((s) => s.closeCart)
  const items = useCartStore((s) => s.items)
  const add = useCartStore((s) => s.add)
  const decrease = useCartStore((s) => s.decrease)
  const remove = useCartStore((s) => s.remove)
  const clear = useCartStore((s) => s.clear)
  const subtotal = useCartStore(selectSubtotal)
  const savings = useCartStore(selectSavings)

  const [form, setForm] = useState({ name: '', phone: '', address: '', payment: 'Cash on Delivery' })
  const [step, setStep] = useState('cart') // 'cart' | 'details'

  const list = Object.values(items)
  const delivery = getDelivery(subtotal)
  const total = subtotal + delivery
  const remainingForFree = Math.max(0, SHOP.freeDeliveryAbove - subtotal)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    if (!open) setStep('cart')
  }, [open])

  const placeOrder = (e) => {
    e.preventDefault()
    const lines = list.map(
      (i, n) => `${n + 1}. ${i.product.name} (${i.product.unit}) x ${i.qty} = ${rupee(i.qty * i.product.price)}`
    )
    const msg = [
      `🛒 *New Order - ${SHOP.name}*`,
      '',
      ...lines,
      '',
      `Subtotal: ${rupee(subtotal)}`,
      `Delivery: ${delivery === 0 ? 'FREE' : rupee(delivery)}`,
      `*Total: ${rupee(total)}*`,
      '',
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `📍 Address: ${form.address}`,
      `💳 Payment: ${form.payment}`,
    ].join('\n')

    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={close}
        className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-black/5 bg-white px-5 py-4">
          <div className="flex items-center gap-2">
            {step === 'details' && (
              <button onClick={() => setStep('cart')} className="mr-1 rounded-full px-2 py-1 hover:bg-brand-50" aria-label="Back">
                ←
              </button>
            )}
            <h2 className="text-lg font-bold">{step === 'cart' ? 'Your Cart 🛍️' : 'Delivery Details'}</h2>
          </div>
          <button onClick={close} className="grid h-9 w-9 place-items-center rounded-full hover:bg-brand-50" aria-label="Close cart">
            ✕
          </button>
        </header>

        {list.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <span className="text-7xl">🧺</span>
            <p className="mt-4 text-lg font-semibold">Your cart is empty</p>
            <p className="mt-1 text-sm text-ink/60">Add some fresh products to get started.</p>
            <button onClick={close} className="btn-primary mt-6">
              Start Shopping
            </button>
          </div>
        ) : step === 'cart' ? (
          <>
            {remainingForFree > 0 ? (
              <div className="mx-5 mt-4 rounded-2xl bg-accent-400/20 p-3 text-sm">
                Add <b>{rupee(remainingForFree)}</b> more to unlock <b>FREE</b> delivery 🎉
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-accent-500 transition-all"
                    style={{ width: `${Math.min(100, (subtotal / SHOP.freeDeliveryAbove) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="mx-5 mt-4 rounded-2xl bg-brand-100 p-3 text-sm font-medium text-brand-800">
                🎉 You have unlocked FREE delivery!
              </div>
            )}

            <ul className="flex-1 space-y-3 overflow-y-auto p-5">
              {list.map(({ product, qty }) => (
                <li key={product.id} className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-50 text-3xl">
                    {product.image.startsWith?.('http') || product.image.startsWith?.('/') ? (
                      <img src={product.image} alt="" className="h-full w-full rounded-xl object-cover" />
                    ) : (
                      product.image
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{product.name}</p>
                    <p className="text-xs text-ink/50">{product.unit} · {rupee(product.price)}</p>
                    <button onClick={() => remove(product.id)} className="mt-1 text-xs text-rose-500 hover:underline">
                      Remove
                    </button>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <p className="text-sm font-bold">{rupee(product.price * qty)}</p>
                    <div className="flex items-center overflow-hidden rounded-lg bg-brand-600 text-white">
                      <button onClick={() => decrease(product.id)} className="px-2 py-0.5 hover:bg-brand-700">−</button>
                      <span className="min-w-5 text-center text-xs font-bold">{qty}</span>
                      <button onClick={() => add(product)} className="px-2 py-0.5 hover:bg-brand-700">+</button>
                    </div>
                  </div>
                </li>
              ))}
              <li>
                <button onClick={clear} className="text-xs text-ink/50 hover:text-rose-500">
                  Clear cart
                </button>
              </li>
            </ul>

            <Summary subtotal={subtotal} delivery={delivery} total={total} savings={savings}>
              <button onClick={() => setStep('details')} className="btn-primary w-full py-3 text-base">
                Proceed to Checkout · {rupee(total)}
              </button>
            </Summary>
          </>
        ) : (
          <form onSubmit={placeOrder} className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              <Field label="Full name">
                <input required className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Rahul Kumar" />
              </Field>
              <Field label="Mobile number">
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  title="10 digit mobile number"
                  className="input"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  placeholder="98765 43210"
                />
              </Field>
              <Field label="Delivery address">
                <textarea
                  required
                  rows={3}
                  className="input resize-none"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="House no., street, landmark"
                />
                <p className="mt-1.5 text-xs text-ink/55">📍 We deliver only within {SHOP.deliveryArea}.</p>
              </Field>
              <Field label="Payment method">
                <div className="grid grid-cols-2 gap-2">
                  {['Cash on Delivery', 'UPI on Delivery'].map((p) => (
                    <label
                      key={p}
                      className={`cursor-pointer rounded-xl border-2 p-3 text-center text-sm font-medium transition ${
                        form.payment === p ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-black/10 bg-white'
                      }`}
                    >
                      <input type="radio" name="payment" className="sr-only" checked={form.payment === p} onChange={() => setForm({ ...form, payment: p })} />
                      {p === 'Cash on Delivery' ? '💵 ' : '📱 '}
                      {p}
                    </label>
                  ))}
                </div>
              </Field>
              <p className="rounded-xl bg-white p-3 text-xs text-ink/60 ring-1 ring-black/5">
                Clicking the button below opens WhatsApp with your complete order details pre-filled. Just tap send to confirm ✅
              </p>
            </div>
            <Summary subtotal={subtotal} delivery={delivery} total={total} savings={savings}>
              <button type="submit" className="btn w-full bg-[#25D366] py-3 text-base text-white hover:bg-[#1ebe5a]">
                💬 Place Order on WhatsApp
              </button>
            </Summary>
          </form>
        )}
      </aside>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}

function Summary({ subtotal, delivery, total, savings, children }) {
  return (
    <div className="border-t border-black/5 bg-white p-5">
      <dl className="space-y-1.5 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink/60">Subtotal</dt>
          <dd>{rupee(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink/60">Delivery</dt>
          <dd>{delivery === 0 ? <span className="font-semibold text-brand-600">FREE</span> : rupee(delivery)}</dd>
        </div>
        {savings > 0 && (
          <div className="flex justify-between text-brand-700">
            <dt>Your savings</dt>
            <dd className="font-semibold">− {rupee(savings)}</dd>
          </div>
        )}
        <div className="flex justify-between border-t border-dashed border-black/10 pt-2 text-base font-bold">
          <dt>Total</dt>
          <dd>{rupee(total)}</dd>
        </div>
      </dl>
      <div className="mt-4">{children}</div>
    </div>
  )
}