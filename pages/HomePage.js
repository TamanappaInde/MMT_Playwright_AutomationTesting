class HomePage {

    constructor(page){
        this.page = page;

    // Locators
    this.pageBody = page.locator('body');
    this.flightsTab = page.locator("//span[@class='chNavIcon appendBottom2 chSprite chFlights active']");
    }
    // Close Login popup
    async closeLoginPopup (){
        await this.pageBody.click({
            position: {x : 20, Y : 20}
        });
    }
    // Verify Flight Tab
    async isFlightTabVisible(){
        return await this.flightsTab.isVisible();

    }
    
}
module.exports = HomePage;

