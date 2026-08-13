import { Link } from 'react-router-dom'
import { ExternalLink } from '../components/ExternalLink'
import { business } from '../data/business'

export function StoryPage() {
  return (
    <div className="page">
      <section className="section">
        <h2>Our story</h2>
        <p className="lede">
          Established {business.established} in the heart of Sonoma County wine country.
        </p>
        {business.story.map((paragraph) => (
          <div className="story-block" key={paragraph.slice(0, 24)}>
            <p>{paragraph}</p>
          </div>
        ))}
        <div className="cta-row" style={{ marginTop: 8 }}>
          <Link className="primary-btn" to="/quote">
            Start a project
          </Link>
          <Link className="secondary-btn" to="/book">
            Book a consult
          </Link>
        </div>
        <div className="cta-row" style={{ marginTop: 10 }}>
          <ExternalLink className="secondary-btn" href={business.etsy}>
            Etsy shop
          </ExternalLink>
          <ExternalLink className="secondary-btn" href={business.instagram}>
            Instagram
          </ExternalLink>
        </div>
      </section>
    </div>
  )
}
