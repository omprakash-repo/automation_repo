const {test, expect} = require('@playwright/test');

test("frames", async({page}) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_scripts_intro");
    const pageiframe = page.locator("//iframe[@id='iframeResult']")
    await pageiframe.getByRole('button',{name:'Click me to display Date and Time.'}).click();
    
})