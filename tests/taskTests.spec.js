const { test, expect } = require('@playwright/test');
const { login } = require('../utils/login');
const { navigateToProject } = require('../utils/navigation');
const testData = require('../data/testData.json');

test.describe('Data-driven task validation', () => {

  for (const data of testData) {
    // test(data.name, async ({ page }) => {
    test(`\n----- Validate ${data.task} in ${data.column}`, async ({ page }) => {

      // Step 1: Login
      await login(page);

      // Step 2: Navigate to project
      await navigateToProject(page, data.project);

      // Step 3: Locate column
      const column = page.locator(`h2:has-text("${data.column}")`).locator('..');

      // Step 4: Verify task exists in column
      const task = column.locator('div').filter({ hasText: data.task }).first();
      await expect(task).toBeVisible();

      console.log(await task.innerText());

      // Step 5: Verify tags
      for (const tag of data.tags) {
        await expect(task).toContainText(tag);
      }
    });
  }

});