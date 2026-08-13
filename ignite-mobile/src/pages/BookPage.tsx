import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from '../components/ExternalLink'
import { business } from '../data/business'
import { isNative, openExternal } from '../lib/native'

export function BookPage() {
  const native = isNative()

  useEffect(() => {
    if (native) return
    const existing = document.querySelector<HTMLScriptElement>('script[data-calendly]')
    if (existing) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.dataset.calendly = 'true'
    document.body.appendChild(script)
  }, [native])

  return (
    <div className="page">
      <section className="section">
        <h2>Schedule a consult</h2>
        <p className="lede">
          Book a time to meet about your laser engraving or cutting project. Prefer email?{' '}
          <Link to="/quote">Request a quote</Link> instead.
        </p>
        <div className="cta-row" style={{ marginBottom: 16 }}>
          <button
            type="button"
            className="primary-btn"
            onClick={() => void openExternal(business.calendly)}
          >
            Open Calendly
          </button>
          <a className="secondary-btn" href={`tel:${business.phoneTel}`}>
            Call {business.phone}
          </a>
        </div>
      </section>

      {native ? (
        <section className="section">
          <div className="success">
            <h3>Book in Safari</h3>
            <p>
              Tap Open Calendly to schedule on Ignite’s booking page. You can also call during
              business hours.
            </p>
          </div>
          <p className="map-note" style={{ marginTop: 14 }}>
            Or continue on the website:{' '}
            <ExternalLink href={`${business.website}/schedule-an-appointment`}>
              Schedule an appointment
            </ExternalLink>
          </p>
        </section>
      ) : (
        <div
          className="calendly-inline-widget"
          data-url={business.calendly}
          style={{ minWidth: 320, height: 700 }}
          title="Schedule with Ignite Laser Engraving"
        />
      )}

      <section className="section">
        <p className="map-note">
          {business.hoursNote}. Walk-ins are welcome during posted hours when we’re open.
        </p>
      </section>
    </div>
  )
}
