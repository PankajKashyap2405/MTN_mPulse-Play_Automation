import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePagePlay from "../../pages/HomePagePlay";
import commonPage from "../../pages/commonPage";
import common from "mocha/lib/interfaces/common";

Then("validate the view all button under explore chanel section", () => {
    HomePagePlay.validateViewAllButton()
});
When("user click on view all button", () => {
    HomePagePlay.clickOnViewAllButton()
    cy.wait(2000)
});


//Then("validate the partner landing page", () => {
   //HomePagePlay.validatePartnerLandingPage()
//});
