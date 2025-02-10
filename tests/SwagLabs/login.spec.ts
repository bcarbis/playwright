import { test } from '@playwright/test';
import { loginToSaucedemo } from '../commonActions';
import { screenshotAllure } from '../allureActions';

/**
* Logs in to SauceDemo
* @param page
*/
test('login to saucedemo', async ({ page }) => {
    await loginToSaucedemo(page);
    await screenshotAllure('Login Screenshot', page);
});