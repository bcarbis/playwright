import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }], ['html', { outputFolder: 'test-results' }], ['allure-playwright']],
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'retain-on-failure',
    //baseURL: 'https://www.saucedemo.com/',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
   { name: 'SwagLabs', use: {baseURL: 'https://www.saucedemo.com/', browserName: 'chromium' } },
   // { name: 'firefox', use: { browserName: 'firefox' } },
  //  { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  outputDir: 'test-results',
  fullyParallel: true,
  retries: 2,
});
