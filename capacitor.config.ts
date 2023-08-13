import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pair.of.words.app',
  appName: 'pair-of-words-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
