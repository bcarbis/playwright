import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { screenshotAllure } from '../allureActions';
dotenv.config();

 test('test', async ({ page }) => {
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
      await page.goto(baseURL);

      // Click login button
      await page.click('#login-button');

      // Verify successful login by checking for the presence of the inventory page
      await expect(page.locator('[data-test="error"]')).toHaveText(`Epic sadface: Username is required`);
      screenshotAllure('Login Screenshot', page);

      // Enter username
      await page.fill('#user-name', 'standard_user');

       // Click login button
      await page.click('#login-button'); 

      // Verify successful login by checking for the presence of the inventory page
      await expect(page.locator('[data-test="error"]')).toHaveText(`Epic sadface: Password is required`);
      screenshotAllure('Login Screenshot', page);      



   });    
