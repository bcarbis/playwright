import { expect,Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export async function loginToSaucedemo(page: Page) {
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'standard_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Verify successful login by checking for the presence of the inventory page
    await expect(page).toHaveURL(`${baseURL}inventory.html`);
}