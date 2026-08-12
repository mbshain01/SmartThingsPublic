export type Product = {
  id: string
  title: string
  slug: string
  url: string
  price: number | null
  fromPrice: boolean
  soldOut: boolean
  image: string | null
  description: string
  categories: string[]
}
