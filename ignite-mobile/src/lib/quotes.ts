export type QuoteRequest = {
  id: string
  createdAt: string
  name: string
  email: string
  phone: string
  service: string
  product: string
  quantity: string
  details: string
  rush: boolean
}

const STORAGE_KEY = 'ignite-quote-requests'

export function loadQuotes(): QuoteRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as QuoteRequest[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveQuote(
  input: Omit<QuoteRequest, 'id' | 'createdAt'>,
): QuoteRequest {
  const quote: QuoteRequest = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  const next = [quote, ...loadQuotes()].slice(0, 20)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  return quote
}

export function buildMailto(quote: QuoteRequest): string {
  const subject = encodeURIComponent(
    `Quote request: ${quote.product || quote.service || 'Custom project'}`,
  )
  const body = encodeURIComponent(
    [
      `Name: ${quote.name}`,
      `Email: ${quote.email}`,
      `Phone: ${quote.phone || '—'}`,
      `Service: ${quote.service}`,
      `Product / item: ${quote.product || '—'}`,
      `Quantity: ${quote.quantity || '—'}`,
      `Rush (7 days or less): ${quote.rush ? 'Yes (+$50)' : 'No'}`,
      '',
      'Project details:',
      quote.details,
    ].join('\n'),
  )
  return `mailto:michael.shain@ignitelaserengraving.com?subject=${subject}&body=${body}`
}
