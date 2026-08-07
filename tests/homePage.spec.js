const {test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test ('TC01- Launch Browser and Open MMT Website', async({page})=>{
    const homepage = new HomePage(page);
    await page.goto('https://www.makemytrip.com/',{
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
    await expect(page).toHaveTitle('MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday');
    // Wait for page to stabilize
    await page.waitForLoadState('networkidle');
    // close the login popup TC02
    await homepage.closeLoginPopup();
    // Verify the flights tab visible
    await expect(homepage.flightsTab).toBeVisible();
    console.log('MMT Home Page is loaded successfully');
    
});

test ('TC03- Verify Flight Tab is Selected By default', async({page})=>{
      const homepage = new HomePage(page);
      await page.goto('https://www.makemytrip.com/',{
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
      await page.waitForLoadState("domcontentloaded");

      await homepage.closeLoginPopup();
      await expect(homepage.flightsTab).toBeVisible();
      await expect(homepage.flightsTab).toHaveClass("chNavIcon appendBottom2 chSprite chFlights active");
      console.log("The Flight Tab is selected by default");
})

test ('TC04- Verify One Way Trip option is selected By default', async ({page}) => {
      const homepage = new HomePage(page);
      await expect(homepage.oneWayTrip).toBeVisible();
      const className = await homepage.isonewayTripSelected();
      expect(className).toContain("Selected")
      console.log("The One Way Trip is selected by default");

})

test ('TC05- Verify From City field is visible and clickable', async ({page}) => {
    const homepage = new HomePage(page);
    await page.goto('https://www.makemytrip.com');
    await page.waitForLoadState('domcontentloaded');
    await page.closeLoginPopup();
    // Verify From City field is visible
    await expect(homepage.fromCity).toBeVisible();
    // Click on From City
    await homepage.clickFromCity();
    // Verify search input field is displayed
    await expect(homepage.fromCitySearchBOx).toBeVisible();
    console.log("From City field is visible and clickable");
})