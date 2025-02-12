import { test, expect, Page } from '@playwright/test';
import { checkCart, checkCartSingle, loginToSaucedemoStandard, logout, selectFirstItem } from '../commonActions';
import { pauseExecution } from '../utils';
import { addStep, screenshotAllure } from '../allureActions';

test('select single item test', async ({ page }) => {

   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemoStandard(page);
    await screenshotAllure('Login Screenshot', page);
   });

   await addStep('logout', async () => {
       await logout(page);
    });
});
