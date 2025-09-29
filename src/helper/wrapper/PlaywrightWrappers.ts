import { Page } from "@playwright/test";
import { defineConfig } from '@playwright/test';
import  GlobalSetup  from '../api/global-setup'; 
require('dotenv').config({ path: `.env.${process.env.ENVIRONMENT}` });

export default class PlaywrightWrapper {

    constructor(private page: Page) { }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async navigateTo(link: string) {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(link)
        ])
    }

      
      

}