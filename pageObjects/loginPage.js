// @ts-check
import dotenv from 'dotenv';
dotenv.config();

/**
 * Initializes the login page and returns reusable functions.
 * @param {import('playwright').Page} page
 */
const createLoginPage = (page) => {
    const emailInput = page.locator('[id="username"]');
    const passwordInput = page.locator('[id="password"]');
    const loginButton = page.locator('[type="submit"]');

    const gotoLoginPage= async () => await page.goto('/');

    const login = async (email, password) => {
        await gotoLoginPage();
        await emailInput.fill(process.env.EMAIL ?? email);
        await passwordInput.fill(process.env.PASSWORD ?? password);
        await loginButton.click();
    }

    return {
        login,
        gotoLoginPage,
        emailInput,
        passwordInput,
        loginButton,
    };
}

export { createLoginPage };
