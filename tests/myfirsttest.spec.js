const {test, expect} = require('@playwright/test');

test("launchPage", async({page}) => {
    await page.goto('https://vriti.ai');
    await expect(page).toHaveTitle('Vriti.ai | Intelligent Recruitment Process Platform Powered by AI');
    //await page.getByRole('combobox').fill("java");
    // await page.getByRole("listitem").filter({hasText:/View Jobs/}).click();
    // await page.getByText('Central').first().check();
    // await page.locator("//button[text()='Apply']").first().click();
    // await expect(page.getByText('New User')).toContainText('New User');
    // await page.getByRole('button').filter({ has : page.getByTestId('CloseIcon')}).last().click();
    // for (const row of await page.getByRole('listitem').all())
    //     console.log(await row.textContent());
    const ls = await page.getByRole('listitem');
    const counts= await ls.count();

    for (let i=0 ; i< counts; i++)
        console.log(await ls.nth(i).textContent());
    page.close();
    //await page.getByPlaceholder('Search jobs by Skills, Designation, Organizations').screenshot({path:'newfile.png'})
    // await page.locator("xpath=//button[text()='Login']").click();
    // //await page.getByTestId('email-id').fill('omprakash.n332');
    // await page.getByPlaceholder('Enter Email Id').fill('omprakash');
    // await page.getByText("Forgot Password?").click();
    // await page.getByTestId("HighlightOffOutlinedIcon").click();
});