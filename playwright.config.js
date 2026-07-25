import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 1,

  use: {

    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
    ignoreHTTPSErrors: true
  },

  reporter: [
    ['html'],
    ['allure-playwright']
  ]
});