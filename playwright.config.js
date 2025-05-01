// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Directory where test files are stored
  timeout: 30000,      // Test timeout (30 seconds)
  retries: 3,          // Retry failed tests twice
  use: {
    headless: false,   // Run tests in a visible browser
    viewport: { width: 1280, height: 720 }, // Set browser viewport size
    actionTimeout: 5000,  // Timeout for each action (5 seconds)
    trace: 'on',      // Collect trace when running tests
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
    // ,
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
});
