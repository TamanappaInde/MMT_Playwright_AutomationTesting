const {test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.beforeEach(async ({page}) => {
    const homepage = new HomePage(page);
    await page.goto('https://www.makemytrip.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
    await homepage.closeLoginPopup();
})

test ('TC01- Launch Browser and Open MMT Website', async({page})=>{
    const homepage = new HomePage(page);
    await expect(page).toHaveTitle('MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday');
    // Verify the flights tab visible
    await expect(homepage.flightsTab).toBeVisible();
    console.log('MMT Home Page is loaded successfully');
});

test ('TC02- Verify Flight Tab is Selected By default', async({page})=>{
      const homepage = new HomePage(page);
      await expect(homepage.flightsTab).toBeVisible();
      await expect(homepage.flightsTab).toHaveClass("chNavIcon appendBottom2 chSprite chFlights active");
      console.log("The Flight Tab is selected by default");
})

test ('TC03- Verify One Way Trip option is selected By default', async ({page}) => {
      const homepage = new HomePage(page);
      await expect(homepage.oneWayTrip).toBeVisible();
      const className = await homepage.isonewayTripSelected();
      expect(className).toContain("selected");
      console.log("The One Way Trip is selected by default");
})

test ('TC04- Verify From City field is visible and clickable', async ({page}) => {
    const homepage = new HomePage(page);
    // Verify From City field is visible
    await expect(homepage.fromCity).toBeVisible();
    // Click on From City
    await homepage.clickFromCity();
    // Verify search input field is displayed
    await expect(homepage.fromCitySearchBOx).toBeVisible();
    console.log("From City field is visible and clickable");
})

test ('TC05- Verify To City field is visible and clickable', async ({page}) => {
    const homepage = new HomePage(page);
    await homepage.clickToCity();
    await expect(homepage.toCitySearchBox).toBeVisible();
    console.log("To city field is visible and clickable");
})

test ('TC06- Verify Departure and Retun date visible and clickable', async ({page}) => {
    const homepage = new HomePage(page);
    await homepage.clickOnDeparture();

})