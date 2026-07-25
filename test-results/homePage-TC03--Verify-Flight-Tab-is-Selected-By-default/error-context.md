# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homePage.spec.js >> TC03- Verify Flight Tab is Selected By default
- Location: tests\homePage.spec.js:21:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//span[@class=\'chNavIcon appendBottom2 chSprite chFlights active\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//span[@class=\'chNavIcon appendBottom2 chSprite chFlights active\']')

```

# Test source

```ts
  1  | const {test, expect } = require('@playwright/test');
  2  | const HomePage = require('../pages/HomePage');
  3  | 
  4  | test ('TC01- Launch Browser and Open MMT Website', async({page})=>{
  5  |     const homepage = new HomePage(page);
  6  |     await page.goto('https://www.makemytrip.com/',{
  7  |         waitUntil: 'domcontentloaded',
  8  |         timeout: 60000
  9  |     });
  10 |     await expect(page).toHaveTitle('MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday');
  11 |     // Wait for page to stabilize
  12 |     await page.waitForLoadState('networkidle');
  13 |     // close the login popup
  14 |     await homepage.closeLoginPopup();
  15 |     // Verify the flights tab visible
  16 |     await expect(homepage.flightsTab).toBeVisible();
  17 |     console.log('MMT Home Page is loaded successfully');
  18 |     
  19 | });
  20 | 
  21 | test ('TC03- Verify Flight Tab is Selected By default', async({page})=>{
  22 |       const homepage = new HomePage(page);
> 23 |       await expect(homepage.flightsTab).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  24 |       await expect(homepage.flightsTab).toHaveClass("//span[@class='chNavIcon appendBottom2 chSprite chFlights active']");
  25 | 
  26 |       console.log("The Flight Tab is selected by default");
  27 |       
  28 | })
  29 | 
  30 | 
```