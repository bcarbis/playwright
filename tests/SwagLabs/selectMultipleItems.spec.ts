import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemo } from '../commonActions';
import { pauseExecution } from '../utils';

test('select single item test', async ({ page }) => {
    // Run the login script
    await loginToSaucedemo(page);

 
    //make first selection
    const firstSelection = await page.locator('[data-test="item-0-title-link"]').innerText();
    console.log(firstSelection); 
    await page.locator('[data-test="item-0-title-link"]').click();
await page.locator('[data-test="add-to-cart"]').click();
await page.locator('[data-test="back-to-products"]').click();

//make second Selection
const secondSelection = await page.locator('[data-test="item-2-title-link"]').innerText();
console.log(secondSelection); 
await page.locator('[data-test="item-2-title-link"]').click();
await page.locator('[data-test="add-to-cart"]').click();
await page.locator('[data-test="back-to-products"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();

//Check Cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    await pauseExecution(1000);
    await expect(page.locator('.cart_item')).toContainText([firstSelection, secondSelection]);
    await page.screenshot({ path: `./screenshots/${firstSelection}-${secondSelection}.png` });
});
