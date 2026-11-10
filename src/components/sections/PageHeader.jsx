import { Link } from 'react-router-dom'

// Photo banner shown at the top of every inner page
export default function PageHeader({ title, text, image, crumb }) {
  return (
    <section className="container-x pt-4 sm:pt-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-900 px-6 py-16 text-white sm:rounded-[2.5rem] sm:px-10 sm:py-20 lg:px-14">
        <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full animate-kenburns object-cover motion-reduce:animate-none" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/40" />

        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{crumb || title}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{text}</p>}
      </div>
    </section>
  )
}
