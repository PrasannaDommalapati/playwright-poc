import { test, expect } from '@playwright/test';
const { readExcelFile } = require('../index');

test('test', async ({ page }) => {
    const sheetName = 'Sheet1';  // Specify the sheet name
    const data = readExcelFile('date2.xlsx', sheetName);  // Call the function to read the Excel file

    // Log "First Name" from each row
    console.log(data);
    data.forEach(row => {
        console.log(row["First Name"]);  // Log the "First Name" value
    });
    await page.goto('https://www.google.co.uk/?gws_rd=ssl');
    await page.getByRole('button', { name: 'Reject all' }).click();
    await expect(page.getByRole('contentinfo')).toContainText('United Kingdom');
});