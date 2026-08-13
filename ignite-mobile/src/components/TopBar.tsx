import { Link } from 'react-router-dom'
import { useInstallPrompt } from '../hooks/useInstallPrompt'
import { isNative } from '../lib/native'

export function TopBar() {
  const { canInstall, install } = useInstallPrompt()
  const native = isNative()

  return (
    <header className="top-bar">
      <Link to="/" className="brand-mark" aria-label="Ignite Laser Engraving home">
        <strong>IGNITE</strong>
        <span>Laser Engraving</span>
      </Link>
      {!native && canInstall ? (
        <button type="button" className="install-btn" onClick={() => void install()}>
          Install app
        </button>
      ) : (
        <Link className="install-btn" to="/quote">
          Get a quote
        </Link>
      )}
    </header>
  )
}
