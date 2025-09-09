const {test, expect} = require('@playwright/test');

test("dynamicDropdown", async({page}) => {
    test.slow();
    await page.goto('https://www.yatra.com/');
    await page.locator("//img[@alt='cross']").first().click();
    const departFrom = page.getByLabel("Departure From New Delhi inputbox");
    await departFrom.click();
    await page.locator("//input[@id='input-with-icon-adornment']").fill('Tiru');
    await page.waitForTimeout(3000);
    await page.getByLabel('listitem').filter({hasText:"Tirupati"}).selectOption({index:1});


})