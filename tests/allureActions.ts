import { Page } from '@playwright/test';
import { ContentType } from 'allure-js-commons';
import { allure } from 'allure-playwright';

export async function screenshotAllure(screenshotTitle: string, page: Page) {
    const screenshot = await page.screenshot();
    allure.attachment(screenshotTitle, screenshot, ContentType.PNG);
}

export async function addStep(stepName: string, stepFunction: () => Promise<void>) {
    await allure.step(stepName, stepFunction);
}