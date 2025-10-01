import { Page } from 'playwright';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

export class OutlookLoginPage {
  constructor(private page: Page) {}

  // Locators
  emailInput = 'input[type="email"]';
  nextButton = 'input[type="submit"]';
  nextButton1 = 'button[type="submit"]';
  passwordInput = 'input[type="password"]';
  otpInput = '#otc-confirmation-input';
  submitButton = 'input[type="submit"]';
  verifyIdentityButton = '#oneTimeCodePrimaryButton';
  enterPasswordButton = 'xpath=//*[@id="view"]/div/span/div/span';
  signInAnotherWayLink = 'text=Other ways to sign in';
  authenticatorOption = 'text=Use an app to get a verification code';
  fallbackLink = 'text=I can\'t use my Microsoft Authenticator app right now';
    useYourPassword = 'text=Use your password';
    

  // Actions
  async navigate() {
    await this.page.goto('https://outlook.office.com/');
  }

  async enterEmail(email: string) {
    await this.page.waitForSelector(this.emailInput, { timeout: 10000 });
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.nextButton);
    // await this.page.waitForSelector(this.enterPasswordButton, { timeout: 10000 });
    await this.page.click(this.useYourPassword);
  }

  async enterPassword(password: string) {
    await this.page.waitForSelector(this.passwordInput, { timeout: 10000 });
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.nextButton1);
  }

  async chooseAuthenticatorOption() {
        await this.page.waitForSelector(this.fallbackLink, { timeout: 10000 });
    await this.page.click(this.fallbackLink);
    await this.page.waitForSelector(this.signInAnotherWayLink, { timeout: 10000 });
    await this.page.click(this.signInAnotherWayLink);
    await this.page.waitForSelector(this.authenticatorOption, { timeout: 10000 });
    await this.page.click(this.authenticatorOption);
  }

  async enterOTP(otp: string) {
    await this.page.waitForSelector(this.otpInput, { timeout: 10000 });
    await this.page.fill(this.otpInput, otp);
    await this.page.click(this.verifyIdentityButton);
  }
}
