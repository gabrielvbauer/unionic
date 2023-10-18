import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'myApp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
