# Ignite Laser Engraving — Mobile App (iOS first)

Native **iOS** app (Capacitor) plus installable web PWA for [Ignite Laser Engraving](https://www.ignitelaserengraving.com).

Bundle ID: `com.ignitelaserengraving.app`  
Display name: **Ignite Laser**

## What’s included

- Phone-first shell: Home · Shop · Quote · Book · Contact
- Shop catalog from the live Squarespace store (search, filters, save-for-later)
- Quote requests via the device Mail app (`mailto:`) with on-device history
- Calendly consult booking (opens in SFSafariViewController on iOS)
- Call, email, Apple Maps, Etsy, Instagram, Facebook
- Open-now status, weekly hours, pricing announcement, Our Story
- Branded iOS app icon + splash screen

## iOS (Xcode) — primary path

Requires a **Mac** with Xcode 16+ and an Apple Developer account for device/TestFlight/App Store builds.

```bash
cd ignite-mobile
npm install
npm run ios:sync   # required — copies the Ignite UI into the iOS project
npm run ios:open   # opens Xcode
```

Or in one step: `npm run ios`.

**If the simulator shows “Hello, World”:** you opened the Xcode project before syncing. Quit the app, run `npm run ios:sync` from `ignite-mobile/`, then in Xcode use **Product → Clean Build Folder** and Run again. Open `ios/App/App.xcodeproj` (the Ignite Capacitor project), not a separate Swift “Hello World” sample.

### In Xcode

1. Select the **App** target → **Signing & Capabilities**
2. Choose your Team and confirm bundle ID `com.ignitelaserengraving.app`
3. Pick an iPhone simulator or a connected device
4. Press **Run** (▶)

### Useful scripts

| Script | Purpose |
| --- | --- |
| `npm run ios:sync` | Build web assets + `cap sync ios` |
| `npm run ios:open` | Open the iOS project in Xcode |
| `npm run ios` | Sync then open |

After any UI/code change, run `npm run ios:sync` before building in Xcode again.

### App Store / TestFlight

1. Archive in Xcode (**Product → Archive**)
2. Distribute to TestFlight or App Store Connect
3. App privacy: the app stores quotes/favorites on-device only; no tracking SDK is bundled (`PrivacyInfo.xcprivacy` declares UserDefaults for local preferences)

## Web / PWA (optional)

```bash
cd ignite-mobile
npm install
npm run dev      # local preview
npm run build    # static `dist/` for hosting
```

On iPhone Safari, **Share → Add to Home Screen** still works as a lightweight install if you are not shipping the native build yet.

## Project layout

```
ignite-mobile/
  src/                 React UI
  ios/                 Capacitor Xcode project
  capacitor.config.ts  App ID, splash, status bar
  dist/                Built web assets (synced into ios)
```

## Notes

- Quotes use `mailto:` + `localStorage` (no backend required for v1).
- Booking uses `https://calendly.com/michael-shain-ignitelaserengraving`.
- Product images load from Squarespace CDNs; device needs network for the catalog photos.
- Android can be added later with `npx cap add android` using the same web app.
