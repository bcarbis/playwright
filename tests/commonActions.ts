import { expect,Page } from '@playwright/test';
import * as dotenv from 'dotenv';
import { addStep,screenshotAllure } from './allureActions';
import { pauseExecution } from './utils';
import { test } from '@playwright/test';


dotenv.config();

/**
Login to Sauce Demo (Standard)
*/
export async function loginToSaucedemoStandard(page: Page): Promise<void> {
  
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
Login to Sauce Demo (Locked Out User)
*/
export async function loginToSaucedemoLockedOut(page: Page): Promise<void> {
  
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'locked_out_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Verify successful login by checking for the presence of the inventory page
    await expect(page.locator('[data-test="error"]')).toHaveText(`Epic sadface: Sorry, this user has been locked out.`);
}

/**
Login to Sauce Demo (Problem User)
*/
export async function loginToSaucedemoProblem(page: Page): Promise<void> {
  
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'problem_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Verify successful login by checking for the presence of the inventory page
    await expect(page).toHaveURL(`${baseURL}inventory.html`);
}

/**
Login to Sauce Demo (Performance)
*/
export async function loginToSaucedemoPerformance(page: Page): Promise<void> {
  
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'performance_glitch_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Verify successful login by checking for the presence of the inventory page
    await expect(page).toHaveURL(`${baseURL}inventory.html`);
}

/**
Login to Sauce Demo (Error)
*/
export async function loginToSaucedemoError(page: Page): Promise<void> {
  
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'error_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Verify successful login by checking for the presence of the inventory page
    await expect(page).toHaveURL(`${baseURL}inventory.html`);
}

/**
Login to Sauce Demo (Visual)
*/
export async function loginToSaucedemoVisual(page: Page): Promise<void> {
  
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
        throw new Error('BASE_URL is not defined');
    }
    await page.goto(baseURL);

    // Enter username
    await page.fill('#user-name', 'visual_user');

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
    await page.locator('[data-test="continue-shopping"]').click();
    return secondSelection; 
}
/**
 * Check Cart Single Item
 */
export async function checkCartSingle(page: Page, firstSelection: string): Promise<void> {
    await page.locator('[data-test="shopping-cart-link"]').click();
            await pauseExecution(1000);
            await expect(page.locator('.cart_item')).toContainText([firstSelection]);
            await screenshotAllure('Cart Items', page);
}


/**
 * Check Cart Multiple Items
 */
export async function checkCart(page: Page, firstSelection: string, secondSelection: string): Promise<void> {
    await page.locator('[data-test="shopping-cart-link"]').click();
            await pauseExecution(1000);
            await expect(page.locator('.cart_item')).toContainText([firstSelection, secondSelection]);
            await screenshotAllure('Cart Items', page);
}

/**
 * Checkout
 */
export async function checkout(page: Page): Promise<void> {
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Customers');
    await page.locator('[data-test="lastName"]').fill('Name');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
}

/**
 * Logout
 */
export async function logout(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page.locator('#login-button')).toBeVisible();
};


/**
 * Verify Side Menu
 */
export async function verifyMenu(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Open Menu' }).click();
   await pauseExecution(1000);
    await expect(page.locator('[data-test="inventory-sidebar-link"]')).toBeVisible();
    await expect(page.locator('[data-test="about-sidebar-link"]')).toBeVisible();
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
    await expect(page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
};
