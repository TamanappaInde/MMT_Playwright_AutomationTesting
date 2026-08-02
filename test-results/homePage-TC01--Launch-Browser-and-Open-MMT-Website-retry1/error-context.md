# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homePage.spec.js >> TC01- Launch Browser and Open MMT Website
- Location: tests\homePage.spec.js:4:1

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
Call log:
  - navigating to "https://www.makemytrip.com/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This site can’t be reached" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - text: The webpage at
    - strong [ref=e9]: https://www.makemytrip.com/
    - text: might be temporarily down or it may have moved permanently to a new web address.
  - generic [ref=e10]: ERR_HTTP2_PROTOCOL_ERROR
```

# Test source

```ts
  1  | const {test, expect } = require('@playwright/test');
  2  | const HomePage = require('../pages/HomePage');
  3  | 
  4  | test ('TC01- Launch Browser and Open MMT Website', async({page})=>{
  5  |     const homepage = new HomePage(page);
> 6  |     await page.goto('https://www.makemytrip.com/',{
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
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
  23 |       await page.goto('https://www.makemytrip.com/',{
  24 |         waitUntil: 'domcontentloaded',
  25 |         timeout: 60000
  26 |     });
  27 |       await page.waitForLoadState("domcontentloaded");
  28 | 
  29 |       await homepage.closeLoginPopup();
  30 |       await expect(homepage.flightsTab).toBeVisible();
  31 |       await expect(homepage.flightsTab).toHaveClass("chNavIcon appendBottom2 chSprite chFlights active");
  32 | 
  33 |       console.log("The Flight Tab is selected by default");
  34 | })
  35 | 
  36 | test ('TC04- Verify One Way Trip option is selected By default', async ({page}) => {
  37 |       const homepage = new HomePage(page);
  38 |       await expect(homepage.oneWayTrip).toBeVisible();
  39 |       const className = await homepage.isonewayTripSelected();
  40 |       expect(className).toContain("Selected")
  41 | 
  42 | })
  43 | 
  44 | 
```