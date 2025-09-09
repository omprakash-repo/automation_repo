import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // test.slow();
  await page.goto('https://vriti.ai/');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Employer' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Vriti.AI' })).toBeVisible();
  await page1.getByRole('main').click();
  await page1.locator('body').press('PageDown');
  await page1.locator('body').press('PageDown');
    await page1.locator('body').press('PageDown');
  await page1.getByRole('button', { name: 'Employer Login' }).click();
  await expect(page1.locator('[id="__next"]')).toMatchAriaSnapshot(`
    - heading "Login" [level=1]
    - paragraph: Email ID
    - textbox "Enter your email id"
    - paragraph: Password
    - text: Forgot Password?
    - paragraph
    - textbox "Enter Password"
    - button "toggle password visibility"
    - iframe
    - button "Login"
    - separator
    - heading "Or login with" [level=5]
    - separator
    - text: Google LinkedIn
    - heading "Don't have an account yet? Sign Up" [level=5]
    `);
});