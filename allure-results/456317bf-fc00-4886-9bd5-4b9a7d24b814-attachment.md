# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: launchMMT.spec.js >> TC01- Launch Browser and Open MMT Website
- Location: tests\launchMMT.spec.js:3:1

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
  1  | const {test, expect } = require('@playwright/test')
  2  | 
  3  | test ('TC01- Launch Browser and Open MMT Website', async({page})=>{
> 4  |     await page.goto('https://www.makemytrip.com/',{
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  5  |         waitUntil: 'domcontentloaded',
  6  |         timeout: 60000
  7  |     });
  8  | 
  9  |     await expect(page).toHaveTitle('MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday')
  10 | })
```