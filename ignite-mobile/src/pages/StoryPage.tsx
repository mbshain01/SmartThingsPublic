import { Link } from 'react-router-dom'
import { business } from '../data/business'

export function StoryPage() {
  return (
    <div className="page">
      <section className="section">
        <h2>Our story</h2>
        <p className="lede">Established {business.established} in the heart of Sonoma County wine country.</p>
        {business.story.map((paragraph) => (
          <div className="story-block" key={paragraph.slice(0, 24)}>
            <p>{paragraph}</p>
          </div>
        ))}
        <div className="cta-row" style={{ marginTop: 8 }}>
          <Link className="primary-btn" to="/quote">
            Start a project
          </Link>
          <a className="secondary-btn" href={business.etsy} target="_blank" rel="noreferrer">
            Etsy shop
          </a>
        </div>
      </section>
    </div>
  )
}
