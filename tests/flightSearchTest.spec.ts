import { test, expect } from '@playwright/test';

test('Verify Home Page', async ({page}) => {

    await page.goto('https://www.makemytrip.com');

    await expect(page).toHaveTitle(/MakeMyTrip/);
});

test('Verify Flight Tab', async ({page}) => {

    await page.goto('https://www.makemytrip.com');

    await page.click("//span[text()='Flights']");

    await expect(
      page.locator("//span[text()='Flights']")
    ).toBeVisible();
});