import { Link, useNavigate, useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types'
import { formatPrice } from '../lib/format'

const products = productsData as Product[]

export function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.slug === slug)

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
          <a className="secondary-btn" href={product.url} target="_blank" rel="noreferrer">
            View on website
          </a>
        </div>
      </div>
    </div>
  )
}
