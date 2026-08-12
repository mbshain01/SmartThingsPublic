import { Link } from 'react-router-dom'
import { business, services } from '../data/business'

export function HomePage() {
  return (
    <div className="page">
      <section className="hero" aria-label="Ignite Laser Engraving">
        <div className="hero-media" role="img" aria-label="Custom laser-engraved wood piece" />
        <div className="hero-ember" aria-hidden="true" />
        <div className="hero-content">
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
            <Link className="secondary-btn" to="/shop">
              Browse shop
            </Link>
          </div>
        </div>
      </section>

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
    </div>
  )
}
