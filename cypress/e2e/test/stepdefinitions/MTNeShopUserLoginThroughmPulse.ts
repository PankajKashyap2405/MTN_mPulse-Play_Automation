import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";

//  Given Navigate to mPulse Application URL
Given("Navigate to mPulse Application URL", () => {
  commonPage.navigateTomPulseAplication()
  });

//Users select Shop from mPulse and login to Application with email
When("Users select Shop from mPulse and login to Application with email", () => {
  commonPage.emailAauthenticationforeShopThroughmPulse() 
});

