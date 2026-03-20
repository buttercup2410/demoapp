const { expect } = require('@playwright/test');

async function navigateToProject(page, projectName) {
  await page.click(`text=${projectName}`);
  await expect(page.locator('h1', { hasText: projectName })).toBeVisible();
}

module.exports = { navigateToProject };