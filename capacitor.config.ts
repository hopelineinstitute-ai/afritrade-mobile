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
