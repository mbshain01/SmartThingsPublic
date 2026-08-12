import { Link } from 'react-router-dom'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

export function TopBar() {
  const { canInstall, install } = useInstallPrompt()

  return (
    <header className="top-bar">
      <Link to="/" className="brand-mark" aria-label="Ignite Laser Engraving home">
        <strong>IGNITE</strong>
        <span>Laser Engraving</span>
      </Link>
      {canInstall ? (
        <button type="button" className="install-btn" onClick={() => void install()}>
          Install app
        </button>
      ) : (
        <a className="install-btn" href="/quote">
          Get a quote
        </a>
      )}
    </header>
  )
}
