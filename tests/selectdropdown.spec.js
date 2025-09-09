const{test, expect} = require('@playwright/test');

test('selectdropdown', async({page}) => {
    test.slow();
    await page.goto('https://www.salesforce.com/form/signup/c/');
    await page.locator("//select[@name='CompanyCountry']").selectOption({value: "US"});
    await page.waitForTimeout(3000);
    await page.locator("//select[@name='CompanyCountry']").selectOption({label:"Albania"});
    await page.waitForTimeout(3000);
    await page.locator("//select[@name='CompanyCountry']").selectOption({index:7});
})