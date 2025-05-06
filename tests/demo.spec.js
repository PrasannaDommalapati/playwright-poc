import { test, expect } from '@playwright/test';
import { createLoginPage } from '../pageObjects/loginPage';
import { readExcelFile } from '../fireReader';

const sheetName = 'Sheet1';  // Specify the sheet name
const data = readExcelFile('data.xlsx', sheetName); 
data.forEach(row => {
    test(`test for ${row["First Name"]}`, async ({ page }) => {
        await page.goto('https://www.google.co.uk/?gws_rd=ssl');
        await page.getByRole('button', { name: 'Reject all' }).click();
        await expect(page.getByRole('contentinfo')).toContainText('United Kingdom');
        const loginPage = createLoginPage(page);

        await loginPage.loginWithCredentials(row["Email"], row["Password"]);

        await expect(loginPage.emailInput).toBeVisible();
    });
});