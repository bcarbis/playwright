import { test } from '@playwright/test';
import { loginToSaucedemoError } from '../commonActions';
import { addStep, screenshotAllure } from '../allureActions';

/**
* Logs in to SauceDemo
* @param page
*/
test('login to saucedemo', async ({ page }) => {
   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemoError(page);
    await screenshotAllure('Login Screenshot', page);
   });
});