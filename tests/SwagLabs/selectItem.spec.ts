import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemo } from './Login.spec';
import { pauseExecution } from '../utils';

test('select item test', async ({ page }) => {
    // Run the login script
    await loginToSaucedemo(page);

    // Your test code here
    
    await page.getByText('Sauce Labs Backpack').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.pause();
    
    await pauseExecution(1000);
    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack');
    
});
