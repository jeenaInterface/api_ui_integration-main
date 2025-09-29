// LoginPage.ts
import { Page, BrowserContext, chromium, request } from 'playwright';
import  globalSetup  from '../helper/api/global-setup';
import { setDefaultTimeout } from '@cucumber/cucumber';
import { invokeBrowser } from '../helper/browsers/browserManager'
import axios from 'axios';

setDefaultTimeout(60 * 1000);

export default class LoginPage {
    // Change the access level of the page property to protected
    public page: Page;
    public context: BrowserContext;
    //public browser;

    constructor() {
        // this.page = page;
        // this.context = context;
        //this.browser = browser;
    }

    
    async loginAndRedirectToDashboard() {
        await globalSetup({}); // Call the globalSetup function asynchronously
    
        // You can now access the access token from process.env.TOKEN
        // Example usage:
        const url = './nav/dashboard';
        const response = await axios.get(`${process.env.BASEURLAPM}${url}`, {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
    
        // await this.context.setExtraHTTPHeaders({
        //     'Authorization': `Bearer ${process.env.TOKEN}`
        // });
    }
  
}
