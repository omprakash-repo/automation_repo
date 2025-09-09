import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vriti.ai/');
  await expect(page.locator('h1')).toContainText('Where professionals realize their true potential');
  const popupPagePromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Employer' }).click();
  const page1 = await popupPagePromise;
  await expect(page1.locator('h1')).toContainText('Vriti.AI');
  await page1.waitForLoadState();
  await page1.keyboard.press('PageDown');
  await page1.keyboard.press('PageDown');
  await page1.getByRole('button', { name: 'Employer Login' }).click();
  await expect(page1.locator('h1')).toContainText('Login');
  await page1.close()
  await page.close()
});