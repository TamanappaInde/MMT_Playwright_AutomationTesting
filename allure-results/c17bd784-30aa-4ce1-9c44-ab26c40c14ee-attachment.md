# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: launchMMT.spec.js >> TC_001 - Launch Browser and Open MMT Website
- Location: tests\launchMMT.spec.js:3:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /MakeMyTrip/i
Received string:  "Google"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "Google"

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - button "Add files and tools"
  - combobox "Search"
  - button "Search by voice"
  - button "Search by image"
  - link "AI Mode"
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCCk
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCCo
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCCs
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCCw
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCC0
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCC4
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCC8
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCDA
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_5G4SPNFsbFwBK6HzPaxt7sofLZQ%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjB9e_4j9yVAxU3dmwGHbWkFYwQ2ZgBCDE
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('TC_001 - Launch Browser and Open MMT Website', async ({ page }) => {
  4  | 
  5  |     // Navigate to MakeMyTrip website
  6  |     await page.goto('https://www.google.com', {
  7  |         waitUntil: 'domcontentloaded'
  8  |     });
  9  | 
  10 |     // Wait for page to stabilize
  11 |     await page.waitForTimeout(5000);
  12 | 
  13 |     // Verify page title contains MakeMyTrip
> 14 |     await expect(page).toHaveTitle(/MakeMyTrip/i);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  15 | 
  16 |     console.log('MMT Website opened successfully');
  17 | });
  18 | 
  19 | 
```