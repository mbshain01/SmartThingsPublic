import { useMemo, useState } from 'react'
import productsData from '../data/products.json'
import { faqs } from '../data/faqs'
import type { Product } from '../types'
import { ProductCard } from '../components/ProductCard'

const products = productsData as Product[]

const categories = ['All', 'Laser Engraving', 'Laser Cutting', 'Specialty Items', 'Custom Made Items']

export function ShopPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((product) => {
      const inCategory =
        category === 'All' || product.categories.includes(category)
      const inQuery =
        !q ||
        product.title.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q)
      return inCategory && inQuery
    })
  }, [category, query])

  return (
    <div className="page">
      <section className="section">
        <h2>Shop</h2>
        <p className="lede">
          Prices vary by quantity and customization. Tap an item to request a quote, or ask about
          something we don’t list.
        </p>
      </section>

      <div className="search-wrap">
        <input
          type="search"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search products"
        />
      </div>

      <div className="filters" role="listbox" aria-label="Product categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={`chip${category === item ? ' active' : ''}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No products match. Try another search or category.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
