const {test, expect}= require('@playwright/test');

test('window', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://vriti.ai/");

    const[newpage] = await Promise.all([
        context.waitForEvent('page'),
        await page.getByRole('link',{name:'Employer'}).click()

    ])

    await newpage.getByRole('combobox').fill("java");
    await newpage.close();
    page
    await page.getByRole('combobox').fill("java");

    
})