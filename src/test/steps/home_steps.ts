import { Given, When } from '@cucumber/cucumber';
import { authenticator } from 'otplib';
import { OutlookLoginPage } from '../../pages/HomePage';
import { fixture } from '../../hooks/pageFixture';

let outlookPage: OutlookLoginPage;

Given('the user navigates to the Outlook login page', async () => {
  outlookPage = new OutlookLoginPage(fixture.page);
  await outlookPage.navigate();
});

When('the user enters valid credentials', async () => {
  await outlookPage.enterEmail(process.env.OUTLOOK_USERNAME!);
  await outlookPage.enterPassword(process.env.OUTLOOK_PASSWORD!);
  await outlookPage.chooseAuthenticatorOption();
});

When('the user completes two-factor authentication', async () => {
  const otp = authenticator.generate(process.env.OUTLOOK_TOTP_SECRET!);
  await outlookPage.enterOTP(otp);
});
