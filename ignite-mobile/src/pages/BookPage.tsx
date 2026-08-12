import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/business'

export function BookPage() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-calendly]')
    if (existing) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.dataset.calendly = 'true'
    document.body.appendChild(script)
  }, [])

  return (
    <div className="page">
      <section className="section">
        <h2>Schedule a consult</h2>
        <p className="lede">
          Book a time to meet about your laser engraving or cutting project. Prefer email?{' '}
          <Link to="/quote">Request a quote</Link> instead.
        </p>
        <div className="cta-row" style={{ marginBottom: 16 }}>
          <a className="primary-btn" href={business.calendly} target="_blank" rel="noreferrer">
            Open Calendly
          </a>
          <a className="secondary-btn" href={`tel:${business.phoneTel}`}>
            Call {business.phone}
          </a>
        </div>
      </section>

      <div
        className="calendly-inline-widget"
        data-url={business.calendly}
        style={{ minWidth: 320, height: 700 }}
        title="Schedule with Ignite Laser Engraving"
      />

      <section className="section">
        <p className="map-note">
          {business.hoursNote}. Walk-ins are welcome during posted hours when we’re open.
        </p>
      </section>
    </div>
  )
}
