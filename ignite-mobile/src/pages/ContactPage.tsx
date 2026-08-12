import { business } from '../data/business'

export function ContactPage() {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
  )}`

  return (
    <div className="page">
      <section className="section">
        <h2>Contact</h2>
        <p className="lede">
          Let us get your project started. We’ll respond ASAP, keep your info private, and help make
          your vision a reality.
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
          <a href={business.etsy} target="_blank" rel="noreferrer">
            <span>Etsy</span>
            <span>Shop Ignite</span>
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            <span>Directions</span>
            <span>Santa Rosa</span>
          </a>
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
        <div className="contact-block">
          <p>
            {business.hours}
            <br />
            {business.hoursNote}
          </p>
        </div>
        <div className="contact-block">
          <p>{business.payment}</p>
        </div>
        <p className="map-note">{business.leadTime}</p>
      </section>
    </div>
  )
}
