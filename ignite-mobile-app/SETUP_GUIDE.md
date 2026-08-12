# Setup Guide - Ignite Laser Engraving Mobile App

## Quick Start for Developers

### Prerequisites Check

Before starting, verify you have the following:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check React Native CLI
npx react-native --version

# For iOS (macOS only)
xcodebuild -version
pod --version

# For Android
java -version
gradle --version
```

## Step-by-Step Setup

### 1. Environment Setup

#### For macOS (iOS + Android)

```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Install Watchman
brew install watchman

# Install CocoaPods
sudo gem install cocoapods

# Install Xcode from App Store
# Then install Xcode Command Line Tools
xcode-select --install

# Install Android Studio
# Download from: https://developer.android.com/studio
```

#### For Windows (Android only)

```bash
# Install Node.js from nodejs.org

# Install Java Development Kit (JDK)
# Download from: https://adoptium.net/

# Install Android Studio
# Download from: https://developer.android.com/studio

# Add Android SDK to PATH
# Add these to System Environment Variables:
# ANDROID_HOME = C:\Users\YourUsername\AppData\Local\Android\Sdk
# Add to PATH: %ANDROID_HOME%\platform-tools
# Add to PATH: %ANDROID_HOME%\emulator
# Add to PATH: %ANDROID_HOME%\tools
```

#### For Linux (Android only)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Java
sudo apt install openjdk-11-jdk

# Install Android Studio
# Download from: https://developer.android.com/studio

# Add to ~/.bashrc or ~/.zshrc:
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 2. Project Installation

```bash
# Navigate to project directory
cd ignite-mobile-app

# Install dependencies
npm install

# For iOS only (macOS required)
cd ios
pod install
cd ..
```

### 3. Running the App

#### iOS Development

```bash
# Start Metro bundler
npm start

# In another terminal, run iOS app
npm run ios

# Or specify a simulator
npx react-native run-ios --simulator="iPhone 15 Pro"

# List available simulators
xcrun simctl list devices
```

#### Android Development

```bash
# Start an Android emulator first
# Open Android Studio > Device Manager > Create/Start Emulator

# Or use command line
emulator -avd Pixel_5_API_33

# List available emulators
emulator -list-avds

# Start Metro bundler
npm start

# In another terminal, run Android app
npm run android

# Or specify a device
adb devices
npx react-native run-android --deviceId=<device-id>
```

### 4. Common Issues and Solutions

#### Metro Bundler Issues

```bash
# Clear cache and restart
npm start -- --reset-cache

# Or
npx react-native start --reset-cache
```

#### iOS Build Errors

```bash
# Clean build folder
cd ios
rm -rf build
xcodebuild clean
cd ..

# Reinstall pods
cd ios
rm -rf Pods Podfile.lock
pod deintegrate
pod install
cd ..

# Clear derived data
rm -rf ~/Library/Developer/Xcode/DerivedData
```

#### Android Build Errors

```bash
# Clean gradle
cd android
./gradlew clean
cd ..

# Clear gradle cache
cd android
./gradlew cleanBuildCache
cd ..

# Delete build folders
rm -rf android/app/build
rm -rf android/build
```

#### Port Already in Use

```bash
# Kill process on port 8081 (Metro)
# macOS/Linux
lsof -ti:8081 | xargs kill

# Windows
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

#### iOS Simulator Not Found

```bash
# List available simulators
xcrun simctl list devices

# Boot a specific simulator
xcrun simctl boot "iPhone 15 Pro"
```

#### Android Emulator Issues

```bash
# List running emulators
adb devices

# Kill and restart adb
adb kill-server
adb start-server

# Cold boot emulator
emulator -avd Pixel_5_API_33 -no-snapshot-load
```

### 5. Development Tips

#### Hot Reloading

- Press `r` in Metro terminal to reload
- Press `d` to open developer menu
- In iOS simulator: `Cmd + D` for dev menu
- In Android emulator: `Cmd + M` (Mac) or `Ctrl + M` (Windows/Linux)

#### Debugging

```bash
# Enable debug mode
# In dev menu: Enable "Debug JS Remotely" or "Open Debugger"

# View console logs
# Metro terminal shows console.log output

# React DevTools
npm install -g react-devtools
react-devtools
```

#### Linting and Formatting

```bash
# Run linter
npm run lint

# Fix auto-fixable issues
npx eslint . --ext .js,.jsx,.ts,.tsx --fix

# Format with Prettier
npx prettier --write "src/**/*.{ts,tsx}"
```

### 6. Building for Production

#### iOS Production Build

```bash
# Build release version
npx react-native run-ios --configuration Release

# Create IPA for App Store
# 1. Open ios/IgniteLaserEngraving.xcworkspace in Xcode
# 2. Select "Any iOS Device" as target
# 3. Product > Archive
# 4. Distribute App > App Store Connect
```

#### Android Production Build

```bash
# Generate release APK
cd android
./gradlew assembleRelease
cd ..

# APK location:
# android/app/build/outputs/apk/release/app-release.apk

# Generate AAB (for Play Store)
cd android
./gradlew bundleRelease
cd ..

# AAB location:
# android/app/build/outputs/bundle/release/app-release.aab
```

### 7. Testing

```bash
# Run unit tests
npm test

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch
```

### 8. Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all to latest
npm update

# Update React Native version
npx react-native upgrade

# For iOS, update pods
cd ios
pod update
cd ..
```

### 9. IDE Setup

#### VS Code (Recommended)

Install these extensions:
- ES7+ React/Redux/React-Native snippets
- React Native Tools
- Prettier - Code formatter
- ESLint
- TypeScript React code snippets

Settings (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### 10. Troubleshooting Checklist

- [ ] Node.js version is 18 or higher
- [ ] Dependencies installed (`npm install`)
- [ ] iOS Pods installed (`cd ios && pod install`)
- [ ] Metro bundler is running
- [ ] Simulator/Emulator is running
- [ ] No port conflicts (8081)
- [ ] Android SDK environment variables set
- [ ] Xcode Command Line Tools installed (macOS)
- [ ] Java JDK installed (Android)
- [ ] Latest Android build tools installed

## Support

If you encounter issues not covered here:

1. Check React Native documentation: https://reactnative.dev/docs/environment-setup
2. Search GitHub issues: https://github.com/facebook/react-native/issues
3. Stack Overflow: https://stackoverflow.com/questions/tagged/react-native

## Next Steps

After successful setup:
1. Review the code structure in `src/`
2. Check `PROJECT_OVERVIEW.md` for architecture details
3. Run the app on both iOS and Android
4. Start customizing content and branding
5. Connect to backend APIs
6. Add real images and content
7. Prepare for app store submission
