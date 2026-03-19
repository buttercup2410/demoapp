const { test, expect } = require('@playwright/test');
const { login } = require('../utils/login');
const { navigateToProject } = require('../utils/navigation');
const testData = require('../data/testData.json');

test.describe('Data-driven tests', () => {
  for (const data of testData) {

    test(data.name, async ({ page }) => {

      await login(page);
      await navigateToProject(page, data.project);

      const column = page.locator(`text=${data.column}`).locator('..');
      const task = column.locator(`text=${data.task}`);

      await expect(task).toBeVisible();

      for (const tag of data.tags) {
        await expect(task.locator(`text=${tag}`)).toBeVisible();
      }
    });

  }
});