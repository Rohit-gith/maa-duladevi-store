import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="text-6xl">🧺</p>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-ink/60">This aisle seems to be empty. Let’s get you back to the store.</p>
        <Link to="/" className="btn-primary mt-6">Go to Home</Link>
      </div>
    </section>
  )
}
