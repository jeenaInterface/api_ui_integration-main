// src/pages/OutlookLoginPage.ts
import { Page } from 'playwright';

import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);


export class OutlookLoginPage {
  constructor(private page: Page) {}

  // Locators
  emailInput = 'input[type="email"]';
  nextButton = '//input[@type="submit"]';
  nextButton1 = '//button[@type="submit"]';
  passwordInput = 'input[type="password"]';
  otpInput = '//input[@id="otc-confirmation-input"]';
  submitButton = 'input[type="submit"]';
  verifyIdentityButton = '//button[@id="oneTimeCodePrimaryButton"]';
  enterPasswordButton = "xpath=//*[@id='view']/div/span/div/span";
  signInAnotherWayLink = 'text=Sign in another way'; // or use XPath if needed
  authenticatorOption = 'text=Use an app to get a verification code';
  link:"text=I can't use my Microsoft Authenticator app right now" // adjust based on actual label

  // Actions
  async navigate() {
    await this.page.goto('https://outlook.office.com/');
  }

  async enterEmail(email: string) {
    await this.page.waitForSelector(this.emailInput, { timeout: 10000 });
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.nextButton);
    await this.page.click(this.enterPasswordButton);
  }

  async enterPassword(password: string) {
    await this.page.waitForSelector(this.passwordInput, { timeout: 10000 });
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.nextButton1);
  }

  async chooseAuthenticatorOption() {
    await this.page.waitForSelector(this.signInAnotherWayLink, { timeout: 10000 });
    await this.page.click(this.signInAnotherWayLink);
    await this.page.click(this.link);

    await this.page.waitForSelector(this.authenticatorOption, { timeout: 10000 });
    await this.page.click(this.authenticatorOption);
  }

  async enterOTP(otp: string) {
    await this.page.waitForSelector(this.otpInput, { timeout: 10000 });
    await this.page.fill(this.otpInput, otp);
    await this.page.click(this.verifyIdentityButton);
  }
}
