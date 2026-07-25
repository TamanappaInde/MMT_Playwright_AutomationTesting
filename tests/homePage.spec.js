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
    // close the login popup
    await homepage.closeLoginPopup();
    // Verify the flights tab visible
    await expect(homepage.flightsTab).toBeVisible();
    console.log('MMT Home Page is loaded successfully');
    
});

test ('TC03- Verify Flight Tab is Selected By default', async({page})=>{
      const homepage = new HomePage(page);
      await expect(homepage.flightsTab).toBeVisible();
      await expect(homepage.flightsTab).toHaveClass("//span[@class='chNavIcon appendBottom2 chSprite chFlights active']");

      console.log("The Flight Tab is selected by default");
      
})

