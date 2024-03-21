import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";

//Navigate to mPulse Application URL

Given("Navigate to mPulse Preprod Application URL", () => {
  commonPage.navigateTomPulseAplicationURL()
  });

//Users login to mpulse Application with Google Account
When("Users login to mpulse Application with Google Account", () => {
  commonPage.mPulseAauthenticationWithGoogleAccount() 
});

//Users Login the mPulse application
Then("Validate user login", () => {
  homepage.ValidateloginmPulseApplication() 
});

/*Users logout the mPulse application
Then("Validate User logout", () => {
  homepage.logoutmPulseApplication() 
});*/