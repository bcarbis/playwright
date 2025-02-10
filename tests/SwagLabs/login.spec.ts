import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemo } from '../commonActions';

test('login to saucedemo', async ({ page }) => {
    await loginToSaucedemo(page);
});