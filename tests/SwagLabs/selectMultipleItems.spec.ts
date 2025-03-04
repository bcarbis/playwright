import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemoStandard, selectFirstItem, selectSecondItem,logout } from '../commonActions';
import { pauseExecution } from '../utils';
import { screenshotAllure, addStep } from '../allureActions';


test('select multiple items test', async ({ page }) => {
    // Run the login script
   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemoStandard(page);
    await screenshotAllure('Login Screenshot', page);
   });

    let firstSelection: string;
    let secondSelection: string;

    // Make first selection
    await addStep('Select First Item', async () => {
        await pauseExecution(1000);
        firstSelection = await selectFirstItem(page);
        await screenshotAllure('First Item', page);
    });

    // Make second selection
    await addStep('Select Second Item', async () => {
        secondSelection = await selectSecondItem(page);
        await screenshotAllure('Second Item', page);
    });

    await addStep('Check Cart', async () => {
        await page.locator('[data-test="shopping-cart-link"]').click();
        await pauseExecution(1000);
        await expect(page.locator('.cart_item')).toContainText([firstSelection, secondSelection]);
        await screenshotAllure('Cart Items', page);
    });
    await addStep('logout', async () => {
        await logout(page);
        await screenshotAllure('Logout Screenshot', page);
     });
});