async function login(page) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');

  await page.fill('input[name="email"]', 'admin');
  await page.fill('input[name="password"]', 'password123');

  await page.click('button[type="submit"]');
}

module.exports = { login };