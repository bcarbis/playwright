import { expect,Page } from '@playwright/test';
import dotenv from 'dotenv';
import { addStep } from './allureActions';
import { pauseExecution } from './utils';

dotenv.config();

/**
Login to Sauce Demo
*/
export async function loginToSaucedemo(page: Page): Promise<void> {
  
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'standard_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Verify successful login by checking for the presence of the inventory page
    await expect(page).toHaveURL(`${baseURL}inventory.html`);
}

    /**
 * Add First Item to Cart
 */

export async function selectFirstItem(page: Page): Promise<string> {
    await pauseExecution(1000);
    const firstSelection = await page.locator('[data-test="item-4-title-link"]').innerText();
    await page.locator('[data-test="item-4-title-link"]').click();
    console.log(firstSelection); 
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await pauseExecution(1000);
    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText(firstSelection);  
    await page.locator('[data-test="continue-shopping"]').click();
    return firstSelection;
    
}

/**
 * Add 2nd Item to Cart
 */

export async function selectSecondItem(page: Page): Promise<string> {
    await pauseExecution(1000);
    const secondSelection = await page.locator('[data-test="item-0-title-link"]').innerText();
    await page.locator('[data-test="item-0-title-link"]').click();
    console.log(secondSelection); 
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await pauseExecution(1000);
    await expect(page.locator('[data-test="item-0-title-link"]')).toHaveText(secondSelection);
    return secondSelection;

 
}
