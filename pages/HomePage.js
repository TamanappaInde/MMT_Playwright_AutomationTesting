class HomePage {

    constructor(page){
        this.page = page;

    // Locators
    this.pageBody = page.locator('body');
    this.flightsTab = page.locator("//span[@class='chNavIcon appendBottom2 chSprite chFlights active']");

    // Trip type radio buttons
    this.oneWayTrip = page.locator("//li[@data-cy='oneWayTrip']") 
    this.roundTrip = page.locator("//li[@data-cy='roundTrip']")
    this.multipleTrips =  page.locator("//li[@data-cy='mulitiCityTrip']")

    // From city
    this.fromCity = page.locator("//label[@for='fromCity']")
    this.fromCitySearchBOx = page.locator("//input[@placeholder='From']")

    // To city
    this.toCity = page.locator("//label[@for='toCity']")
    this.toCitySearchBox = page.locator("//input[@placeholder='To']")

    // Departure label
    this.theDeparture = page.locator("//label[@for='departure']")

    }

    
    // Close Login popup
    async closeLoginPopup (){
        await this.pageBody.click({
            position: {x : 20, y : 20}
        });
    }
    // Verify Flight Tab
    async isFlightTabVisible(){
        return await this.flightsTab.isVisible();
    }
    // Is One Way Trip selected by default
    async isonewayTripSelected(){
        return await this.oneWayTrip.getAttribute("class")
    }
    // CLick on from city
    async clickFromCity(){
        await this.fromCity.click()
    }
    // Click on to city
    async clickToCity(){
        await this.toCity.click()
    }
    // Click on Departure
    async clickOnDeparture(){
        await this.theDeparture.click()
    }
}
module.exports = HomePage;

