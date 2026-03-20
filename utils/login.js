const { expect } = require('@playwright/test');

async function login(page) {
  // Go to demo app
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');

  // Wait for username field and fill it
  const usernameInput = page.locator('input[id="username"]');
  await expect(usernameInput).toBeVisible({ timeout: 10000 });
  await usernameInput.fill('admin');

  // Wait for password field and fill it
  const passwordInput = page.locator('input[id="password"]');
  await expect(passwordInput).toBeVisible({ timeout: 10000 });
  await passwordInput.fill('password123');

  // Wait for login button and click
  const submitBtn = page.locator('button[type="submit"]');
  await expect(submitBtn).toBeVisible({ timeout: 10000 });
  await submitBtn.click();

  // Wait until post-login page loads (Projects visible)
  await page.waitForSelector('text=Projects', { timeout: 10000 });
}

module.exports = { login };