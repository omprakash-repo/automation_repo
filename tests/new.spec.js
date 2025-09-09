import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://vriti.ai/');
    // await page.pause()
    await page.getByRole('combobox', { name: 'Search jobs by Skills,' }).click();
    await page.getByRole('combobox', { name: 'Search jobs by Skills,' }).fill('java');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Login', exact: true })).toHaveText('Login');
    await page.getByRole('textbox', { name: 'Enter Email Id' }).fill('omprakash.n332@gmail.com');
    await expect(page.getByRole('textbox', { name: 'Enter Email Id' })).toHaveValue('omprakash.n332@gmail.com');
    
});