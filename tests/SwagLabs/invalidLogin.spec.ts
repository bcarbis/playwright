import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

 test('test', async ({ page }) => {
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'Invalid Login'); 
    // Enter password
    await page.fill('#password', 'password');

    // Click login button
    await page.click('#login-button');

    // Verify successful login by checking for the presence of the inventory page
    await expect(page.locator('[data-test="error"]')).toHaveText(`Epic sadface: Username and password do not match any user in this service`);
 });    
