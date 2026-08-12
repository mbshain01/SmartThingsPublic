const STORAGE_KEY = 'ignite-favorite-products'

export function loadFavorites(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as string[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function toggleFavorite(productId: string): string[] {
  const current = loadFavorites()
  const next = current.includes(productId)
    ? current.filter((id) => id !== productId)
    : [productId, ...current]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next.slice(0, 50)))
  return next
}

export function isFavorite(productId: string): boolean {
  return loadFavorites().includes(productId)
}
