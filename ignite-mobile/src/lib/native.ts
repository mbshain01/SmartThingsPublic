import { Capacitor } from '@capacitor/core'
import { App as CapApp } from '@capacitor/app'
import { Browser } from '@capacitor/browser'
import { StatusBar, Style } from '@capacitor/status-bar'
import { SplashScreen } from '@capacitor/splash-screen'
import { Keyboard } from '@capacitor/keyboard'

export const isNative = () => Capacitor.isNativePlatform()
export const isIOS = () => Capacitor.getPlatform() === 'ios'

/** Open http(s) URLs in SFSafariViewController on iOS; leave tel/mailto to the system. */
export async function openExternal(url: string): Promise<void> {
  if (!url) return
  if (url.startsWith('tel:') || url.startsWith('mailto:') || url.startsWith('sms:')) {
    window.location.href = url
    return
  }
  if (isNative()) {
    await Browser.open({ url, presentationStyle: 'popover' })
    return
  }
  window.open(url, '_blank', 'noopener,noreferrer')
}

export async function initNativeShell(): Promise<void> {
  if (!isNative()) return

  document.documentElement.classList.add('native-app')
  if (isIOS()) document.documentElement.classList.add('native-ios')

  try {
    await StatusBar.setStyle({ style: Style.Dark })
    if (Capacitor.getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: '#1a120c' })
    }
  } catch {
    /* StatusBar not available in browser */
  }

  try {
    await SplashScreen.hide()
  } catch {
    /* ignore */
  }

  try {
    await Keyboard.setAccessoryBarVisible({ isVisible: true })
  } catch {
    /* ignore */
  }

  CapApp.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack) window.history.back()
    else void CapApp.exitApp()
  })
}
