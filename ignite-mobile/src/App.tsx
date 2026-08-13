import { Navigate, Route, Routes } from 'react-router-dom'
import { BottomNav } from './components/BottomNav'
import { TopBar } from './components/TopBar'
import { BookPage } from './pages/BookPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { QuotePage } from './pages/QuotePage'
import { ShopPage } from './pages/ShopPage'
import { StoryPage } from './pages/StoryPage'

export default function App() {
  return (
    <div className="app-shell">
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:slug" element={<ProductPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  )
}
