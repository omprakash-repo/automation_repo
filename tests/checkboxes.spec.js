const {test, expect}= require('@playwright/test');

test("checkboxes", async({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.getByRole('checkbox').check();
    expect(page.getByRole('checkbox')).toBeChecked();
    // await page.getByRole('checkbox').screenshot({path:"newfile.png"})
})