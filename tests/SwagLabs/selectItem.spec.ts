import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemo, selectFirstItem } from '../commonActions';
import { pauseExecution } from '../utils';
import { addStep } from '../allureActions';

test('select single item test', async ({ page }) => {

   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemo(page);
   });

    let firstSelection: string;

 await addStep('Select First Item', async () => {
        await pauseExecution(1000);
        firstSelection = await selectFirstItem(page);
    }); 
        
});

