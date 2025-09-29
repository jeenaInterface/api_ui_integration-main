// // step_definitions.ts
// import { When, Then } from '@cucumber/cucumber';
// import LoginPage from '../../pages/LoginPage';

// import { setDefaultTimeout } from '@cucumber/cucumber';
// import { invokeBrowser } from '../../helper/browsers/browserManager'; // Import the invokeBrowser function
// import { chromium, Page } from "playwright-core";

// setDefaultTimeout(60 * 1000);

// let loginPage: LoginPage;
// let homePage: HomePage;
// let page: Page;

// When('I log in with user name and password', async function () {
//     // loginPage = await LoginPage.initializeHeadlessBrowser();
//     loginPage = new LoginPage();
//     await loginPage.loginAndRedirectToDashboard();

// });

// Then('Click on the queque menu', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     await homePage.clickQueueMenu()
// });


