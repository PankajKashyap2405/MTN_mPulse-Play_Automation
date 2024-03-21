import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";

//Given Navigate to Self Serive Application URL

Given("Navigate to Self Serive Application URL", () => {
  commonPage.navigateToSelfServiceAplication()
  });

//Users select Shop and login to Application with email
When("Users select Shop and login to Application with email", () => {
  commonPage.emailAauthenticationforeShopThroughSelfService() 
});

