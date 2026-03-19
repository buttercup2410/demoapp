async function navigateToProject(page, projectName) {
  await page.click(`text=${projectName}`);
}

module.exports = { navigateToProject };