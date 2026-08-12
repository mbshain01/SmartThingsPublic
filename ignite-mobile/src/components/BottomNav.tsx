import { NavLink } from 'react-router-dom'
import { BookIcon, ContactIcon, HomeIcon, QuoteIcon, ShopIcon } from './Icons'

const links = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/shop', label: 'Shop', icon: ShopIcon, end: false },
  { to: '/quote', label: 'Quote', icon: QuoteIcon, end: false },
  { to: '/book', label: 'Book', icon: BookIcon, end: false },
  { to: '/contact', label: 'Contact', icon: ContactIcon, end: false },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {links.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <Icon />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
