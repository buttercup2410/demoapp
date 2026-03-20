const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000, // 60s per test
  use: {
    headless: false,      // run in visible mode
    slowMo: 500,          // slows down each action by 500ms
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    // screenshot: 'only-on-failure',
    // video: 'retain-on-failure',
  },
});