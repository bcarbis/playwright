import { test, expect, Page } from '@playwright/test';
import { loginToSaucedemoStandard, selectFirstItem, logout } from '../commonActions';
import { pauseExecution } from '../utils';
import { addStep } from '../allureActions';

test('select single item test', async ({ page }) => {

   await addStep('Login to SauceDemo', async () => {
    await loginToSaucedemoStandard(page);
   });

    let firstSelection: string;

 await addStep('Select First Item', async () => {
        await pauseExecution(1000);
        firstSelection = await selectFirstItem(page);
    }); 
    await addStep('logout', async () => {
        await logout(page);
     });
        
});

