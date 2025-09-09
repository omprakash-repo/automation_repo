import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://vriti.ai/');
  await expect(page.getByRole('heading', { name: 'Where professionals realize' })).toBeVisible();
  await page.locator('body').press('PageDown');
  await page.locator('body').press('PageDown');
  await expect(page.getByRole('button', { name: 'Jobseeker Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Jobseeker Login' }).click();
  await expect(page.getByRole('heading', { name: 'Login', exact: true })).toBeVisible();
});