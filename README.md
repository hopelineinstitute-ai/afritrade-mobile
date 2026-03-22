# AfriTrade Mobile App

Native Android and iOS app for AfriTrade Center marketplace, built with Capacitor.

## How it works

The app loads the live AfriTrade website (`https://www.afritradecenter.com`) in a native shell. Any updates to the website are immediately reflected in the app — no app store update needed.

## Build APK (Android)

### Via GitHub Actions (recommended)
1. Push to `main` branch
2. Go to Actions tab → "Build Android APK"
3. Download the APK from the artifacts

### Locally
```bash
npm install
npx cap sync android
cd android && ./gradlew assembleDebug
# APK at: android/app/build/outputs/apk/debug/app-debug.apk
```

## Build iOS
Requires macOS with Xcode installed:
```bash
npm install
npx cap sync ios
npx cap open ios
# Build from Xcode
```

## App Details
- **Package**: `com.afritrade.center`
- **Name**: AfriTrade
- **Primary color**: #FFB700 (gold)
