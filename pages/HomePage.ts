import { Page } from "@playwright/test";

export class HomePage {

    constructor(private page: Page){}

    async launch_application() {
        await this.page.goto("https://www.makemytrip.com")
    }

    async closePopup(){
        await this.page.locator("//span[@data-cy='closeModal']").click();
    }

    async selectFlights(){
        await this.page.locator("//span[text()='Flights']").click();
    }
}