# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flightSearchTest.spec.ts >> Verify Home Page
- Location: tests\flightSearchTest.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
Call log:
  - navigating to "https://www.makemytrip.com/", waiting until "load"

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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Verify Home Page', async ({page}) => {
  4  | 
> 5  |     await page.goto('https://www.makemytrip.com');
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  6  | 
  7  |     await expect(page).toHaveTitle(/MakeMyTrip/);
  8  | });
  9  | 
  10 | test('Verify Flight Tab', async ({page}) => {
  11 | 
  12 |     await page.goto('https://www.makemytrip.com');
  13 | 
  14 |     await page.click("//span[text()='Flights']");
  15 | 
  16 |     await expect(
  17 |       page.locator("//span[text()='Flights']")
  18 |     ).toBeVisible();
  19 | });
```