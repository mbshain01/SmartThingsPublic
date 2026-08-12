# Ignite Laser Engraving Mobile App

A professional React Native mobile application for Ignite Laser Engraving and Cutting Services in Sonoma County.

## Features

- **Home Screen**: Company information, features, materials, newsletter signup, and contact details
- **Services Screen**: Detailed information about laser engraving and cutting services
- **Gallery Screen**: Portfolio showcase with filtering by service type
- **Contact Screen**: Quote request form with validation and business hours

## Technology Stack

- **Framework**: React Native 0.73.2
- **Language**: TypeScript
- **Navigation**: React Navigation (Bottom Tabs)
- **Icons**: React Native Vector Icons (Material Icons)
- **Platform Support**: iOS & Android

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- React Native CLI
- Xcode (for iOS development on macOS)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Installation

1. Clone the repository and navigate to the app directory:
```bash
cd ignite-mobile-app
```

2. Install dependencies:
```bash
npm install
```

3. For iOS, install CocoaPods dependencies:
```bash
cd ios && pod install && cd ..
```

## Running the App

### iOS
```bash
npm run ios
```

Or with a specific simulator:
```bash
npx react-native run-ios --simulator="iPhone 15 Pro"
```

### Android
```bash
npm run android
```

Make sure you have an Android emulator running or a device connected.

### Start Metro Bundler Separately
```bash
npm start
```

## Project Structure

```
ignite-mobile-app/
├── src/
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ServicesScreen.tsx
│   │   ├── GalleryScreen.tsx
│   │   └── ContactScreen.tsx
│   ├── navigation/       # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/           # Utilities and constants
│   │   └── constants.ts
│   └── assets/          # Images, fonts, etc.
├── App.tsx              # Root component
├── index.js             # App entry point
└── package.json         # Dependencies
```

## App Screens

### 1. Home Screen
- Welcome message and company tagline
- Feature highlights (Quality, Speed, Custom Design, Support)
- Materials showcase
- Newsletter signup form
- Contact information

### 2. Services Screen
- Laser Engraving details and features
- Laser Cutting details and features
- Application areas (Personal, Business, Events)
- Process workflow (4 steps)
- Call-to-action for quote requests

### 3. Gallery Screen
- Portfolio grid layout
- Filter by service type (All, Engraving, Cutting)
- Sample project showcases
- Category badges
- Project descriptions

### 4. Contact Screen
- Quote request form with validation
- Service type selection
- Project description input
- Contact information display
- Business hours

## Customization

### Colors
Modify the color scheme in `src/utils/constants.ts`:
```typescript
export const COLORS = {
  primary: '#ff6b35',
  secondary: '#f7931e',
  background: '#121212',
  // ... more colors
};
```

### Company Information
Update company details in `src/utils/constants.ts`:
```typescript
export const COMPANY_INFO = {
  name: 'Ignite Laser Engraving',
  email: 'info@ignitelaserengraving.com',
  phone: '(555) 123-4567',
  // ... more info
};
```

## Building for Production

### iOS
```bash
npx react-native run-ios --configuration Release
```

### Android
```bash
cd android
./gradlew assembleRelease
```

The APK will be located at `android/app/build/outputs/apk/release/app-release.apk`

## Testing

Run tests:
```bash
npm test
```

Run linter:
```bash
npm run lint
```

## Features to Add (Future Enhancements)

- [ ] Real image gallery with uploaded photos
- [ ] Integration with backend API for form submissions
- [ ] Push notifications for quotes and updates
- [ ] Social media integration
- [ ] User authentication for order tracking
- [ ] In-app messaging/chat support
- [ ] Payment integration
- [ ] Map integration for location
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

## Troubleshooting

### Metro bundler issues
```bash
npm start -- --reset-cache
```

### iOS build issues
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

### Android build issues
```bash
cd android
./gradlew clean
cd ..
```

## Support

For issues and questions:
- Email: info@ignitelaserengraving.com
- Phone: (555) 123-4567
- Location: Sonoma County, California

## License

Copyright © 2026 Ignite Laser Engraving. All rights reserved.

## Contributing

This is a proprietary application for Ignite Laser Engraving. For contributions or modifications, please contact the development team.
