import { test, expect } from '@playwright/test';

test("order", async ({ page }) => {

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    //await page.pause();
    await page.getByRole('button', { name: 'Mega Menu' }).hover();
    await expect(page.getByRole('heading', { name: 'Accessories' })).toBeVisible();
    await page.getByRole('link', { name: 'Screenguards' }).click();
    await page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' }).hover();
    await page.locator('.btn.btn-cart').first().click();
    await page.getByRole('link', { name: 'View Cart ' }).click();
    await expect(page.getByRole('cell', { name: 'HTC Touch HD *** Reward' }).getByRole('link')).toBeVisible();



})

