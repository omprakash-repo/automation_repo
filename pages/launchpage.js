const {page, expect} = require('@playwright/test');

exports.launchpage = class launchpage{
    constructor(page){
        this.page = page;
        this.url = 'https://www.vriti.ai';
        //this.welcometext = getByText("Find your dream job & earn");
        this.LoginButton = page.locator("//button[text()='Login']");
        //this.LoginButton = page.click("//button[text()='Login']");
        this.SignupButton = page.getByRole('button', {name: 'Sign Up'});
        this.loginpagetext = page.locator("//h1[text()='Login']");
        this.emailfield = page.locator("#email-id");
        this.passwordfield = page.locator("#login-form-password");
        this.loginbutton = page.locator("//button[text()='Login']");
        this.emailfieldvalidation = page.getByText('Enter valid email');
        this.invalidcreds_alert = page.locator("//div[@role='alert']");
    }

    async LaunchURL(){
        await this.page.goto(this.url);
        await expect(this.page).toHaveTitle("Vriti.ai | Intelligent Recruitment Process Platform Powered by AI");;
    }
    async ClickLogin(){
        await this.LoginButton.click();
        await expect(this.loginpagetext).toHaveText("Login");
    }
    async Logintoapplication(username, password){
        await this.emailfield.fill(username);
        await this.passwordfield.fill(password);
        await this.loginbutton.click();
        
    }
};