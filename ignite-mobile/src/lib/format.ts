export function formatPrice(price: number | null, fromPrice = false): string {
  if (price == null || Number.isNaN(price)) return 'Request quote'
  if (price === 0) return 'Request quote'
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
  return fromPrice ? `from ${formatted}` : formatted
}
