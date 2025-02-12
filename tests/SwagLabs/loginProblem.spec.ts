import { test } from '@playwright/test';
import { loginToSaucedemoProblem } from '../commonActions';
import { addStep, screenshotAllure } from '../allureActions';

/**
* Logs in to SauceDemo
* @param page
*/
test('login to saucedemo problem user', async ({ page }) => {
   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemoProblem(page);
    await screenshotAllure('Login Screenshot', page);
   });
});