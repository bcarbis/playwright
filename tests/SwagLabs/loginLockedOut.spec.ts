import { test } from '@playwright/test';
import { loginToSaucedemoLockedOut } from '../commonActions';
import { addStep, screenshotAllure } from '../allureActions';

/**
* Logs in to SauceDemo
* @param page
*/
test('login to saucedemo locked out', async ({ page }) => {
   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemoLockedOut(page);
    await screenshotAllure('Login Screenshot', page);
   });
});