import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3000',
    viewport: { width: 1280, height: 720 },
    video: 'retain-on-failure',
  },
  reporter: 'html',
  
};

export default config;
