import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemo } from '../commonActions';
import { pauseExecution } from '../utils';
import { screenshotAllure, addStep } from '../allureActions';

test('select multiple items test', async ({ page }) => {
    // Run the login script
    await loginToSaucedemo(page);

    let firstSelection: string;
    let secondSelection: string;

    // Make first selection
    await addStep('Selecting first item', async () => {
        firstSelection = await page.locator('[data-test="item-0-title-link"]').innerText();
        console.log(firstSelection); 
        await page.locator('[data-test="item-0-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    });

    // Make second selection
    await addStep('Selecting second item', async () => {
        secondSelection = await page.locator('[data-test="item-2-title-link"]').innerText();
        console.log(secondSelection); 
        await page.locator('[data-test="item-2-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    });

    // Check Cart
    await addStep('Check cart', async () => {
        await page.locator('[data-test="shopping-cart-link"]').click();
        await pauseExecution(1000);
        await expect(page.locator('.cart_item')).toContainText([firstSelection, secondSelection]);
        await screenshotAllure('Cart Items', page);
    });
});