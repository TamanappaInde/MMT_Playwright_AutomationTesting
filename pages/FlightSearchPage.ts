import { Page } from "@playwright/test";

export class FlightSearchPage{

    constructor (private page: Page){}

    async enterSourceCity(city:string){
        await this.page.click("#fromCity");
        await this.page.fill("input[placeholder='From']", city);
        await this.page.keyboard.press("Arrodown");
        await this.page.keyboard.press("Enter");
    }

    async enetrDestinationCity(city:string){
        await this.page.click("#toCity");
        await this.page.fill("input[placeholder='To']", city);
        await this.page.keyboard.press("Arrodown");
        await this.page.keyboard.press("Enter");
    }

    async clickSearch(){
        await this.page.locator("//a[text()='Search']").click();
    }
}