import { test, expect } from '@playwright/test';
import { LaunchPage } from '../pages/launchpage';   


test("order", async ({ page }) => {

    const launch_Page = new LaunchPage(page);

    await launch_Page.gotoURL;

    //await page.pause();
    await launch_Page.megamenu.hover();
    await expect(launch_Page.Accessory_button).toBeVisible();
    await page.getByRole('link', { name: 'Screenguards' }).click();
    await page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' }).hover();
    await page.locator('.btn.btn-cart').first().click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.getByRole('cell', { name: 'HTC Touch HD *** Reward' }).getByRole('link')).toBeVisible();



})

