import { Link } from 'react-router-dom'
import { AnnouncementBanner } from '../components/AnnouncementBanner'
import { ProductCard } from '../components/ProductCard'
import { business, getOpenStatus, services } from '../data/business'
import productsData from '../data/products.json'
import type { Product } from '../types'

const products = productsData as Product[]
const featured = products.filter((p) => p.image && p.price != null).slice(0, 4)

export function HomePage() {
  const status = getOpenStatus()

  return (
    <div className="page">
      <section className="hero" aria-label="Ignite Laser Engraving">
        <div className="hero-media" role="img" aria-label="Custom laser-engraved wood piece" />
        <div className="hero-ember" aria-hidden="true" />
        <div className="hero-content">
          <p className={`status-pill${status.open ? ' open' : ''}`}>{status.label}</p>
          <h1 className="hero-brand">
            IGNITE
            <br />
            <em>LASER</em>
          </h1>
          <p>{business.tagline}</p>
          <div className="cta-row">
            <Link className="primary-btn" to="/quote">
              Request a quote
            </Link>
            <Link className="secondary-btn" to="/book">
              Book a consult
            </Link>
          </div>
        </div>
      </section>

      <AnnouncementBanner />

      <section className="section">
        <h2>Services</h2>
        <p className="lede">
          Family-owned in Santa Rosa since {business.established}. Personalized gifts, awards, and
          custom work on wood, glass, and more.
        </p>
        <div className="service-list">
          {services.map((service) => (
            <Link key={service.id} className="service-link" to={`/quote?service=${service.id}`}>
              <h3>{service.title}</h3>
              <p>{service.blurb}</p>
              <span>Start a quote →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-head">
          <h2>From the shop</h2>
          <Link to="/shop">See all</Link>
        </div>
        <p className="lede">
          <Link to="/story">Our story</Link> · family-owned custom laser work in Santa Rosa.
        </p>
      </section>
      <div className="product-grid">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
