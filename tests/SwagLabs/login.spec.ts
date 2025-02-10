import { test } from '@playwright/test';
import { loginToSaucedemo } from '../commonActions';
import { addStep, screenshotAllure } from '../allureActions';

/**
* Logs in to SauceDemo
* @param page
*/
test('login to saucedemo', async ({ page }) => {
   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemo(page);
    await screenshotAllure('Login Screenshot', page);
   });
});