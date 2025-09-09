const {test, expect} = require('@playwright/test');

test('login with invalid username', async ({ page }) => {
    test.slow();
    await page.goto("https://vriti.ai/");
    await page.click("//button[text()='Login']");
    await expect(page.locator("//h1[text()='Login']")).toHaveText("Login");
    await page.fill("#email-id", "omprakash");
    await page.fill("#login-form-password", "omprakash");
    // Click login to trigger validation
    await page.click("//button[text()='Login']");
    await expect(page.locator("//p[text()='Enter valid email']")).toHaveText("Enter valid email");
    await page.close();
});


test('login with invalid password', async ({ page }) => {
    test.slow();
    await page.goto("https://vriti.ai/");
    await page.click("//button[text()='Login']");
    await expect(page.locator("//h1[text()='Login']")).toHaveText("Login");
    await page.fill("#email-id", "omprakash.n332@gmail.com");
    await page.fill("#login-form-password", "omprakash");
    await page.click("//button[text()='Login']");
    // Update expected error message if needed
    await expect(page.locator("//div[@role='alert']")).toHaveText("Entered wrong email or password.");
    await page.close();
});