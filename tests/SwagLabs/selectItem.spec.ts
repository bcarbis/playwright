import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemo } from '../commonActions';
import { pauseExecution } from '../utils';

test('select single item test', async ({ page }) => {
    // Run the login script
    await loginToSaucedemo(page);

    // Select Single Item
    const firstSelection = await page.locator('[data-test="item-4-title-link"]').innerText();
    await page.locator('[data-test="item-4-title-link"]').click();
    console.log(firstSelection); 
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await pauseExecution(1000);
    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText(firstSelection);  
        
});

