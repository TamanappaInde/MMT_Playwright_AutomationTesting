class HomePage {

    constructor(page){
        this.page = page;

    // Locators
    this.pageBody = page.locator('body');
    this.flightsTab = page.locator("//span[@class='chNavIcon appendBottom2 chSprite chFlights active']");

    // Trip type radio buttons
    this.oneWayTrip = page.locator(".selected") 
    this.roundTrip = page.locator("//li[@data-cy='roundTrip']")
    this.multipleTrips =  page.locator("//li[@data-cy='mulitiCityTrip']")

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
}
module.exports = HomePage;

