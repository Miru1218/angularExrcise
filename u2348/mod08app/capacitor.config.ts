import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'mod08app',
  webDir: 'dist/mod08app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
