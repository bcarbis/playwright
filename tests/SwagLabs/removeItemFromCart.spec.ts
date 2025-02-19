import { test, expect, Page } from '@playwright/test';
import { checkCart, loginToSaucedemoStandard, selectFirstItem, selectSecondItem,logout,checkout, verifyMenu } from '../commonActions';
import { pauseExecution } from '../utils';
import { screenshotAllure, addStep } from '../allureActions';

test ('Order and Checkout', async ({ page }) => {
await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemoStandard(page);
    await screenshotAllure('Login Screenshot', page);
   });

    let firstSelection: string;
    let secondSelection: string;

    await addStep('Select First Item', async () => {
        await pauseExecution(1000);
        firstSelection = await selectFirstItem(page);
    });

    await addStep('Select Second Item', async () => {
        secondSelection = await selectSecondItem(page);
        await screenshotAllure('Second Item', page);
    });

    await addStep('Check Cart', async () => {
        await checkCart(page, firstSelection, secondSelection);
        await screenshotAllure('Cart Items', page);
        await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    });

    await addStep('Ensure bike light is removed', async () => {
        await expect(page.locator('.cart_item')).not.toContainText('Sauce Labs Bike Light');
        await screenshotAllure('Cart Items After Removal', page);
    });

    await addStep('Verify Menu', async () => {
        await verifyMenu(page);
        await screenshotAllure('Cart Items', page);
    });

    await addStep('logout', async () => {
        await logout(page);
    });
});