import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ExternalLink } from '../components/ExternalLink'
import productsData from '../data/products.json'
import { isFavorite, toggleFavorite } from '../lib/favorites'
import { formatPrice } from '../lib/format'
import type { Product } from '../types'

const products = productsData as Product[]

export function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.slug === slug)
  const [saved, setSaved] = useState(() => (product ? isFavorite(product.id) : false))

  if (!product) {
    return (
      <div className="page section">
        <h2>Product not found</h2>
        <p className="lede">That item isn’t in the catalog.</p>
        <Link className="primary-btn" to="/shop">
          Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="page detail">
      {product.image ? (
        <img
          className="detail-hero"
          src={`${product.image}?format=1000w`}
          alt={product.title}
        />
      ) : (
        <div className="detail-hero product-fallback">Ignite Laser</div>
      )}
      <div className="detail-body">
        <button type="button" className="ghost-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>{product.title}</h1>
        <div className="price">{formatPrice(product.price, product.fromPrice)}</div>
        {product.soldOut ? <p className="sold">Currently sold out — we can often make another.</p> : null}
        <p>
          {product.description ||
            'Custom laser work from Ignite Laser Engraving in Santa Rosa. Request a quote for sizing, materials, and personalization.'}
        </p>
        <div className="cta-row">
          <Link
            className="primary-btn"
            to={`/quote?product=${encodeURIComponent(product.title)}`}
          >
            Request a quote
          </Link>
          <button
            type="button"
            className="secondary-btn"
            onClick={() => setSaved(toggleFavorite(product.id).includes(product.id))}
          >
            {saved ? 'Saved ✓' : 'Save item'}
          </button>
        </div>
        <p className="map-note" style={{ marginTop: 16 }}>
          <ExternalLink href={product.url}>View on website</ExternalLink>
        </p>
      </div>
    </div>
  )
}
