import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";

//Navigate to mPulse Application user Login URL

Given("Navigate to mPulse Preprod Application User Login URL", () => {
  commonPage.navigateTomPulseAplicationUserURL()
  });

//Users login to mpulse Application with User Account
When("Users login to mpulse Application with User Account", () => {
  commonPage.mPulseAauthenticationWithUserAccount() 
});

//Users Account Login the mPulse application
Then("Validate User Account login", () => {
  homepage.ValidateUserloginmPulseApplicationSucess() 
});

//When User Logout Application
When ("User Logout Application",() => {
commonPage.mPulseUserlogout()
})