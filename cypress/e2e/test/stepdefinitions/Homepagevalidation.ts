import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import homepage from "../../pages/homePage";

When("user click on device button in home page", () => {

 homepage.clickOnDeviceButton()

});



Then("validate the product listing page is displayed", () => {

 homepage.validateProductListingPage()

 //repeated steps it wont take it through an error like multiple matching (if we return in any other stepdefiniton page)

});

When("user click on home link", () =>{

 homepage.clickOnHomePageLink()

});