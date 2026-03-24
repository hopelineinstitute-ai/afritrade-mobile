import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.afritrade.center',
  appName: 'AfriTrade',
  webDir: 'www',
  server: {
    // Load from live site — updates are instant
    url: 'https://www.afritradecenter.com',
    cleartext: false,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 2000,
      backgroundColor: '#FFB700',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      backgroundColor: '#FFB700',
      style: 'LIGHT',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    LocalNotifications: {
      smallIcon: 'ic_launcher',
      iconColor: '#FFB700',
      sound: 'default',
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
    Camera: {
      // Prompt user for photo library permission on first use
    },
    Geolocation: {
      // Uses default settings — prompts for permission on first use
    },
    Haptics: {
      // Uses default settings
    },
    Network: {
      // Uses default settings — monitors connectivity changes
    },
    Share: {
      // Uses default native share sheet
    },
    Clipboard: {
      // Uses default settings
    },
    Preferences: {
      // Uses default settings for key-value local storage
    },
    Filesystem: {
      // Uses default settings for file downloads (invoices, receipts)
    },
    ScreenOrientation: {
      // Uses default settings
    },
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#FFB700',
  },
  ios: {
    backgroundColor: '#FFB700',
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'AfriTrade',
  },
};

export default config;
