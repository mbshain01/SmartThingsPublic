import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { business } from '../data/business'
import { buildMailto, saveQuote } from '../lib/quotes'

const serviceOptions = [
  { value: 'engraving', label: 'Laser Engraving' },
  { value: 'cutting', label: 'Laser Cutting' },
  { value: 'custom', label: 'Custom / bring your own item' },
]

export function QuotePage() {
  const [params] = useSearchParams()
  const initialService = params.get('service') ?? 'engraving'
  const initialProduct = params.get('product') ?? ''

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(
    serviceOptions.some((o) => o.value === initialService) ? initialService : 'engraving',
  )
  const [product, setProduct] = useState(initialProduct)
  const [quantity, setQuantity] = useState('1')
  const [details, setDetails] = useState('')
  const [rush, setRush] = useState(false)
  const [savedId, setSavedId] = useState<string | null>(null)

  const serviceLabel = useMemo(
    () => serviceOptions.find((o) => o.value === service)?.label ?? service,
    [service],
  )

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const quote = saveQuote({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: serviceLabel,
      product: product.trim(),
      quantity: quantity.trim(),
      details: details.trim(),
      rush,
    })
    setSavedId(quote.id)
    window.location.href = buildMailto(quote)
  }

  return (
    <div className="page">
      <section className="section">
        <h2>Request a quote</h2>
        <p className="lede">
          Tell us what you need. We’ll reply ASAP — and never share your information. {business.leadTime}
        </p>

        {savedId ? (
          <div className="success" role="status">
            <h3>Quote saved on this device</h3>
            <p>
              Your email app should open with the details filled in. If it doesn’t, email{' '}
              <a href={`mailto:${business.email}`}>{business.email}</a>.
            </p>
          </div>
        ) : null}

        <form className="form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="service">Service</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="product">Product or item</label>
            <input
              id="product"
              placeholder="e.g. Cutting board, tumbler, custom sign"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              inputMode="numeric"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="details">Project details</label>
            <textarea
              id="details"
              required
              placeholder="Size, material, text/artwork, deadline, file notes…"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <label className="check-row">
            <input
              type="checkbox"
              checked={rush}
              onChange={(e) => setRush(e.target.checked)}
            />
            <span>Need it in 7 days or less (+$50 rush fee)</span>
          </label>
          <button className="primary-btn" type="submit">
            Submit quote request
          </button>
        </form>
      </section>

      <section className="section">
        <h2>File prep tips</h2>
        <div className="faq-item">
          <p>{business.filePrep}</p>
        </div>
      </section>
    </div>
  )
}
