import { Link } from 'react-router-dom'
import { ExternalLink } from '../components/ExternalLink'
import { business, getOpenStatus } from '../data/business'

export function ContactPage() {
  const mapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(
    `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
  )}`
  const status = getOpenStatus()

  return (
    <div className="page">
      <section className="section">
        <h2>Contact</h2>
        <p className="lede">
          Let us get your project started. We’ll respond ASAP, keep your info private, and help make
          your vision a reality.
        </p>

        <p className={`status-pill${status.open ? ' open' : ''}`} style={{ marginBottom: 14 }}>
          {status.label}
        </p>

        <div className="contact-actions">
          <a href={`tel:${business.phoneTel}`}>
            <span>Call</span>
            <span>{business.phone}</span>
          </a>
          <a href={`mailto:${business.email}`}>
            <span>Email</span>
            <span>{business.owner}</span>
          </a>
          <Link to="/book">
            <span>Book consult</span>
            <span>Calendly</span>
          </Link>
          <Link to="/quote">
            <span>Request quote</span>
            <span>Form</span>
          </Link>
          <ExternalLink href={mapsUrl}>
            <span>Directions</span>
            <span>Santa Rosa</span>
          </ExternalLink>
          <ExternalLink href={business.etsy}>
            <span>Etsy</span>
            <span>Shop Ignite</span>
          </ExternalLink>
          <ExternalLink href={business.instagram}>
            <span>Instagram</span>
            <span>@laser_ignite</span>
          </ExternalLink>
          <ExternalLink href={business.facebook}>
            <span>Facebook</span>
            <span>ignitele</span>
          </ExternalLink>
        </div>

        <div className="contact-block">
          <p>
            <strong>{business.name}</strong>
            <br />
            {business.address.line1}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </p>
        </div>

        <div className="hours-list" aria-label="Business hours">
          {business.hours.map((row) => (
            <div key={row.day} className="hours-row">
              <span>{row.day}</span>
              <span>{row.text}</span>
            </div>
          ))}
          <p className="map-note">{business.hoursNote}</p>
        </div>

        <div className="contact-block">
          <p>{business.payment}</p>
        </div>
        <p className="map-note">{business.leadTime}</p>
        <p className="map-note">
          <Link to="/story">Read our story →</Link>
        </p>
      </section>
    </div>
  )
}
