import { useEffect, useState } from 'react'
import { business } from '../data/business'

const key = `ignite-dismiss-${business.announcement.id}`

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(key) !== '1')
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  return (
    <aside className="announce" role="status">
      <div>
        <strong>{business.announcement.title}</strong>
        <p>{business.announcement.body}</p>
      </div>
      <button
        type="button"
        className="ghost-btn"
        aria-label="Dismiss announcement"
        onClick={() => {
          try {
            localStorage.setItem(key, '1')
          } catch {
            /* ignore */
          }
          setVisible(false)
        }}
      >
        Dismiss
      </button>
    </aside>
  )
}
