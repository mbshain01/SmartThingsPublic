import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { formatPrice } from '../lib/format'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" to={`/shop/${product.slug}`}>
      {product.image ? (
        <img src={`${product.image}?format=500w`} alt={product.title} loading="lazy" />
      ) : (
        <div className="product-fallback">Ignite</div>
      )}
      <div className="meta">
        <h3>{product.title}</h3>
        <div className="price">{formatPrice(product.price, product.fromPrice)}</div>
        {product.soldOut ? <div className="sold">Sold out — request similar</div> : null}
      </div>
    </Link>
  )
}
