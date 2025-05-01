import { test, expect } from '@playwright/test';
import { createLoginPage } from '../pageObjects/loginPage';

test('test', async ({ page }) => {
    await page.goto('https://www.google.co.uk/?gws_rd=ssl');
    await page.getByRole('button', { name: 'Reject all' }).click();
    await expect(page.getByRole('contentinfo')).toContainText('United Kingdom');
    const loginPage = createLoginPage(page);

    await loginPage.login();

    await expect(loginPage.emailInput).toBeVisible();
});