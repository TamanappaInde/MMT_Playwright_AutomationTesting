# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: launchMMT.spec.js >> Launch Browser and Open MMT Website
- Location: tests\launchMMT.spec.js:3:1

# Error details

```
ReferenceError: chromium is not defined
```

# Test source

```ts
  1  | const {test, expect } = require('@playwright/test');
  2  | 
  3  | test ('Launch Browser and Open MMT Website', async ({page})=> {
  4  | 
  5  | 
> 6  |     const browser = await chromium.launch({
     |                     ^ ReferenceError: chromium is not defined
  7  |         headless: false
  8  |     });
  9  | 
  10 |     const context = await browser.newContext({
  11 |         ignoreHTTPSErrors: true
  12 |     });
  13 |     // Navigate to MMT
  14 |     await page.goto("https://www.makemytrip.com/", {
  15 |           waitUntil: 'domcontentloaded'
  16 |     });
  17 |     
  18 |     // wait for page load
  19 |     await page.waitForTimeout(5000);
  20 | 
  21 |     // Verify the title
  22 |     await expect(page).toHaveTitle(/MakeMyTrip/i)
  23 | 
  24 |     console.log("MMT Website opened successfully");
  25 | })
  26 | 
  27 | 
```